"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=1920",
    title: "Talent Fly International",
    subtitle: "Singapore-based talent and recruitment services. Quality candidates through resume screening and shortlisting for companies in India and abroad.",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=90&w=1920",
    title: "Resume Screening & Shortlisting",
    subtitle: "Rigorous screening and curated shortlists for roles in India and across the globe.",
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=90&w=1920",
    title: "Placement in India & Abroad",
    subtitle: "End-to-end placement support with compliance and documentation for employers worldwide.",
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=90&w=1920",
    title: "Quality Candidates, Every Time",
    subtitle: "We connect you with the right talent. Trust our process for your next hire.",
  },
];

const SLIDE_DURATION = 5000;

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[index].image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
            quality={90}
          />
          <div className="absolute inset-0 bg-slate-900/70 z-10" aria-hidden />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-[200px] flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
              {slides[index].title}
            </h1>
            <p className="mt-4 text-xl text-slate-200 max-w-2xl mx-auto drop-shadow">
              {slides[index].subtitle}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Link href="/services" className="group inline-block">
                <motion.span
                  className="inline-flex rounded-xl bg-primary-500 px-6 py-3 text-white font-medium shadow-lg hover:shadow-glow"
                  whileHover={{ scale: 1.05, backgroundColor: "rgb(234 88 12)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Services
                </motion.span>
              </Link>
              <Link href="/contact" className="group inline-block">
                <motion.span
                  className="inline-flex rounded-xl border-2 border-white bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 hover:scale-110 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-250 no-print"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 hover:scale-110 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-250 no-print"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 no-print">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white shadow-glow" : "w-2 bg-white/50 hover:bg-white/80 hover:scale-125"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
