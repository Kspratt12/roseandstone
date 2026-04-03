"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AutoPlayVideo from "@/components/AutoPlayVideo";

export default function Products() {
  return (
    <section className="py-16 md:py-24 bg-[#e8dff5]/15">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — product video reel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden bg-[#c4b0e0]/20 mx-auto w-full max-w-lg aspect-[9/16] max-h-[640px]"
          >
            <AutoPlayVideo
              src="/videos/reel-product-1.mp4"
              poster="/videos/reel-product-1-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Right — info + lineup */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
              In Our Chair & On Your Shelf
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight tracking-tight mb-6 max-w-[450px]">
              Products we{" "}
              <span className="italic">swear by.</span>
            </h2>
            <p className="text-stone font-light text-[15px] leading-relaxed mb-8 max-w-[440px]">
              We only use and recommend products we&apos;d put in our own hair.
              Milkshake Silver Shine keeps your blonde cool, bright, and
              brass-free between visits. Available in-salon.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Tones unwanted brassiness",
                "Safe for grey, white & blonde hair",
                "Organic blueberry extract & milk proteins",
                "Paraben-free, SLES-free",
                "Available in-salon",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-stone text-[14px] font-light">
                  <span className="text-blush text-sm">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Product lineup */}
            <div className="relative rounded-xl overflow-hidden bg-[#d8eaf0] mb-6">
              <div className="relative aspect-[16/7]">
                <Image
                  src="/purplelineup.png"
                  alt="Milkshake Silver Shine & Icy Blond full lineup"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-blush text-white text-[12px] tracking-[0.12em] uppercase rounded-full hover:bg-blush-dark hover:scale-[1.03] transition-all duration-300 active:scale-[0.97]"
            >
              Ask About Products
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
