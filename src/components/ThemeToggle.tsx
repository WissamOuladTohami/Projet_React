import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button className="rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            onClick={() => setDark(!dark)}
            aria-label="Basculer le thème">
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}