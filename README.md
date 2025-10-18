# Dylan Schuurman - Semester 3 Reflectie Website

Een moderne React-website voor het reflecteren op sprint 1 en 2 van semester 3, HBO ICT Infrastructure jaar 2.

## 🎨 Design

Deze website combineert een **Cyberpunk-Tech** thema met het iconische **Rolex kleurenschema**:

### Kleuren
- **Rolex Groen**: #006039 (primary)
- **Goud**: #D4AF37 (accent & glow effects)
- **Tech Groen**: #00ff88 (cyberpunk accenten)
- **Zwart**: #0a0a0a (achtergrond)

### Effecten & Animaties
- ✨ Glowing text effects met shadows
- 🌟 Geanimeerde tech grid achtergronden
- 🔷 Scanning line effecten
- 💫 Particle floating animations
- ⚡ Hover transformaties en transitions
- 🎯 Neon-style borders
- 🌀 Rotating gradient borders
- 📡 Tech-inspired clip-path designs

## 📁 Project Structuur

```
src/
├── components/          # Herbruikbare componenten
│   ├── TopBar.jsx      # Navigatiebalk
│   ├── Hero.jsx        # Hero sectie
│   ├── About.jsx       # Over mij sectie
│   ├── Assignment.jsx  # Opdracht details
│   └── Footer.jsx      # Footer
├── pages/              # Verschillende pagina's
│   ├── HomePage.jsx    # Hoofdpagina
│   ├── Sprint1Page.jsx # Sprint 1 reflectie
│   ├── Sprint2Page.jsx # Sprint 2 reflectie
│   └── AssignmentPage.jsx # Opdracht pagina
└── App.jsx            # Hoofd app met routing
```

## 🚀 Development

### Installatie
```bash
npm install
```

### Development server starten
```bash
npm run dev
```

Bezoek: http://localhost:5173/

### Build voor productie
```bash
npm run build
```

## 📝 Opdracht Context

**Man6 - Advanced Release Management**

Realiseer een deployment pipeline voor het inzetten van een (web-)service zonder downtime voor deployment (push-on-green) naar test/acc-omgeving en handmatige goedkeuring naar productie-omgeving.

**Technologieën**: Jenkins, Git, ArgoCD

## 📄 Pagina's

- **Home** (`/`) - Overzicht en navigatie
- **Sprint 1** (`/sprint1`) - Reflectie sprint 1
- **Sprint 2** (`/sprint2`) - Reflectie sprint 2
- **Opdracht** (`/assignment`) - Details over de Man6 opdracht

## 🛠️ Tech Stack

- React 18
- React Router DOM
- Vite
- CSS3

## 👨‍💻 Auteur

Dylan Schuurman - HBO ICT Infrastructure, Jaar 2

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
