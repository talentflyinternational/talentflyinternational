import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Talent Fly International",
  description: "Get in touch with Talent Fly International for recruitment and placement services.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <p className="mt-4 text-slate-600">
        For enquiries about our resume screening, shortlisting, or placement services, please reach out using the details below.
      </p>
      <section className="mt-8 rounded-2xl border-2 border-slate-200 bg-slate-50 p-8 shadow-soft hover:border-primary-200 hover:shadow-glow transition-all duration-250">
        <h2 className="text-lg font-semibold text-primary-800">Talent Fly International</h2>
        <p className="mt-2 text-slate-600">Singapore-based talent and recruitment services.</p>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li><strong>Email:</strong> contact@talentflyinternational.com</li>
          <li><strong>Enquiries:</strong> For candidates and employers — use the email above for general enquiries, partnerships, and service information.</li>
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          We aim to respond to all enquiries within 2–3 business days. For policy or terms-related questions, please refer to our <a href="/policies" className="text-primary-600 hover:text-primary-700 hover:underline underline-offset-2 transition-colors font-medium">Policies</a> and <a href="/terms" className="text-primary-600 hover:text-primary-700 hover:underline underline-offset-2 transition-colors font-medium">Terms & Conditions</a> pages.
        </p>
      </section>
    </div>
  );
}
