import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string){ const [y,m]=s.split("-"); return `${m}/${y}`; }

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "w-full max-w-sm rounded-2xl border p-4 text-center transition hover:shadow",
        isExpired && "opacity-80",
      )}
      aria-label={`Certification ${c.title}`}
    >
      {c.image && (
        <img
          src={c.image}
          alt={c.imageAlt ?? c.title}
          width={256}
          height={256}
          loading="lazy"
          className="mx-auto mb-3 h-24 w-24 rounded-lg border border-border bg-card p-2 object-contain transition-transform hover:scale-105"
        />
      )}

      <h3 className="font-semibold leading-snug">{c.title}</h3>
      <p className="text-sm text-muted-foreground">
        {c.issuer} • {mmYYYY(c.issueDate)}
        {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
        {c.credentialId ? ` • ID ${c.credentialId}` : ""}
      </p>

      {c.skills?.length ? (
        <p className="mt-2 text-sm">Compétences : {c.skills.join(", ")}</p>
      ) : null}

      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm">
        {c.credentialUrl && (
          <a className="underline" href={c.credentialUrl} target="_blank" rel="noreferrer"
             aria-label={`Voir le certificat ${c.title}`}>
            Voir le certificat
          </a>
        )}
        {c.pdfUrl && (
          <a className="underline text-primary hover:text-primary/80" href={c.pdfUrl} target="_blank" rel="noreferrer"
             aria-label={`Voir le PDF du certificat ${c.title}`}>
            📄 Voir la certif
          </a>
        )}
        {isExpired && <span>Expirée</span>}
        {c.status === "revoked" && <span>Révoquée</span>}
      </div>
    </article>
  );
}
