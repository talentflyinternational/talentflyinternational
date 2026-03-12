import type { Metadata } from "next";
import Link from "next/link";
import { getAllPolicySlugs, getAllTermSlugs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sitemap | Talent Fly International",
  description: "Full list of pages on the Talent Fly International website.",
};

export default function SitemapPage() {
  let policySlugs: string[] = [];
  let termSlugs: string[] = [];
  try {
    policySlugs = getAllPolicySlugs();
    termSlugs = getAllTermSlugs();
  } catch {
    // ignore
  }

  const policyLinks = policySlugs.map((slug) => ({
    href: `/policies/${slug}`,
    label: slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
  }));
  const termLinks = termSlugs.map((slug) => ({
    href: `/terms/${slug}`,
    label: slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Sitemap</h1>
      <p className="mt-2 text-slate-600">All pages on the Talent Fly International website.</p>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Main</h2>
        <ul className="mt-2 space-y-1">
          <li><Link href="/" className="text-primary-600 hover:underline">Home</Link></li>
          <li><Link href="/about" className="text-primary-600 hover:underline">About Us</Link></li>
          <li><Link href="/services" className="text-primary-600 hover:underline">Services</Link></li>
          <li><Link href="/contact" className="text-primary-600 hover:underline">Contact</Link></li>
          <li><Link href="/accessibility" className="text-primary-600 hover:underline">Accessibility</Link></li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">Services</h2>
        <ul className="mt-2 space-y-1">
          <li><Link href="/services/resume-screening" className="text-primary-600 hover:underline">Resume Screening</Link></li>
          <li><Link href="/services/shortlisting" className="text-primary-600 hover:underline">Shortlisting</Link></li>
          <li><Link href="/services/placement-india" className="text-primary-600 hover:underline">Placement – India</Link></li>
          <li><Link href="/services/placement-abroad" className="text-primary-600 hover:underline">Placement – Abroad</Link></li>
          <li><Link href="/services/quality-assurance" className="text-primary-600 hover:underline">Quality Assurance</Link></li>
          <li><Link href="/services/industries" className="text-primary-600 hover:underline">Industries</Link></li>
          <li><Link href="/services/how-it-works" className="text-primary-600 hover:underline">How It Works</Link></li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">Policies</h2>
        <ul className="mt-2 space-y-1">
          <li><Link href="/policies" className="text-primary-600 hover:underline">Policy Index</Link></li>
          {policyLinks.map((l) => (
            <li key={l.href}><Link href={l.href} className="text-primary-600 hover:underline">{l.label}</Link></li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">Terms & Conditions</h2>
        <ul className="mt-2 space-y-1">
          <li><Link href="/terms" className="text-primary-600 hover:underline">Terms Index</Link></li>
          {termLinks.map((l) => (
            <li key={l.href}><Link href={l.href} className="text-primary-600 hover:underline">{l.label}</Link></li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">Documentation</h2>
        <ul className="mt-2 space-y-1">
          <li><Link href="/documentation/for-candidates" className="text-primary-600 hover:underline">For Candidates</Link></li>
          <li><Link href="/documentation/for-employers" className="text-primary-600 hover:underline">For Employers</Link></li>
          <li><Link href="/documentation/required-documents" className="text-primary-600 hover:underline">Required Documents</Link></li>
          <li><Link href="/documentation/visa-types" className="text-primary-600 hover:underline">Visa Types</Link></li>
          <li><Link href="/documentation/compliance-checklist" className="text-primary-600 hover:underline">Compliance Checklist</Link></li>
          <li><Link href="/documentation/faq" className="text-primary-600 hover:underline">FAQ</Link></li>
          <li><Link href="/documentation/guides" className="text-primary-600 hover:underline">Guides</Link></li>
          <li><Link href="/documentation/forms" className="text-primary-600 hover:underline">Forms</Link></li>
          <li><Link href="/documentation/glossary" className="text-primary-600 hover:underline">Glossary</Link></li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-slate-900">Immigration</h2>
        <ul className="mt-2 space-y-1">
          <li><Link href="/immigration/overview" className="text-primary-600 hover:underline">Overview</Link></li>
          <li><Link href="/immigration/risk-policy" className="text-primary-600 hover:underline">Risk Policy</Link></li>
          <li><Link href="/immigration/compliance" className="text-primary-600 hover:underline">Compliance</Link></li>
          <li><Link href="/immigration/risk-mitigation" className="text-primary-600 hover:underline">Risk Mitigation</Link></li>
          <li><Link href="/immigration/disclaimer" className="text-primary-600 hover:underline">Legal Disclaimer</Link></li>
          <li><Link href="/immigration/glossary" className="text-primary-600 hover:underline">Glossary</Link></li>
          <li><Link href="/immigration/faq" className="text-primary-600 hover:underline">FAQ</Link></li>
          <li><Link href="/immigration/news" className="text-primary-600 hover:underline">News & Updates</Link></li>
          <li><Link href="/immigration/country/singapore" className="text-primary-600 hover:underline">Singapore</Link></li>
          <li><Link href="/immigration/country/india" className="text-primary-600 hover:underline">India</Link></li>
          <li><Link href="/immigration/country/uae" className="text-primary-600 hover:underline">UAE</Link></li>
          <li><Link href="/immigration/country/uk" className="text-primary-600 hover:underline">UK</Link></li>
          <li><Link href="/immigration/country/australia" className="text-primary-600 hover:underline">Australia</Link></li>
        </ul>
      </section>
    </div>
  );
}
