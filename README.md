# 🚀 Dockerized Microservice Portfolio

This project demonstrates a production-style microservice architecture using:

- Django (API Gateway)
- FastAPI (Processing Service)
- PostgreSQL (Database)
- Nginx (Reverse Proxy)
- Docker & Docker Compose
- AWS EC2 Deployment

---

## 🏗 Architecture

Client  
↓  
Nginx (Port 80)  
↓  
Django API Gateway  
↓  
FastAPI Microservice  
↓  
PostgreSQL Database  

---

## 🛠 Technologies Used

- Python 3.10
- Django
- FastAPI
- PostgreSQL
- Docker
- Nginx
- AWS EC2

---

## ⚙️ How to Run Locally

```bash
docker compose up --build

http://localhost/api/process/100/
