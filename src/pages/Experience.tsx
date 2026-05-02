import { Helmet } from "react-helmet-async";
import SectionIntro from "@/components/SectionIntro";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="grid gap-8">
      <Helmet>
        <title>Parcours - Portfolio</title>
        <meta
          name="description"
          content="Parcours, stages et experiences autour de l'IA, des SIG et du DevSecOps."
        />
      </Helmet>

      <SectionIntro
        eyebrow="Parcours"
        title="Experience"
        description="Une base simple pour enrichir progressivement les stages, missions et responsabilites."
      />

      <div className="grid gap-5">
        {experiences.map((experience) => (
          <Card key={`${experience.company}-${experience.period}`}>
            <CardContent className="space-y-3">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h2 className="text-xl font-semibold">
                  {experience.role} @ {experience.company}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {experience.period} • {experience.location}
                </p>
              </div>
              <p className="text-muted-foreground">{experience.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
