import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const countries: Record<string, { title: string; content: string }> = {
  singapore: {
    title: "Singapore – Immigration Overview",
    content: "Singapore’s work pass framework is administered by the Ministry of Manpower (MOM). The main categories include: Employment Pass (EP) for professionals, managers, and executives, typically requiring a minimum salary and qualifications; S Pass for mid-level skilled staff, subject to quotas; and Work Permit for workers in specified sectors (e.g. construction, manufacturing). Eligibility criteria (including salary thresholds and qualifying scores) are updated by MOM. Employers must typically sponsor the pass. This is a brief overview only and is not legal or immigration advice. For current rules, see the official MOM website.",
  },
  india: {
    title: "India – Immigration Overview",
    content: "Foreign nationals wishing to work in India generally need an employment visa or other relevant category as set by the Ministry of Home Affairs and related bodies. Requirements depend on the role, employer, duration, and nationality. Some roles may require prior approval or registration. Rules and categories are subject to change. This is general information only; it is not legal or immigration advice. Always check the official government and immigration sources for current requirements.",
  },
  uae: {
    title: "UAE – Immigration Overview",
    content: "In the UAE, work authorisation is typically tied to the employer. Employers sponsor work permits and residence visas for employees. There are different regimes for mainland and free zones, and requirements can vary by emirate. Recent reforms have introduced additional options (e.g. flexible work, freelance permits in some jurisdictions). This is a high-level overview only and is not legal or immigration advice. For current rules, refer to the relevant emirate and federal immigration authorities.",
  },
  uk: {
    title: "UK – Immigration Overview",
    content: "The UK operates a points-based immigration system. The Skilled Worker route allows UK employers to sponsor workers who meet the required points (e.g. salary, occupation, English language). Other routes exist for specific purposes (e.g. Global Talent, temporary work). Eligibility, salary thresholds, and occupation codes are set and updated by the Home Office. This is general information only; it is not legal or immigration advice. Always check the official GOV.UK immigration pages for current rules.",
  },
  australia: {
    title: "Australia – Immigration Overview",
    content: "Australia has several visa categories for workers, including the Temporary Skill Shortage (subclass 482) visa, the Employer Nomination Scheme (subclass 186), and skilled independent or nominated visas (e.g. 189, 190). Requirements include occupation lists, skills assessments, and points where applicable. Rules are set by the Department of Home Affairs and change over time. This is a brief overview only and is not legal or immigration advice. For current requirements, see the official Department of Home Affairs website.",
  },
};

type Props = { params: Promise<{ country: string }> };

export async function generateStaticParams() {
  return Object.keys(countries).map((country) => ({ country }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const data = countries[country];
  if (!data) return { title: "Immigration | Talent Fly International" };
  return { title: `${data.title} | Talent Fly International` };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const data = countries[country];
  if (!data) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/immigration" className="text-primary-600 hover:underline">Immigration</Link>
        <span className="mx-2">/</span>
        <Link href="/immigration/overview" className="text-primary-600 hover:underline">Overview</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{data.title.split(" – ")[0]}</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">{data.title}</h1>
      <p className="mt-4 text-slate-600">{data.content}</p>
      <p className="mt-8 text-sm text-slate-500">
        See our <Link href="/immigration/disclaimer" className="text-primary-600 hover:underline">Legal Disclaimer</Link> and <Link href="/immigration/overview" className="text-primary-600 hover:underline">Immigration Overview</Link>. We do not provide immigration advice.
      </p>
    </div>
  );
}
