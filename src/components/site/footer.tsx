import { Trees } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Trees className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                Gera Plywoods
              </div>
              <div className="text-[11px] text-muted-foreground">
                Plywood &middot; Laminates &middot; Veneers &middot; Boards
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a className="hover:text-foreground" href="#products">
              Products
            </a>
            <a className="hover:text-foreground" href="#about">
              About
            </a>
            <a className="hover:text-foreground" href="#why">
              Why us
            </a>
            <a className="hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Gera Plywoods. All rights reserved.</p>
          <p>Built with care &middot; Genuine ISI-marked stock only.</p>
        </div>
      </div>
    </footer>
  );
}
