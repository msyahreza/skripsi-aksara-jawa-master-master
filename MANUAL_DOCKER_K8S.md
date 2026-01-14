# Operational Manual: Docker & Kubernetes for Aksara Jawa (Monolith Version)

This document explains the concepts, procedures, and commands for running your merged Aksara Jawa application (Frontend + Backend in one image).

---

## 1. Basic Knowledge: "What am I looking at?"

### **What is Docker?**

Think of your application as a **house**.

- **With Docker:** You put your house inside a **shipping container**. The container includes the foundation (Python), the walls (AI Model), and the windows (React Frontend). You can put this container on _any_ ship (computer with Docker installed), and it works perfectly.

### **What is Kubernetes (K8s)?**

If Docker is the **shipping container**, Kubernetes is the **Port Authority**.

- It manages your containers. If you want 3 copies of your app running, Kubernetes makes sure 3 copies are always alive. If one crashes, it immediately starts a new one.

---

## 2. Fast Track: Using Helper Scripts

I have created two scripts to make your life easier.

- **Start Everything:**

  ```powershell
  ./start-all.ps1
  ```

  _(Starts Docker Compose on :8080 and Kubernetes on :30080)_

- **Stop Everything:**
  ```powershell
  ./stop-all.ps1
  ```

---

## 3. Docker Compose Procedure

Docker Compose is used for local development and running the app simply on one machine.

### **How to Run Manually**

1. **Start the App:**
   ```bash
   docker-compose up -d --build
   ```
2. **Check Logs:**
   ```bash
   docker-compose logs -f app
   ```
3. **Scale (Replicas):**
   ```bash
   docker-compose up -d --scale app=3
   ```

**Access:** `http://localhost:8080`

---

## 4. Kubernetes Procedure

Use this if you want to test "Production-grade" scaling and self-healing.

### **Step 1: Build the Image**

Kubernetes needs the image to be ready in your Docker Desktop library.

```bash
docker build -f Dockerfile.monolith -t raid/aksara-monolith:latest .
```

### **Step 2: Deploy**

```bash
kubectl apply -f k8s/monolith.yaml
```

### **Step 3: Check Status**

```bash
kubectl get pods
# You should see 3 pods starting with 'aksara-app-'
```

### **Step 4: Update/Restart**

If you changed the code and rebuilt the image, tell Kubernetes to refresh:

```bash
kubectl rollout restart deployment aksara-app
```

**Access:** `http://localhost:30080`

---

## 5. Cheat Sheet: Monolith Architecture

| Feature            | Description                                                         |
| :----------------- | :------------------------------------------------------------------ |
| **Image Name**     | `raid/aksara-monolith:latest`                                       |
| **Compose Port**   | `8080`                                                              |
| **K8s Port**       | `30080` (NodePort)                                                  |
| **Replicas**       | Configured to **3** by default in `k8s/monolith.yaml`               |
| **Liveness Check** | Kubernetes automatically checks `http://localhost:14022/` every 10s |

---

## 6. Accessing from another PC

1. Find your IP (Run `ipconfig` in CMD).
2. Look for **IPv4 Address** (e.g., `192.168.1.15`).
3. Other users can visit:
   - `http://192.168.1.15:8080` (Compose)
   - `http://192.168.1.15:30080` (Kubernetes)
