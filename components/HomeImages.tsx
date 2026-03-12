"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeImages() {
  return (
    <section className="py-16 border-t border-slate-200 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-slate-900 text-center mb-12"
        >
          Global reach, local expertise
        </motion.h2>
        <p className="text-center text-slate-600 mb-12 max-w-xl mx-auto">
          We serve companies in India and abroad with the same standards of quality and compliance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-shadow duration-250 cursor-default"
          >
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=90&w=800"
              alt="Professional recruitment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
              <span className="text-white font-medium text-sm">Quality candidates</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-shadow duration-250 cursor-default"
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=90&w=800"
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
              <span className="text-white font-medium text-sm">India & abroad</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-shadow duration-250 cursor-default"
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=90&w=800"
              alt="Screening and shortlisting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
              <span className="text-white font-medium text-sm">Resume screening</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
