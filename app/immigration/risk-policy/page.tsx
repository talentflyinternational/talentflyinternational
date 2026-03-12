import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immigration Risk Policy | Talent Fly International",
  description: "Talent Fly International’s policy on immigration-related risks and compliance.",
};

export default function ImmigrationRiskPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/immigration" className="text-primary-600 hover:underline">Immigration</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Risk Policy</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Immigration Risk Policy</h1>
      <p className="mt-4 text-slate-600">
        This policy sets out how Talent Fly International identifies, assesses, and mitigates immigration-related risks in the context of our recruitment and placement services. We operate in multiple jurisdictions and support candidates and clients with roles that may require work permits or visas. Our aim is to operate responsibly without providing immigration or legal advice.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">1. Purpose and Scope</h2>
        <p className="mt-2 text-slate-600">
          The policy applies to all activities where immigration or work authorisation may be relevant (e.g. international placement, screening for eligibility). It covers our approach to information, compliance, and risk mitigation. It does not create any obligation to secure a visa or work permit on behalf of a candidate or client.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">2. Risk Identification</h2>
        <p className="mt-2 text-slate-600">
          We recognise that immigration rules vary by country and change over time. Risks we consider include: reliance on outdated or incorrect information; candidate or employer non-compliance with visa or work permit conditions; and reputational or legal exposure from being perceived as giving immigration advice. We do not provide legal or immigration advice and direct parties to official sources and qualified advisers.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">3. Our Approach</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>We provide general, non-binding information only (e.g. overview of work pass types, typical timelines).</li>
          <li>We screen for work authorisation or eligibility only where agreed and to the extent we can do so without giving advice.</li>
          <li>We require candidates and employers to confirm their own compliance and to seek professional advice where needed.</li>
          <li>We do not prepare or submit visa or work permit applications; we do not represent parties before immigration authorities.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">4. Mitigation</h2>
        <p className="mt-2 text-slate-600">
          We mitigate risk by: clear disclaimers on our website and in communications; training staff not to give immigration advice; referring to our Immigration Disclaimer and Compliance Framework; and updating our general content periodically while directing users to official sources for current rules. See <Link href="/immigration/risk-mitigation" className="text-primary-600 hover:underline">Risk Mitigation</Link> and <Link href="/immigration/disclaimer" className="text-primary-600 hover:underline">Legal Disclaimer</Link>.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">5. Review</h2>
        <p className="mt-2 text-slate-600">
          This policy is reviewed periodically and after material changes in law or our operations. Contact: contact@talentflyinternational.com.
        </p>
      </section>
    </div>
  );
}
