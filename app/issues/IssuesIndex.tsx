// app/issues/IssuesIndex.tsx
"use client";

import { useMemo, useState } from "react";
import IssueCard from "@/components/IssueCard";
import type { Issue } from "@/types/issue";

function prettyCat(c: string) {
  return c.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}

export default function IssuesIndex({ issues }: { issues: Issue[] }) {
  const [cat, setCat] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Set(issues.map((i) => i.category));
    return ["all", ...Array.from(set)];
  }, [issues]);

  const filtered = cat === "all" ? issues : issues.filter((i) => i.category === cat);

  return (
    <section className="b-issues">
      <div className="b-tabs">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={`b-tab ${cat === c ? "is-active" : ""}`}
          >
            {c === "all" ? "All issues" : prettyCat(c)}
          </button>
        ))}
      </div>
      <div className="b-issue-grid">
        {filtered.map((issue, i) => (
          <IssueCard key={issue.id} issue={issue} index={i} />
        ))}
      </div>
    </section>
  );
}
