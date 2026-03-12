import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Templates & Forms | Talent Fly International",
  description: "List of document templates and forms for candidates and employers.",
};

export default function FormsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/documentation" className="text-primary-600 hover:underline">Documentation</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Forms</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Document Templates & Forms</h1>
      <p className="mt-4 text-slate-600">
        Below is a list of document types and forms that may be used in our process. Where we provide templates or standard forms, they will be shared during the engagement (e.g. via email or secure link). If you need a specific form or template, please contact us.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">For Candidates</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Application or registration form (where used)</li>
          <li>Consent form for data sharing with employers</li>
          <li>Document checklist (see Required Documents page)</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">For Employers</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Service agreement or statement of work</li>
          <li>Job brief or requirement form</li>
          <li>Shortlist feedback form (where used)</li>
        </ul>
      </section>

      <p className="mt-8 text-slate-600">
        We do not provide immigration or legal forms (e.g. visa applications). Those are obtained from the relevant government or authority. For our process and requirements, see <Link href="/documentation/for-candidates" className="text-primary-600 hover:underline">For Candidates</Link> and <Link href="/documentation/for-employers" className="text-primary-600 hover:underline">For Employers</Link>.
      </p>
      <p className="mt-4">
        <Link href="/contact" className="text-primary-600 hover:underline">Contact us</Link> to request a specific template or form.
      </p>
    </div>
  );
}
