import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SectionIntro from "@/components/SectionIntro";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <Helmet>
        <title>{profile.name} - Portfolio</title>
        <meta
          name="description"
          content="Portfolio : IA, SIG, DevSecOps, Android et produits numeriques a fort impact."
        />
      </Helmet>

      <div className="space-y-8">
        <SectionIntro
          eyebrow="Portfolio"
          title={profile.name}
          description={profile.about}
        />

        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span className="hud-label">React / TypeScript</span>
          <span className="hud-label">IA / SIG / DevSecOps</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/projects">
            <Button>Voir les projets</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">Contact</Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2" aria-label="badges de parcours">
          <Badge>Master IA (2025)</Badge>
          <Badge>AWS SAA</Badge>
          <Badge>Recherche appliquee</Badge>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {profile.skills.map((skill) => (
            <Card key={skill} className="scanline border-primary/10">
              <CardContent className="p-4 text-sm font-medium">
                {skill}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="tech-shell scanline relative overflow-hidden rounded-[2rem] p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="relative space-y-6">
          <div className="inline-flex rounded-full border border-primary/20 bg-background/60 px-4 py-2 text-sm text-muted-foreground">
            {profile.role}
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-primary">
              Base a {profile.location}
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Interfaces precises, pipelines fiables, execution moderne.
            </h2>
            <p className="text-muted-foreground">
              J&apos;aime construire des experiences lisibles et rapides, du
              prototype de recherche jusqu&apos;au deploiement production.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="tech-panel rounded-3xl p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                Focus
              </p>
              <p className="mt-2 text-sm text-foreground">
                Frontend moderne, architecture typed et UX orientee impact.
              </p>
            </div>
            <div className="tech-panel rounded-3xl p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                Stack
              </p>
              <p className="mt-2 text-sm text-foreground">
                Vite, React, Tailwind, motion, composants reutilisables.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
