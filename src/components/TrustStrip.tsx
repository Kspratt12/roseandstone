"use client";

import { motion } from "framer-motion";

const trustItems = [
  "10+ years behind the chair",
  "Blonding & color specialists",
  "Private boutique studio",
  "Hundreds of loyal clients",
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-4 md:py-5 border-b border-beige/50">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10">
          {trustItems.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-stone text-[11px] md:text-xs font-light tracking-wider flex items-center gap-2"
            >
              <span className="text-gold/50 text-[9px]">&#10022;</span>
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
