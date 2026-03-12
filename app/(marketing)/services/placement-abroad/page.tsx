import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Placement – Abroad | Talent Fly International",
  description: "International placement with support for visas, work permits, and compliance.",
};

export default function PlacementAbroadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/services" className="text-sm text-primary-600 hover:underline">← Services</Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Placement – Abroad</h1>
      <p className="mt-4 text-slate-600">
        For roles outside India, we provide placement support with an awareness of work permits, visas, and local compliance. We are based in Singapore and work with employers and candidates in multiple jurisdictions.
      </p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">What We Cover</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Shortlisting and placement process for overseas roles</li>
          <li>Guidance on typical visa and work permit requirements (overview only; not legal advice)</li>
          <li>Reference to our immigration risk policy and compliance framework</li>
          <li>Coordination of documentation and timelines as agreed in the service scope</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Immigration</h2>
        <p className="mt-2 text-slate-600">
          Immigration rules are set by governments and can change. We provide information and process support within our scope but do not provide immigration or legal advice. Candidates and employers should rely on official sources and professional advisers. See our <Link href="/immigration/overview" className="text-primary-600 hover:underline">Immigration Overview</Link>, <Link href="/immigration/risk-policy" className="text-primary-600 hover:underline">Immigration Risk Policy</Link>, and <Link href="/immigration/disclaimer" className="text-primary-600 hover:underline">Legal Disclaimer</Link> for more.
        </p>
      </section>
    </div>
  );
}
