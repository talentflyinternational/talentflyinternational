import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsBySlug, getAllNewsSlugs } from "@/lib/news";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return { title: "News | Talent Fly International" };
  return { title: `${item.title} | Talent Fly International` };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-slate-600">
        <Link href="/immigration" className="text-primary-600 hover:underline">Immigration</Link>
        <span className="mx-2">/</span>
        <Link href="/immigration/news" className="text-primary-600 hover:underline">News & Updates</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{item.title}</span>
      </nav>
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <time dateTime={item.date}>{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
        {item.country && <span className="rounded bg-slate-100 px-2 py-0.5">{item.country}</span>}
      </div>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{item.title}</h1>
      <p className="mt-4 text-slate-600">{item.body}</p>
      <p className="mt-8 text-sm text-slate-500">
        This is general information only and does not constitute legal or immigration advice. See our <Link href="/immigration/disclaimer" className="text-primary-600 hover:underline">Legal Disclaimer</Link>. <Link href="/immigration/news" className="text-primary-600 hover:underline">← Back to News & Updates</Link>
      </p>
    </div>
  );
}
