import { Helmet } from "react-helmet-async";
import SectionIntro from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <Helmet>
        <title>Contact - Portfolio</title>
        <meta
          name="description"
          content="Coordonnees et formulaire de prise de contact pour collaborer."
        />
      </Helmet>

      <SectionIntro
        eyebrow="Contact"
        title="Construisons quelque chose de solide"
        description="Le formulaire est pret pour l'UI. Vous pourrez le connecter plus tard a Formspree, EmailJS ou une API custom."
      />

      <Card>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Nom" aria-label="Nom" />
            <Input placeholder="Email" aria-label="Email" type="email" />
          </div>
          <Input placeholder="Sujet" aria-label="Sujet" />
          <Textarea
            placeholder="Parlez-moi de votre projet..."
            aria-label="Message"
          />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Ou ecrivez directement a {profile.email}
            </p>
            <Button>Envoyer</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
