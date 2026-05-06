import { Helmet } from "react-helmet-async";
import SectionIntro from "@/components/SectionIntro";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="grid gap-8">
      <Helmet>
        <title>Projets - Portfolio</title>
        <meta
          name="description"
          content="Selection de projets React, IA, SIG et DevSecOps."
        />
      </Helmet>

      <SectionIntro
        eyebrow="Portfolio"
        title="Projets"
        description="Une selection de projets axes produit, experimentation et mise en production."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title}>
            <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow">
              <CardContent className="flex h-full flex-col gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">
                    {project.period}
                  </p>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <div className="mt-auto flex gap-4 text-sm font-medium">
                  {project.link ? (
                    <a
                      className="text-primary underline decoration-primary/40 underline-offset-4"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a
                      className="text-primary underline decoration-primary/40 underline-offset-4"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
}
