"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/policies", label: "Policies" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/policies/privacy", label: "Privacy Policy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/documentation/for-candidates", label: "For Candidates" },
      { href: "/documentation/for-employers", label: "For Employers" },
      { href: "/immigration/overview", label: "Immigration" },
      { href: "/sitemap", label: "Sitemap" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="no-print border-t border-slate-200 bg-slate-100 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-800">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-primary-600 hover:underline underline-offset-2 transition-colors duration-200 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <Link href="/" className="inline-block mb-4 group">
            <motion.div
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="flex justify-center"
            >
              <Image
                src="/logo.png"
                alt="TalentFly International"
                width={140}
                height={38}
                className="h-8 w-auto object-contain"
                quality={90}
              />
            </motion.div>
          </Link>
          <p>Talent Fly International. Singapore-based talent and recruitment services.</p>
          <p className="mt-1">Resume screening, shortlisting, and quality candidate placement for India and abroad.</p>
          <p className="mt-3 text-slate-500 font-medium">
            © {new Date().getFullYear()} Talent Fly International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
