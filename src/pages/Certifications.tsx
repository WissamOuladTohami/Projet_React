import { useState } from "react";
import { Helmet } from "react-helmet-async";
import CertificationCard from "@/components/CertificationCard";
import SectionIntro from "@/components/SectionIntro";
import { Input } from "@/components/ui/input";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
  const [query, setQuery] = useState("");

  const list = certifications
    .filter((certification) =>
      [
        certification.title,
        certification.issuer,
        ...(certification.tags ?? []),
        ...(certification.skills ?? []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase()),
    )
    .sort((left, right) => right.issueDate.localeCompare(left.issueDate));

  return (
    <section className="grid gap-8">
      <Helmet>
        <title>Certifications - Portfolio</title>
        <meta
          name="description"
          content="Certifications techniques, badges et liens de verification."
        />
      </Helmet>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro
          eyebrow="Credibilite"
          title="Certifications"
          description="Badges, competences associees et liens de verification dans une vue filtrable."
        />
        <Input
          placeholder="Filtrer (ex: AWS, Kubernetes)"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full lg:w-80"
          aria-label="Filtrer les certifications"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {list.map((certification) => (
          <CertificationCard
            key={`${certification.title}-${certification.issueDate}`}
            c={certification}
          />
        ))}
      </div>
    </section>
  );
}
