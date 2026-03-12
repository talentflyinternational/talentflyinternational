import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

export default function LegalLayout({
  title,
  breadcrumbs,
  children,
  lastUpdated,
}: {
  title: string;
  breadcrumbs: Breadcrumb[];
  children: React.ReactNode;
  lastUpdated?: string;
}) {
  return (
    <div className="legal-content mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="no-print mb-6 text-sm text-slate-600" aria-label="Breadcrumb">
        {breadcrumbs.map((b, i) => (
          <span key={i}>
            {b.href ? (
              <Link href={b.href} className="text-primary-600 hover:text-primary-700 hover:underline underline-offset-2 transition-colors">
                {b.label}
              </Link>
            ) : (
              <span className="text-slate-900">{b.label}</span>
            )}
            {i < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
      </nav>
      <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
      {lastUpdated && (
        <p className="mt-2 text-sm text-slate-500">Last updated: {lastUpdated}</p>
      )}
      <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-headings:text-primary-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700 hover:prose-a:underline prose-a:underline-offset-2 prose-a:transition-colors">
        {children}
      </div>
    </div>
  );
}
