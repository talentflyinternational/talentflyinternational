import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Talent Fly International",
  description: "Resume screening, shortlisting, and quality candidate placement for India and abroad.",
};

const services = [
  { href: "/services/resume-screening", title: "Resume Screening & Assessment", summary: "Structured screening of resumes against your criteria to build a quality pipeline." },
  { href: "/services/shortlisting", title: "Candidate Shortlisting", summary: "Curated shortlists of candidates ready for interview." },
  { href: "/services/placement-india", title: "Placement – India", summary: "End-to-end placement support for roles based in India." },
  { href: "/services/placement-abroad", title: "Placement – Abroad", summary: "International placement with attention to visas, work permits, and compliance." },
  { href: "/services/quality-assurance", title: "Quality Assurance & Verification", summary: "Verification of credentials and background to ensure candidate quality." },
  { href: "/services/industries", title: "Industries We Serve", summary: "Overview of sectors and industries we support." },
  { href: "/services/how-it-works", title: "How It Works", summary: "Step-by-step process for candidates and employers." },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Our Services</h1>
      <p className="mt-4 text-slate-600">
        Talent Fly International provides resume screening, shortlisting, and placement services for companies in India and abroad. We focus on quality candidates and clear processes.
      </p>
      <ul className="mt-10 space-y-6">
        {services.map((s) => (
          <li
            key={s.href}
            className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-soft hover:border-primary-200 hover:shadow-glow transition-all duration-250"
          >
            <Link href={s.href} className="group block">
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">{s.title}</h2>
              <p className="mt-2 text-slate-600">{s.summary}</p>
              <span className="mt-2 inline-block text-sm font-medium text-primary-600 group-hover:text-accent-600 group-hover:underline underline-offset-2 transition-colors">
                Learn more →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
