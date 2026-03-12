import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immigration | Talent Fly International",
  description: "Immigration law overview, risk policy, compliance, and news. General information only; not legal advice.",
};

const links = [
  { href: "/immigration/overview", label: "Immigration Law – Overview" },
  { href: "/immigration/risk-policy", label: "Immigration Risk Policy" },
  { href: "/immigration/compliance", label: "Immigration Compliance Framework" },
  { href: "/immigration/risk-mitigation", label: "Immigration Risk Mitigation" },
  { href: "/immigration/disclaimer", label: "Legal Disclaimer (Immigration)" },
  { href: "/immigration/glossary", label: "Immigration Glossary" },
  { href: "/immigration/faq", label: "Immigration FAQ" },
  { href: "/immigration/news", label: "News & Updates" },
  { href: "/immigration/country/singapore", label: "Singapore" },
  { href: "/immigration/country/india", label: "India" },
  { href: "/immigration/country/uae", label: "UAE" },
  { href: "/immigration/country/uk", label: "UK" },
  { href: "/immigration/country/australia", label: "Australia" },
];

export default function ImmigrationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Immigration</h1>
      <p className="mt-4 text-slate-600">
        General information about immigration and work authorisation in the context of our recruitment and placement services. This is not legal or immigration advice. Always verify with official sources and seek professional advice for your situation.
      </p>
      <ul className="mt-10 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-primary-600 hover:text-primary-700 hover:underline underline-offset-2 font-medium transition-colors inline-block py-1"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
