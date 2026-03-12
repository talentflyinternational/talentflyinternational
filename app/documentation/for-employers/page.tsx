import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Employers – Process & Requirements | Talent Fly International",
  description: "Process and requirements for employers using Talent Fly International recruitment services.",
};

export default function ForEmployersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/documentation" className="text-primary-600 hover:underline">Documentation</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">For Employers</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">For Employers – Process & Requirements</h1>
      <p className="mt-4 text-slate-600">
        This page outlines the typical process when you engage Talent Fly International for resume screening, shortlisting, or placement for roles in India or abroad.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">1. Engagement and Briefing</h2>
        <p className="mt-2 text-slate-600">
          We agree on the scope: roles, number of hires, must-have and nice-to-have criteria, timeline, and fees. You provide job descriptions and any specific requirements (e.g. qualifications, experience, work authorisation). We may sign a service agreement or statement of work.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">2. Screening</h2>
        <p className="mt-2 text-slate-600">
          We screen candidate resumes and profiles against your criteria. Our process is consistent and aligned with our Recruitment & Selection Policy. We may come back for clarification on criteria if needed.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">3. Shortlist Delivery</h2>
        <p className="mt-2 text-slate-600">
          We deliver a shortlist of candidates with summaries and fit notes. The number and format are as agreed. You review and indicate whom you wish to interview or assess further.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">4. Interviews and Selection</h2>
        <p className="mt-2 text-slate-600">
          You run your own interview and assessment process. We may support with scheduling, feedback collection, or follow-up as per our agreement. All hiring decisions are yours.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">5. Offer and Placement</h2>
        <p className="mt-2 text-slate-600">
          When you make an offer, you are responsible for terms of employment and compliance (e.g. contracts, visas). Where in scope, we support with offer coordination, document collection, and joining logistics. Our placement support is defined in the service agreement.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Your Obligations</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Provide accurate and complete job descriptions and criteria.</li>
          <li>Respond in a timely manner to shortlists and requests for feedback.</li>
          <li>Comply with applicable employment and immigration law.</li>
          <li>Use candidate information only for the recruitment process and in line with data protection law.</li>
        </ul>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        See <Link href="/terms/employers" className="text-primary-600 hover:underline">Terms for Employers</Link>, <Link href="/documentation/required-documents" className="text-primary-600 hover:underline">Required Documents</Link>, and <Link href="/documentation/compliance-checklist" className="text-primary-600 hover:underline">Compliance Checklist</Link> for more.
      </p>
    </div>
  );
}
