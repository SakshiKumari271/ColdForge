import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
              Codeforage
            </div>
            <p className="max-w-xs text-center text-sm text-muted-foreground md:text-left">
              A premium outreach suite designed for modern professionals.
              Free. Forever. No API Access. No Paid Plans.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Product
              </span>
              <ul className="flex flex-col gap-2 text-sm text-foreground/80">
                <li><Link href="/permutator" className="hover:text-primary transition-colors">Permutator</Link></li>
                <li><Link href="/drafter" className="hover:text-primary transition-colors">Email Drafter</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Resources
              </span>
              <ul className="flex flex-col gap-2 text-sm text-foreground/80">
                <li><Link href="/docs" className="hover:text-primary transition-colors">Docs</Link></li>
                <li><Link href="/github" className="hover:text-primary transition-colors">GitHub</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Codeforage. Built for productivity.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="mailto:support@codeforage.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
