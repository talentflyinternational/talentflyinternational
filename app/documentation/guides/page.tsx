import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides | Talent Fly International",
  description: "Guides for candidates and employers.",
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/documentation" className="text-primary-600 hover:underline">Documentation</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Guides</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Guides</h1>
      <p className="mt-4 text-slate-600">
        Practical guides to help candidates and employers get the most from our services.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Preparing for an Overseas Role</h2>
        <p className="mt-2 text-slate-600">
          If you are considering a role abroad, ensure your CV clearly states your current location, nationality, and (if applicable) current visa status or eligibility to work in the target country. Research the country’s typical requirements for your type of role (e.g. work permit, qualifications recognition). We can share general information, but visa and work permit rules are set by governments—always check official sources and consider taking immigration or legal advice. Allow sufficient time for visa processing when planning your start date.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Writing a Strong CV for Our Process</h2>
        <p className="mt-2 text-slate-600">
          Keep your CV concise and relevant. Include clear contact details, a brief summary or objective, and structure your experience and education so that key dates and achievements are easy to see. Tailor your CV to the role where possible. Avoid gaps without explanation. If you have worked in multiple countries or have specific work authorisation, mention it. We screen against the criteria provided by the employer, so alignment with the job description helps.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">For Employers: Getting the Best Shortlist</h2>
        <p className="mt-2 text-slate-600">
          Provide a clear, detailed job description and distinguish between must-have and nice-to-have criteria. The more precise your requirements (e.g. years of experience, specific skills, location or work authorisation), the better we can target our screening. Respond to shortlists and feedback requests promptly so we can refine or move quickly to the next stage. If the role involves sponsorship or work permits, clarify that upfront so we can factor it into our screening.
        </p>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        See also <Link href="/documentation/for-candidates" className="text-primary-600 hover:underline">For Candidates</Link>, <Link href="/documentation/for-employers" className="text-primary-600 hover:underline">For Employers</Link>, and <Link href="/documentation/required-documents" className="text-primary-600 hover:underline">Required Documents</Link>.
      </p>
    </div>
  );
}
