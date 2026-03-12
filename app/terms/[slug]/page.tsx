import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import LegalLayout from "@/components/LegalLayout";
import { getAllTermSlugs, getTermContent } from "@/lib/content";

const termTitles: Record<string, string> = {
  general: "General Terms and Conditions",
  candidates: "Terms for Candidates",
  employers: "Terms for Employers",
  "service-agreement": "Service Agreement",
  "refund-cancellation": "Refund, Cancellation & Withdrawal",
  disclaimer: "Disclaimer & Limitation of Liability",
  cookies: "Cookie Policy",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = getAllTermSlugs();
  return slugs.length ? slugs.map((slug) => ({ slug })) : Object.keys(termTitles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = termTitles[slug] || slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${title} | Talent Fly International` };
}

export default async function TermPage({ params }: Props) {
  const { slug } = await params;
  const content = getTermContent(slug);
  const title = termTitles[slug] || slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  if (!content && !Object.hasOwn(termTitles, slug)) {
    notFound();
  }

  return (
    <LegalLayout
      title={title}
      breadcrumbs={[{ label: "Terms & Conditions", href: "/terms" }, { label: title }]}
      lastUpdated={content.match(/Last updated: ([^\n]+)/)?.[1]}
    >
      {content ? (
        <ReactMarkdown
          components={{
            h2: ({ children }) => <h2 className="mt-8 text-xl font-semibold text-slate-900">{children}</h2>,
            h3: ({ children }) => <h3 className="mt-6 text-lg font-semibold text-slate-800">{children}</h3>,
            p: ({ children }) => <p className="mt-2 text-slate-600">{children}</p>,
            ul: ({ children }) => <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">{children}</ul>,
            ol: ({ children }) => <ol className="mt-2 list-decimal pl-6 space-y-1 text-slate-600">{children}</ol>,
            a: ({ href, children }) => (
              <a href={href} className="text-primary-600 hover:underline" target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>
                {children}
              </a>
            ),
          }}
        >
          {content.replace(/^Last updated: [^\n]+\n\n?/, "")}
        </ReactMarkdown>
      ) : (
        <PlaceholderTerm slug={slug} title={title} />
      )}
    </LegalLayout>
  );
}

function PlaceholderTerm({ title }: { slug: string; title: string }) {
  return (
    <div className="space-y-6 text-slate-600">
      <p>These terms are under review. The full text will be published here once approved.</p>
      <section>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Parties</h2>
        <p className="mt-2">These terms apply between Talent Fly International and the user, candidate, or client as relevant.</p>
      </section>
      <section>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Governing Law</h2>
        <p className="mt-2">Governed by the laws of Singapore unless otherwise agreed. Disputes subject to the jurisdiction of the courts of Singapore.</p>
      </section>
      <section>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-2">contact@talentflyinternational.com</p>
      </section>
    </div>
  );
}
