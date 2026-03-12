import type { Metadata } from "next";
import Link from "next/link";
import { newsItems } from "@/lib/news";

export const metadata: Metadata = {
  title: "Immigration News & Updates | Talent Fly International",
  description: "Immigration and work permit news and updates. General information only; not legal advice.",
};

export default function ImmigrationNewsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/immigration" className="text-primary-600 hover:underline">Immigration</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">News & Updates</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">Immigration News & Updates</h1>
      <p className="mt-4 text-slate-600">
        General updates on immigration and work permit topics that may be relevant to candidates and employers. This is not legal or immigration advice. Always verify with official sources and seek professional advice for your situation.
      </p>

      <ul className="mt-10 space-y-6">
        {newsItems.map((item) => (
          <li key={item.slug} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <time dateTime={item.date}>{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
              {item.country && <span className="rounded bg-slate-100 px-2 py-0.5">{item.country}</span>}
            </div>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">
              <Link href={`/immigration/news/${item.slug}`} className="hover:text-primary-600 hover:underline">
                {item.title}
              </Link>
            </h2>
            <p className="mt-2 text-slate-600">{item.summary}</p>
            <Link href={`/immigration/news/${item.slug}`} className="mt-3 inline-block text-sm font-medium text-primary-600 hover:underline">
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
