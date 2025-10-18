# Pre-deployment Checklist

## Voor Kubernetes Deployment via ConfigMap

Voordat je deployed met Argo CD, moet je de applicatie builden:

```bash
# 1. Build de Vite applicatie
npm run build

# Dit creëert de dist/ folder met:
# - dist/index.html
# - dist/assets/*.js
# - dist/assets/*.css

# 2. Commit de dist folder naar Git (normaal gesproken in .gitignore)
git add dist/
git commit -m "Add build artifacts for k8s deployment"
git push origin main

# 3. Deploy met Argo CD
kubectl apply -f argocd/app-test.yaml
kubectl apply -f argocd/app-prod.yaml
```

## ⚠️ Probleem met ConfigMap Methode

De ConfigMap methode heeft een beperking: het laadt alleen de `index.html`, maar niet de JavaScript en CSS assets uit `dist/assets/`.

### 🎯 Aanbevolen Oplossing: Docker Image

In plaats van ConfigMap, gebruik een Docker image:

```bash
# 1. Build de app
npm run build

# 2. Build Docker image (Dockerfile doet de build automatisch)
docker build -t ghcr.io/dylan0165/reflectiesemester3sprints:v1.0 .

# 3. Push naar registry
docker push ghcr.io/dylan0165/reflectiesemester3sprints:v1.0

# 4. Gebruik deployment-with-image.yaml in plaats van deployment.yaml
```

Dit zorgt ervoor dat ALLE bestanden (HTML, CSS, JS, afbeeldingen) correct worden deployed!
