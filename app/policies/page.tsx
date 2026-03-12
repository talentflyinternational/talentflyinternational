import type { Metadata } from "next";
import Link from "next/link";
import { getAllPolicySlugs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Policies | Talent Fly International",
  description: "Company policies including privacy, data protection, recruitment, and more.",
};

const policyTitles: Record<string, string> = {
  privacy: "Privacy Policy",
  "data-protection": "Data Protection Policy",
  recruitment: "Recruitment & Selection Policy",
  "equal-opportunity": "Equal Opportunity & Diversity",
  complaints: "Complaints & Grievance Policy",
  "anti-bribery": "Anti-Bribery & Corruption",
  "code-of-conduct": "Code of Conduct",
  confidentiality: "Confidentiality Policy",
  "it-security": "IT & Information Security Policy",
  whistleblowing: "Whistleblowing Policy",
  sustainability: "Environmental & Sustainability Policy",
};

export default function PoliciesIndexPage() {
  const slugs = getAllPolicySlugs();
  const withTitles = slugs.length
    ? slugs.map((slug) => ({ slug, title: policyTitles[slug] || slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") }))
    : Object.entries(policyTitles).map(([slug, title]) => ({ slug, title }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Policies</h1>
      <p className="mt-4 text-slate-600">
        Talent Fly International maintains the following policies. Each document sets out our approach, scope, and procedures. For questions, contact us at contact@talentflyinternational.com.
      </p>
      <ul className="mt-10 space-y-3">
        {withTitles.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              href={`/policies/${slug}`}
              className="text-primary-600 hover:text-primary-700 hover:underline underline-offset-2 font-medium transition-colors inline-block py-1"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
