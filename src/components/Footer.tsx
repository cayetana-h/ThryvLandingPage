import { Brain } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-card">
      <div className="container-wide mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-primary">
              <Brain className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-lg text-foreground">
              Thryv
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#benefits"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefits
            </a>
            <a
              href="#science"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Science
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Thryv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
