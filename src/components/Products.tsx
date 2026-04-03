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
        </motion.div>

        {/* Video + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10">
          {/* Product video — the star */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-charcoal aspect-[9/16] md:aspect-[4/5] max-h-[600px]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/reel-product-1.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Right side — product info + second video */}
          <div className="flex flex-col gap-6">
            {/* Product lineup image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden bg-[#d8eaf0]"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src="/purplelineup.png"
                  alt="Milkshake Silver Shine & Icy Blond lineup"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Product info card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-2xl p-8 border border-beige/30 flex-1"
            >
              <h3 className="font-serif text-xl text-charcoal tracking-tight mb-3">
                Milkshake Silver Shine
              </h3>
              <p className="text-stone font-light text-[14px] leading-relaxed mb-5">
                The toning system that keeps your blonde cool, bright, and brass-free between visits.
              </p>
              <ul className="space-y-2 mb-6">
                {["Tones unwanted brassiness", "Safe for grey, white & blonde", "Milk protein enriched", "Available in-salon"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-stone text-[13px] font-light">
                    <span className="text-blush text-xs">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center px-7 py-3 bg-blush text-white text-[12px] tracking-[0.12em] uppercase rounded-full hover:bg-blush-dark hover:scale-[1.03] transition-all duration-300">
                Ask About Products
              </a>
            </motion.div>
          </div>
        </div>

        {/* Second video row — Betty's work reels */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: "/videos/reel-product-2.mp4", label: "Product Demo" },
            { src: "/videos/reel-betty-1.mp4", label: "Behind the Chair" },
            { src: "/videos/reel-salon.mp4", label: "Salon Life" },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-xl overflow-hidden aspect-[9/16] max-h-[400px] bg-charcoal group"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal/60 to-transparent">
                <p className="text-white/80 text-[11px] tracking-wider font-light">{v.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
