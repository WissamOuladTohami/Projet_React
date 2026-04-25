export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
  featured?: boolean;
  pdfUrl?: string; // Nouveau champ pour le PDF
};

export const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    issueDate: "2024-03",
    credentialUrl: "https://credly.com/badges/xxxx",
    skills: ["VPC", "Autoscaling"],
    tags: ["Cloud", "DevOps"],
    image: "/certs/aws-saa.svg",
    imageAlt: "Badge AWS SAA",
    status: "active",
    featured: true,
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    issueDate: "2025-01",
    credentialUrl: "https://www.credly.com/",
    skills: ["Kubernetes", "Networking", "Troubleshooting"],
    tags: ["Kubernetes", "DevOps"],
    image: "/certs/cncf-cka.svg",
    imageAlt: "Badge CKA CNCF",
    status: "active",
    featured: true,
  },
  {
    title: "Certification React",
    issuer: "Wissam Oulad Tohami",
    issueDate: "2026-04",
    credentialUrl: "",
    skills: ["React", "JavaScript", "Frontend"],
    tags: ["Frontend", "JavaScript"],
    image: "/certs/certif-react.svg",
    imageAlt: "Certification React",
    status: "active",
    featured: false,
    pdfUrl: "/certs/Certif React.pdf",
  },
  {
    title: "Certification Professionnelle - Fondamentaux de la programmation en Kotlin",
    issuer: "Wissam Oulad Tohami",
    issueDate: "2025-11",
    credentialUrl: "",
    skills: ["Kotlin", "Programmation", "Mobile"],
    tags: ["Kotlin", "Android", "Mobile"],
    image: "/certs/certif-kotlin.svg",
    imageAlt: "Certification Kotlin",
    status: "active",
    featured: false,
    pdfUrl: "/certs/Certification Professionnelle - Fondamentaux de la programmation en Kotlin.pdf",
  },
  {
    title: "Certification Professionnelle - Ingénierie Logicielle Web avec PHP 7",
    issuer: "Wissam Oulad Tohami",
    issueDate: "2025-12",
    credentialUrl: "",
    skills: ["PHP", "Architecture", "Sécurité", "Base de données"],
    tags: ["PHP", "Backend", "Architecture"],
    image: "/certs/certif-php.svg",
    imageAlt: "Certification PHP",
    status: "active",
    featured: false,
    pdfUrl: "/certs/certif-php.pdf",
  },
];
