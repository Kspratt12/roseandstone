"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Products() {
  return (
    <section className="py-16 md:py-24 bg-beige/20">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
            In Our Chair & On Your Shelf
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-tight max-w-[800px] mx-auto">
            Products we{" "}
            <span className="italic">swear by.</span>
          </h2>
          <p className="mt-4 text-stone font-light text-[15px] leading-relaxed max-w-[540px] mx-auto">
            We only use and recommend products we&apos;d put in our own hair. Available in-salon.
          </p>
        </motion.div>

        {/* Product showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Main product hero — lineup */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 relative rounded-2xl overflow-hidden bg-[#d8eaf0] group"
          >
            <div className="relative aspect-[16/10] md:aspect-[16/9]">
              <Image
                src="/purplelineup.png"
                alt="Milkshake Silver Shine & Icy Blond product lineup"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Product description card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border border-beige/30 flex flex-col justify-center"
          >
            <h3 className="font-serif text-xl text-charcoal tracking-tight mb-3">
              Milkshake Silver Shine
            </h3>
            <p className="text-stone font-light text-[14px] leading-relaxed mb-4">
              The toning system that keeps your blonde cool, bright, and brass-free between visits.
              Salon-grade formula with natural milk proteins.
            </p>
            <ul className="space-y-2 mb-6">
              {["Tones unwanted brassiness", "Safe for grey, white & blonde", "Milk protein enriched", "Available in-salon"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-stone text-[13px] font-light">
                  <span className="text-blush text-xs">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="text-blush hover:text-blush-dark text-[13px] font-light underline underline-offset-4 decoration-blush/20 transition-colors duration-200"
            >
              Ask about products →
            </a>
          </motion.div>

          {/* Purple product detail */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden bg-cream group"
          >
            <div className="relative aspect-square">
              <Image
                src="/product1.png"
                alt="Milkshake Silver Shine shampoo"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-6 group-hover:scale-[1.05] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Second product */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden bg-cream group"
          >
            <div className="relative aspect-square">
              <Image
                src="/product2.png"
                alt="Milkshake product application"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-6 group-hover:scale-[1.05] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Purple product 3 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative rounded-2xl overflow-hidden bg-cream group"
          >
            <div className="relative aspect-square">
              <Image
                src="/purpleproduct3.png"
                alt="Milkshake toning shampoo"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-6 group-hover:scale-[1.05] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
