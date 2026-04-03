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
      className="py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] font-light text-charcoal leading-tight"
        >
          This isn&apos;t just a haircut.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-4 font-serif text-2xl md:text-3xl italic text-blush-dark/80 font-light"
        >
          It&apos;s the best part of your week.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-8 text-stone text-base md:text-lg max-w-xl mx-auto font-light leading-[1.8]"
        >
          The moment you walk in, everything slows down. Warm light, quiet
          music, and a stylist who already knows how you take your coffee. No
          rush. No assembly line. Just an hour that&apos;s entirely yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 mx-auto w-16 h-[1px] bg-blush-light/60"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Personalized",
              text: "Your appointment is built around your hair, your goals, and how you actually live your life.",
            },
            {
              title: "Unhurried",
              text: "We never double-book. Your time slot is yours — no rushing, no shortcuts.",
            },
            {
              title: "Intentional",
              text: "Every product and technique is chosen for your specific hair. Nothing generic, nothing guessed.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="text-center"
            >
              <h3 className="font-serif text-lg text-charcoal mb-2">
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
