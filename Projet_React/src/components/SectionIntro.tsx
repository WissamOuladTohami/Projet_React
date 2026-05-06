type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="hud-label">{eyebrow}</p>
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h1>
      <p className="text-base leading-7 text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  );
}
