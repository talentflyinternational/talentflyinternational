import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immigration Glossary | Talent Fly International",
  description: "Definitions of immigration-related terms used on this site.",
};

const terms: { term: string; definition: string }[] = [
  { term: "Work permit", definition: "Official authorisation from a country allowing a person to work there. Often employer-sponsored and time-limited." },
  { term: "Visa", definition: "A document or endorsement permitting entry into a country for a stated purpose (e.g. work, business). Work visas may be tied to a specific employer or role." },
  { term: "Employment Pass (EP)", definition: "A work pass in Singapore for foreign professionals, managers, and executives. Eligibility criteria (e.g. salary, qualifications) are set by the Ministry of Manpower." },
  { term: "S Pass", definition: "A work pass in Singapore for mid-level skilled staff. Subject to quotas and eligibility criteria set by MOM." },
  { term: "Sponsorship", definition: "Where an employer sponsors a foreign national’s visa or work permit (e.g. UK Skilled Worker, UAE work permit). The sponsor typically has obligations to the authority." },
  { term: "Right to work", definition: "Legal permission to work in a given country. May be based on nationality, residence, or a valid visa/work permit." },
  { term: "Points-based system", definition: "An immigration system where eligibility is based on points for factors such as salary, qualifications, and occupation (e.g. UK, Australia)." },
  { term: "Immigration authority", definition: "The government body that sets and enforces immigration rules (e.g. Ministry of Manpower in Singapore, Home Office in the UK)." },
];

export default function ImmigrationGlossaryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/immigration" className="text-primary-600 hover:underline">Immigration</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Glossary</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Immigration Glossary</h1>
      <p className="mt-4 text-slate-600">
        Definitions of immigration-related terms used on this website. For general terms, see <Link href="/documentation/glossary" className="text-primary-600 hover:underline">Documentation Glossary</Link>. This is not legal or immigration advice.
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
