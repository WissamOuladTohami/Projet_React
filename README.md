# Mon Portfolio

Portfolio personnel construit avec `Vite`, `React`, `TypeScript`, `Tailwind CSS`, `React Router`, `Framer Motion` et `React Helmet Async`.

L'interface suit une direction visuelle moderne et technologique :

- fond sombre avec grille subtile
- panneaux glassmorphism
- accents cyan / blue
- structure simple a personnaliser depuis des fichiers de donnees

## Stack

- `Vite` pour le dev server et le build
- `React 19` avec `TypeScript`
- `Tailwind CSS` pour le styling
- `React Router DOM` pour le multi-pages
- `Framer Motion` pour les animations
- `React Helmet Async` pour le SEO de base
- `ESLint` + `Prettier` pour la qualite du code

## Demarrage

```bash
npm install
npm run dev
```

L'application sera disponible sur l'URL affichee par Vite, en general `http://localhost:5173`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Structure

```text
src/
  app/           # layout global + router
  components/    # composants UI et blocs reutilisables
  data/          # contenu centralise du portfolio
  lib/           # helpers
  pages/         # pages de l'application
public/
  certs/         # badges et images publiques
```

## Personnalisation rapide

### 1. Modifier votre profil

Editez :

- `src/data/profile.ts`

Vous pourrez y changer :

- nom
- role
- localisation
- email
- reseaux sociaux
- texte de presentation
- competences

### 2. Ajouter vos projets

Editez :

- `src/data/projects.ts`

Chaque projet accepte notamment :

- `title`
- `period`
- `summary`
- `tags`
- `link`
- `repo`

### 3. Mettre a jour formation et certifications

Editez :

- `src/data/education.ts`
- `src/data/certifications.ts`
- `src/data/experience.ts`

Pour les badges de certifications, placez vos images dans :

- `public/certs/`

Puis referencez-les dans `src/data/certifications.ts`.

## Pages disponibles

- `/`
- `/projects`
- `/experience`
- `/education`
- `/certifications`
- `/contact`

## SEO

Chaque page declare un `title` et une `meta description` via `react-helmet-async`.

## Build de production

```bash
npm run build
```

Le build genere les fichiers optimises dans `dist/`.

## Notes

- Le formulaire de contact est actuellement une UI prete a etre connectee a une API, `Formspree` ou `EmailJS`.
- Les composants UI ont ete crees localement dans un style compatible avec l'approche `shadcn`, sans dependre du CLI.
- Vous pouvez ensuite ajouter un mode clair, une timeline animee, une section blog ou une integration CMS/headless.
