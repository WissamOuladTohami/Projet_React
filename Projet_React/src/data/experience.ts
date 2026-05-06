export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
};

export const experiences: Experience[] = [
  {
    company: "Collège Annakhil",
    role: "Stage d’action éducative",
    period: "2023-2024 (1ère année à l’ENS)",
    location: "Marrakech",
    summary:
      "Accompagnement pédagogique : soutien aux élèves, animation d’activités et appui aux actions éducatives de l’établissement.",
  },
  {
    company: "Lycée Ibn Sina",
    role: "Stage d’action éducative",
    period: "2024-2025 (2ème année à l’ENS)",
    location: "Marrakech",
    summary:
      "Accompagnement pédagogique : soutien aux élèves, aide à la préparation d’activités et appui à la vie scolaire.",
  },
  {
    company: "Lycée Ibn Sina",
    role: "Stage d’action éducative",
    period: "2025-2026 (3ème année à l’ENS)",
    location: "Marrakech",
    summary:
      "Encadrement et animation d’activités éducatives : soutien aux élèves, suivi de progression et contribution à la préparation de séances.",
  },
];
