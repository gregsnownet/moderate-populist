// lib/stance-questions.ts
// Questions powering the "Where Do You Stand" interactive widget on the home page.

export type StanceQuestion = {
  id: string;
  topic: string;
  prompt: string;
  left: string;
  right: string;
  distribution: [number, number, number]; // % of Americans in each thirds-bucket
  commonGround: string;
};

export const STANCE_QUESTIONS: StanceQuestion[] = [
  {
    id: "healthcare",
    topic: "Healthcare",
    prompt: "On healthcare, government should…",
    left: "Guarantee coverage as a right",
    right: "Stay out — let markets compete",
    distribution: [38, 41, 21],
    commonGround:
      "Costs are too high. Prescription prices need to come down. Pre-existing conditions deserve protection.",
  },
  {
    id: "immigration",
    topic: "Immigration",
    prompt: "On immigration, the priority should be…",
    left: "Compassion & pathways to legal status",
    right: "Enforcement & secure borders first",
    distribution: [29, 44, 27],
    commonGround:
      "The system is broken. Borders should be secure AND immigration policy humane. Dreamers deserve a path.",
  },
  {
    id: "economy",
    topic: "Economy",
    prompt: "On the economy, the bigger problem is…",
    left: "Corporate power & inequality",
    right: "Over-regulation & taxes",
    distribution: [34, 39, 27],
    commonGround:
      "Working families are squeezed. Small business should thrive. Wall Street shouldn't write its own rules.",
  },
  {
    id: "climate",
    topic: "Climate",
    prompt: "On climate change, the smarter path is…",
    left: "Strong rules to cut emissions now",
    right: "Let markets & innovation lead",
    distribution: [36, 42, 22],
    commonGround:
      "The climate is changing. Clean air, clean water, and energy independence are not partisan goals.",
  },
  {
    id: "education",
    topic: "Education",
    prompt: "On public schools, the priority is…",
    left: "More funding & better teacher pay",
    right: "More choice & parental authority",
    distribution: [33, 40, 27],
    commonGround:
      "Public schools should work. Teachers deserve respect. Parents deserve a real seat at the table.",
  },
  {
    id: "guns",
    topic: "Firearms",
    prompt: "On firearms, the right balance is…",
    left: "Stricter checks & sensible limits",
    right: "Strong Second Amendment protections",
    distribution: [40, 38, 22],
    commonGround:
      "Universal background checks and keeping guns from people in crisis enjoy 80%+ support across parties.",
  },
  {
    id: "speech",
    topic: "Civic Dialogue",
    prompt: "When neighbors disagree about politics…",
    left: "Listen first, persuade gently",
    right: "Stand firm on principle",
    distribution: [42, 45, 13],
    commonGround:
      "Disagreement is healthy. Contempt is not. Most Americans want to be heard, not lectured.",
  },
  {
    id: "trust",
    topic: "Institutions",
    prompt: "American democracy works best when we…",
    left: "Expand who participates",
    right: "Protect what's worked for 250 years",
    distribution: [33, 47, 20],
    commonGround:
      "Checks and balances matter. Free press, fair elections, peaceful transfers. These are not partisan.",
  },
];
