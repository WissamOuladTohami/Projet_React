# 🎨 TP — Création d'un Portfolio Web Personnel

Travaux pratiques portant sur la conception et le déploiement d'un portfolio web personnel moderne, responsive et accessible, mis en ligne via la plateforme Vercel. Ce projet permet de mettre en pratique les fondamentaux du développement front-end en produisant un livrable concret et publiable.

---

## 🎯 Objectifs

- Concevoir une interface web personnelle soignée et professionnelle
- Structurer une application front-end en composants réutilisables
- Maîtriser la mise en page responsive avec CSS moderne (Flexbox / Grid)
- Intégrer des animations et transitions pour améliorer l'expérience utilisateur
- Organiser et architecturer un projet front-end de manière lisible et maintenable
- Déployer une application web statique sur une plateforme d'hébergement cloud (Vercel)
- Versionner le code source avec Git et GitHub

---

## 🛠️ Technologies utilisées

| Outil / Technologie | Rôle |
|---|---|
| HTML5 | Structure sémantique des pages |
| CSS3 | Mise en forme, animations, responsive design |
| JavaScript (ES6+) | Interactivité, manipulation du DOM |
| React.js | Construction de l'interface en composants réutilisables |
| React Router | Navigation entre les sections / pages du portfolio |
| Git & GitHub | Versionnement du code et collaboration |
| Vercel | Déploiement continu et hébergement de l'application |
| npm | Gestion des dépendances du projet |

---

## 🗂️ Architecture du projet

```
mon-portfolio/
├── public/
│   ├── index.html          → Point d'entrée HTML de l'application
│   └── assets/             → Ressources statiques (favicon, images publiques)
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       → Barre de navigation principale avec liens d'ancrage
│   │   ├── Hero.jsx         → Section d'accueil avec présentation et appel à l'action
│   │   ├── About.jsx        → Section "À propos" avec biographie et compétences
│   │   ├── Projects.jsx     → Galerie des projets réalisés avec descriptions
│   │   ├── Contact.jsx      → Formulaire de contact et liens vers les réseaux
│   │   └── Footer.jsx       → Pied de page avec mentions et liens sociaux
│   │
│   ├── styles/
│   │   ├── global.css       → Variables CSS, reset, typographie globale
│   │   └── components/      → Fichiers CSS spécifiques à chaque composant
│   │
│   ├── assets/
│   │   ├── images/          → Photos de profil, captures de projets
│   │   └── icons/           → Icônes SVG (technologies, réseaux sociaux)
│   │
│   ├── data/
│   │   └── projects.js      → Données statiques des projets (titre, description, liens)
│   │
│   ├── App.jsx              → Composant racine, assemblage des sections
│   └── main.jsx             → Point d'entrée React, rendu dans le DOM
│
├── .gitignore               → Fichiers et dossiers exclus du versionnement
├── package.json             → Métadonnées du projet et dépendances npm
├── vite.config.js           → Configuration du bundler Vite
└── README.md                → Documentation du projet
```

---

## 📋 Exercices

| N° | Titre | Concepts abordés |
|---|---|---|
| 01 | Mise en place du projet | Initialisation avec Vite/CRA, structure de dossiers, Git init |
| 02 | Création de la Navbar | Composants React, props, liens d'ancrage, responsive menu hamburger |
| 03 | Section Hero | CSS Grid/Flexbox, animations d'entrée, typographie expressive |
| 04 | Section À propos | Listes de compétences dynamiques, barres de progression, layout asymétrique |
| 05 | Galerie de projets | Rendu de liste avec `.map()`, cards interactives, filtrage par technologie |
| 06 | Formulaire de contact | Gestion des états avec `useState`, validation de formulaire, feedback utilisateur |
| 07 | Responsive design | Media queries, mobile-first, tests multi-résolutions |
| 08 | Animations & transitions | CSS transitions, keyframes, effets au scroll (Intersection Observer) |
| 09 | Déploiement sur Vercel | Connexion GitHub ↔ Vercel, variables d'environnement, déploiement continu |
| 10 | Optimisation & accessibilité | Balises sémantiques, attributs `aria-*`, Lighthouse audit, performances |

---

## 🎬 Démonstration vidéo

> 📎 

https://github.com/user-attachments/assets/db0b2e2c-1d61-4e53-bf30-be9e1eec27a1



- Navigation fluide entre les différentes sections du portfolio
- Affichage correct sur mobile, tablette et desktop (responsive)
- Interactions utilisateur : hover sur les cartes projets, ouverture des liens externes
- Fonctionnement du formulaire de contact avec validation en temps réel
- Animations au défilement et transitions entre les sections
- Aperçu du déploiement en production sur Vercel (URL publique)
- Présentation rapide de l'arborescence du code source sur GitHub
