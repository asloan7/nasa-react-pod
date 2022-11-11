# Kubernetes Notes

- tested on Windows with Rancher Desktop, kubernetes enabled with Traefik LB/smart router (1.24)

kubectl apply -f service-nginx.yaml

kubectl get svc,pod -A

kubectl apply -f deployment-nginx.yaml

kubectl get deployments -A

kubectl describe deployment nginx

kubectl get all -A

http://localhost:3000
