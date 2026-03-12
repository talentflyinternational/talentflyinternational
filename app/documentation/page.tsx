import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation | Talent Fly International",
  description: "Process guides, checklists, FAQ, and documentation for candidates and employers.",
};

const docLinks = [
  { href: "/documentation/for-candidates", label: "For Candidates – Process & Requirements" },
  { href: "/documentation/for-employers", label: "For Employers – Process & Requirements" },
  { href: "/documentation/required-documents", label: "Required Documents" },
  { href: "/documentation/visa-types", label: "Visa Types & Work Permits" },
  { href: "/documentation/compliance-checklist", label: "Compliance & Verification Checklist" },
  { href: "/documentation/faq", label: "FAQ" },
  { href: "/documentation/guides", label: "Guides" },
  { href: "/documentation/forms", label: "Document Templates & Forms" },
  { href: "/documentation/glossary", label: "Glossary of Terms" },
];

export default function DocumentationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Documentation</h1>
      <p className="mt-4 text-slate-600">
        Process guides, checklists, FAQ, and other documentation for candidates and employers using Talent Fly International’s services.
      </p>
      <ul className="mt-10 space-y-3">
        {docLinks.map((link) => (
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
