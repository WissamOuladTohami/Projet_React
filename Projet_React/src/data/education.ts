export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "ENS Marrakech",
    degree: "Licence",
    field: "Informatique",
    location: "Marrakech",
    start: "2023-09",
    end: "2026-06",
  },
  {
    degree: "Baccalauréat",
    field: "PC BIOF",
    school: "Lycée Ibn ElBanna ElMorrakochi",
    location: "Marrakech",
    start: "2021-09",
    end: "2022-07",
  },
];
