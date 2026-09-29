pipeline {
    agent any

    environment {
        IMAGE_NAME = "devsecops-intern-app"
        CONTAINER_NAME = "devsecops-intern-app"
    }

    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }

        stage("Install & Validate") {
            steps {
                sh "npm ci"
                sh "npm audit --audit-level=high"
            }
        }

        stage("Build Image") {
            steps {
                sh "docker build -t $IMAGE_NAME:$BUILD_NUMBER ."
            }
        }

        stage("Security Scan") {
            steps {
                sh "trivy image --exit-code 1 --severity HIGH,CRITICAL $IMAGE_NAME:$BUILD_NUMBER"
            }
        }

        stage("Deploy to Kubernetes") {
            steps {
                sh "kubectl apply -f k8s/"
                sh "kubectl rollout status deployment/devsecops-intern-app --timeout=120s"
            }
        }

        stage("Health Check") {
            steps {
                sh "kubectl get pods -l app=devsecops-intern-app"
                sh "kubectl get service devsecops-intern-app"
            }
        }
    }

    post {
        always {
            sh "docker image prune -f || true"
        }
    }
}
