import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immigration Compliance Framework | Talent Fly International",
  description: "How Talent Fly International approaches immigration compliance in recruitment.",
};

export default function ImmigrationCompliancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/immigration" className="text-primary-600 hover:underline">Immigration</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Compliance</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Immigration Compliance Framework</h1>
      <p className="mt-4 text-slate-600">
        This page describes how Talent Fly International approaches immigration compliance in the context of our recruitment and placement services. Compliance with immigration law is ultimately the responsibility of the candidate and the employer. We support awareness and process without providing legal or immigration advice.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Principles</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>We do not encourage or facilitate illegal work or breach of visa conditions.</li>
          <li>We direct candidates and employers to official sources and to seek professional advice for their situation.</li>
          <li>We do not make representations about visa or work permit outcomes.</li>
          <li>Where we collect or share information about work authorisation, we do so for recruitment matching only and do not advise on applications or eligibility.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Responsibilities</h2>
        <p className="mt-2 text-slate-600">
          <strong>Candidates:</strong> You are responsible for ensuring you have the right to work in the relevant country and for obtaining and maintaining any required visa or work permit. You must not misrepresent your status to us or to employers.<br /><br />
          <strong>Employers:</strong> You are responsible for complying with local employment and immigration law, including sponsorship obligations, right-to-work checks, and reporting where required. We do not assume these responsibilities.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Our Practices</h2>
        <p className="mt-2 text-slate-600">
          We may ask candidates to confirm their work authorisation or eligibility where relevant to a role. We may share that information with the employer for the purpose of the recruitment process. We do not verify visa or work permit validity with authorities unless explicitly engaged to do so in a limited capacity (e.g. document collection). We maintain clear disclaimers and refer to our <Link href="/immigration/disclaimer" className="text-primary-600 hover:underline">Legal Disclaimer</Link> and <Link href="/immigration/risk-policy" className="text-primary-600 hover:underline">Immigration Risk Policy</Link>.
        </p>
      </section>
    </div>
  );
}
