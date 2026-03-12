"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Services",
    children: [
      { href: "/services", label: "Overview" },
      { href: "/services/resume-screening", label: "Resume Screening" },
      { href: "/services/shortlisting", label: "Shortlisting" },
      { href: "/services/placement-india", label: "Placement – India" },
      { href: "/services/placement-abroad", label: "Placement – Abroad" },
      { href: "/services/quality-assurance", label: "Quality Assurance" },
      { href: "/services/industries", label: "Industries" },
      { href: "/services/how-it-works", label: "How It Works" },
    ],
  },
  {
    label: "Policies",
    href: "/policies",
  },
  {
    label: "Documentation",
    children: [
      { href: "/documentation/for-candidates", label: "For Candidates" },
      { href: "/documentation/for-employers", label: "For Employers" },
      { href: "/documentation/required-documents", label: "Required Documents" },
      { href: "/documentation/visa-types", label: "Visa Types" },
      { href: "/documentation/faq", label: "FAQ" },
      { href: "/documentation/glossary", label: "Glossary" },
    ],
  },
  {
    label: "Terms",
    href: "/terms",
  },
  {
    label: "Immigration",
    children: [
      { href: "/immigration/overview", label: "Overview" },
      { href: "/immigration/risk-policy", label: "Risk Policy" },
      { href: "/immigration/compliance", label: "Compliance" },
      { href: "/immigration/news", label: "News & Updates" },
      { href: "/immigration/glossary", label: "Glossary" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-slate-200 bg-white/98 backdrop-blur-md shadow-soft">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative h-10 w-[180px]"
            >
              <Image
                src="/logo.png"
                alt="TalentFly International"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
                priority
                quality={95}
                unoptimized={false}
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((item) =>
              "children" in item && item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200">
                    {item.label}
                  </button>
                  <AnimatePresence>
                    {openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full min-w-[200px] rounded-xl border border-slate-200 bg-white py-2 shadow-soft"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : "href" in item && item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : null
            )}
          </nav>

          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-200 py-4 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) =>
                "children" in item && item.children ? (
                  <div key={item.label}>
                    <span className="block px-3 py-2 text-sm font-semibold text-primary-700">{item.label}</span>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 pl-6 text-sm text-slate-600 hover:text-primary-600 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : "href" in item && item.href ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : null
              )}
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </header>
  );
}
