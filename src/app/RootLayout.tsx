import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const links = [
  { to: "/projects", label: "Projets" },
  { to: "/experience", label: "Parcours" },
  { to: "/education", label: "Formations" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background/90">
      <Helmet>
        <title>{profile.name} - Portfolio</title>
        <meta
          name="description"
          content="Portfolio IA, SIG, DevSecOps et Android construit avec React, TypeScript et Vite."
        />
      </Helmet>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_24%)]" />

      <header className="sticky top-0 z-50">
        <nav className="tech-shell mx-auto mt-4 flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
          <NavLink to="/" className="flex items-center gap-3">
            <Avatar>{profile.name.slice(0, 2).toUpperCase()}</Avatar>
            <div className="text-left">
              <p className="font-display text-lg font-bold text-foreground">
                {profile.name}
              </p>
              <p className="text-sm text-muted-foreground">{profile.role}</p>
            </div>
          </NavLink>

          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full border border-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:border-white/10 hover:bg-white/[0.04] hover:text-primary",
                    isActive &&
                      "border-primary/20 bg-primary/15 text-primary hover:text-primary",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
            <a href={`mailto:${profile.email}`}>
              <Button className="ml-1">Me contacter</Button>
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 md:px-6">
        <Separator className="mb-6" />
        <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} • {profile.name}</p>
          <div className="flex flex-wrap items-center gap-4">
            <span>{profile.location}</span>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
