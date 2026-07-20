import Link from "next/link";
import { Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 flex-col leading-tight"
          aria-label={`${site.brand} — home`}
        >
          <span className="font-display text-lg tracking-tight text-foreground transition-colors group-hover:text-sage-800 sm:text-xl">
            {site.brand}
          </span>
          <span className="truncate text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {site.community} · Summerlin
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary sm:inline-flex"
          >
            Book
          </a>
          <a
            href={site.phone.href}
            className="inline-flex items-center gap-1.5 rounded-md bg-sage-800 px-3 py-2 text-sm font-medium text-white hover:bg-sage-900"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">{site.phone.display}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>

      <nav
        className="flex gap-4 overflow-x-auto border-t border-border/70 px-4 py-2 text-xs lg:hidden"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-muted-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
