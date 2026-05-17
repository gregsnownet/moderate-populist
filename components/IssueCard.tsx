// components/IssueCard.tsx
// Editorial issue card: numbered, line-icon, common-ground ring badge, hover state.

import Link from "next/link";
import {
  ArrowRight, Stethoscope, TrendingUp, GraduationCap, Coins, Megaphone,
  Building2, Users, Shield, Sprout, MapPin,
} from "lucide-react";
import type { Issue } from "@/types/issue";

const CATEGORY: Record<
  string,
  { icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; label: string }
> = {
  "healthcare":             { icon: Stethoscope,    label: "Healthcare" },
  "economic-opportunity":   { icon: TrendingUp,     label: "Economy" },
  "education":              { icon: GraduationCap,  label: "Education" },
  "affordability":          { icon: Coins,          label: "Affordability" },
  "civic-engagement":       { icon: Megaphone,      label: "Civic Dialogue" },
  "community":              { icon: Building2,      label: "Community" },
  "families":               { icon: Users,          label: "Families" },
  "public-safety":          { icon: Shield,         label: "Public Safety" },
  "government":             { icon: Building2,      label: "Government" },
  "environment":            { icon: Sprout,         label: "Environment" },
  "immigration":            { icon: MapPin,         label: "Immigration" },
};

// Synthesize a common-ground % from the data: roughly 65 + (4 × points). Clamps to 70..95.
function commonGroundScore(issue: Issue): number {
  const n = issue.commonGround?.points?.length ?? 5;
  return Math.max(70, Math.min(95, 65 + n * 4));
}

export default function IssueCard({
  issue,
  index = 0,
}: {
  issue: Issue;
  index?: number;
}) {
  const cat = CATEGORY[issue.category] ?? CATEGORY["government"];
  const Ico = cat.icon;
  const score = commonGroundScore(issue);
  const dash = (score / 100) * 163.4;

  return (
    <Link href={`/issues/${issue.id}`} className="b-issue">
      <div className="b-issue-num">№ {String(index + 1).padStart(2, "0")}</div>
      <div className="b-issue-head">
        <div className="b-issue-icon">
          <Ico size={26} strokeWidth={1.4} />
        </div>
        <div className="b-issue-cat">{cat.label}</div>
      </div>
      <h3 className="b-issue-title">{issue.title}</h3>
      <p className="b-issue-blurb">{issue.description}</p>
      <div className="b-issue-badge">
        <div className="b-issue-badge-num">
          {score}<span>%</span>
        </div>
        <div className="b-issue-badge-lbl">
          common<br />ground
        </div>
        <svg viewBox="0 0 60 60" className="b-issue-badge-ring" aria-hidden="true">
          <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(58,90,138,0.2)" strokeWidth="3" />
          <circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeDasharray={`${dash} 163.4`}
            transform="rotate(-90 30 30)"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="b-issue-cta">
        Read the breakdown
        <ArrowRight size={14} />
      </div>
    </Link>
  );
}
