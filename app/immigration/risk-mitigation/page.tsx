import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immigration Risk Mitigation | Talent Fly International",
  description: "How we mitigate immigration-related risks in our services.",
};

export default function ImmigrationRiskMitigationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/immigration" className="text-primary-600 hover:underline">Immigration</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Risk Mitigation</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Immigration Risk Mitigation</h1>
      <p className="mt-4 text-slate-600">
        Talent Fly International mitigates immigration-related risks through clear boundaries, disclaimers, and processes. This page summarises our main mitigation measures. It should be read with our <Link href="/immigration/risk-policy" className="text-primary-600 hover:underline">Immigration Risk Policy</Link> and <Link href="/immigration/disclaimer" className="text-primary-600 hover:underline">Legal Disclaimer</Link>.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">1. No Immigration or Legal Advice</h2>
        <p className="mt-2 text-slate-600">
          We do not provide immigration or legal advice. All content on our site and in our communications is general information only. We do not prepare or submit visa or work permit applications. This reduces the risk of reliance on incorrect or outdated advice and keeps our role clearly within recruitment support.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">2. Clear Disclaimers</h2>
        <p className="mt-2 text-slate-600">
          Our website and key documents (e.g. terms, immigration pages) contain clear disclaimers that we are not responsible for visa outcomes and that users must verify information with official sources and seek professional advice. We link to our Legal Disclaimer (immigration) from relevant pages.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">3. Reliance on Official Sources</h2>
        <p className="mt-2 text-slate-600">
          We direct candidates and employers to official government and immigration authority sources for current rules, application procedures, and timelines. We may provide links or references to such sources but do not endorse or guarantee their content.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">4. Defined Scope of Screening</h2>
        <p className="mt-2 text-slate-600">
          Where we screen for work authorisation or eligibility, we do so only to the extent of matching candidates to roles (e.g. “does the candidate state they have or can obtain work rights?”). We do not verify documents with authorities or advise on specific visa categories. This keeps our role limited and avoids creating expectations we cannot meet.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">5. Training and Updates</h2>
        <p className="mt-2 text-slate-600">
          Staff are trained not to give immigration or legal advice and to refer enquiries to our disclaimer and to professional advisers. We periodically review our immigration-related content and update it where practicable, while emphasising that users must always check current rules themselves.
        </p>
      </section>
    </div>
  );
}
