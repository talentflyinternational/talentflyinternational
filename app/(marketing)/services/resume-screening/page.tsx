import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume Screening & Assessment | Talent Fly International",
  description: "Structured resume screening and assessment for quality candidate pipelines.",
};

export default function ResumeScreeningPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/services" className="text-sm text-primary-600 hover:underline">← Services</Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Resume Screening & Assessment</h1>
      <p className="mt-4 text-slate-600">
        We perform structured screening of candidate resumes against your role requirements. Our process ensures that only relevant, qualified profiles move forward, saving you time and improving hire quality.
      </p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">What We Screen For</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Relevance of experience and skills to the role</li>
          <li>Education and certifications where required</li>
          <li>Career progression and stability</li>
          <li>Location and mobility preferences (for India and abroad)</li>
          <li>Compliance with your stated criteria (e.g. work authorisation, language)</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Process</h2>
        <p className="mt-2 text-slate-600">
          After you share the job description and must-have criteria, we apply a consistent screening framework. Resumes that meet the bar are assessed in more detail and, where appropriate, shortlisted for your review. Our recruitment and selection policy ensures fairness and consistency. For full process details, see <Link href="/documentation/for-employers" className="text-primary-600 hover:underline">For Employers</Link> and <Link href="/policies/recruitment" className="text-primary-600 hover:underline">Recruitment & Selection Policy</Link>.
        </p>
      </section>
    </div>
  );
}
