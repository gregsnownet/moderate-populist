// lib/site-content.ts
// Site-wide editorial content for the redesign. All values, scripts, lists.

import type { LucideIcon } from "lucide-react";
import {
  Shield, Building2, Handshake, Flag, TrendingUp, Sprout, Users,
  Megaphone, Stethoscope, Coins, MapPin, GraduationCap, Sparkles,
  Check, Scale, Bookmark, Mail, Plus,
} from "lucide-react";

export type IconKey =
  | "Shield" | "Building" | "Handshake" | "Flag" | "Chart" | "Sprout"
  | "Users" | "Megaphone" | "Stethoscope" | "Coins" | "MapPin"
  | "GraduationCap" | "Sparkle" | "Check" | "Scales" | "Bookmark"
  | "Mail" | "Plus";

export const ICONS: Record<IconKey, LucideIcon> = {
  Shield, Building: Building2, Handshake, Flag, Chart: TrendingUp,
  Sprout, Users, Megaphone, Stethoscope, Coins, MapPin,
  GraduationCap, Sparkle: Sparkles, Check, Scales: Scale,
  Bookmark, Mail, Plus,
};

/* Eight commitments */
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

/* 4 Cs */
export const FOUR_CS = [
  { letter: "C₁", title: "Communication", body: "Listen to understand, not to respond. Ask questions before you object. Steelman the other side first." },
  { letter: "C₂", title: "Collaboration", body: "Build coalitions across divides. Find allies where you can. Democracy is teamwork." },
  { letter: "C₃", title: "Compromise",    body: "Give ground without giving up principles. Half a loaf beats stalemate. Progress over purity." },
  { letter: "C₄", title: "Make Your Case", body: "Persuade with evidence and values. Appeal to shared interests. Win hearts, not just arguments." },
];

/* Civic ladder */
export const CIVIC_ACTIONS = [
  { time: "15 min",  title: "Call your representative",            body: "Calls are logged and reported up. Find the right number, share your view in 90 seconds. Repeat next month." },
  { time: "1 hour",  title: "Attend a local meeting",              body: "School board, planning, city council. 3% of citizens show up — your voice carries unusual weight." },
  { time: "1 day",   title: "Volunteer for an issue, not a party", body: "Pick something you care about. Show up where the work happens. Build trust over time." },
  { time: "Always",  title: "Talk to neighbors who disagree",      body: "Curiosity, not contempt. Disagreement is the price of admission to a free country. Stay in." },
];

/* Talking-points conversation scripts (11 topics) */
export const TALKING_SCRIPTS = [
  { topic: "Healthcare",          when: "When someone says costs are out of control…",              shared: "Costs are crushing. Prescriptions cost more here than anywhere else. Pre-existing conditions need protection.",                                bridge: "We disagree on the mechanism — public option, market reform, both — but the shared concern is real. Start there." },
  { topic: "Immigration",         when: "When someone says the system is broken…",                  shared: "It is broken. Borders should be secure. Dreamers deserve a path. Asylum needs to mean something.",                                            bridge: "Most Americans want secure AND humane. The fight is over what comes first, not whether both matter." },
  { topic: "Guns",                when: "When the conversation gets heated…",                        shared: "Universal background checks and red-flag laws pull 80%+ support across both parties. So does the Second Amendment.",                       bridge: "Almost no one wants no rules or no rights. Find the rule we already share before debating new ones." },
  { topic: "Climate",             when: "When someone dismisses the problem or panics about it…",   shared: "Clean air, clean water, energy independence — all popular across the aisle. So is paying less at the pump.",                              bridge: "Disagreement is about pace and mechanism, not whether we want a livable planet and an affordable life." },
  { topic: "Identity",            when: "When 'us vs. them' takes over…",                            shared: "Most Americans believe in equal treatment, individual responsibility, and human dignity. From every direction.",                          bridge: "Reject the caricature. Your neighbor is not the worst version of their party. Neither are you." },
  { topic: "Trust in elections",  when: "When the system itself is on the table…",                   shared: "Free and fair elections, peaceful transfer of power, transparent counts. Those are not partisan goals.",                                bridge: "Concerns about integrity exist on both sides. Honor them. Then look at the evidence together." },
  { topic: "Education",           when: "When the conversation turns to schools or curriculum…",    shared: "Public schools should work. Teachers deserve real pay and real respect. Parents deserve a seat at the table.",                              bridge: "We agree more about outcomes than methods. Start with: 'What does success look like for our kids?'" },
  { topic: "Affordability",       when: "When someone says they can't afford their life anymore…",  shared: "Wages aren't keeping up with housing, groceries, childcare, healthcare. Most Americans feel this.",                                       bridge: "Don't argue about whose fault it is first. Agree it's broken. Then talk about what one thing would help most." },
  { topic: "Welfare & entitlements", when: "When 'lazy' or 'stingy' enters the conversation…",       shared: "Most Americans want a safety net that catches people, dignity that respects people, and incentives that don't trap people.",            bridge: "The fight isn't usually about whether to help — it's about how, and to whom. Find the shared 'who'." },
  { topic: "Foreign policy",      when: "When isolationism and intervention collide…",               shared: "Americans don't want endless wars. Americans also don't want allies to think we won't show up. Both are real concerns.",                bridge: "Move from labels (hawk/dove) to specific questions: 'What's worth fighting for? What isn't?'" },
  { topic: "Free speech",         when: "When 'cancel' or 'misinformation' get thrown around…",      shared: "Free speech is constitutional, foundational, and worth defending. So is the right to criticize speech you disagree with.",                bridge: "Distinguish what's legal, what's wise, and what's polite. Most arguments collapse three different conversations into one." },
];

/* Resources / orgs */
export const RESOURCES = [
  { cat: "Polling", items: [
    { name: "Pew Research Center",            desc: "American Trends Panel, public opinion across 30+ years",       url: "https://www.pewresearch.org" },
    { name: "Gallup",                          desc: "Daily, weekly, and annual surveys on policy and politics",     url: "https://news.gallup.com" },
    { name: "KFF (Kaiser Family Foundation)", desc: "Definitive health policy polling",                              url: "https://www.kff.org" },
  ]},
  { cat: "Policy analysis", items: [
    { name: "Brookings Institution",     desc: "Center-left, non-partisan policy research", url: "https://www.brookings.edu" },
    { name: "American Enterprise Institute", desc: "Center-right policy research",          url: "https://www.aei.org" },
    { name: "Niskanen Center",           desc: "Cross-partisan policy lab",                 url: "https://www.niskanencenter.org" },
  ]},
  { cat: "Cross-partisan dialogue", items: [
    { name: "Braver Angels",  desc: "Workshops for citizens across the political divide", url: "https://braverangels.org" },
    { name: "More in Common", desc: "Research on the 'exhausted majority'",               url: "https://www.moreincommon.com" },
    { name: "Citizen Connect", desc: "Curated directory of bridging organizations",        url: "https://citizenconnect.us" },
  ]},
  { cat: "Government data", items: [
    { name: "Congress.gov", desc: "Bills, votes, member records — primary sources", url: "https://www.congress.gov" },
    { name: "Census Bureau", desc: "American Community Survey and more",            url: "https://www.census.gov" },
    { name: "FRED (Federal Reserve)", desc: "Economic data, charts, and time series", url: "https://fred.stlouisfed.org" },
  ]},
];

/* Standards (About) */
export const STANDARDS = [
  { icon: "Shield" as IconKey,  title: "No corporate donors",   body: "Reader-supported. No advertisers, no lobbies, no hidden funders. Independence is not negotiable." },
  { icon: "Sparkle" as IconKey, title: "No tracking, no algorithm", body: "We don't profile you. We don't optimize for outrage. Your time is yours." },
  { icon: "Check" as IconKey,   title: "Corrections in public", body: "When we get something wrong, we say so. Footnotes, sources, and edits stay visible." },
  { icon: "Scales" as IconKey,  title: "Steelman both sides",   body: "We present the strongest version of each perspective. If we can't, we won't pretend we have." },
];

/* Books (Resources) */
export const BOOKS = [
  { title: "The Righteous Mind",          author: "Jonathan Haidt",          year: 2012, blurb: "Why good people are divided by politics and religion — and how moral foundations explain the disagreement.",      buy: "https://bookshop.org/p/books/the-righteous-mind-why-good-people-are-divided-by-politics-and-religion-jonathan-haidt/8627316" },
  { title: "A Time to Build",             author: "Yuval Levin",             year: 2020, blurb: "Why our institutions failed and how to rebuild them. Reading list staple for anyone who cares about civic repair.", buy: "https://bookshop.org/p/books/a-time-to-build-from-family-and-community-to-congress-and-the-campus-how-recommitting-to-our-institutions-can-revive-the-american-dream-yuval-levin/8627417" },
  { title: "Love Your Enemies",           author: "Arthur C. Brooks",        year: 2019, blurb: "A practical case for treating people you disagree with as people, not problems. Methodical and humane.",            buy: "https://bookshop.org/p/books/love-your-enemies-how-decent-people-can-save-america-from-the-culture-of-contempt-arthur-c-brooks/9244569" },
  { title: "Why We're Polarized",         author: "Ezra Klein",              year: 2020, blurb: "The structural and psychological forces pulling the country apart — clearly explained, soberly argued.",            buy: "https://bookshop.org/p/books/why-we-re-polarized-ezra-klein/16275944" },
  { title: "The Vanishing American Adult", author: "Ben Sasse",              year: 2017, blurb: "Civic decline as a generational problem. A center-right case for the habits of citizenship.",                          buy: "https://bookshop.org/p/books/the-vanishing-american-adult-our-coming-of-age-crisis-and-how-to-rebuild-a-culture-of-self-reliance-ben-sasse/9244633" },
  { title: "Strangers in Their Own Land", author: "Arlie Russell Hochschild", year: 2016, blurb: "A sociologist crosses the aisle. The book changed how a lot of liberals understand rural conservative grievance.",  buy: "https://bookshop.org/p/books/strangers-in-their-own-land-anger-and-mourning-on-the-american-right-arlie-russell-hochschild/9244690" },
];

/* Newsletters & podcasts */
export const MEDIA_DIET = [
  { kind: "Newsletter", name: "Tangle",                 by: "Isaac Saul",          desc: "Daily summary of one news story, told from the left and the right. The closest thing to required reading.", url: "https://www.readtangle.com" },
  { kind: "Newsletter", name: "Persuasion",             by: "Yascha Mounk",        desc: "Cross-partisan essays on liberalism, free speech, and democratic resilience.",                              url: "https://www.persuasion.community" },
  { kind: "Newsletter", name: "Slow Boring",            by: "Matt Yglesias",       desc: "Center-left policy wonk who often disagrees with his own side. Substack of record for evidence-first liberals.", url: "https://www.slowboring.com" },
  { kind: "Newsletter", name: "The Bulwark",            by: "Sarah Longwell et al.", desc: "Conservatives who broke with the GOP over institutional norms. Sharp, gracious, indispensable.",          url: "https://www.thebulwark.com" },
  { kind: "Podcast",    name: "The Ezra Klein Show",    by: "Ezra Klein, NYT",     desc: "Long-form interviews that take ideas — and ideological opponents — seriously.",                           url: "https://www.nytimes.com/column/ezra-klein-podcast" },
  { kind: "Podcast",    name: "Honestly",               by: "Bari Weiss",          desc: "Center / heterodox interviews that platform thinkers across the spectrum.",                                 url: "https://www.thefp.com/podcast" },
  { kind: "Podcast",    name: "The Argument",           by: "Jane Coaston",        desc: "A debate-format podcast structured around disagreement done well.",                                       url: "https://podcasts.apple.com/us/podcast/the-argument-from-jane-coaston/id1438424119" },
];

/* Balanced news (read each side) */
export const BALANCED_NEWS = [
  { lean: "Center-left",  items: [
    { name: "The Atlantic",                  desc: "Long-form journalism, ideologically broad bench",                                              url: "https://www.theatlantic.com" },
    { name: "The New York Times Opinion",    desc: "House voice of the educated left; reliable but skim conservative columnists",                  url: "https://www.nytimes.com/section/opinion" },
    { name: "Vox",                           desc: "Explanatory journalism with a progressive lens",                                                url: "https://www.vox.com" },
  ]},
  { lean: "Center",       items: [
    { name: "The Dispatch",                  desc: "Reported journalism + commentary from never-Trump conservatives. Quality of evidence is the gold standard.", url: "https://thedispatch.com" },
    { name: "Reuters / AP",                  desc: "Wire services. Boring, accurate, foundational.",                                                url: "https://www.reuters.com" },
    { name: "The Christian Science Monitor", desc: "Famously even-handed, century-old reporting.",                                                  url: "https://www.csmonitor.com" },
  ]},
  { lean: "Center-right", items: [
    { name: "The Free Press",                desc: "Heterodox investigations and essays. Sometimes contrarian, often valuable.",                    url: "https://www.thefp.com" },
    { name: "National Review",               desc: "House voice of intellectual conservatism. Read the magazine, not the website tabloid stuff.",   url: "https://www.nationalreview.com" },
    { name: "The Wall Street Journal Opinion", desc: "Center-right policy and business commentary.",                                                 url: "https://www.wsj.com/news/opinion" },
  ]},
];

/* Glossary */
export const GLOSSARY = [
  { term: "Populism",             def: "A political style claiming to represent 'the people' against entrenched elites. Can come from the left or the right." },
  { term: "Moderate",             def: "Not 'in the middle of every issue.' A moderate prioritizes evidence over ideology and is willing to change positions when the data does." },
  { term: "Classical liberalism", def: "The pre-20th-century tradition of individual rights, free speech, free markets, and limited government. Rooted in Locke, Mill, and the U.S. founding." },
  { term: "Communitarianism",     def: "The view that strong families, neighborhoods, and civic institutions are essential to a free society — that liberty needs roots." },
  { term: "Steelman",             def: "Stating the strongest possible version of an opposing argument before you respond to it. The opposite of a strawman." },
  { term: "Common ground",        def: "A specific, plainly-worded claim that majorities of both parties endorse. Not a vague feeling — a measurable overlap." },
];

/* FAQ */
export const FAQ = [
  { q: "Are you a Democrat or a Republican?",
    a: "Neither. The Moderate Populist is independent and non-partisan. We hold majority-supported positions that don't fit neatly into either party's platform." },
  { q: "Who funds this site?",
    a: "Readers. No corporate donors, no political committees, no foundation grants. If you'd like to support the work, the Contribute section has a way." },
  { q: "Why do you use AI to help write the content?",
    a: "Because one person can't research every issue from primary sources alone. We use a large language model to help draft and research, but every claim is verified against the sources cited and edited by a human. AI assists; humans decide." },
  { q: "How do you decide what issues to cover?",
    a: "Three filters: (1) does it matter to ordinary Americans, (2) is there genuine common ground to map, (3) are reputable sources available? We avoid issues where the disagreement is mostly manufactured." },
  { q: "How do you calculate the 'common ground' percentage?",
    a: "We aggregate at least three independent polls per issue, weighted by sample size and recency, and identify the percentage of Americans who agree with a specific, plainly-worded statement across party lines. Methodology is on the Resources page." },
  { q: "What's your editorial process for corrections?",
    a: "Public. When we get something wrong, we say so on the page — original wording struck through, correction noted, sources updated. No quiet edits." },
  { q: "Can I submit an issue, topic, or correction?",
    a: "Yes. The Contribute section below (and the form on the Resources page) is for exactly this. We read everything readers send." },
  { q: "Do you collect my data?",
    a: "No. No tracking pixels, no analytics that profile you, no ads. If you subscribe to the newsletter, we keep your email to send the newsletter — nothing else." },
];

/* Bridging phrases (Talking Points) */
export const BRIDGING_PHRASES = [
  { tag: "Opener",            text: "Help me understand what you mean by that." },
  { tag: "Opener",            text: "What's the strongest version of your argument?" },
  { tag: "Opener",            text: "What's something the other side gets right?" },
  { tag: "Mid-conversation",  text: "I hadn't thought about it that way. Tell me more." },
  { tag: "Mid-conversation",  text: "Where do you think we actually agree?" },
  { tag: "Mid-conversation",  text: "What would change your mind?" },
  { tag: "Tense moment",      text: "I think we want the same thing but disagree on the path. Is that fair?" },
  { tag: "Tense moment",      text: "Can we agree to disagree on this one and still get coffee?" },
  { tag: "Close",             text: "Thanks for thinking out loud with me. I learned something." },
];

/* Walk-away signs */
export const WALK_AWAY_SIGNS = [
  "They keep moving the goalposts when you concede a point.",
  "They quote you back something you didn't say, and won't accept the correction.",
  "Every example you give is countered with 'whataboutism' from the other side.",
  "They escalate to insults or accusations of bad character.",
  "You realize you're being filmed or recorded without consent.",
  "Continuing the conversation will cost you the relationship and change nothing.",
];

/* Solutions tools (Find your rep) */
export const REP_TOOLS = [
  { name: "5 Calls",            desc: "Picks one current issue, gives you a script, dials your three reps.",                     url: "https://5calls.org",                            time: "5 min" },
  { name: "Congress.gov",       desc: "Find your House and Senate members by ZIP code. The primary source.",                     url: "https://www.congress.gov/members/find-your-member", time: "1 min" },
  { name: "GovTrack",           desc: "Track bills, votes, and your reps' positions over time.",                                  url: "https://www.govtrack.us",                       time: "10 min" },
  { name: "BoardDocs / local",  desc: "Most school boards, city councils, and zoning boards publish agendas weekly. Search '[your town] board docs'.", url: "https://www.boarddocs.com",       time: "5 min" },
];

/* "Don't do" list */
export const DONT_DO = [
  { num: "01", title: "Don't doom-scroll.",         body: "Outrage feeds engagement metrics, not democracy. If a post made you angry and you have no plan to act on it, close the tab." },
  { num: "02", title: "Don't perform.",             body: "Reposting a slogan doesn't move policy. A phone call does. A meeting does. A neighbor's heart does." },
  { num: "03", title: "Don't lecture your family.", body: "Holiday politics rarely flip minds and reliably break relationships. Save it for the right moment, in private." },
  { num: "04", title: "Don't only consume your side.", body: "If you can't summarize the other side's best argument, you don't understand it yet. And until you do, you can't change it." },
  { num: "05", title: "Don't wait for permission.", body: "Nobody is coming to organize for you. The most influential citizens are usually just the ones who showed up first." },
];

/* Templates */
export const TEMPLATES = [
  {
    kind: "Phone script · 90 seconds",
    title: "Calling your Congressperson",
    body: `Hi, my name is [YOUR NAME] and I'm a constituent from [YOUR ZIP CODE]. I'm calling to ask Rep./Sen. [NAME] to [SUPPORT / OPPOSE] [BILL NAME OR ISSUE]. This matters to me because [ONE SENTENCE — personal, specific]. Thank you for taking the message.`,
  },
  {
    kind: "Email template · 5 minutes",
    title: "Writing a school board",
    body: `Dear [BOARD CHAIR NAME] and members of the [TOWN] School Board,

I'm writing as a [PARENT / RESIDENT / TAXPAYER] regarding the agenda item on [TOPIC] scheduled for the [DATE] meeting.

[ONE CLEAR PARAGRAPH STATING YOUR POSITION AND ONE REASON.]

I'd appreciate the board considering [SPECIFIC ASK]. Thank you for your service.

[YOUR NAME]
[ADDRESS — required for public comment]`,
  },
];


/* ═══════════════════════════════════════════════════════════════════
   MIDTERMS 2026 — hub content
   ═══════════════════════════════════════════════════════════════════ */

export const ELECTION_DAY = "2026-11-03";

export const BALLOT_STAKES = [
  { num: "435", label: "House seats", sub: "Every voting seat. All of them. Every two years." },
  { num: "35",  label: "Senate seats", sub: "33 in regular cycle plus 2 special elections (OH, FL)." },
  { num: "39",  label: "Governorships", sub: "36 states plus 3 territories." },
  { num: "∞",   label: "State & local races", sub: "Legislatures, AGs, school boards, judges, ballot measures." },
];

export const MIDTERM_DATES = [
  { date: "Sept–Oct 2026", title: "Voter registration deadlines",     note: "Varies by state. Most fall 15–30 days before Election Day. Some states allow same-day." },
  { date: "Sept–Oct 2026", title: "Mail ballot request deadlines",    note: "Earlier than you think. Request early; don't rely on the last week." },
  { date: "Oct 2026",      title: "Early voting opens (most states)", note: "Shorter lines, more time to research your down-ballot races." },
  { date: "Nov 3, 2026",   title: "Election Day",                     note: "Polls close between 7pm and 9pm in most states. If you're in line at closing, stay — you can vote." },
  { date: "Nov–Dec 2026",  title: "Certification",                    note: "Counting and certification take time. Slow results are normal, not evidence of anything." },
  { date: "Jan 3, 2027",   title: "120th Congress convenes",          note: "Whoever wins is seated. New terms begin." },
];

export const VOTER_CHECKLIST = [
  { step: "01", title: "Check your registration",   body: "Registrations get purged more often than people expect — after a move, a name change, or a few skipped elections. Check even if you're sure.", cta: "Check at vote.org", url: "https://www.vote.org/am-i-registered-to-vote/" },
  { step: "02", title: "Find your polling place",   body: "Locations change between cycles. Confirm yours the week before, not the morning of.", cta: "Find your location", url: "https://www.vote.org/polling-place-locator/" },
  { step: "03", title: "Read your whole ballot early", body: "Sample ballots are published in advance. The down-ballot races — judges, county offices, measures — affect your daily life more than the top of the ticket.", cta: "See your sample ballot", url: "https://ballotpedia.org/Sample_Ballot_Lookup" },
  { step: "04", title: "Make a plan",               body: "Voters who pick a day, a time, and a route show up at dramatically higher rates than voters who just intend to. Write it down.", cta: "Plan your vote", url: "https://www.vote.org/" },
];

export const CANDIDATE_QUESTIONS = [
  { num: "01", q: "Name a time you disagreed with your own party.",              why: "Separates governing types from performance types faster than any other question." },
  { num: "02", q: "What's the strongest argument against your position on ___?", why: "If they can't steelman the other side, they haven't thought it through." },
  { num: "03", q: "What would you trade to get ___ passed?",                     why: "Legislating is trading. Candidates who won't trade won't legislate." },
  { num: "04", q: "Who in the other party would you work with, and on what?",    why: "A specific name and a specific bill. Vague goodwill doesn't count." },
  { num: "05", q: "What did you get wrong in the last two years?",               why: "Everyone gets things wrong. Only some people can say so." },
  { num: "06", q: "Where does your funding come from?",                          why: "Not a gotcha. A basic question every voter is owed an answer to." },
  { num: "07", q: "What's one thing government does well that you'd protect?",   why: "Tests whether they have a theory of government or just a grievance." },
  { num: "08", q: "How will you vote if your party leadership asks you to vote the other way?", why: "The honest answer is 'depends' — followed by what it depends on." },
  { num: "09", q: "What's your position on ___ that would surprise my neighbors?", why: "Invites specificity instead of a stump speech." },
  { num: "10", q: "How do I hold you accountable in two years?",                 why: "A good candidate has an answer. A great one gives you a metric." },
];

export const MIDTERM_MYTHS = [
  { myth: "Midterms don't matter as much as presidential years.",
    truth: "Midterms decide who writes and blocks legislation for the next two years, plus most governorships and state legislatures — which draw district maps and set election rules." },
  { myth: "My one vote won't change anything.",
    truth: "Midterm turnout runs far below presidential years, and local races are routinely decided by dozens of votes. Your vote is worth more in a midterm, not less." },
  { myth: "Slow results mean something went wrong.",
    truth: "Counting mail and provisional ballots takes days by design and by law. Speed was never the standard; accuracy is." },
  { myth: "Both parties are the same, so why bother.",
    truth: "On the specific bills that reach a floor vote, they demonstrably aren't. Read the votes, not the branding." },
];

/* ═══════════════════════════════════════════════════════════════════
   WHERE WE CHANGED OUR MINDS
   Running log of revised positions. Add entries as the evidence moves.
   ═══════════════════════════════════════════════════════════════════ */

export const CHANGED_MINDS = [
  {
    date: "March 2026",
    topic: "Crime & public safety",
    was: "We framed the post-2020 crime spike as a durable trend and wrote about it as an ongoing emergency.",
    now: "Violent crime fell sharply through 2023 and 2024, and the framing was wrong. We rewrote the issue page to lead with the decline and kept the original wording visible in the footnotes.",
    trigger: "FBI and CDC data revisions, plus reader mail pointing out we'd cited only peak-year figures.",
  },
  {
    date: "January 2026",
    topic: "AI governance",
    was: "We treated federal preemption of state AI law as obviously preferable to a patchwork.",
    now: "State laws turned out to be the only meaningful guardrails in force, and several were more careful than the federal proposals. We now argue the patchwork is costly but currently load-bearing.",
    trigger: "Reading the actual texts of the California and Colorado statutes rather than the summaries.",
  },
  {
    date: "November 2025",
    topic: "Common-ground methodology",
    was: "We reported a single common-ground percentage per issue without showing the disagreement.",
    now: "That was flattering to our thesis and unfair to readers. Every issue now reports the gap alongside the overlap, and the methodology is published.",
    trigger: "A reader asked how we'd calculated a number and we didn't have a good answer.",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   RESEARCHING NEXT — pipeline (keep current; stale dates read as neglect)
   ═══════════════════════════════════════════════════════════════════ */

export const UPCOMING_ISSUES = [
  { title: "Housing Supply & Zoning Reform", eta: "Sept 2026", note: "Drafting — the supply-side fight, where the real bipartisan movement is" },
  { title: "Childcare & Elder Care Costs",   eta: "Sept 2026", note: "Polling aggregation in progress" },
  { title: "Energy Abundance & the Grid",    eta: "Oct 2026",  note: "Source review — datacenter demand scrambles the usual coalitions" },
  { title: "The Local News Collapse",        eta: "Oct 2026",  note: "Reader-requested" },
  { title: "Term Limits & Congressional Reform", eta: "Nov 2026", note: "Queued — polls above 80%, rarely covered seriously" },
];
