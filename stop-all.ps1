# Stop Docker Compose
Write-Host "Stopping Docker Compose..."
docker-compose down

# Stop Kubernetes
Write-Host "Stopping Kubernetes..."
kubectl delete -f k8s/monolith.yaml

Write-Host "All services stopped."
