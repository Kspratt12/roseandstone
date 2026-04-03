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
      <div className="w-full max-w-[680px] mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-serif text-3xl md:text-5xl lg:text-[3.2rem] font-light text-charcoal leading-tight text-center"
        >
          This isn&apos;t just a haircut.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-3 font-serif text-xl md:text-2xl italic text-blush-dark/70 font-light text-center"
        >
          It&apos;s the best part of your week.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 text-stone text-[15px] md:text-base font-light leading-[1.8] text-center max-w-lg mx-auto"
        >
          The moment you walk in, everything slows down. Warm light, quiet
          music, and a stylist who already knows how you take your coffee. No
          rush. No assembly line. Just an hour that&apos;s entirely yours.
        </motion.p>

        <div className="w-12 h-[1px] bg-gold/25 mx-auto mt-12" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized",
              text: "Your appointment is built around your hair, your goals, and how you actually live your life.",
            },
            {
              title: "Unhurried",
              text: "We never double-book. Your time slot is yours, with no rushing and no shortcuts.",
            },
            {
              title: "Intentional",
              text: "Every product and technique is chosen for your specific hair. Nothing generic, nothing guessed.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="text-center"
            >
              <h3 className="font-serif text-lg text-charcoal mb-2">{item.title}</h3>
              <p className="text-stone text-[13px] font-light leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
