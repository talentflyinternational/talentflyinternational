import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | Talent Fly International",
  description: "Accessibility statement for Talent Fly International website.",
};

export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Accessibility</h1>
      <p className="mt-4 text-slate-600">
        Talent Fly International is committed to making this website accessible to as many people as possible. We aim to follow widely accepted guidelines and to improve our site based on feedback.
      </p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Our Approach</h2>
        <p className="mt-2 text-slate-600">
          We strive to ensure that our content is perceivable, operable, and understandable. This includes using clear headings, descriptive links, and sufficient colour contrast where possible. We also provide a sitemap and consistent navigation to help you find information.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Feedback</h2>
        <p className="mt-2 text-slate-600">
          If you have difficulty accessing any part of this site or have suggestions for improvement, please contact us at contact@talentflyinternational.com. We will consider your feedback and work to address accessibility issues where feasible.
        </p>
      </section>
    </div>
  );
}
