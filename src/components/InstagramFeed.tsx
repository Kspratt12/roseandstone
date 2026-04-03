"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const feedItems = [
  { src: "/hair2.png", alt: "Platinum blonde waves" },
  { src: "/hair5.png", alt: "Honey blonde balayage" },
  { src: "/hair7.png", alt: "Icy blonde layers" },
  { src: "/hair10.png", alt: "Dimensional blonde highlights" },
  { src: "/hair11.png", alt: "Lived-in color" },
  { src: "/hair12.png", alt: "Natural blonde blend" },
  { src: "/hair13.png", alt: "Warm blonde waves" },
  { src: "/hair16.png", alt: "Bright blonde finish" },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-beige/20">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
            Follow Along
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-tight max-w-[800px] mx-auto">
            See our latest work
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {feedItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden bg-beige/40 hover:shadow-lg hover:shadow-charcoal/5 transition-all duration-300">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <a
              href="https://www.instagram.com/bettywiththegoodhair_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blush hover:text-blush-dark text-sm tracking-wider transition-colors duration-200 font-light"
            >
              @bettywiththegoodhair_
            </a>
            <span className="text-beige hidden sm:inline">·</span>
            <a
              href="https://www.instagram.com/colourmebree/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blush hover:text-blush-dark text-sm tracking-wider transition-colors duration-200 font-light"
            >
              @colourmebree
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
