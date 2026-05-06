import { Helmet } from "react-helmet-async";
import { useState } from "react";
import SectionIntro from "@/components/SectionIntro";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      // Convertir FormData en URLSearchParams pour une meilleure compatibilité
      const data = new URLSearchParams();
      for (const [key, value] of new FormData(form).entries()) {
        data.append(key, value as string);
      }

      const response = await fetch("https://formspree.io/f/mpqkbveb", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json",
        },
        // Éviter la redirection automatique qui cause des problèmes CORS
        redirect: "manual",
      });

      // Formspree retourne 302 pour la redirection, mais avec redirect: "manual"
      // on peut vérifier le statut et traiter comme succès
      if (response.status === 200 || response.status === 302) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error("Erreur Formspree:", response.status, response.statusText);
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        description="Remplissez le formulaire ci-dessous et je vous repondrai dans les plus brefs delais."
      />

      <Card>
        <CardContent className="space-y-4">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold mb-2">Message envoyé !</h3>
              <p className="text-muted-foreground">
                Merci pour votre message. Je vous repondrai bientôt.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  name="name"
                  placeholder="Votre nom"
                  aria-label="Nom"
                  required
                />
                <Input
                  name="email"
                  placeholder="Votre email"
                  aria-label="Email"
                  type="email"
                  required
                />
              </div>
              <Input
                name="subject"
                placeholder="Sujet"
                aria-label="Sujet"
                required
              />
              <Textarea
                name="message"
                placeholder="Parlez-moi de votre projet..."
                aria-label="Message"
                required
              />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Ou écrivez directement à {profile.email}
                </p>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
