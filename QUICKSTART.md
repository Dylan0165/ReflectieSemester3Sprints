# 🚀 Quick Start Deployment Guide voor k3s

## Stap 1: Build de Applicatie

```bash
# Build Vite applicatie
npm run build

# Controleer of dist/ folder is aangemaakt
ls dist/
# Je moet zien: index.html, assets/
```

## Stap 2: Commit & Push naar GitHub

```bash
# Add alle wijzigingen (inclusief dist/)
git add .

# Commit
git commit -m "Add Kubernetes manifests and build artifacts"

# Push naar GitHub
git push origin main
```

## Stap 3: Installeer k3s (als nog niet gedaan)

```bash
# Op je Linux machine/VM
curl -sfL https://get.k3s.io | sh -

# Check of k3s draait
sudo k3s kubectl get nodes

# (Optioneel) Kopieer kubeconfig voor kubectl
mkdir -p ~/.kube
sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
sudo chown $USER:$USER ~/.kube/config
```

## Stap 4: Installeer Argo CD in k3s

```bash
# Create namespace
kubectl create namespace argocd

# Install Argo CD
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Wacht tot alles running is
kubectl wait --for=condition=ready pod -l app.kubernetes.io/name=argocd-server -n argocd --timeout=300s

# Krijg het admin password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
echo ""

# Port-forward naar Argo CD UI (optioneel)
kubectl port-forward svc/argocd-server -n argocd 8080:443
# Open browser: https://localhost:8080
# Username: admin
# Password: (zie output hierboven)
```

## Stap 5: Deploy de Applicaties

```bash
# Deploy TEST applicatie (automatisch sync)
kubectl apply -f argocd/app-test.yaml

# Deploy PROD applicatie (handmatig sync)
kubectl apply -f argocd/app-prod.yaml

# Check status
kubectl get applications -n argocd
```

## Stap 6: Sync de Applicaties (eerste keer)

```bash
# Test wordt automatisch ge-synced
# Voor prod moet je handmatig syncen:

# Optie A: Via Argo CD CLI
argocd app sync webapp-prod

# Optie B: Via kubectl
kubectl patch application webapp-test -n argocd --type merge -p '{"operation":{"sync":{}}}'
kubectl patch application webapp-prod -n argocd --type merge -p '{"operation":{"sync":{}}}'
```

## Stap 7: Check Deployment

```bash
# Check pods
kubectl get pods -n app-test
kubectl get pods -n app-prod

# Check services
kubectl get svc -n app-test
kubectl get svc -n app-prod

# Get node IP (voor NodePort access)
kubectl get nodes -o wide
```

## Stap 8: Test de Applicatie

```bash
# Test omgeving
curl http://<NODE-IP>:32081

# Prod omgeving
curl http://<NODE-IP>:32080

# Of open in browser
# http://<NODE-IP>:32081  (test)
# http://<NODE-IP>:32080  (prod)
```

## 🔄 GitOps Workflow

Na de initiële setup:

1. **Code wijzigen** → Push naar GitHub
2. **Test**: Automatisch deployed! (binnen ~3 min)
3. **Prod**: Handmatig approven:
   ```bash
   argocd app sync webapp-prod
   ```

## 🎯 Man6 Demonstratie

✅ **Push-on-green**: Push naar `main` → auto-deploy naar test  
✅ **Handmatige approval**: Prod vereist manual sync  
✅ **Zero downtime**: RollingUpdate zorgt voor 0 downtime  
✅ **GitOps**: Git is single source of truth  

## 🐛 Troubleshooting

```bash
# Argo CD logs
kubectl logs -n argocd -l app.kubernetes.io/name=argocd-application-controller

# App logs
kubectl logs -n app-test -l app=webapp
kubectl logs -n app-prod -l app=webapp

# Describe pod voor errors
kubectl describe pod -n app-test -l app=webapp

# Force sync
argocd app sync webapp-test --force
```

## 🎉 Success!

Je hebt nu een complete GitOps pipeline draaien op k3s met Argo CD!
