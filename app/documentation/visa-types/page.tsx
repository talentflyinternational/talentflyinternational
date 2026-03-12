import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visa Types & Work Permits | Talent Fly International",
  description: "Overview of visa and work permit types relevant to international placement.",
};

export default function VisaTypesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/documentation" className="text-primary-600 hover:underline">Documentation</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Visa Types</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Visa Types & Work Permits</h1>
      <p className="mt-4 text-slate-600">
        This page gives a high-level overview of common visa and work permit categories in key markets. Requirements and names vary by country and change over time. This is not legal or immigration advice. Always check official government sources and seek professional advice for your situation.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Singapore</h2>
        <p className="mt-2 text-slate-600">
          Common work passes include Employment Pass (EP) for professionals, S Pass for mid-level staff, and Work Permit for certain sectors. Eligibility depends on salary, qualifications, and employer. The Ministry of Manpower (MOM) sets and updates the rules.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">India</h2>
        <p className="mt-2 text-slate-600">
          Foreign nationals typically need an employment visa or other relevant visa category to work in India. Requirements depend on the role, employer, and duration. The Ministry of Home Affairs and related authorities publish current rules.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">UAE</h2>
        <p className="mt-2 text-slate-600">
          Work authorisation is usually tied to the employer (e.g. work permit and residence visa sponsored by the employer). Free zones and mainland have different regimes. Check the relevant emirate and federal immigration authorities for current requirements.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">UK</h2>
        <p className="mt-2 text-slate-600">
          The UK has a points-based system. Common routes include Skilled Worker visa (employer sponsorship), and other categories for specific purposes. Rules and salary thresholds are updated by the Home Office.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Australia</h2>
        <p className="mt-2 text-slate-600">
          Common work visas include subclass 482 (Temporary Skill Shortage), 186 (Employer Nomination Scheme), and 189/190 (skilled independent/nominated). Requirements are set by the Department of Home Affairs.
        </p>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        For country-specific summaries, see <Link href="/immigration/country/singapore" className="text-primary-600 hover:underline">Immigration by country</Link>. For our role, see <Link href="/immigration/overview" className="text-primary-600 hover:underline">Immigration Overview</Link> and <Link href="/immigration/disclaimer" className="text-primary-600 hover:underline">Legal Disclaimer</Link>.
      </p>
    </div>
  );
}
