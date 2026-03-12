import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immigration FAQ | Talent Fly International",
  description: "Frequently asked questions about immigration and work authorisation.",
};

const faq = [
  {
    q: "Does Talent Fly International provide immigration or visa advice?",
    a: "No. We provide general information only. We do not give legal or immigration advice. You should consult a qualified immigration lawyer or licensed adviser for your situation.",
  },
  {
    q: "Will you help me get a work permit or visa?",
    a: "We do not prepare or submit visa or work permit applications. We may support with general information, document checklists, or process coordination as part of recruitment. Obtaining a visa or work permit is your responsibility (and, where applicable, your employer’s).",
  },
  {
    q: "How do I know if I am eligible to work in another country?",
    a: "Eligibility is determined by that country’s laws and by the specific visa or work permit category. You must check the official website of the relevant immigration authority and/or seek professional advice. We cannot confirm your eligibility.",
  },
  {
    q: "Why does Talent Fly International ask about my work authorisation?",
    a: "For roles that require the right to work in a particular country, we or the employer need to know whether you have or can obtain that right. This is for recruitment matching only and does not constitute advice about your eligibility or how to apply.",
  },
  {
    q: "Where can I find the latest immigration rules?",
    a: "Always refer to the official immigration or government website of the country in question (e.g. Singapore MOM, UK Home Office, Australian Department of Home Affairs). Rules change; we do not guarantee our content is current.",
  },
];

export default function ImmigrationFAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/immigration" className="text-primary-600 hover:underline">Immigration</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">FAQ</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Immigration FAQ</h1>
      <p className="mt-4 text-slate-600">
        Common questions about immigration and work authorisation in the context of our services. See also our <Link href="/immigration/disclaimer" className="text-primary-600 hover:underline">Legal Disclaimer</Link>.
      </p>

      <ul className="mt-10 space-y-6">
        {faq.map((item, i) => (
          <li key={i}>
            <h2 className="font-medium text-slate-900">{item.q}</h2>
            <p className="mt-1 text-slate-600">{item.a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
