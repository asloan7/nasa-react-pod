# Kubernetes Notes

- tested on Windows with Rancher Desktop, kubernetes enabled (1.24.3) with Traefik LB/smart router

kubectl apply -f service-nginx.yaml

kubectl get svc,pod -A

kubectl apply -f deployment-nginx.yaml

kubectl get deployments -A

kubectl describe deployment nginx

kubectl get all -A

(Dockerfile-dev) http://localhost:3000

(Dockerfile-prod) http://localhost
