import { MetadataRoute } from "next";
import { getAllPolicySlugs, getAllTermSlugs } from "@/lib/content";
import { getAllNewsSlugs } from "@/lib/news";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://talentflyinternational.com";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/services/resume-screening",
  "/services/shortlisting",
  "/services/placement-india",
  "/services/placement-abroad",
  "/services/quality-assurance",
  "/services/industries",
  "/services/how-it-works",
  "/contact",
  "/sitemap",
  "/accessibility",
  "/documentation/for-candidates",
  "/documentation/for-employers",
  "/documentation/required-documents",
  "/documentation/visa-types",
  "/documentation/compliance-checklist",
  "/documentation/faq",
  "/documentation/guides",
  "/documentation/forms",
  "/documentation/glossary",
  "/immigration/overview",
  "/immigration/risk-policy",
  "/immigration/compliance",
  "/immigration/risk-mitigation",
  "/immigration/disclaimer",
  "/immigration/glossary",
  "/immigration/faq",
  "/immigration/news",
  "/immigration/country/singapore",
  "/immigration/country/india",
  "/immigration/country/uae",
  "/immigration/country/uk",
  "/immigration/country/australia",
  "/terms",
  "/policies",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let policySlugs: string[] = [];
  let termSlugs: string[] = [];
  try {
    policySlugs = getAllPolicySlugs();
    termSlugs = getAllTermSlugs();
  } catch {
    // content may not exist yet
  }

  const policyUrls = policySlugs.map((slug) => ({
    url: `${baseUrl}/policies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const termUrls = termSlugs.map((slug) => ({
    url: `${baseUrl}/terms/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const newsSlugs = getAllNewsSlugs();
  const newsUrls = newsSlugs.map((slug) => ({
    url: `${baseUrl}/immigration/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticUrls = staticRoutes.map((path) => ({
    url: path ? `${baseUrl}${path}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return [...staticUrls, ...policyUrls, ...termUrls, ...newsUrls];
}
