import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Candidates – Process & Requirements | Talent Fly International",
  description: "Process and requirements for candidates using Talent Fly International recruitment services.",
};

export default function ForCandidatesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/documentation" className="text-primary-600 hover:underline">Documentation</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">For Candidates</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">For Candidates – Process & Requirements</h1>
      <p className="mt-4 text-slate-600">
        This page explains the typical process for candidates who apply or are referred to Talent Fly International for roles in India or abroad.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">1. Application or Referral</h2>
        <p className="mt-2 text-slate-600">
          You may apply for a role through a job posting we manage, or be referred by an employer or another channel. Ensure your CV/resume is up to date and accurately reflects your experience, qualifications, and contact details.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">2. Screening</h2>
        <p className="mt-2 text-slate-600">
          We screen your profile against the role requirements. This may include checking experience, skills, education, and (where relevant) work authorisation or visa eligibility. We may contact you for clarification or additional documents.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">3. Shortlisting</h2>
        <p className="mt-2 text-slate-600">
          If you are shortlisted, we will submit your profile to the employer and may coordinate next steps (e.g. interview scheduling, assessments). You will be informed of the outcome at each stage where appropriate.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">4. Employer Process</h2>
        <p className="mt-2 text-slate-600">
          The employer runs their own selection process (interviews, tests, etc.). We may facilitate communication and feedback. All hiring decisions are made by the employer.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">5. Offer and Onboarding</h2>
        <p className="mt-2 text-slate-600">
          If you receive an offer, the employer will communicate terms (salary, start date, etc.). You are responsible for ensuring you have the right to work (e.g. visa, work permit) and for providing any documents required. We may support with coordination as agreed in our scope.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Required Documents</h2>
        <p className="mt-2 text-slate-600">
          Commonly required documents include: ID, CV/resume, educational certificates, and (for overseas roles) passport and visa/work permit information. See our <Link href="/documentation/required-documents" className="text-primary-600 hover:underline">Required Documents</Link> checklist and <Link href="/documentation/faq" className="text-primary-600 hover:underline">FAQ</Link> for more.
        </p>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        For terms that apply to you as a candidate, see <Link href="/terms/candidates" className="text-primary-600 hover:underline">Terms for Candidates</Link>. For immigration-related information, see <Link href="/immigration/overview" className="text-primary-600 hover:underline">Immigration Overview</Link>.
      </p>
    </div>
  );
}
