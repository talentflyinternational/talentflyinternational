import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Required Documents | Talent Fly International",
  description: "Checklist of documents commonly required for candidates and employers.",
};

export default function RequiredDocumentsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/documentation" className="text-primary-600 hover:underline">Documentation</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Required Documents</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Required Documents</h1>
      <p className="mt-4 text-slate-600">
        Below is a general checklist of documents commonly required during the recruitment and placement process. Exact requirements depend on the role, employer, and country. Always confirm with the employer or with us for your specific case.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">For Candidates – General</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Current CV/resume (clear, accurate, up to date)</li>
          <li>Proof of identity (e.g. passport, national ID)</li>
          <li>Educational certificates and transcripts (as required by the role)</li>
          <li>Professional certifications or licences (where relevant)</li>
          <li>Reference letters or contact details for references (if requested)</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">For Overseas Roles</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Valid passport (with sufficient validity as required by the destination country)</li>
          <li>Current visa or work permit (if already in the country)</li>
          <li>Evidence of eligibility to work (as required by the employer or immigration authorities)</li>
          <li>Any country-specific documents (e.g. police clearance, health checks) as advised</li>
        </ul>
        <p className="mt-2 text-slate-600">
          Visa and work permit requirements are set by the destination country. We do not provide immigration advice. See <Link href="/immigration/overview" className="text-primary-600 hover:underline">Immigration Overview</Link> and <Link href="/documentation/visa-types" className="text-primary-600 hover:underline">Visa Types</Link> for general information only.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">For Employers</h2>
        <p className="mt-2 text-slate-600">
          Employers may need to provide job descriptions, company details, and (where applicable) evidence of right to sponsor or employ (e.g. for work permits). Specifics are agreed at the start of the engagement.
        </p>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        For process details, see <Link href="/documentation/for-candidates" className="text-primary-600 hover:underline">For Candidates</Link> and <Link href="/documentation/for-employers" className="text-primary-600 hover:underline">For Employers</Link>. For compliance, see <Link href="/documentation/compliance-checklist" className="text-primary-600 hover:underline">Compliance Checklist</Link>.
      </p>
    </div>
  );
}
