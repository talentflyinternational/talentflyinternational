import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immigration Law – Overview | Talent Fly International",
  description: "Overview of immigration and work authorisation in key markets. General information only; not legal advice.",
};

export default function ImmigrationOverviewPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/immigration" className="text-primary-600 hover:underline">Immigration</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Overview</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Immigration Law – Overview</h1>
      <p className="mt-4 text-slate-600">
        This page gives a high-level overview of immigration and work authorisation in key markets where we support placement. Immigration rules are set by each country and change frequently. This is not legal or immigration advice. You must verify current requirements with official sources and seek professional advice for your situation.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Why This Matters for Recruitment</h2>
        <p className="mt-2 text-slate-600">
          When placing candidates in roles abroad, work authorisation (visa, work permit) is often a requirement. Employers may sponsor candidates or require them to have existing rights. As a recruitment company, we screen for eligibility where relevant and refer to general information, but we do not provide immigration advice or guarantee any visa outcome. See our <Link href="/immigration/risk-policy" className="text-primary-600 hover:underline">Immigration Risk Policy</Link> and <Link href="/immigration/disclaimer" className="text-primary-600 hover:underline">Legal Disclaimer</Link>.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Key Markets – Summary</h2>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li><Link href="/immigration/country/singapore" className="text-primary-600 hover:underline font-medium">Singapore</Link> – Work passes (EP, S Pass, Work Permit) administered by the Ministry of Manpower.</li>
          <li><Link href="/immigration/country/india" className="text-primary-600 hover:underline font-medium">India</Link> – Employment and other visa categories; rules set by the Ministry of Home Affairs and related bodies.</li>
          <li><Link href="/immigration/country/uae" className="text-primary-600 hover:underline font-medium">UAE</Link> – Employer-sponsored work permits and residence visas; free zone and mainland regimes.</li>
          <li><Link href="/immigration/country/uk" className="text-primary-600 hover:underline font-medium">UK</Link> – Points-based system; Skilled Worker and other routes under the Home Office.</li>
          <li><Link href="/immigration/country/australia" className="text-primary-600 hover:underline font-medium">Australia</Link> – Temporary and permanent skilled visas; Department of Home Affairs.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Our Role</h2>
        <p className="mt-2 text-slate-600">
          We provide general information and process support (e.g. document checklist, timelines). We do not advise on specific visa categories, prepare applications, or represent you before authorities. Candidates and employers are responsible for compliance and for obtaining appropriate legal or immigration advice.
        </p>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        See <Link href="/immigration/compliance" className="text-primary-600 hover:underline">Immigration Compliance</Link>, <Link href="/immigration/risk-mitigation" className="text-primary-600 hover:underline">Risk Mitigation</Link>, and <Link href="/immigration/news" className="text-primary-600 hover:underline">News & Updates</Link> for more.
      </p>
    </div>
  );
}
