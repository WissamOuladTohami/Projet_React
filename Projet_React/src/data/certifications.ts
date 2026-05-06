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
    title: "Développement Front-end avec React",
    issuer: "MLIAEdu",
    issueDate: "2026-04",
    credentialUrl: "",
    skills: ["React", "JavaScript", "Frontend"],
    tags: ["Frontend", "JavaScript"],
    image: "/certs/mliaedu.png",
    imageAlt: "Logo MLIAEdu",
    status: "active",
    featured: false,
    pdfUrl: "/certs/Certif React.pdf",
  },
  {
    title: "Programmation orientée objet : C++",
    issuer: "MLIAEdu",
    issueDate: "2025-11",
    credentialUrl: "",
    skills: ["C++", "Programmation"],
    tags: ["C++"],
    image: "/certs/mliaedu.png",
    imageAlt: "Logo MLIAEdu",
    status: "active",
    featured: false,
    pdfUrl: "/certs/certif-cpp.pdf",
  },
  {
    title: "Introduction to Python",
    issuer: "DataCamp",
    issueDate: "2025-11",
    credentialUrl: "",
    skills: ["Python"],
    tags: ["Python"],
    image: "/certs/datacamp.jpg",
    imageAlt: "Logo DataCamp",
    status: "active",
    featured: false,
    pdfUrl: "/certs/certificate.pdf",
  },
  {
    title:
      "Certification Professionnelle - Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu",
    issueDate: "2025-12",
    credentialUrl: "",
    skills: ["Java", "Programmation"],
    tags: ["Java"],
    image: "/certs/mliaedu.png",
    imageAlt: "Logo MLIAEdu",
    status: "active",
    featured: false,
    pdfUrl: "/certs/certificate-java.pdf",
  },
  {
    title: "Certification Professionnelle - Bases de données",
    issuer: "MLIAEdu",
    issueDate: "2025-12",
    credentialUrl: "",
    skills: ["SQL", "Bases de données"],
    tags: ["SQL", "Data"],
    image: "/certs/mliaedu.png",
    imageAlt: "Logo MLIAEdu",
    status: "active",
    featured: false,
    pdfUrl: "/certs/certificate-bd.pdf",
  },
  {
    title: "Programmation orientée objet — Python",
    issuer: "MLIAEdu",
    issueDate: "2025-12",
    credentialUrl: "",
    skills: ["Python", "POO"],
    tags: ["Python"],
    image: "/certs/mliaedu.png",
    imageAlt: "Logo MLIAEdu",
    status: "active",
    featured: false,
    pdfUrl: "/certs/certification-python-poo.pdf",
  },
  {
    title: "Introduction to Object-Oriented Programming in Python",
    issuer: "DataCamp",
    issueDate: "2025-11",
    credentialUrl: "",
    skills: ["Python", "POO"],
    tags: ["Python"],
    image: "/certs/datacamp.jpg",
    imageAlt: "Logo DataCamp",
    status: "active",
    featured: false,
    pdfUrl: "/certs/certif-python-poo.pdf",
  },
  {
    title: "Certification Professionnelle - Fondamentaux de la programmation en Kotlin",
    issuer: "MLIAEdu",
    issueDate: "2026-02",
    credentialUrl: "",
    skills: ["Kotlin", "Programmation", "Mobile"],
    tags: ["Kotlin", "Android", "Mobile"],
    image: "/certs/mliaedu.png",
    imageAlt: "Logo MLIAEdu",
    status: "active",
    featured: false,
    pdfUrl: "/certs/Certification Professionnelle - Fondamentaux de la programmation en Kotlin.pdf",
  },
  {
    title: "Certification Professionnelle - Ingénierie Logicielle Web avec PHP 7",
    issuer: "MLIAEdu",
    issueDate: "2026-03",
    credentialUrl: "",
    skills: ["PHP", "Architecture", "Sécurité", "Base de données"],
    tags: ["PHP", "Backend", "Architecture"],
    image: "/certs/mliaedu.png",
    imageAlt: "Logo MLIAEdu",
    status: "active",
    featured: false,
    pdfUrl: "/certs/certif-php.pdf",
  },
];
