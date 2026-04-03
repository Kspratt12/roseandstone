"use client";

import { motion } from "framer-motion";

const trustItems = [
  {
    icon: "✦",
    label: "12+ Years Experience",
  },
  {
    icon: "✦",
    label: "Blonding Specialists",
  },
  {
    icon: "✦",
    label: "Private Boutique Salon",
  },
  {
    icon: "✦",
    label: "Hundreds of Happy Clients",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-8 md:py-10 border-b border-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className="text-blush text-lg">{item.icon}</span>
              <span className="text-charcoal text-sm md:text-base font-light tracking-wide">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
