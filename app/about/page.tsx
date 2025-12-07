import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | The Moderate Populist',
  description: 'A one-person effort to lower the political temperature and get people talking to each other again.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        About The Moderate Populist
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Is</h2>
          <p className="text-gray-700 mb-4">
            <strong>The Moderate Populist is a one-person project.</strong> Not a movement. Not an organization.
            Not a PAC or nonprofit. Just one person trying to lower the political temperature and remind fellow
            Americans of something important: <strong>It's not the end of the world.</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Social media and cable news profit from making you angry and scared. They amplify the extremes and
            bury the reality—that most Americans, regardless of party, are reasonable people who want similar things:
            safe communities, good schools, affordable healthcare, economic opportunity, and a government that actually works.
          </p>
          <p className="text-gray-700 mb-4">
            The real solution isn't online. It's not in another article, another podcast, or another outrage cycle.
            <strong> The solution is simple: get out from behind your screen and talk to real people.</strong>
          </p>
        </section>

        <section className="mb-12 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Mission</h2>
          <p className="text-xl text-gray-800 mb-4 font-semibold">
            Lower the political temperature. Encourage people to talk with one another.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            That's it. That's the whole mission. This site exists to remind you that things aren't as bad as they seem,
            that the people who vote differently than you aren't your enemies, and that real human connection—
            face-to-face conversation—is the antidote to our current political dysfunction.
          </p>
        </section>

        <section className="mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">A Space for All Americans</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Whether you're a Republican or Democrat, whether you supported Trump or Biden, whether you identify
            as conservative, progressive, libertarian, or somewhere in between—<strong>you belong here</strong>.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            We don't filter for "moderates" or people in the middle. We welcome passionate conservatives and committed
            progressives. We respect MAGA supporters and democratic socialists equally. What matters isn't where you
            stand on the political spectrum—it's your willingness to engage respectfully with those who see things differently.
          </p>
          <p className="text-lg leading-relaxed">
            This platform was built on the premise that Americans have far more in common than our political divisions suggest,
            and that democracy requires citizens who can work together despite disagreements.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The 4 Cs: Our Framework for Engagement</h2>
          <p className="text-gray-700 mb-6">
            How we engage with each other matters as much as what we believe. We emphasize four essential
            democratic skills:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">💬 Communication</h3>
              <p className="text-gray-700">
                Listen to understand, not just to respond. Ask questions. Seek clarity before disagreement.
                Good faith dialogue starts with genuine curiosity about why others think differently.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-purple-900">🤝 Collaboration</h3>
              <p className="text-gray-700">
                Build coalitions across divides. Find allies where you can. Democracy requires teamwork,
                not solo heroics. Small wins through cooperation beat grand plans through confrontation.
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-red-900">⚖️ Compromise</h3>
              <p className="text-gray-700">
                Give ground without giving up principles. Half a loaf beats stalemate. The founders designed
                our system for compromise, not ideological purity. Progress requires pragmatism.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-green-900">📢 Make Your Case</h3>
              <p className="text-gray-700">
                Persuade with evidence and shared values. Appeal to what you have in common, not just what divides.
                Win hearts and minds through compelling arguments, not insults and absolutes.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Evidence-Based</h3>
              <p className="text-gray-700">
                We cite data from reputable, non-partisan sources including government agencies,
                academic research, and established polling organizations. Facts, not feelings.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Balanced Presentation</h3>
              <p className="text-gray-700">
                Each issue page presents the challenge neutrally, identifies common ground, and
                raises thoughtful questions without advocating for specific policy solutions.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Solution-Oriented</h3>
              <p className="text-gray-700">
                We encourage constructive debate focused on solving problems rather than scoring
                political points. The goal is progress, not winning arguments.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Find Here</h2>
          <p className="text-gray-700 mb-4">
            This site provides balanced, fact-based information on major political issues.
            Each issue page includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Clear explanations of complex issues in plain language</li>
            <li>Areas of common ground where most Americans actually agree</li>
            <li>Current talking points from both the left and the right</li>
            <li>Key facts from reputable, non-partisan sources</li>
            <li>Thoughtful questions for respectful debate</li>
          </ul>
          <p className="text-gray-700 mb-4">
            This is a work in progress. As a one-person operation, I'm constantly updating and improving
            the content based on current events and research. If you have feedback or suggestions, I'm listening.
          </p>
        </section>

        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 p-8 rounded-lg border-2 border-purple-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Can Do</h2>
          <p className="text-gray-700 mb-4 text-lg font-semibold">
            Don't just read this site. Actually do something with it.
          </p>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              <strong>1. Get offline.</strong> Close this tab after you're done and go talk to someone face-to-face.
              Your Trump-supporting neighbor. Your progressive coworker. Your centrist friend. Anyone who sees things differently.
            </p>
            <p className="leading-relaxed">
              <strong>2. Listen more than you talk.</strong> Ask questions instead of making accusations.
              Try to understand why they believe what they believe.
            </p>
            <p className="leading-relaxed">
              <strong>3. Recognize that most people are reasonable.</strong> Even when you disagree,
              you'll probably find they're decent humans trying to do what's right for their families and communities.
            </p>
            <p className="leading-relaxed">
              <strong>4. Stop doomscrolling.</strong> Limit your news consumption. Spend less time online and more time
              with real people in the real world.
            </p>
            <p className="leading-relaxed font-semibold text-lg text-purple-700 mt-6">
              That's it. That's how you help. Democracy doesn't need your doom and anger. It needs your humanity and willingness to talk.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
