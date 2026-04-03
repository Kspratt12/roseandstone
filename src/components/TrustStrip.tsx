"use client";

import { motion } from "framer-motion";

const trustItems = [
  "12+ years behind the chair",
  "Blonding & color specialists",
  "Private boutique studio",
  "Hundreds of loyal clients",
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-6 md:py-8 border-b border-beige/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {trustItems.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-stone text-xs md:text-sm font-light tracking-wide flex items-center gap-2"
            >
              <span className="text-blush/60 text-[10px]">&#10022;</span>
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
