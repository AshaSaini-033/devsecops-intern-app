# DevSecOps Intern App

A simple Node.js and Express application used to practice DevSecOps concepts around application security, containerization, CI/CD, deployment, and monitoring.

## Overview

The project is a Task Manager API with basic security and operational features. It provides task-related API routes, a health-check endpoint, request logging, security headers, and rate limiting.

## Tech Stack

- Node.js
- Express.js
- Docker
- Jenkins
- AWS
- Helmet
- Morgan
- Express Rate Limit

## Application Features

- REST API built with Express.js
- Task management routes
- `/health` endpoint for checking application status
- HTTP security headers using Helmet
- Request rate limiting
- Request logging using Morgan
- Environment-based configuration using dotenv

## DevSecOps Workflow

### CI/CD Pipeline

Jenkins is used to automate the application delivery workflow, including build, validation, containerization, and deployment steps.

### Security

- **Helmet** adds security-related HTTP headers.
- **Express Rate Limit** limits incoming API requests.
- Security and code-quality checks are included in the CI/CD workflow.

### Containerization

The application is containerized using Docker to provide a consistent environment for deployment.

### Deployment

The application is deployed through the CI/CD pipeline after the required validation and security checks.

### Monitoring

The application includes a health-check endpoint and request logging to help monitor application availability and activity.

## Project Structure

```
devsecops-intern-app/
├── src/
│   ├── app.js
│   ├── server.js
│   └── routes/
├── package.json
├── .dockerignore
└── README.md
```

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/AshaSaini-033/devsecops-intern-app.git
cd devsecops-intern-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the application

```bash
npm start
```

The application runs on port `3000` by default.

### 4. Check application health

Open:

```
http://localhost:3000/health
```

Expected response:

```json
{
  "status": "UP"
}
```

> Do not commit private keys, credentials, or environment secrets to the repository.

## Learning Goals

This project demonstrates a basic DevSecOps workflow combining application development, security checks, Docker containerization, CI/CD, deployment, and monitoring.

## Author

Asha Saini
