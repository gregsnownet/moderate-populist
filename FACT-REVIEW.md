# Key-facts freshness audit — August 2026

I reviewed all 26 published issues in `lib/data/issues.ts` for stale figures.

**Important:** I did not silently rewrite statistics. A claim like *"U.S. healthcare
spending reached $4.9 trillion in 2024"* is still **true** — it's dated, not wrong.
Replacing it with an invented 2026 number would be worse than leaving it. So this
document tells you exactly which facts have newer data available, where to get it,
and what to change. Half an hour with these links updates the whole site honestly.

The `verifiedOn` / `dataYear` fields added to `types/issue.ts` make this auditable
going forward — once populated, you can sort by staleness instead of re-reading
3,000 lines.

---

## Priority 1 — visible on high-traffic pages, newer data definitely exists

### `healthcare-access`
- **"$4.9 trillion in 2024 … 17.6% of GDP"** → CMS publishes NHE annually each
  December. 2025 actuals should be out.
  → https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data
- **"family premium ≈ $25,572 in 2024"** → KFF Employer Health Benefits Survey
  releases each October. Two cycles newer now.
  → https://www.kff.org/report-section/ehbs-2024-summary-of-findings/
- **"8% uninsured … 2024"** → Census releases in September. Note: subsidy changes
  since 2025 may have moved this materially — worth checking rather than assuming.
  → https://www.census.gov/topics/health/health-insurance.html

### `affordability`
- **"median existing-home sale price ≈ $420,000 in 2025"** → NAR publishes monthly.
  → https://www.nar.realtor/research-and-statistics/housing-statistics
- **"30-year mortgage rates 6.5–7%"** → Freddie Mac PMMS, weekly. This one moves
  fast and reads as stale quickly. Consider softening to a range or citing live.
  → https://www.freddiemac.com/pmms
- **"rent grew 30% 2019–2024, flattening in 2025"** → verify the 2026 direction.
  → https://www.jchs.harvard.edu/state-nations-housing-2025
- **"grocery prices rose 25–28% 2019–2024"** → BLS CPI food-at-home index.
  → https://fred.stlouisfed.org/series/CUSR0000SAF11

### `gun-rights-safety`
- **"more than 46,000 gun deaths in 2023 (most recent finalized)"** → CDC WONDER
  should have 2024 finalized and 2025 provisional now. The parenthetical
  *"most recent year with finalized CDC data"* is the part that's now wrong.
  → https://wonder.cdc.gov/

### `fentanyl-cartels`
- **"overdose deaths peaked ≈111,000–112,000 in 2023 … declines in 2024 and 2025"**
  → This is the site's most consequential trend claim. CDC provisional counts update
  monthly and the decline has been the biggest public-health story of the period —
  get the current figure and lead with it.
  → https://www.cdc.gov/nchs/nvss/vsrr/drug-overdose-data.htm

### `crime-public-safety`
- **"2023 and 2024 saw notable nationwide declines"** → FBI UCR/NIBRS annual release.
  Add 2025 to the series; the trend line is the argument.
  → https://cde.ucr.cjis.gov/

---

## Priority 2 — dated but not misleading

| Issue | Fact to refresh | Source |
| --- | --- | --- |
| `economic-opportunity` | Manufacturing employment "12.9M in 2024–2025" | BLS CES → https://fred.stlouisfed.org/series/MANEMP |
| `climate-environment` | "2024 warmest year on record"; "27 billion-dollar disasters in 2024" | NOAA NCEI → https://www.ncei.noaa.gov/access/billions/ |
| `climate-environment` | "renewables employed 3.4M in 2024" | DOE US Energy & Employment Report |
| `entitlement-solvency` | "69M Social Security / 67M Medicare beneficiaries (2024)" + trust-fund depletion dates | SSA/CMS Trustees Report, annual → https://www.ssa.gov/OACT/TR/ |
| `federal-budget-deficit` | Deficit and debt-to-GDP figures | CBO Budget & Economic Outlook, Jan + summer updates → https://www.cbo.gov/topics/budget |
| `ai-misinformation-trust` | "$10B+ in AI scam losses in 2024" | FTC Consumer Sentinel, annual → https://www.ftc.gov/news-events/data-visualizations/data-spotlight |
| `federal-workforce-restructuring` | Headcount reductions "over 2025"; litigation status | OPM FedScope + court dockets |
| `higher-ed-federal-funding` | Status of paused/restored research funding; litigation outcomes | Court dockets; NSF/NIH obligations data |
| `birthright-citizenship` | "cases proceeding to the Supreme Court" — **check whether this resolved.** A pending-case description that's actually been decided is the single most damaging kind of stale fact for a site whose brand is accuracy. | supremecourt.gov |
| `immigration-reform` | Border encounter figures; enforcement scale | CBP monthly → https://www.cbp.gov/newsroom/stats |
| `venezuela-regime-change` | Post-transition status | Reuters/AP wire |
| `greenland-territorial-expansion` | Diplomatic status | Reuters/AP wire |

---

## Priority 3 — survey attributions

Roughly 20 issues carry `surveySource: "… (2024-2025)"`. These aren't wrong, but the
range reads as neglect on a site that stamps "Last updated" on the Issues page. When
you refresh an issue, bump its range to `(2025-2026)` — and only claim the year you
actually checked.

---

## Facts that need no maintenance

Leave these alone — they don't decay:

- 14th Amendment text and *Wong Kim Ark* (`birthright-citizenship`)
- *SFFA v. Harvard* (2023) holding (`higher-ed-federal-funding`)
- Historical baselines: 1998 manufacturing peak, 1993 crime peak, 1957 zoning dates
- Structural facts: 435 House seats, six-year Senate terms

---

## Suggested workflow

1. Work Priority 1 top to bottom — six issues, maybe 30 minutes with the links above.
2. As you touch each fact, add `verifiedOn: "2026-08-22"` and `dataYear: "2025"`.
3. Add `lastReviewed` to the issue object.
4. Bump `LAST_UPDATED` in `app/issues/page.tsx`.
5. Anything you materially revise → add an entry to `CHANGED_MINDS` in
   `lib/site-content.ts`. That's what the new *Where We Changed Our Minds* page is for,
   and it turns a maintenance chore into your most credible content.

Once `verifiedOn` is populated across the corpus, surfacing "verified August 2026" on
each issue page is a small change — and it's a claim almost no comparable site can make.
