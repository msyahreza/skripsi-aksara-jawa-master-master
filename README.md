# Aksara Jawa Recognition App

Aksara Jawa classification is intended to be used to teach people how to write the Javanese script. It uses a Convolutional Neural Network (CNN) to classify drawn symbols. 

Built using **React (Frontend)** and **Python/TensorFlow (Backend)**, merged into a single **Monolith Docker image**.

---

## 🚀 Quick Start

Ensure you have **Docker Desktop** installed and running.

### 1. Start everything (Compose + Kubernetes)
Run the following script in PowerShell:
```powershell
./start-all.ps1
```

### 2. Access the Application
- **Local (Docker Compose):** [http://localhost:8080](http://localhost:8080)
- **Local (Kubernetes):** [http://localhost:30080](http://localhost:30080)

### 3. Stop everything
```powershell
./stop-all.ps1
```

---

## 🛠 Architecture: Monolith Container
We use a **Multi-stage Docker build** (`Dockerfile.monolith`) that:
1. Compiles the React Frontend.
2. Embeds the static files into the Python Backend.
3. Serves the entire app from a single Python server on port `14022`.

---

## 📖 Detailed Manuals
For deep dives into Docker, Kubernetes, scaling replicas, and networking, please refer to:
- **[MANUAL_DOCKER_K8S.md](./MANUAL_DOCKER_K8S.md)**
- **[CHANGELOG.md](./CHANGELOG.md)**

---

## 📂 Code Organization
- `/frontend`: React source code and p5.js drawing components.
- `/Backend`: Python server logic and AI model (`model.h5`).
- `/k8s`: Kubernetes configuration files.
- `Dockerfile.monolith`: The combined build recipe.

---

*Dataset source: [Kaggle](https://www.kaggle.com/phiard/aksara-jawa)*