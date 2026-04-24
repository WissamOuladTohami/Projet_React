/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        ring: "hsl(var(--ring))",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(19, 78, 74, 0.18)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: [
          '"Space Grotesk"',
          '"Plus Jakarta Sans"',
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(20, 184, 166, 0.16), transparent 34%), radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.15), transparent 28%)",
      },
    },
  },
  plugins: [],
};
