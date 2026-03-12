import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Talent Fly International",
  description: "Learn about Talent Fly International, a Singapore-based talent and recruitment company serving India and abroad.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">About Us</h1>
      <p className="mt-4 text-slate-600 text-lg">
        Talent Fly International is a Singapore-based talent equation company. We specialise in providing quality candidates to companies in India and overseas through rigorous resume screening and shortlisting.
      </p>
      <section className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
        <h2 className="text-xl font-semibold text-primary-800">Our Mission</h2>
        <p className="mt-2 text-slate-600">
          To connect employers with the right talent by ensuring every candidate we present has been carefully screened and shortlisted against your requirements. We serve both Indian and international clients with the same standards of quality and compliance.
        </p>
      </section>
      <section className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-soft">
        <h2 className="text-xl font-semibold text-primary-800">What We Offer</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Resume screening and assessment</li>
          <li>Candidate shortlisting tailored to role and client</li>
          <li>Placement support for roles in India</li>
          <li>Placement support for roles abroad (including Singapore and other markets)</li>
          <li>Quality assurance and verification of credentials</li>
        </ul>
      </section>
      <section className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
        <h2 className="text-xl font-semibold text-primary-800">Our Base</h2>
        <p className="mt-2 text-slate-600">
          We are headquartered in Singapore and operate with a clear understanding of local and international immigration, compliance, and employment practices. Our policies, terms, and documentation are designed to support both candidates and employers through transparent processes.
        </p>
      </section>
    </div>
  );
}
