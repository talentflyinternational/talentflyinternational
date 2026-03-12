import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import LegalLayout from "@/components/LegalLayout";
import { getAllPolicySlugs, getPolicyContent } from "@/lib/content";

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

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = getAllPolicySlugs();
  return slugs.length ? slugs.map((slug) => ({ slug })) : Object.keys(policyTitles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = policyTitles[slug] || slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title: `${title} | Talent Fly International` };
}

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;
  const content = getPolicyContent(slug);
  const title = policyTitles[slug] || slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  if (!content && !Object.hasOwn(policyTitles, slug)) {
    notFound();
  }

  return (
    <LegalLayout
      title={title}
      breadcrumbs={[{ label: "Policies", href: "/policies" }, { label: title }]}
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
        <PlaceholderPolicy slug={slug} title={title} />
      )}
    </LegalLayout>
  );
}

function PlaceholderPolicy({ slug, title }: { slug: string; title: string }) {
  return (
    <div className="space-y-6 text-slate-600">
      <p>This policy document is under review. The full text will be published here once approved.</p>
      <section>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Purpose</h2>
        <p className="mt-2">To define Talent Fly International’s approach and procedures in this area.</p>
      </section>
      <section>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Scope</h2>
        <p className="mt-2">This policy applies to all relevant staff, candidates, and clients as specified in the final document.</p>
      </section>
      <section>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-2">For questions: contact@talentflyinternational.com.</p>
      </section>
    </div>
  );
}
