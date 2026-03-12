import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Candidate Shortlisting | Talent Fly International",
  description: "Curated shortlists of qualified candidates for roles in India and abroad.",
};

export default function ShortlistingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/services" className="text-sm text-primary-600 hover:underline">← Services</Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Candidate Shortlisting</h1>
      <p className="mt-4 text-slate-600">
        Our shortlisting service delivers a curated list of candidates who have passed our screening and assessment. Each shortlist is tailored to your role and organisation, whether the position is in India or overseas.
      </p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">What You Receive</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>A defined number of profiles (as agreed) with summaries and key fit points</li>
          <li>Alignment with your must-have and nice-to-have criteria</li>
          <li>Notes on work authorisation or visa readiness where relevant for international roles</li>
          <li>Option to request additional verification or checks before interview</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Timelines</h2>
        <p className="mt-2 text-slate-600">
          Shortlist delivery timelines are agreed at the start of the engagement. We work to meet your hiring deadlines while maintaining quality. For more on our process, see <Link href="/services/how-it-works" className="text-primary-600 hover:underline">How It Works</Link> and <Link href="/documentation/for-employers" className="text-primary-600 hover:underline">For Employers</Link>.
        </p>
      </section>
    </div>
  );
}
