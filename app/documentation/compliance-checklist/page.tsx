import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compliance & Verification Checklist | Talent Fly International",
  description: "Compliance and verification checklist for recruitment and placement.",
};

export default function ComplianceChecklistPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/documentation" className="text-primary-600 hover:underline">Documentation</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Compliance Checklist</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Compliance & Verification Checklist</h1>
      <p className="mt-4 text-slate-600">
        This checklist is a general guide to compliance and verification steps often relevant in recruitment and placement. It is not exhaustive. Specific requirements depend on the role, employer, and jurisdiction.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Candidate Verification</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Identity: confirm identity document and that the candidate is who they claim to be.</li>
          <li>Education: verify qualifications where required (e.g. degree, certificates).</li>
          <li>Employment history: confirm dates, job titles, and employer details where practicable.</li>
          <li>Right to work: confirm work authorisation or visa eligibility for the relevant country where applicable.</li>
          <li>References: obtain references where the employer or our process requires them.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Employer and Role</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Job description: clear, accurate, and non-discriminatory.</li>
          <li>Compliance: employer responsible for employment law, contracts, and (where applicable) sponsorship and immigration compliance.</li>
          <li>Data protection: candidate data used only for the recruitment process and in line with applicable law.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Our Standards</h2>
        <p className="mt-2 text-slate-600">
          We apply our Recruitment & Selection Policy, Equal Opportunity Policy, and Data Protection Policy. We do not guarantee visa or work permit outcomes; candidates and employers must satisfy themselves of compliance with immigration and employment law. See <Link href="/immigration/compliance" className="text-primary-600 hover:underline">Immigration Compliance</Link> and <Link href="/policies" className="text-primary-600 hover:underline">Policies</Link>.
        </p>
      </section>
    </div>
  );
}
