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
    title: "EcoShop",
    period: "2025",
    tags: ["React", "Node", "OpenFoodFacts"],
    summary:
      "Application de scan produits pour aider a acheter de maniere plus durable.",
    repo: "https://github.com/me/ecoshop",
  },
  {
    title: "Atlas Vision",
    period: "2024",
    tags: ["Python", "CNN", "SIG"],
    summary:
      "Detection d'objets sur images UAV pour aider les equipes terrain a mieux prioriser leurs interventions.",
    link: "https://example.com/atlas-vision",
  },
  {
    title: "Cluster Guard",
    period: "2024",
    tags: ["Kubernetes", "DevSecOps", "Observability"],
    summary:
      "Tableau de bord de monitoring et de hardening pour clusters de developpement.",
    repo: "https://github.com/me/cluster-guard",
  },
];
