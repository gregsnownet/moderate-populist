'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/count-me-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About The Moderate Populist
        </h1>

        <div className="max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Core Principles</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">🛡️ Defend Democratic Institutions</h3>
              <p className="text-gray-700">
                Protect checks and balances, free press, independent courts, and peaceful transfer of power.
                Authoritarianism is a threat from any direction.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-800">
              <h3 className="text-xl font-semibold mb-2 text-blue-950">🤝 Respect for All Americans</h3>
              <p className="text-gray-700">
                Reject racism, bigotry, and scapegoating in all forms. Our differences in race, religion,
                background, and beliefs make us stronger. Common humanity comes first.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-2 text-red-900">⚖️ Evidence Over Ideology</h3>
              <p className="text-gray-700">
                Champion policies grounded in facts and results. Solutions require listening to different
                perspectives with respect and intellectual honesty.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Mission</h2>
          <p className="text-xl text-gray-800 mb-4 font-semibold">
            Seeking knowledge, furthering understanding - Beyond the Political Divide
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This platform exists to bridge political divisions through fact-based dialogue and mutual respect.
            We believe most Americans want similar outcomes—safe communities, good schools, affordable healthcare,
            economic opportunity, and effective government—even when they disagree on how to achieve them.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our mission is to lower the political temperature, highlight common ground, and encourage
            respectful conversation across differences. Democracy thrives when citizens engage with empathy,
            evidence, and a commitment to understanding perspectives different from their own.
          </p>
          <div className="mt-6 pt-6 border-t-2 border-amber-300">
            <p className="text-lg text-gray-700 mb-4">
              <strong>The Moderate Populist is a one-person project</strong>—not a movement, organization, or PAC.
              Created by an individual concerned about growing political polarization and the erosion of civil discourse
              in American democracy.
            </p>
            <p className="text-lg text-gray-700">
              This project stems from a belief that social media and partisan news amplify extremes while burying
              the reality: most Americans are reasonable people seeking practical solutions to shared challenges.
              The goal is to provide a resource that cuts through noise, presents evidence-based perspectives,
              and reminds us of our shared humanity.
            </p>
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-br from-blue-50 via-blue-50 to-red-50 border-2 border-blue-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">A Space for All Americans</h2>
          <p className="text-lg mb-4 leading-relaxed text-gray-800">
            Whether you're a Republican or Democrat, whether you voted for the current administration or against it,
            whether you identify as conservative, progressive, libertarian, or somewhere in between—<strong>you belong here</strong>.
          </p>
          <p className="text-lg mb-4 leading-relaxed text-gray-800">
            We don't filter for "moderates" or people in the middle. We welcome passionate conservatives and committed
            progressives. We respect MAGA supporters and democratic socialists equally. What matters isn't where you
            stand on the political spectrum—it's your willingness to engage respectfully with those who see things differently.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            This platform was built on the premise that Americans have far more in common than our political divisions suggest,
            and that democracy requires citizens who can work together despite disagreements.
          </p>
        </section>

        <section className="mb-12 bg-gradient-to-br from-red-50 via-white to-blue-50 border-2 border-red-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Count Me In</h2>
          <p className="text-lg mb-6 leading-relaxed text-gray-800">
            Want to stay connected and be part of this movement for respectful dialogue? Share your information
            and let us know you're here. We'll keep you updated on new content and opportunities to engage.
          </p>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-lg">
              <p className="text-green-800 font-semibold">✓ Thank you for joining us! We'll be in touch.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg">
              <p className="text-red-800 font-semibold">✗ Something went wrong. Please try again.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none resize-none"
                placeholder="Share your thoughts, suggestions, or why you're here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-navy text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Count Me In'}
            </button>
          </form>
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
            <div className="border-l-4 border-blue-800 pl-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-950">🤝 Collaboration</h3>
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
        </div>
      </div>
    </div>
  );
}
