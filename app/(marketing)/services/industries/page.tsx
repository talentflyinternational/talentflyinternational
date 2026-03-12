import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve | Talent Fly International",
  description: "Sectors and industries supported by Talent Fly International.",
};

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/services" className="text-sm text-primary-600 hover:underline">← Services</Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Industries We Serve</h1>
      <p className="mt-4 text-slate-600">
        Talent Fly International provides resume screening, shortlisting, and placement support across a range of industries for roles in India and abroad. The following is an overview; specific coverage depends on each engagement.
      </p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Sectors</h2>
        <ul className="mt-2 list-disc pl-6 space-y-1 text-slate-600">
          <li>Technology and IT</li>
          <li>Finance and banking</li>
          <li>Healthcare and life sciences</li>
          <li>Engineering and manufacturing</li>
          <li>Logistics and supply chain</li>
          <li>Professional services (e.g. consulting, legal, accounting)</li>
          <li>Consumer and retail</li>
          <li>Other sectors by arrangement</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Getting Started</h2>
        <p className="mt-2 text-slate-600">
          If your industry or role type is not listed, please <Link href="/contact" className="text-primary-600 hover:underline">contact us</Link>. We can discuss your needs and whether our services are a fit. See also <Link href="/services/how-it-works" className="text-primary-600 hover:underline">How It Works</Link> for the typical process.
        </p>
      </section>
    </div>
  );
}
