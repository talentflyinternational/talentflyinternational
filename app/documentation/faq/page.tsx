import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Talent Fly International",
  description: "Frequently asked questions for candidates and employers.",
};

const candidateFaq = [
  {
    q: "Do I pay any fee to Talent Fly International?",
    a: "Unless we have agreed otherwise in writing, candidates do not pay fees for our recruitment or placement services.",
  },
  {
    q: "How long does the process take?",
    a: "It depends on the role and the employer. We aim to screen and shortlist within the timelines agreed with the client. Interview and offer stages are determined by the employer.",
  },
  {
    q: "Can I apply for roles in more than one country?",
    a: "Yes, if we are recruiting for such roles. You must meet the eligibility and work authorisation requirements for each country. We do not provide immigration advice.",
  },
  {
    q: "What if my details change after I apply?",
    a: "Please inform us of any material change (e.g. contact details, employment status, work authorisation) so we can keep your profile accurate.",
  },
];

const employerFaq = [
  {
    q: "How do we agree on fees?",
    a: "Fees are set out in a service agreement or proposal. They may be per role, per shortlist, or on another basis. Payment terms are specified in the agreement.",
  },
  {
    q: "Do you guarantee a hire?",
    a: "We do not guarantee that a suitable candidate will be found or that a candidate will accept an offer or obtain a work permit. We focus on quality screening and shortlisting.",
  },
  {
    q: "What if we need a replacement after placement?",
    a: "Where we have agreed a replacement or rebate policy in the service agreement, it will apply according to its terms (e.g. guarantee period, conditions).",
  },
  {
    q: "How do you handle candidate data?",
    a: "We process candidate data in line with our Privacy Policy and Data Protection Policy. We share it with you only for the purpose of the recruitment process and in accordance with applicable law.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/documentation" className="text-primary-600 hover:underline">Documentation</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">FAQ</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h1>
      <p className="mt-4 text-slate-600">
        Common questions from candidates and employers. For more detail, see our Documentation and Terms.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">For Candidates</h2>
        <ul className="mt-4 space-y-6">
          {candidateFaq.map((item, i) => (
            <li key={i}>
              <h3 className="font-medium text-slate-900">{item.q}</h3>
              <p className="mt-1 text-slate-600">{item.a}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">For Employers</h2>
        <ul className="mt-4 space-y-6">
          {employerFaq.map((item, i) => (
            <li key={i}>
              <h3 className="font-medium text-slate-900">{item.q}</h3>
              <p className="mt-1 text-slate-600">{item.a}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        <Link href="/contact" className="text-primary-600 hover:underline">Contact us</Link> for further questions.
      </p>
    </div>
  );
}
