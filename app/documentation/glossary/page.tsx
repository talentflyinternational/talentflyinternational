import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glossary of Terms | Talent Fly International",
  description: "Definitions of terms used in our documentation and services.",
};

const terms: { term: string; definition: string }[] = [
  { term: "Shortlist", definition: "A curated list of candidates who have passed our screening and are presented to the employer for consideration (e.g. interview)." },
  { term: "Screening", definition: "The process of reviewing candidate resumes and profiles against the employer’s criteria to determine fit and eligibility." },
  { term: "Placement", definition: "Support provided from offer stage through to the candidate joining the employer, where within our scope (e.g. coordination, documentation)." },
  { term: "Work permit", definition: "Official authorisation from a country’s authorities allowing a person to work in that country. Requirements vary by country." },
  { term: "Employment Pass (EP)", definition: "A type of work pass in Singapore for foreign professionals, managers, and executives. Eligibility is set by the Ministry of Manpower." },
  { term: "Sponsorship", definition: "Where an employer sponsors a candidate’s visa or work permit (e.g. in the UK, UAE, Singapore). Rules are set by the relevant country." },
  { term: "Candidate", definition: "An individual who applies for or is referred for a role through Talent Fly International." },
  { term: "Client / Employer", definition: "The organisation that engages Talent Fly International for recruitment, screening, shortlisting, or placement services." },
  { term: "Service agreement", definition: "The contract or statement of work between Talent Fly International and a client defining scope, fees, and terms." },
  { term: "Data protection", definition: "The set of laws and practices that govern how personal data is collected, used, stored, and disclosed. We comply with applicable laws (e.g. GDPR, PDPA)." },
];

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/documentation" className="text-primary-600 hover:underline">Documentation</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Glossary</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Glossary of Terms</h1>
      <p className="mt-4 text-slate-600">
        Definitions of terms commonly used in our documentation, policies, and services. For immigration-specific terms, see also <Link href="/immigration/glossary" className="text-primary-600 hover:underline">Immigration Glossary</Link>.
      </p>

      <dl className="mt-10 space-y-6">
        {terms.map((item) => (
          <div key={item.term}>
            <dt className="font-semibold text-slate-900">{item.term}</dt>
            <dd className="mt-1 text-slate-600">{item.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
