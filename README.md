# DevSecOps Intern App

A simple Node.js and Express application used to practice DevSecOps concepts around application security, containerization, deployment, and infrastructure automation.

## Overview

The project is a small Task Manager API with basic security and operational features. It provides task-related API routes, a health-check endpoint, request logging, security headers, and rate limiting.

## Tech Stack

- Node.js
- Express.js
- Docker
- Terraform
- AWS EC2
- Jenkins
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

## DevSecOps Components

### Application Security

- **Helmet** is used to add security-related HTTP headers.
- **Express Rate Limit** limits incoming requests to help protect the API from excessive traffic.
- Environment variables are kept outside the source code using `.env`.

### Containerization

The application is structured to run as a containerized Node.js service using Docker.

### Infrastructure Automation

Terraform is used to define an AWS EC2 instance for the Jenkins server along with its security group.

The Terraform configuration uses the AWS `ap-south-1` region and defines access for SSH and Jenkins on port `8080`.

### CI/CD

The project is designed around a Jenkins-based delivery workflow for automating application build and deployment steps.

## Project Structure

```
devsecops-intern-app/
├── src/
│   ├── app.js
│   ├── server.js
│   └── routes/
├── terraform/
│   └── main.tf
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

## Terraform

Move to the Terraform directory:

```bash
cd terraform
```

Initialize Terraform:

```bash
terraform init
```

Review the infrastructure plan:

```bash
terraform plan
```

Apply the configuration after updating the required AWS and SSH key settings:

```bash
terraform apply
```

> Do not commit private keys, AWS credentials, or environment secrets to the repository.

## Learning Goals

This project demonstrates the basic workflow of combining application development with security, containerization, CI/CD, and infrastructure automation.

## Author

Asha Saini
