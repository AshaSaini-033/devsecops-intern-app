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

        stage("Deploy") {
            steps {
                sh "docker rm -f $CONTAINER_NAME || true"
                sh "docker run -d --restart unless-stopped --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME:$BUILD_NUMBER"
            }
        }

        stage("Health Check") {
            steps {
                sh "sleep 5"
                sh "curl --fail http://localhost:3000/health"
            }
        }
    }

    post {
        always {
            sh "docker image prune -f || true"
        }
    }
}
