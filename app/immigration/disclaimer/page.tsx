import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Immigration – Legal Disclaimer | Talent Fly International",
  description: "Legal disclaimer for immigration-related information on this website.",
};

export default function ImmigrationDisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/immigration" className="text-primary-600 hover:underline">Immigration</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Legal Disclaimer</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Immigration – Legal Disclaimer</h1>
      <p className="mt-4 text-slate-600">
        Please read this disclaimer carefully. It applies to all immigration-related content on the Talent Fly International website and in our communications.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Not Legal or Immigration Advice</h2>
        <p className="mt-2 text-slate-600">
          The information we provide about immigration, visas, work permits, or country-specific requirements is for general information only. It does not constitute legal, immigration, or professional advice. Immigration rules are complex and change frequently. You must not rely on our content for decisions that have legal or immigration consequences. You should seek advice from a qualified immigration lawyer or licensed adviser for your specific situation.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">No Guarantee of Outcome</h2>
        <p className="mt-2 text-slate-600">
          Talent Fly International does not guarantee that any candidate will obtain a visa or work permit. Visa and work permit decisions are made solely by the relevant government or authority. We are not responsible for any refusal, delay, or change in rules that affects your application or employment.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Accuracy and Currency</h2>
        <p className="mt-2 text-slate-600">
          We endeavour to keep our general content accurate but do not guarantee that it is complete, current, or correct. Laws and policies change. Always verify current requirements with the official website of the relevant immigration or government authority before acting.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Limitation of Liability</h2>
        <p className="mt-2 text-slate-600">
          To the fullest extent permitted by law, Talent Fly International shall not be liable for any loss, cost, or damage (direct or indirect) arising from your reliance on any immigration-related information on our website or in our communications, or from any visa or work permit application or outcome. Our general <Link href="/terms/disclaimer" className="text-primary-600 hover:underline">Disclaimer & Limitation of Liability</Link> also applies.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Your Responsibility</h2>
        <p className="mt-2 text-slate-600">
          You are solely responsible for ensuring your compliance with immigration and employment law, for obtaining any required visa or work permit, and for the accuracy of any information you provide to us or to authorities. If you are an employer, you are responsible for right-to-work checks and sponsorship obligations as required by law.
        </p>
      </section>
    </div>
  );
}
