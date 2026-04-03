"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "/hair1.png", alt: "Icy platinum blonde" },
  { src: "/hair6.png", alt: "Golden blonde waves" },
  { src: "/hair8.png", alt: "Silver blonde balayage" },
  { src: "/hair14.png", alt: "Warm dimensional blonde" },
  { src: "/hair19.png", alt: "Lived-in balayage" },
  { src: "/hair24.png", alt: "Sleek platinum" },
  { src: "/hair4.png", alt: "Honey blonde" },
  { src: "/hair20.png", alt: "Rich brunette waves" },
];

export default function Transformations() {
  return (
    <section id="transformations" className="py-16 md:py-24 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-tight max-w-[800px] mx-auto">
            The proof is in the hair.
          </h2>
          <p className="mt-4 text-stone font-light text-[15px] leading-relaxed max-w-[540px] mx-auto">
            Blonding, balayage, color, and everything in between.
            Every look starts with a conversation.
          </p>
        </motion.div>

        {/* Masonry-style gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0 || i === 5 ? "row-span-2 aspect-[3/5]" : "aspect-[3/4]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={85}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Product Before/After — REAL product result */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          <div className="relative rounded-2xl overflow-hidden mx-auto max-w-lg w-full">
            <Image
              src="/product-before-after.png"
              alt="Milkshake Silver Shine — before and after"
              width={800}
              height={800}
              quality={90}
              className="w-full h-auto"
            />
          </div>
          <div className="max-w-md">
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
              The Products We Trust
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal leading-tight tracking-tight mb-6">
              Salon-grade results,{" "}
              <span className="italic">between visits.</span>
            </h3>
            <p className="text-stone font-light text-[15px] leading-relaxed mb-6">
              We use and recommend Milkshake Silver Shine — a professional toning system
              that keeps brassiness at bay and maintains that cool, icy tone between
              your appointments. Real results, no filters.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3 bg-blush text-white text-[12px] tracking-[0.12em] uppercase rounded-full hover:bg-blush-dark hover:scale-[1.03] transition-all duration-300 active:scale-[0.97]"
            >
              Ask About Products
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
