export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  country?: string;
  body: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "singapore-ep-criteria-update-2025",
    title: "Singapore Employment Pass criteria update (2025)",
    date: "2025-01-15",
    summary: "Summary of announced updates to EP eligibility and complementary framework. General information only.",
    country: "Singapore",
    body: "The Ministry of Manpower (MOM) periodically reviews Employment Pass (EP) criteria, including salary thresholds and the complementary framework (points-based assessment). Employers and candidates should check the official MOM website for the latest requirements. We do not provide immigration advice; this is a general update for awareness only.",
  },
  {
    slug: "uk-skilled-worker-threshold-changes",
    title: "UK Skilled Worker visa salary threshold changes",
    date: "2024-12-01",
    summary: "Overview of recent and planned changes to salary thresholds for the Skilled Worker route.",
    country: "UK",
    body: "The UK Home Office has implemented or announced changes to minimum salary thresholds for the Skilled Worker route. These affect new applications and may affect extensions. Exact figures and transition rules are set by the Home Office. Always refer to the official GOV.UK Skilled Worker guidance for current requirements. We do not provide immigration advice.",
  },
  {
    slug: "uae-work-permit-process-overview",
    title: "UAE work permit and visa process – general overview",
    date: "2024-11-10",
    summary: "General overview of typical steps for employer-sponsored work permits in the UAE.",
    country: "UAE",
    body: "In the UAE, work authorisation is typically employer-sponsored. The process may involve labour approval, entry permit, medical and Emirates ID, and residence visa stamping. Free zones and mainland have different procedures. This is general information only; rules vary by emirate and sector. Refer to the relevant authority and seek professional advice.",
  },
  {
    slug: "australia-482-186-update",
    title: "Australia – Temporary and permanent skilled visa routes",
    date: "2024-10-20",
    summary: "Brief summary of 482 and 186 visa routes and where to find current information.",
    country: "Australia",
    body: "Australia’s Temporary Skill Shortage (subclass 482) and Employer Nomination Scheme (subclass 186) visas are common routes for skilled workers. Occupation lists, skills assessments, and eligibility criteria are set by the Department of Home Affairs and can change. This is general information only. For current requirements, see the official Department of Home Affairs website.",
  },
  {
    slug: "india-employment-visa-basics",
    title: "India employment visa – basic requirements",
    date: "2024-09-05",
    summary: "General overview of employment visa requirements for foreign nationals in India.",
    country: "India",
    body: "Foreign nationals taking up employment in India generally need an employment visa or other relevant category. Requirements may include minimum salary, qualifications, and employer eligibility. The Ministry of Home Affairs and related bodies publish current rules. This is general information only; we do not provide immigration advice.",
  },
  {
    slug: "immigration-compliance-reminder",
    title: "Reminder: Immigration compliance is your responsibility",
    date: "2024-08-01",
    summary: "A reminder that candidates and employers are responsible for immigration compliance.",
    country: undefined,
    body: "Talent Fly International provides recruitment and placement support only. We do not provide immigration or legal advice. Candidates are responsible for ensuring they have the right to work and for obtaining any required visa or work permit. Employers are responsible for right-to-work checks, sponsorship obligations, and compliance with local law. Please refer to our Immigration Disclaimer and seek professional advice for your situation.",
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}

export function getAllNewsSlugs(): string[] {
  return newsItems.map((n) => n.slug);
}
