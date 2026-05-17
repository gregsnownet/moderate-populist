// lib/site-content.ts
// Site-wide editorial content for the redesign. All values, scripts, lists.

import type { LucideIcon } from "lucide-react";
import {
  Shield, Building2, Handshake, Flag, TrendingUp, Sprout, Users,
  Megaphone, Stethoscope, Coins, MapPin, GraduationCap, Sparkles,
  Check, Scale,
} from "lucide-react";

export type IconKey =
  | "Shield" | "Building" | "Handshake" | "Flag" | "Chart" | "Sprout"
  | "Users" | "Megaphone" | "Stethoscope" | "Coins" | "MapPin"
  | "GraduationCap" | "Sparkle" | "Check" | "Scales";

export const ICONS: Record<IconKey, LucideIcon> = {
  Shield, Building: Building2, Handshake, Flag, Chart: TrendingUp,
  Sprout, Users, Megaphone, Stethoscope, Coins, MapPin,
  GraduationCap, Sparkle: Sparkles, Check, Scales: Scale,
};

/* ─── Eight commitments (About page) ─── */
export const VALUES = [
  { num: "I",    icon: "Shield" as IconKey,     title: "Secure & Humane Borders",   body: "A nation has the right to control who enters. Secure and humane are not opposites." },
  { num: "II",   icon: "Building" as IconKey,   title: "Livable Cities",            body: "Every community deserves to be safe, clean, well-maintained. Public safety is not partisan." },
  { num: "III",  icon: "Handshake" as IconKey,  title: "No Racism, From Anyone",    body: "Judging people by skin color is wrong. Period. From any direction." },
  { num: "IV",   icon: "Flag" as IconKey,       title: "Individual Freedom",        body: "Personal liberty is foundational. Government should protect rights, not direct lives." },
  { num: "V",    icon: "Chart" as IconKey,      title: "Fair Free Markets",         body: "Economic freedom with fair rules creates prosperity. Not crony capitalism." },
  { num: "VI",   icon: "Sprout" as IconKey,     title: "Human Dignity",             body: "Every person has inherent worth. Work, family, community build purpose." },
  { num: "VII",  icon: "Users" as IconKey,      title: "Treat People as Individuals", body: "Judge by character, not group membership. Identity politics divides us." },
  { num: "VIII", icon: "Megaphone" as IconKey,  title: "Disagree With Respect",     body: "Vigorous debate, dignified neighbors. Contempt is the corrosive, not difference." },
];

/* ─── 4 Cs of engagement (Solutions page) ─── */
export const FOUR_CS = [
  { letter: "C₁", title: "Communication", body: "Listen to understand, not to respond. Ask questions before you object. Steelman the other side first." },
  { letter: "C₂", title: "Collaboration", body: "Build coalitions across divides. Find allies where you can. Democracy is teamwork." },
  { letter: "C₃", title: "Compromise",    body: "Give ground without giving up principles. Half a loaf beats stalemate. Progress over purity." },
  { letter: "C₄", title: "Make Your Case", body: "Persuade with evidence and values. Appeal to shared interests. Win hearts, not just arguments." },
];

/* ─── Civic action ladder (Solutions page) ─── */
export const CIVIC_ACTIONS = [
  { time: "15 min",  title: "Call your representative",          body: "Calls are logged and reported up. Find the right number, share your view in 90 seconds. Repeat next month." },
  { time: "1 hour",  title: "Attend a local meeting",            body: "School board, planning, city council. 3% of citizens show up — your voice carries unusual weight." },
  { time: "1 day",   title: "Volunteer for an issue, not a party", body: "Pick something you care about. Show up where the work happens. Build trust over time." },
  { time: "Always",  title: "Talk to neighbors who disagree",    body: "Curiosity, not contempt. Disagreement is the price of admission to a free country. Stay in." },
];

/* ─── Conversation scripts (Talking Points page) ─── */
export const TALKING_SCRIPTS = [
  { topic: "Healthcare",        when: "When someone says costs are out of control…",  shared: "Costs are crushing. Prescriptions cost more here than anywhere else. Pre-existing conditions need protection.", bridge: "We disagree on the mechanism — public option, market reform, both — but the shared concern is real. Start there." },
  { topic: "Immigration",       when: "When someone says the system is broken…",      shared: "It is broken. Borders should be secure. Dreamers deserve a path. Asylum needs to mean something.",                                bridge: "Most Americans want secure AND humane. The fight is over what comes first, not whether both matter." },
  { topic: "Guns",              when: "When the conversation gets heated…",            shared: "Universal background checks and red-flag laws pull 80%+ support across both parties. So does the Second Amendment.",         bridge: "Almost no one wants no rules or no rights. Find the rule we already share before debating new ones." },
  { topic: "Climate",           when: "When someone dismisses the problem or panics about it…", shared: "Clean air, clean water, energy independence — all popular across the aisle. So is paying less at the pump.",       bridge: "Disagreement is about pace and mechanism, not whether we want a livable planet and an affordable life." },
  { topic: "Identity",          when: "When 'us vs. them' takes over…",                shared: "Most Americans believe in equal treatment, individual responsibility, and human dignity. From every direction.",             bridge: "Reject the caricature. Your neighbor is not the worst version of their party. Neither are you." },
  { topic: "Trust in elections", when: "When the system itself is on the table…",      shared: "Free and fair elections, peaceful transfer of power, transparent counts. Those are not partisan goals.",                     bridge: "Concerns about integrity exist on both sides. Honor them. Then look at the evidence together." },
];

/* ─── Resources / reading list (Resources page) ─── */
export const RESOURCES = [
  { cat: "Polling", items: [
    { name: "Pew Research Center",       desc: "American Trends Panel, public opinion across 30+ years",       url: "https://www.pewresearch.org" },
    { name: "Gallup",                    desc: "Daily, weekly, and annual surveys on policy and politics",     url: "https://news.gallup.com" },
    { name: "KFF (Kaiser Family Foundation)", desc: "Definitive health policy polling",                          url: "https://www.kff.org" },
  ]},
  { cat: "Policy analysis", items: [
    { name: "Brookings Institution",     desc: "Center-left, non-partisan policy research",                    url: "https://www.brookings.edu" },
    { name: "American Enterprise Institute", desc: "Center-right policy research",                              url: "https://www.aei.org" },
    { name: "Niskanen Center",           desc: "Cross-partisan policy lab",                                    url: "https://www.niskanencenter.org" },
  ]},
  { cat: "Cross-partisan dialogue", items: [
    { name: "Braver Angels",             desc: "Workshops for citizens across the political divide",           url: "https://braverangels.org" },
    { name: "More in Common",            desc: "Research on the 'exhausted majority'",                         url: "https://www.moreincommon.com" },
    { name: "Citizen Connect",           desc: "Curated directory of bridging organizations",                  url: "https://citizenconnect.us" },
  ]},
  { cat: "Government data", items: [
    { name: "Congress.gov",              desc: "Bills, votes, member records — primary sources",               url: "https://www.congress.gov" },
    { name: "Census Bureau",             desc: "American Community Survey and more",                           url: "https://www.census.gov" },
    { name: "FRED (Federal Reserve)",    desc: "Economic data, charts, and time series",                       url: "https://fred.stlouisfed.org" },
  ]},
];

/* ─── Editorial standards (About page) ─── */
export const STANDARDS = [
  { icon: "Shield" as IconKey,  title: "No corporate donors",   body: "Reader-supported. No advertisers, no lobbies, no hidden funders. Independence is not negotiable." },
  { icon: "Sparkle" as IconKey, title: "No tracking, no algorithm", body: "We don't profile you. We don't optimize for outrage. Your time is yours." },
  { icon: "Check" as IconKey,   title: "Corrections in public", body: "When we get something wrong, we say so. Footnotes, sources, and edits stay visible." },
  { icon: "Scales" as IconKey,  title: "Steelman both sides",   body: "We present the strongest version of each perspective. If we can't, we won't pretend we have." },
];
