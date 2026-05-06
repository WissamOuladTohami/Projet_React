export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Fleet Manager",
    period: "2026",
    tags: ["React", "Node.js", "Express", "MySQL", "Socket.IO", "Android"],
    summary:
      "Application de gestion de flotte (véhicules et chauffeurs) avec suivi GPS en temps réel, tableau de bord et historique des trajectoires.",
    repo: "https://github.com/WissamOuladTohami/Projet-Web-Mobile",
  },
  {
    title: "Portfolio Web Personnel",
    period: "2026",
    tags: ["React", "JavaScript", "HTML", "CSS", "Vercel"],
    summary:
      "Portfolio web moderne, responsive et accessible, conçu en composants React et déployé sur Vercel.",
    repo: "https://github.com/WissamOuladTohami/Projet_React",
  },
  {
    title: "Gestion Agroalimentaire",
    period: "2026",
    tags: ["Java", "Swing", "MySQL"],
    summary:
      "Application desktop de gestion agroalimentaire : suivi des agriculteurs, produits, ventes, communes et statistiques (tableaux et graphiques).",
    repo: "https://github.com/WissamOuladTohami/Projet_Java_Swing1",
  },
];
