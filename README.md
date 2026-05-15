# 🚀 Portfolio React — Projet_React

Un portfolio web **moderne**, **responsive** et **animé**, construit avec **React + TypeScript + Vite**, puis déployé sur **Vercel**.

## 🌐 Live (Vercel)
➡️ https://portfoliowissam-4e68yqm4u-wissamouladtohami-3917s-projects.vercel.app/

## ✨ Highlights
- 📱 Menu responsive (mobile + desktop)
- 🎬 Animations & transitions (Framer Motion)
- 🧭 Navigation multi-pages (React Router)
- 🌗 Mode clair/sombre
- ⚡ Build Vite optimisé

## 🧰 Stack
- React, TypeScript, Vite
- Tailwind CSS
- React Router
- Framer Motion
- Vercel (déploiement)

## 🗂️ Architecture du projet
Ce dépôt contient une application Vite/React dans le dossier `Projet_React/`.

### 🧱 Structure (simplifiée)
```text
mon-portfolio/
├─ README.md
├─ vercel.json
└─ Projet_React/
   ├─ index.html
   ├─ public/
   ├─ src/
   │  ├─ app/                 # Router + layout global
   │  ├─ components/          # Composants UI/feature
   │  ├─ components/ui/       # UI primitives (Button, Card, etc.)
   │  ├─ pages/               # Pages (routes)
   │  ├─ data/                # Données statiques (profil, etc.)
   │  ├─ lib/                 # Helpers (utils, cn, etc.)
   │  ├─ assets/              # Images & ressources importées
   │  ├─ main.tsx             # Entrée React
   │  ├─ App.tsx              # App provider (router)
   │  └─ index.css            # Styles globaux / Tailwind
   ├─ tailwind.config.js
   ├─ vite.config.ts
   └─ package.json
```

### 🧭 Navigation & layout
- `src/app/RootLayout.tsx` : header (navbar), `<Outlet />` pour les pages, footer + toggle thème.
- `src/app/router` : définition des routes (React Router).

## 📌 Fonctionnement (en bref)
- Le **header** affiche les liens en desktop et un **menu mobile** (hamburger) sur petits écrans.
- Les pages sont rendues via **React Router** et animées avec **Framer Motion**.
- Le thème clair/sombre est géré via une classe `dark` sur le `documentElement`.

## ▶️ Démarrer en local
```bash
cd Projet_React
npm install
npm run dev
```

## 🏗️ Build production
```bash
cd Projet_React
npm run build
```

## ☁️ Déploiement (Vercel)
- Déploiement continu via GitHub → Vercel
- URL publique (prod) : lien dans la section **Live (Vercel)**

## 🎥 Démo vidéo
https://github.com/user-attachments/assets/883402b5-07a9-4cce-bc2c-b334ee37349f
