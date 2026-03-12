"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  summary: string;
  href: string;
  index?: number;
};

export function AnimatedCard({ title, summary, href, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-soft hover:border-primary-300 hover:shadow-glow transition-all duration-250"
    >
      <Link href={href} className="block group">
        <h3 className="font-semibold text-primary-700 group-hover:text-primary-600 transition-colors">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{summary}</p>
        <span className="mt-3 inline-block text-sm font-medium text-primary-600 group-hover:text-accent-600 group-hover:underline underline-offset-2 transition-colors duration-200">
          Learn more →
        </span>
      </Link>
    </motion.div>
  );
}
