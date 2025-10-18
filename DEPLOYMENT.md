# Kubernetes Deployment met Argo CD

Deze repository bevat Kubernetes manifests voor het automatisch deployen van de Reflectie Website via Argo CD op k3s.

## 📁 Structuur

```
manifests/
├── base/                      # Base Kubernetes resources
│   ├── deployment.yaml        # Nginx deployment met rolling update
│   ├── service.yaml          # NodePort service
│   ├── namespace.yaml        # Test en prod namespaces
│   └── kustomization.yaml    # Base Kustomize config
└── overlays/
    ├── test/                 # Test omgeving configuratie
    │   └── kustomization.yaml
    └── prod/                 # Productie omgeving configuratie
        └── kustomization.yaml

argocd/
├── app-test.yaml             # Argo CD Application voor test
└── app-prod.yaml             # Argo CD Application voor prod
```

## 🚀 Deployment Strategie

### Test Omgeving (app-test)
- **Namespace**: `app-test`
- **Replicas**: 1
- **NodePort**: 32081
- **Sync Policy**: Automatisch (push-on-green)
- **Self-Heal**: Enabled

### Productie Omgeving (app-prod)
- **Namespace**: `app-prod`
- **Replicas**: 2
- **NodePort**: 32080
- **Sync Policy**: Automatisch met handmatige goedkeuring
- **Self-Heal**: Disabled (veiligheid)
- **Resources**: Verhoogd geheugen (256Mi limit)

## 📋 Vereisten

- k3s cluster
- Argo CD geïnstalleerd
- kubectl geconfigureerd
- GitHub repository: `Dylan0165/ReflectieSemester3Sprints`

## 🔧 Installatie Argo CD

```bash
# Installeer Argo CD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Verkrijg admin wachtwoord
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

# Port-forward naar Argo CD UI
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

## 🎯 Deployment

### Optie 1: Via Argo CD UI
1. Open Argo CD UI: https://localhost:8080
2. Login met admin credentials
3. Klik op "New App"
4. Gebruik de instellingen uit `argocd/app-test.yaml` of `argocd/app-prod.yaml`

### Optie 2: Via kubectl (Aanbevolen)

```bash
# Deploy Test Application
kubectl apply -f argocd/app-test.yaml

# Deploy Production Application
kubectl apply -f argocd/app-prod.yaml
```

### Optie 3: Via Argo CD CLI

```bash
# Login
argocd login localhost:8080

# Create test app
argocd app create webapp-test \
  --repo https://github.com/Dylan0165/ReflectieSemester3Sprints.git \
  --path manifests/overlays/test \
  --dest-server https://kubernetes.default.svc \
  --dest-namespace app-test \
  --sync-policy automated \
  --auto-prune \
  --self-heal

# Create prod app
argocd app create webapp-prod \
  --repo https://github.com/Dylan0165/ReflectieSemester3Sprints.git \
  --path manifests/overlays/prod \
  --dest-server https://kubernetes.default.svc \
  --dest-namespace app-prod \
  --sync-policy automated \
  --auto-prune
```

## 🔄 GitOps Workflow

1. **Ontwikkelaar** pusht code naar GitHub (main branch)
2. **GitHub Actions/Jenkins** bouwt de applicatie
3. **Argo CD** detecteert wijzigingen in de repository
4. **Test**: Automatisch deployen naar `app-test` namespace
5. **Productie**: Handmatige sync vereist voor `app-prod`

## 🧪 Testen

```bash
# Check status van applications
kubectl get applications -n argocd

# Check pods in test namespace
kubectl get pods -n app-test

# Check pods in prod namespace
kubectl get pods -n app-prod

# Test de service
curl http://<node-ip>:32081  # Test
curl http://<node-ip>:32080  # Prod
```

## 📊 Monitoring

```bash
# Watch deployment status
kubectl get deployments -n app-test -w
kubectl get deployments -n app-prod -w

# Check Argo CD sync status
argocd app get webapp-test
argocd app get webapp-prod

# View logs
kubectl logs -n app-test -l app=webapp
kubectl logs -n app-prod -l app=webapp
```

## 🔐 Zero Downtime Deployment

De deployment gebruikt **RollingUpdate** strategie:
- `maxUnavailable: 0` - Geen pods worden gestopt voordat nieuwe pods ready zijn
- `maxSurge: 1` - Maximaal 1 extra pod tijdens update

Dit garandeert zero downtime bij updates!

## 🛠️ Handmatige Sync (Productie)

```bash
# Via CLI
argocd app sync webapp-prod

# Via kubectl
kubectl patch application webapp-prod -n argocd --type merge -p '{"operation":{"sync":{}}}'
```

## 📝 Kustomize Testen

```bash
# Test build zonder te deployen
kubectl kustomize manifests/overlays/test
kubectl kustomize manifests/overlays/prod

# Apply direct (zonder Argo CD)
kubectl apply -k manifests/overlays/test
kubectl apply -k manifests/overlays/prod
```

## 🔄 Rollback

```bash
# Via Argo CD
argocd app rollback webapp-prod

# Via kubectl
kubectl rollout undo deployment/webapp-prod -n app-prod
```

## 🎓 Man6 - Release Management

Dit project demonstreert:
- ✅ Deployment pipeline zonder downtime (RollingUpdate)
- ✅ Push-on-green naar test omgeving (automated sync)
- ✅ Handmatige goedkeuring voor productie (manual sync)
- ✅ GitOps met Argo CD
- ✅ Kustomize voor multi-environment config
- ✅ k3s als Kubernetes platform

## 📚 Referenties

- [Argo CD Documentation](https://argo-cd.readthedocs.io/)
- [Kustomize Documentation](https://kustomize.io/)
- [k3s Documentation](https://k3s.io/)
