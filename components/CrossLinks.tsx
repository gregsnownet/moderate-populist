// components/CrossLinks.tsx
// "Keep going" band — three contextual cross-page links at the bottom of each subpage.

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Target =
  | "home" | "issues" | "stand" | "solutions" | "talking" | "resources" | "about";

const ALL: Array<{
  id: Target;
  title: string;
  desc: string;
  href: string;
  eyebrow: string;
}> = [
  { id: "issues",    title: "Read the issues",    desc: "9+ deep-dives mapping common ground vs. real disagreement.",  href: "/issues",         eyebrow: "Issues" },
  { id: "stand",     title: "Take the stand",     desc: "8 questions, no login. See where you actually agree with your neighbors.", href: "/#stand", eyebrow: "Interactive" },
  { id: "solutions", title: "Take an action",     desc: "The 4 Cs of engagement and a ladder of civic actions.",      href: "/solutions",      eyebrow: "Solutions" },
  { id: "talking",   title: "Get the scripts",    desc: "What to say when the conversation gets hard.",               href: "/talking-points", eyebrow: "Talking Points" },
  { id: "resources", title: "Check the sources",  desc: "Every fact, every footnote, every primary source.",          href: "/resources",      eyebrow: "Resources" },
  { id: "about",     title: "Why this exists",    desc: "Our mission, values, and how we work.",                       href: "/about",          eyebrow: "About" },
];

export default function CrossLinks({ current }: { current: Target }) {
  const items = ALL.filter((x) => x.id !== current).slice(0, 3);
  return (
    <section className="b-cross">
      <div className="b-cross-head">
        <div className="b-cross-eyebrow">More to explore</div>
        <h3>Keep going.</h3>
      </div>
      <div className="b-cross-grid">
        {items.map((it) => (
          <Link key={it.id} href={it.href} className="b-cross-card">
            <div className="b-cross-card-eyebrow">{it.eyebrow}</div>
            <h4>{it.title}</h4>
            <p>{it.desc}</p>
            <div className="b-cross-card-cta">
              Go there <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
