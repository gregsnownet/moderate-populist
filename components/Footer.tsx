// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="b-footer">
      <div className="b-footer-rule" />
      <div className="b-footer-inner">
        <div className="b-footer-mast">
          <div className="b-footer-mast-the">The</div>
          <div className="b-footer-mast-name">Moderate Populist</div>
          <p>
            A reader-supported civic almanac. Independent. Non-partisan.
            Evidence-based.
          </p>
        </div>
        <div className="b-footer-cols">
          <div>
            <div className="b-footer-h">Read</div>
            <Link href="/issues">Issues</Link>
            <Link href="/talking-points">Talking points</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/changed-our-minds">Changed our minds</Link>
          </div>
          <div>
            <div className="b-footer-h">Participate</div>
            <Link href="/#stand">Where you stand</Link>
            <Link href="/midterms">Midterms 2026</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/#newsletter">Newsletter</Link>
          </div>
          <div>
            <div className="b-footer-h">About</div>
            <Link href="/about">Our mission</Link>
            <Link href="/about">Standards</Link>
            <Link href="/resources">Methodology</Link>
            <Link href="/about">Contact</Link>
          </div>
          <div>
            <div className="b-footer-h">Commitments</div>
            <Link href="/about">No corporate donors</Link>
            <Link href="/about">No tracking</Link>
            <Link href="/changed-our-minds">Corrections policy</Link>
          </div>
        </div>
      </div>
      <div className="b-footer-bottom">
        <span>© {new Date().getFullYear()} The Moderate Populist</span>
        <span className="b-sep">·</span>
        <span>Made by one citizen, for the rest.</span>
      </div>
    </footer>
  );
}
