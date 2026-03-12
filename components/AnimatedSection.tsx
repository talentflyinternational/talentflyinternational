"use client";

import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof motion;
};

export function AnimatedSection({ children, className = "", delay = 0, as = "section" }: Props) {
  const Component = motion[as] as typeof motion.section;
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={defaultVariants}
      custom={delay}
      className={className}
    >
      {children}
    </Component>
  );
}
