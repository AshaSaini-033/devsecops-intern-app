# DevSecOps Intern App

A Node.js and Express Task Manager API deployed through an automated DevSecOps workflow using Jenkins, Docker, and Kubernetes, with security checks and Prometheus/Grafana monitoring.

## What this project does

A code change moves through one delivery flow:

`GitHub → Jenkins → Validation → Security Scan → Docker Build → Kubernetes → Monitoring`

The application exposes health and metrics endpoints so Kubernetes and Prometheus can observe the running service.

## Tech Stack

- Node.js / Express.js
- Docker
- Jenkins
- Kubernetes
- Trivy
- Prometheus
- Grafana
- Helmet
- Express Rate Limit
- Morgan

## CI/CD

The Jenkins pipeline:

1. Checks out the latest code.
2. Installs dependencies and runs dependency validation.
3. Builds the Docker image.
4. Scans the image with Trivy for HIGH/CRITICAL vulnerabilities.
5. Applies the Kubernetes manifests.
6. Waits for the deployment rollout and checks the running pods/services.

Pipeline definition: `Jenkinsfile`

## Security

Application-level controls include:

- Helmet security headers
- Express rate limiting
- Dependency audit in CI
- Container image vulnerability scanning with Trivy

## Kubernetes

The application is deployed with native Kubernetes manifests:

- `k8s/deployment.yaml` — application deployment with 2 replicas and resource limits.
- `k8s/service.yaml` — internal service for routing traffic to application pods.
- Liveness and readiness probes use `/health`.

No Helm is used.

## Monitoring

The application exposes Prometheus metrics at:

`/metrics`

Metrics are generated with `prom-client`, including default Node.js process metrics and HTTP request counts.

Prometheus is configured in `monitoring/prometheus.yml` and `k8s/monitoring.yaml` to scrape the application.

Grafana is deployed alongside Prometheus and is configured to use Prometheus as its data source for dashboards and visualization.

Monitoring flow:

`Application → /metrics → Prometheus → Grafana`

## Application Health

`/health` returns the application status and is used by Kubernetes readiness and liveness probes.

Morgan provides request logs for application activity.

## Project Structure

```
devsecops-intern-app/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── metrics.js
│   └── routes/
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── monitoring.yaml
├── monitoring/
│   └── prometheus.yml
├── Dockerfile
├── Jenkinsfile
├── package.json
└── README.md
```

## Local Setup

```bash
npm install
npm start
```

Application:

`http://localhost:3000`

Health:

`http://localhost:3000/health`

Metrics:

`http://localhost:3000/metrics`

## Note

The Kubernetes manifests assume a cluster with the required access and an application image available to the cluster.

Do not commit credentials, private keys, or environment secrets.

## Author

Asha Saini
