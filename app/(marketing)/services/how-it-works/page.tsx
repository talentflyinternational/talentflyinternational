import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | Talent Fly International",
  description: "Step-by-step process for candidates and employers.",
};

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/services" className="text-sm text-primary-600 hover:underline">← Services</Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">How It Works</h1>
      <p className="mt-4 text-slate-600">
        A concise overview of the process for employers and candidates. Detailed steps and requirements are in our documentation.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">For Employers</h2>
        <ol className="mt-4 list-decimal pl-6 space-y-3 text-slate-600">
          <li><strong>Engagement.</strong> We agree on the role(s), criteria, and scope (screening, shortlisting, placement).</li>
          <li><strong>Briefing.</strong> You share job descriptions and must-have / nice-to-have criteria.</li>
          <li><strong>Screening.</strong> We screen resumes against your criteria and our quality standards.</li>
          <li><strong>Shortlist.</strong> We deliver a shortlist of candidates with summaries and fit notes.</li>
          <li><strong>Interviews & selection.</strong> You run interviews and select candidates. We support as agreed (e.g. scheduling, feedback).</li>
          <li><strong>Placement.</strong> Where in scope, we support offer, documentation, and joining coordination.</li>
        </ol>
        <p className="mt-4">
          <Link href="/documentation/for-employers" className="text-primary-600 hover:underline">Full process for employers →</Link>
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">For Candidates</h2>
        <ol className="mt-4 list-decimal pl-6 space-y-3 text-slate-600">
          <li><strong>Application / referral.</strong> You apply or are referred for a role we are recruiting for.</li>
          <li><strong>Screening.</strong> We review your profile and resume against the role requirements.</li>
          <li><strong>Shortlist.</strong> If you are shortlisted, we may contact you for further details or documents.</li>
          <li><strong>Employer process.</strong> You participate in the employer’s selection process (e.g. interviews, assessments).</li>
          <li><strong>Offer and onboarding.</strong> If selected, you work with the employer and us (as applicable) on offer, documents, and joining.</li>
        </ol>
        <p className="mt-4">
          <Link href="/documentation/for-candidates" className="text-primary-600 hover:underline">Full process for candidates →</Link>
        </p>
      </section>
    </div>
  );
}
