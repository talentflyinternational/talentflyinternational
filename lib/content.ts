import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");
const POLICIES_DIR = path.join(CONTENT_DIR, "policies");
const TERMS_DIR = path.join(CONTENT_DIR, "terms");

export function getAllPolicySlugs(): string[] {
  if (!fs.existsSync(POLICIES_DIR)) return [];
  return fs.readdirSync(POLICIES_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

export function getAllTermSlugs(): string[] {
  if (!fs.existsSync(TERMS_DIR)) return [];
  return fs.readdirSync(TERMS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

export function getPolicyContent(slug: string): string {
  const mdPath = path.join(POLICIES_DIR, `${slug}.md`);
  const mdxPath = path.join(POLICIES_DIR, `${slug}.mdx`);
  if (fs.existsSync(mdPath)) return fs.readFileSync(mdPath, "utf-8");
  if (fs.existsSync(mdxPath)) return fs.readFileSync(mdxPath, "utf-8");
  return "";
}

export function getTermContent(slug: string): string {
  const mdPath = path.join(TERMS_DIR, `${slug}.md`);
  const mdxPath = path.join(TERMS_DIR, `${slug}.mdx`);
  if (fs.existsSync(mdPath)) return fs.readFileSync(mdPath, "utf-8");
  if (fs.existsSync(mdxPath)) return fs.readFileSync(mdxPath, "utf-8");
  return "";
}
