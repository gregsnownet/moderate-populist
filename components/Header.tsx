"use client";

// components/Header.tsx
// Sticky site header. Wordmark, nav, search, primary CTA.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";

const NAV = [
  { href: "/",                label: "Front Page",   id: "home" },
  { href: "/",                label: "Issues",       id: "issues",    match: "/issues" },
  { href: "/solutions",       label: "Solutions",    id: "solutions" },
  { href: "/talking-points",  label: "Talking Points", id: "talking" },
  { href: "/resources",       label: "Resources",    id: "resources" },
  { href: "/about",           label: "About",        id: "about" },
];

export default function Header() {
  const pathname = usePathname() ?? "/";
  const current = (item: { href: string; match?: string }) => {
    if (item.match) return pathname.startsWith(item.match);
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  };

  // The "Issues" link sits under /issues in the codebase; the home route also lists issues.
  // We separately fix the Issues link to point to /issues.
  const navItems = NAV.map((item) =>
    item.id === "issues" ? { ...item, href: "/issues" } : item,
  );

  return (
    <header className="b-header">
      <div className="b-header-top">
        <Link href="/" className="b-mast-title">
          <span className="b-mast-the">The</span>
          <span className="b-mast-name">Moderate Populist</span>
        </Link>
        <nav className="b-nav-inline" aria-label="Primary">
          {navItems.map((n) => (
            <Link
              key={n.id}
              href={n.href}
              className={current(n) ? "is-current" : ""}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="b-header-actions">
          <button type="button" className="b-header-action" aria-label="Search">
            <Search size={16} strokeWidth={1.5} />
          </button>
          <Link href="/#stand" className="b-header-cta">
            Take the stand
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}
