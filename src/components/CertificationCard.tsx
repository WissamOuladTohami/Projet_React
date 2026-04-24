import clsx from "clsx";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Certification } from "@/data/certifications";

function mmYYYY(value: string) {
  const [year, month] = value.split("-");
  return `${month}/${year}`;
}

function isCertificationExpired(certification: Certification) {
  if (
    certification.status === "expired" ||
    certification.status === "revoked"
  ) {
    return true;
  }

  if (!certification.expiryDate) {
    return false;
  }

  const today = new Date().toISOString().slice(0, 7);
  return certification.expiryDate < today;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const expired = isCertificationExpired(c);

  return (
    <Card
      className={clsx(
        "h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow",
        expired && "opacity-85",
      )}
      aria-label={`Certification ${c.title}`}
    >
      <CardContent className="flex h-full flex-col gap-4">
        {c.image ? (
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            width={256}
            height={256}
            loading="lazy"
            className="h-24 w-24 rounded-2xl border bg-white/60 object-contain p-2"
          />
        ) : null}

        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
          <p className="text-sm text-muted-foreground">
            {c.issuer} • {mmYYYY(c.issueDate)}
            {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
            {c.credentialId ? ` • ID ${c.credentialId}` : ""}
          </p>
        </div>

        {c.skills?.length ? (
          <p className="text-sm text-muted-foreground">
            Competences: {c.skills.join(", ")}
          </p>
        ) : null}

        {c.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {c.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex items-center gap-3 text-sm">
          {c.credentialUrl ? (
            <a
              className="font-medium text-primary underline decoration-primary/40 underline-offset-4"
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir le certificat ${c.title}`}
            >
              Voir le certificat
            </a>
          ) : null}
          {expired ? (
            <Badge className="bg-accent text-accent-foreground">Expirée</Badge>
          ) : null}
          {c.status === "revoked" ? (
            <Badge className="bg-accent text-accent-foreground">Revoquee</Badge>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
