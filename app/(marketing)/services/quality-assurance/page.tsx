import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quality Assurance & Verification | Talent Fly International",
  description: "Verification of credentials and background to ensure candidate quality.",
};

export default function QualityAssurancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/services" className="text-sm text-primary-600 hover:underline">← Services</Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Quality Assurance & Verification</h1>
      <p className="mt-4 text-slate-600">
        We apply quality checks to our screening and shortlisting so that the candidates we present meet the standards we promise. Where agreed, we may also support or coordinate verification of credentials and background.
      </p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Our Approach</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Consistent application of screening criteria and recruitment policy</li>
          <li>Cross-check of key claims (e.g. education, employment dates) where part of our scope</li>
          <li>Confidentiality and data protection in line with our policies</li>
          <li>Review and improvement of our processes on an ongoing basis</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Policies</h2>
        <p className="mt-2 text-slate-600">
          Our quality and ethics are underpinned by our <Link href="/policies/recruitment" className="text-primary-600 hover:underline">Recruitment & Selection Policy</Link>, <Link href="/policies/data-protection" className="text-primary-600 hover:underline">Data Protection Policy</Link>, and <Link href="/policies/confidentiality" className="text-primary-600 hover:underline">Confidentiality Policy</Link>. For verification and compliance checklists, see <Link href="/documentation/compliance-checklist" className="text-primary-600 hover:underline">Compliance Checklist</Link>.
        </p>
      </section>
    </div>
  );
}
