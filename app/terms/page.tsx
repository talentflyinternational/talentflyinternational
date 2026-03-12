import type { Metadata } from "next";
import Link from "next/link";
import { getAllTermSlugs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions | Talent Fly International",
  description: "Terms and conditions for candidates, employers, and general use.",
};

const termTitles: Record<string, string> = {
  general: "General Terms and Conditions",
  candidates: "Terms for Candidates",
  employers: "Terms for Employers",
  "service-agreement": "Service Agreement",
  "refund-cancellation": "Refund, Cancellation & Withdrawal",
  disclaimer: "Disclaimer & Limitation of Liability",
  cookies: "Cookie Policy",
};

export default function TermsIndexPage() {
  const slugs = getAllTermSlugs();
  const withTitles = slugs.length
    ? slugs.map((slug) => ({ slug, title: termTitles[slug] || slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") }))
    : Object.entries(termTitles).map(([slug, title]) => ({ slug, title }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Terms & Conditions</h1>
      <p className="mt-4 text-slate-600">
        The following terms and conditions govern the use of our services and this website. Please read the relevant document for your relationship with Talent Fly International (as candidate or employer) and our general terms.
      </p>
      <ul className="mt-10 space-y-3">
        {withTitles.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              href={`/terms/${slug}`}
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
