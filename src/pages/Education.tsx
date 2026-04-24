import { Helmet } from "react-helmet-async";
import SectionIntro from "@/components/SectionIntro";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/education";

function formatMonth(value?: string) {
  if (!value) {
    return "Present";
  }

  const [year, month] = value.split("-");
  return `${month}/${year}`;
}

export default function EducationPage() {
  return (
    <section className="grid gap-8">
      <Helmet>
        <title>Formations - Portfolio</title>
        <meta
          name="description"
          content="Diplomes, cours cles et points forts du parcours de formation."
        />
      </Helmet>

      <SectionIntro
        eyebrow="Formation"
        title="Formations"
        description="Diplomes, cours cles et faits marquants presentes dans un format facile a mettre a jour."
      />

      <ol className="grid gap-6">
        {education.map((item) => (
          <li key={`${item.school}-${item.start}`}>
            <Card>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">
                    {item.degree}
                    {item.field ? ` - ${item.field}` : ""} @ {item.school}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {formatMonth(item.start)} - {formatMonth(item.end)}
                    {item.location ? ` • ${item.location}` : ""}
                    {item.gpa ? ` • GPA ${item.gpa}` : ""}
                  </p>
                </div>

                {item.courses?.length ? (
                  <p className="text-sm text-muted-foreground">
                    Cours: {item.courses.slice(0, 5).join(", ")}
                  </p>
                ) : null}

                {item.highlights?.length ? (
                  <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
