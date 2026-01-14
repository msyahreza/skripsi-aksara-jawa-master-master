# Start Docker Compose (Detached)
Write-Host "Starting Docker Compose..."
docker-compose up -d --build

# Start Kubernetes
Write-Host "Starting Kubernetes..."
kubectl apply -f k8s/monolith.yaml

Write-Host "------------------------------------------------"
Write-Host "DONE!"
Write-Host "Docker Compose is running at: http://localhost:8080"
Write-Host "Kubernetes is running at:     http://localhost:30080"
Write-Host "------------------------------------------------"
