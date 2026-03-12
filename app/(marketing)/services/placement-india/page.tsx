import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Placement – India | Talent Fly International",
  description: "End-to-end placement support for roles based in India.",
};

export default function PlacementIndiaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/services" className="text-sm text-primary-600 hover:underline">← Services</Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Placement – India</h1>
      <p className="mt-4 text-slate-600">
        We support employers with placement for roles based in India. From shortlisted candidates through to joining, we help coordinate the process and required documentation where our scope includes it.
      </p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Scope</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Placement for positions located in India, across sectors we serve</li>
          <li>Coordination between candidate and employer on offer, joining date, and documents</li>
          <li>Reference to required documents and compliance as per our documentation</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Documentation</h2>
        <p className="mt-2 text-slate-600">
          For details on required documents and process for candidates and employers, see <Link href="/documentation/required-documents" className="text-primary-600 hover:underline">Required Documents</Link> and <Link href="/documentation/for-employers" className="text-primary-600 hover:underline">For Employers</Link>. Our <Link href="/terms" className="text-primary-600 hover:underline">Terms & Conditions</Link> and service agreements define the exact scope of placement support for each engagement.
        </p>
      </section>
    </div>
  );
}
