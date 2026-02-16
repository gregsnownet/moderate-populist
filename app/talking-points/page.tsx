'use client';

import { useState } from 'react';

interface TalkingPoint {
  id: string;
  topic: string;
  category: string;
  commonGround: string;
  leftPerspective: string;
  rightPerspective: string;
  bridgingQuestions: string[];
  productiveFraming: string;
}

const talkingPoints: TalkingPoint[] = [
  {
    id: 'immigration',
    topic: 'Immigration',
    category: 'Policy',
    commonGround: 'Most Americans agree we need secure borders AND a fair, functional immigration system that serves national interests.',
    leftPerspective: 'Immigration enriches our culture and economy. We need pathways to citizenship for dreamers and comprehensive reform that treats people humanely.',
    rightPerspective: 'Border security is national security. We need to enforce existing laws, secure the border first, then discuss reform through proper legal channels.',
    bridgingQuestions: [
      'What specific border security measures would make you more comfortable discussing immigration reform?',
      'How can we balance national security with treating people humanely?',
      'What do you think about merit-based immigration combined with humanitarian protections?'
    ],
    productiveFraming: 'Instead of: "Open borders vs. xenophobia" → Try: "How do we create a secure, orderly system that serves American interests while honoring our values?"'
  },
  {
    id: 'healthcare',
    topic: 'Healthcare',
    category: 'Policy',
    commonGround: 'Healthcare costs are too high, and Americans deserve access to quality care. The current system isn\'t working for most people.',
    leftPerspective: 'Healthcare is a human right. We need universal coverage or Medicare for All to ensure everyone gets care regardless of income.',
    rightPerspective: 'Free market competition lowers costs and improves quality. Government-run healthcare leads to rationing, long waits, and loss of choice.',
    bridgingQuestions: [
      'What if we focused first on transparency in pricing and reducing administrative waste?',
      'Could we agree on protecting pre-existing conditions while exploring different paths to coverage?',
      'What role do you see for both private innovation and public safety nets?'
    ],
    productiveFraming: 'Instead of: "Socialist takeover vs. letting people die" → Try: "What combination of market incentives and regulations will lower costs while improving care?"'
  },
  {
    id: 'climate',
    topic: 'Climate & Energy',
    category: 'Policy',
    commonGround: 'Clean air and water matter. Energy independence is strategic. American innovation can lead the world in new technologies.',
    leftPerspective: 'Climate change is an existential threat requiring immediate action. We need aggressive emission cuts and transition to renewable energy.',
    rightPerspective: 'Climate policies shouldn\'t destroy jobs or make America dependent on China. We need realistic, technology-driven solutions that maintain energy security.',
    bridgingQuestions: [
      'Can we agree that American energy independence and innovation are national priorities?',
      'What if we focused on nuclear power and carbon capture technology?',
      'How do we balance environmental protection with economic opportunity?'
    ],
    productiveFraming: 'Instead of: "Climate deniers vs. economy destroyers" → Try: "How can American innovation solve environmental challenges while creating jobs and maintaining competitiveness?"'
  },
  {
    id: 'economy',
    topic: 'Economy & Jobs',
    category: 'Policy',
    commonGround: 'Working families are struggling. Both parties claim to care about the middle class and economic opportunity.',
    leftPerspective: 'Inequality is skyrocketing. We need higher minimum wages, stronger unions, and wealthy/corporations paying their fair share in taxes.',
    rightPerspective: 'High taxes and regulations kill jobs. We need lower taxes, less red tape, and policies that encourage business growth and job creation.',
    bridgingQuestions: [
      'What if we focused on reducing barriers to starting small businesses?',
      'Could we agree that crony capitalism and corporate welfare are problems?',
      'How do we boost wages without hurting small businesses?'
    ],
    productiveFraming: 'Instead of: "Tax and spend vs. trickle-down" → Try: "What policies will create opportunity, reward work, and ensure fairness for working families?"'
  },
  {
    id: 'education',
    topic: 'Education',
    category: 'Policy',
    commonGround: 'Every child deserves quality education. Parents should have a say in their kids\' education. Teachers deserve respect and support.',
    leftPerspective: 'We need to invest more in public schools, pay teachers better, and ensure equal opportunity regardless of zip code.',
    rightPerspective: 'Parents should have choice through vouchers and charters. We need accountability, not just more spending. Focus on fundamentals, not ideology.',
    bridgingQuestions: [
      'Can we agree that funding should follow the student and that both traditional and charter schools should be accountable?',
      'What if we focused on measurable outcomes rather than inputs?',
      'How do we balance parental rights with educational standards?'
    ],
    productiveFraming: 'Instead of: "Defund public schools vs. trapped in failing schools" → Try: "How do we give every child access to quality education while respecting parents and supporting teachers?"'
  },
  {
    id: 'guns',
    topic: 'Gun Rights & Safety',
    category: 'Policy',
    commonGround: 'Everyone wants to stop mass shootings and keep guns out of dangerous hands while respecting constitutional rights.',
    leftPerspective: 'We need universal background checks, red flag laws, and assault weapon restrictions. Gun violence is a public health crisis.',
    rightPerspective: 'Criminals don\'t follow laws. We need to enforce existing laws, address mental health, and protect the Second Amendment rights of law-abiding citizens.',
    bridgingQuestions: [
      'What if we focused on keeping guns from prohibited persons while protecting rights of responsible owners?',
      'Could we agree on better mental health resources and school security?',
      'How do we balance safety measures with constitutional protections?'
    ],
    productiveFraming: 'Instead of: "Gun grabbers vs. child killers" → Try: "What evidence-based measures will reduce gun violence while respecting the rights of responsible gun owners?"'
  },
  {
    id: 'abortion',
    topic: 'Abortion',
    category: 'Social',
    commonGround: 'This is genuinely hard. Both sides claim to defend fundamental rights and human dignity.',
    leftPerspective: 'Women have the right to bodily autonomy and reproductive freedom. Government shouldn\'t force birth or criminalize healthcare.',
    rightPerspective: 'Unborn children deserve protection. Life begins at conception. We need to defend those who can\'t defend themselves.',
    bridgingQuestions: [
      'Can we agree on reducing unintended pregnancies through better sex education and access to contraception?',
      'What support would make it easier for women to choose life?',
      'Is there common ground on bans after viability with exceptions?'
    ],
    productiveFraming: 'Instead of: "Baby killers vs. forced birthers" → Try: "This is deeply personal. Can we focus on reducing the circumstances that lead to abortion while respecting sincere moral differences?"'
  },
  {
    id: 'police',
    topic: 'Policing & Public Safety',
    category: 'Social',
    commonGround: 'Safe communities matter. Police should serve and protect everyone. Bad actors should be held accountable.',
    leftPerspective: 'Systemic racism exists in policing. We need reform, accountability, and investment in communities—not just more enforcement.',
    rightPerspective: 'Crime is rising. We need to back the blue, enforce laws, and stop vilifying police while criminals go unpunished.',
    bridgingQuestions: [
      'Can we agree that good policing requires both community trust and officer safety?',
      'What specific reforms would increase accountability without hamstringing police?',
      'How do we address both rising crime and legitimate concerns about excessive force?'
    ],
    productiveFraming: 'Instead of: "Defund vs. police state" → Try: "What policies will create safe communities with accountable, effective, and trusted law enforcement?"'
  },
  {
    id: 'debt',
    topic: 'National Debt & Spending',
    category: 'Policy',
    commonGround: '$35+ trillion in debt is unsustainable. We\'re mortgaging our children\'s future. Something has to change.',
    leftPerspective: 'Wealthy individuals and corporations need to pay their fair share. Defense spending is bloated. We need investment in people and infrastructure.',
    rightPerspective: 'We have a spending problem, not a revenue problem. Entitlements are unsustainable. Government waste is rampant. Cut spending first.',
    bridgingQuestions: [
      'Can we agree to cut corporate welfare and defense contractor waste?',
      'What if we tackled both tax loopholes and spending inefficiency?',
      'How do we reform entitlements to ensure they exist for future generations?'
    ],
    productiveFraming: 'Instead of: "Tax the rich vs. starve the poor" → Try: "What combination of smart cuts, revenue reforms, and efficiency improvements will put us on a sustainable fiscal path?"'
  },
  {
    id: 'china',
    topic: 'China & Foreign Policy',
    category: 'Policy',
    commonGround: 'China is our biggest geopolitical rival. We need to compete economically and protect American interests while avoiding war.',
    leftPerspective: 'We need multilateral cooperation, alliances, and smart diplomacy. Trade wars hurt American consumers and farmers.',
    rightPerspective: 'China is a threat. We need to decouple critical industries, strengthen our military, and stop funding our own adversary.',
    bridgingQuestions: [
      'Can we agree on reshoring critical industries like semiconductors and pharmaceuticals?',
      'What role should tariffs play versus other tools like export controls?',
      'How do we balance engagement with clear-eyed competition?'
    ],
    productiveFraming: 'Instead of: "Appeasers vs. warmongers" → Try: "How do we compete with China effectively while protecting American workers and avoiding military conflict?"'
  },
  {
    id: 'free-speech',
    topic: 'Free Speech & Social Media',
    category: 'Social',
    commonGround: 'Free expression is fundamental. Misinformation is a problem. Tech platforms have too much power.',
    leftPerspective: 'Hate speech, misinformation, and extremism need to be moderated. Private platforms can set community standards.',
    rightPerspective: 'Big Tech censors conservative voices. We need to protect free speech and treat platforms as public squares.',
    bridgingQuestions: [
      'Can we agree that transparency in content moderation decisions is essential?',
      'What if we focused on user control and algorithmic choice rather than top-down censorship?',
      'How do we balance safety from real threats with protecting unpopular speech?'
    ],
    productiveFraming: 'Instead of: "Censorship vs. dangerous extremism" → Try: "How do we protect free expression while limiting genuinely harmful content and increasing user agency?"'
  },
  {
    id: 'elections',
    topic: 'Election Integrity',
    category: 'Governance',
    commonGround: 'Elections should be secure, accessible, and trusted by all Americans. Every legal vote should count.',
    leftPerspective: 'Voter suppression is real. We need to expand access through early voting, mail voting, and automatic registration.',
    rightPerspective: 'Election integrity requires voter ID, clean voter rolls, and chain of custody for ballots. Make it easy to vote, hard to cheat.',
    bridgingQuestions: [
      'What if we paired voter ID requirements with free IDs and expanded access?',
      'Can we agree on updating voter rolls while ensuring no eligible voters are purged?',
      'How do we make voting convenient while maintaining security measures?'
    ],
    productiveFraming: 'Instead of: "Voter suppression vs. fraud deniers" → Try: "How do we maximize both access and security so all Americans trust election results?"'
  },
  {
    id: 'israel-palestine',
    topic: 'Israel-Palestine Conflict',
    category: 'International',
    commonGround: 'Both Israelis and Palestinians deserve security, dignity, and self-determination. Civilian casualties are tragic regardless of nationality.',
    leftPerspective: 'Israel\'s occupation and settlement expansion violate international law. Palestinian human rights must be protected. Military response is disproportionate.',
    rightPerspective: 'Israel has the right to defend itself against terrorism. Hamas uses civilians as shields. Only democracy in the region deserves unwavering US support.',
    bridgingQuestions: [
      'Can we agree that both terrorism against Israelis and collective punishment of Palestinians are wrong?',
      'What conditions would need to exist for both peoples to live in security and prosperity?',
      'How do we balance Israel\'s security needs with Palestinian rights and dignity?'
    ],
    productiveFraming: 'Instead of: "Pro-Israel vs. Pro-Palestine" → Try: "How can we support both Israeli security and Palestinian rights while working toward a sustainable peace?"'
  },
  {
    id: 'ukraine-russia',
    topic: 'Ukraine-Russia War',
    category: 'International',
    commonGround: 'Russian aggression violated international law. Ukraine has the right to defend itself. Americans want to avoid direct US military involvement.',
    leftPerspective: 'We must support Ukraine\'s sovereignty and democracy. Aid protects international norms and European security. Isolationism emboldens dictators.',
    rightPerspective: 'America First means prioritizing our own borders and economy. Endless foreign wars drain resources. Risk of escalation with nuclear power is real.',
    bridgingQuestions: [
      'Can we agree on supporting Ukraine while also establishing clear limits and endgame strategy?',
      'What would a negotiated settlement require from both sides?',
      'How do we balance supporting allies with avoiding endless commitments?'
    ],
    productiveFraming: 'Instead of: "Warmongers vs. Putin appeasers" → Try: "How do we support Ukraine effectively while protecting US interests and avoiding direct conflict with Russia?"'
  },
  {
    id: 'middle-east-policy',
    topic: 'Middle East Policy & Iran',
    category: 'International',
    commonGround: 'Iran\'s regime sponsors terrorism and threatens regional stability. Nuclear weapons in their hands are unacceptable. Military intervention is costly.',
    leftPerspective: 'Diplomacy and multilateral agreements work. The Iran nuclear deal prevented weapons development. Military action creates chaos, as Iraq and Libya proved.',
    rightPerspective: 'Iran violated the nuclear deal and can\'t be trusted. Maximum pressure works. Appeasement emboldens the regime and endangers Israel and Gulf allies.',
    bridgingQuestions: [
      'What specific verification measures would make you trust an Iran agreement?',
      'Can we agree that both military strikes and nuclear weapons are bad outcomes?',
      'How do we support Iranian people\'s freedom while containing the regime?'
    ],
    productiveFraming: 'Instead of: "Warmongers vs. Appeasers" → Try: "What combination of pressure, incentives, and verification will prevent Iranian nuclear weapons without regional war?"'
  },
  {
    id: 'foreign-aid',
    topic: 'Foreign Aid & Development',
    category: 'International',
    commonGround: 'US tax dollars should be spent wisely. Helping others can serve American interests. Corruption and waste must be eliminated.',
    leftPerspective: 'Foreign aid prevents conflicts, fights disease, and creates markets for American goods. It\'s less than 1% of budget but saves lives and builds goodwill.',
    rightPerspective: 'America has huge problems at home. Foreign aid often goes to corrupt governments. Charity begins at home. Many recipients oppose American values.',
    bridgingQuestions: [
      'What if aid was tied to measurable results and anti-corruption measures?',
      'Can we agree that preventing refugee crises and extremism serves US interests?',
      'How do we balance humanitarian values with accountability for results?'
    ],
    productiveFraming: 'Instead of: "Waste abroad vs. abandoning leadership" → Try: "How can we use foreign assistance strategically to advance American interests while ensuring accountability?"'
  },
  {
    id: 'nato-alliances',
    topic: 'NATO & Military Alliances',
    category: 'International',
    commonGround: 'Allies should share defense burdens fairly. US military power deters adversaries. Americans are tired of being taken for granted.',
    leftPerspective: 'NATO has kept peace in Europe for 75 years. Alliances multiply American power. Abandoning commitments destroys credibility and invites aggression.',
    rightPerspective: 'European allies don\'t pay their fair share while enjoying US protection. We should focus on Asia and our own defense. NATO is obsolete Cold War relic.',
    bridgingQuestions: [
      'What if allies increased defense spending in exchange for continued US commitment?',
      'Can we agree that burden-sharing should be fair but alliances provide value?',
      'How do we update NATO for 21st century threats while maintaining deterrence?'
    ],
    productiveFraming: 'Instead of: "Isolationism vs. Forever wars" → Try: "How do we maintain valuable alliances while ensuring fair burden-sharing and focusing on key threats?"'
  },
  {
    id: 'trade-deals',
    topic: 'International Trade Agreements',
    category: 'International',
    commonGround: 'Trade creates winners and losers. American workers deserve fair competition. Cheap imports help consumers but can destroy industries.',
    leftPerspective: 'Fair trade requires labor and environmental standards. Trade agreements should protect workers, not just corporate profits. TPP gave too much away.',
    rightPerspective: 'Free trade creates prosperity for consumers. Protectionism raises prices and invites retaliation. America wins when we compete on level playing field.',
    bridgingQuestions: [
      'What if trade deals included strong labor protections AND lowered barriers?',
      'Can we agree that both protectionism and unfair trade hurt workers?',
      'How do we help communities affected by trade while capturing benefits?'
    ],
    productiveFraming: 'Instead of: "Protectionism vs. Globalism" → Try: "How do we negotiate trade deals that create American jobs while giving consumers access to affordable goods?"'
  },
  {
    id: 'afghanistan',
    topic: 'Afghanistan Withdrawal & Lessons',
    category: 'International',
    commonGround: 'Twenty years was too long. The withdrawal was chaotic. Nation-building failed. We should learn from mistakes.',
    leftPerspective: 'Bush\'s invasion was wrong. Trump negotiated with Taliban. Forever wars drain resources. We should focus on diplomacy and development, not military force.',
    rightPerspective: 'Biden\'s withdrawal was disaster. We abandoned allies. Surrendering to terrorists emboldened enemies. Should have maintained small presence like in Korea.',
    bridgingQuestions: [
      'Can we agree the execution was flawed regardless of who negotiated what?',
      'What should the criteria be for future interventions?',
      'How do we balance helping allies with avoiding endless commitments?'
    ],
    productiveFraming: 'Instead of: "Blame game" → Try: "What lessons from Afghanistan should guide future decisions about military intervention and withdrawal?"'
  },
  {
    id: 'immigration-refugees',
    topic: 'Refugees & Asylum Policy',
    category: 'International',
    commonGround: 'The asylum system is broken and exploited. Genuine refugees deserve help. National security matters. Long backlogs hurt everyone.',
    leftPerspective: 'America is a nation of immigrants and refuge. We have moral and legal obligations. Many flee violence we helped create. Family separation is cruel.',
    rightPerspective: 'Economic migrants aren\'t refugees. System is abused. We can\'t help everyone. Must prioritize American citizens. Refugees can resettle in safe countries nearby.',
    bridgingQuestions: [
      'What if we expedited legitimate claims while quickly rejecting fraudulent ones?',
      'Can we agree on helping genuine refugees while deterring economic migrants?',
      'How do we balance humanitarian values with border security and fiscal limits?'
    ],
    productiveFraming: 'Instead of: "Open hearts vs. closed borders" → Try: "How do we create a fair, efficient refugee system that helps genuine cases while maintaining security and public support?"'
  }
];

export default function TalkingPointsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'Policy', name: 'Policy' },
    { id: 'Social', name: 'Social Issues' },
    { id: 'International', name: 'International' },
    { id: 'Governance', name: 'Governance' },
  ];

  const filteredPoints = selectedCategory === 'all'
    ? talkingPoints
    : talkingPoints.filter(point => point.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 border-b-4 border-blue-200 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            Talking Points
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            Arguments & Conversation Guides for Productive Political Dialogue
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Move beyond shouting past each other—these talking points help you find common ground,
            ask better questions, and have conversations that actually go somewhere
          </p>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-12 px-4 bg-gradient-to-br from-amber-50 to-orange-50 border-b-2 border-amber-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How to Use These Talking Points</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
              <div className="text-4xl mb-3 text-center">🎯</div>
              <h3 className="font-bold text-lg mb-2 text-center">Find Common Ground</h3>
              <p className="text-gray-700 text-sm">
                Start with what you agree on. Most topics have shared values buried under partisan talking points.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
              <div className="text-4xl mb-3 text-center">❓</div>
              <h3 className="font-bold text-lg mb-2 text-center">Ask Questions</h3>
              <p className="text-gray-700 text-sm">
                Use the bridging questions to move from "my side vs. your side" to "how do we solve this together?"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
              <div className="text-4xl mb-3 text-center">🔄</div>
              <h3 className="font-bold text-lg mb-2 text-center">Reframe</h3>
              <p className="text-gray-700 text-sm">
                Reject false dichotomies. The "productive framing" shows how to escape unproductive arguments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gray-50 sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'gradient-navy text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border-2 border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Talking Points */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {filteredPoints.map((point) => (
              <div
                key={point.id}
                className="bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all shadow-sm"
              >
                <button
                  onClick={() => setExpandedId(expandedId === point.id ? null : point.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">💬</div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-gray-900">{point.topic}</h3>
                      <p className="text-sm text-gray-500 mt-1">{point.category}</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      expandedId === point.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedId === point.id && (
                  <div className="px-6 pb-6 space-y-6">
                    {/* Common Ground */}
                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                        <span>🤝</span> Common Ground
                      </h4>
                      <p className="text-gray-800 leading-relaxed">{point.commonGround}</p>
                    </div>

                    {/* Perspectives */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                        <h4 className="font-bold text-blue-900 mb-2">← Left Perspective</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{point.leftPerspective}</p>
                      </div>
                      <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
                        <h4 className="font-bold text-red-900 mb-2">Right Perspective →</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{point.rightPerspective}</p>
                      </div>
                    </div>

                    {/* Bridging Questions */}
                    <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
                      <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                        <span>❓</span> Bridging Questions
                      </h4>
                      <ul className="space-y-2">
                        {point.bridgingQuestions.map((question, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                            <span className="text-sm leading-relaxed">{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Productive Framing */}
                    <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-600">
                      <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <span>🔄</span> Productive Framing
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed italic">{point.productiveFraming}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ground Rules */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 border-t-2 border-blue-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ground Rules for Productive Conversations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-blue-200">
              <h3 className="font-bold text-lg mb-3 text-blue-900">✅ DO</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">→</span>
                  <span>Ask genuine questions to understand, not to trap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">→</span>
                  <span>Acknowledge valid points from the other side</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">→</span>
                  <span>Focus on specific policies, not character attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">→</span>
                  <span>Look for win-win solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">→</span>
                  <span>Be willing to say "I don't know" or "That's a good point"</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-red-200">
              <h3 className="font-bold text-lg mb-3 text-red-900">❌ DON'T</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">→</span>
                  <span>Assume bad faith or question motives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">→</span>
                  <span>Use labels like "socialist," "fascist," "snowflake," or "deplorable"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">→</span>
                  <span>Whataboutism or changing the subject when challenged</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">→</span>
                  <span>Treat politics like team sports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">→</span>
                  <span>Expect to "win" the conversation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white border-t-2 border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Have Better Conversations?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            These talking points are starting points, not scripts. Adapt them to your conversations.
            The goal isn't to convert everyone to your view—it's to find common ground and make progress.
          </p>
          <p className="text-gray-600">
            Democracy requires citizens who can disagree productively. Let's prove it's still possible.
          </p>
        </div>
      </section>
    </div>
  );
}
