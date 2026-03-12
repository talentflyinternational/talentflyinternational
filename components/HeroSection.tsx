"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* HD background image - professional team/office */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=1920"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-slate-900/70 z-10" aria-hidden />
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg"
        >
          Talent Fly International
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl text-slate-200 max-w-2xl mx-auto drop-shadow"
        >
          Singapore-based talent and recruitment services. Quality candidates through resume screening and shortlisting for companies in India and abroad.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link href="/services" className="group inline-block">
            <motion.span
              className="inline-flex rounded-lg bg-primary-500 px-6 py-3 text-white font-medium hover:bg-primary-600 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Services
            </motion.span>
          </Link>
          <Link href="/contact" className="group inline-block">
            <motion.span
              className="inline-flex rounded-lg border-2 border-white bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
