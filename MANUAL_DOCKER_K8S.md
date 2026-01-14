# Operational Manual: Docker & Kubernetes for Aksara Jawa

This document explains the concepts, procedures, and commands for running your Aksara Jawa application using Docker and Kubernetes.

---

## 1. Basic Knowledge: "What am I looking at?"

### **What is Docker?**
Think of your application as a **house**.
- **Without Docker:** You have to build the house on your computer's land. You need to install specific foundations (Python, Node.js) directly on your OS. If you move the house to another computer, you might find the soil is different (different OS version), and the house breaks.
- **With Docker:** You put your house inside a **shipping container**. The container includes the soil, the foundation, and the house. You can put this container on *any* ship (computer with Docker installed), and it will look and work exactly the same.

### **What is Kubernetes (K8s)?**
If Docker is the **shipping container**, Kubernetes is the **Port Authority**.
- You use Kubernetes when you have *many* containers to manage.
- It automatically handles:
  - **Scaling:** "We have too many visitors, add 5 more copies of the Frontend container."
  - **Self-Healing:** "The Backend container just crashed. I will immediately start a new fresh one."
  - **Traffic Routing:** "Direct user traffic to the healthy containers only."

### **Where is Kubernetes?**
Kubernetes is software.
- **In Development:** It runs on your laptop (via Docker Desktop or Minikube). It simulates a cluster of computers.
- **In Production:** It runs on a fleet of servers in a cloud provider (like Google Cloud GKE, AWS EKS, or DigitalOcean).

---

## 2. Docker Procedure (Current Setup)

Your current setup uses **Docker Compose**. This is a tool specifically designed to run multi-container applications (Frontend + Backend) on a single machine.

### **How to Run**
1. **Start the App:**
   ```bash
   docker-compose up -d --build
   ```
   - `-d`: Detached mode (runs in background).
   - `--build`: Forces a rebuild of the images if you changed code.

2. **Check Logs (Debugging):**
   ```bash
   # View all logs
   docker-compose logs -f

   # View specific container logs
   docker-compose logs -f backend
   docker-compose logs -f frontend
   ```

3. **Stop the App:**
   ```bash
   docker-compose down
   ```

4. **Accessing the App:**
   - **Local:** `http://localhost:8080`
   - **LAN (Network):** `http://<YOUR_LAN_IP>:8080` (e.g., `192.168.1.15:8080`)

---

## 3. Kubernetes Procedure (The "Next Step")

If you want to move from Docker Compose to Kubernetes, follow these steps.

### **Prerequisites**
1. **Enable Kubernetes:** Open Docker Desktop Dashboard -> Settings -> Kubernetes -> Check "Enable Kubernetes". Click "Apply & Restart".
2. **Install CLI:** Ensure `kubectl` is installed (Docker Desktop usually handles this).

### **Step 1: Build Images**
Kubernetes needs the images to exist before it can use them.
```bash
docker build -t aksara-backend:latest ./Backend
docker build -t aksara-frontend:latest ./frontend
```

### **Step 2: Deploy to Cluster**
We use the configuration files located in the `k8s/` folder.

```bash
# 1. Apply the Backend configuration
kubectl apply -f k8s/backend.yaml

# 2. Apply the Frontend configuration
kubectl apply -f k8s/frontend.yaml
```

### **Step 3: Check Status**
See if your "Pods" (running containers) are ready.
```bash
kubectl get pods
```
*Wait until STATUS is `Running`.*

### **Step 4: Accessing in Kubernetes**
The frontend service is configured as a `NodePort`.

1. **Get the Service Info:**
   ```bash
   kubectl get services
   ```
2. **Find the Port:** Look for `frontend`. Under `PORT(S)`, you will see something like `80:30080/TCP`.
3. **Open Browser:** Go to `http://localhost:30080`.

### **Step 5: Cleaning Up**
To remove the application from Kubernetes:
```bash
kubectl delete -f k8s/frontend.yaml
kubectl delete -f k8s/backend.yaml
```

---

## 4. Cheat Sheet: Docker vs Kubernetes

| Feature | Docker Compose | Kubernetes |
| :--- | :--- | :--- |
| **Complexity** | Low (Easy) | High (Steep learning curve) |
| **Best For** | Local Dev, Single Server | Production, Multi-Server, High Traffic |
| **Definition File** | `docker-compose.yml` | `.yaml` files in `k8s/` directory |
| **Scaling** | Manual (`docker-compose up --scale`) | Automatic (Horizontal Pod Autoscaler) |
| **Restarting** | `restart: always` policy | Native self-healing |

