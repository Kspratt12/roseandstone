"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#FAF7F5", "#f5e6e0", "#f0e6df"]
  );

  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor: bgColor }}
      className="py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-blush text-sm tracking-[0.3em] uppercase mb-8"
        >
          The Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight"
        >
          This isn&apos;t just a salon visit.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 font-serif text-2xl md:text-4xl italic text-blush-dark font-light"
        >
          It&apos;s your time to unwind.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-stone text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          From the moment you walk in, everything slows down. The warm lighting,
          the quiet conversation, the feeling that this time is entirely yours.
          No rush. No noise. Just you, a cup of something warm, and two stylists
          who genuinely care about how you feel when you leave.
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 mx-auto w-24 h-[1px] bg-blush-light"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized",
              text: "Every appointment is tailored to your hair, your goals, and your lifestyle.",
            },
            {
              title: "Unhurried",
              text: "We take our time — because beautiful hair can't be rushed.",
            },
            {
              title: "Intentional",
              text: "Every product, every technique, every moment is chosen with care.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="text-center"
            >
              <h3 className="font-serif text-xl text-charcoal mb-3">
                {item.title}
              </h3>
              <p className="text-stone text-sm font-light leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
