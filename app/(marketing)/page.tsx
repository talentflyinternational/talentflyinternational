import Link from "next/link";
import Slideshow from "@/components/Slideshow";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCard } from "@/components/AnimatedCard";
import HomeImages from "@/components/HomeImages";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Talent Fly International",
  description: "Singapore-based talent and recruitment company providing quality candidates, resume screening, and shortlisting for companies in India and abroad.",
  url: "https://talentflyinternational.com",
  sameAs: [],
};

const services = [
  {
    title: "Resume Screening",
    summary: "Rigorous screening of candidate resumes to match your requirements and ensure quality shortlists.",
    href: "/services/resume-screening",
  },
  {
    title: "Shortlisting",
    summary: "Curated shortlists of qualified candidates for roles in India and internationally.",
    href: "/services/shortlisting",
  },
  {
    title: "Placement",
    summary: "End-to-end placement support for employers in India and abroad, with compliance and documentation support.",
    href: "/services/placement-abroad",
  },
];

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Slideshow />

      <AnimatedSection className="py-16 bg-gradient-to-b from-white to-slate-50/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">What We Do</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <AnimatedCard key={s.href} title={s.title} summary={s.summary} href={s.href} index={i} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <HomeImages />

      <AnimatedSection className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 py-16" delay={0.2}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Resources</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>
              <Link href="/policies" className="text-primary-600 hover:text-primary-700 hover:underline underline-offset-2 transition-colors font-medium">
                Policies
              </Link>
              <span className="text-slate-500"> — Privacy, data protection, recruitment, and more</span>
            </li>
            <li>
              <Link href="/terms" className="text-primary-600 hover:text-primary-700 hover:underline underline-offset-2 transition-colors font-medium">
                Terms & Conditions
              </Link>
              <span className="text-slate-500"> — General, candidate, and employer terms</span>
            </li>
            <li>
              <Link href="/documentation/for-candidates" className="text-primary-600 hover:text-primary-700 hover:underline underline-offset-2 transition-colors font-medium">
                For Candidates
              </Link>
              <span className="text-slate-500"> — Process and requirements</span>
            </li>
            <li>
              <Link href="/immigration/overview" className="text-primary-600 hover:text-primary-700 hover:underline underline-offset-2 transition-colors font-medium">
                Immigration
              </Link>
              <span className="text-slate-500"> — Law overview, risk policy, news and updates</span>
            </li>
          </ul>
        </div>
      </AnimatedSection>
    </div>
  );
}
