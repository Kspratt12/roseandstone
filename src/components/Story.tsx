"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/*
 * IMAGE GUIDE: Replace with a photo of the salon interior or both stylists together.
 * Add: /public/images/salon-interior.jpg (or salon-together.jpg)
 * Recommended: 800x1000px, warm lighting, shows the boutique space
 */

export default function Story() {
  return (
    <section id="story" className="py-16 md:py-24 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Side - Two stacked images for variety */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative">
              {/* Main image - salon/together photo */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-beige">
                <Image
                  src="/images/betty.jpg"
                  alt="Betty at Rose & Stone Salon"
                  fill
                  quality={85}
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/15 via-transparent to-transparent" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-xl shadow-lg shadow-charcoal/5 px-5 py-4 border border-beige/30">
                <p className="font-serif text-2xl text-charcoal leading-none">10+</p>
                <p className="text-stone text-[10px] tracking-wider uppercase font-light mt-0.5">Years Combined</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="max-w-[540px] lg:max-w-none"
          >
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-5 font-light">
              The Rose & Stone Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-light text-charcoal leading-[1.15] mb-8 tracking-tight max-w-[520px]">
              A dream brought to life by two girls with a{" "}
              <span className="italic">love of hair.</span>
            </h2>

            <div className="space-y-5 text-stone font-light leading-relaxed text-[15px] max-w-[520px]">
              <p>
                Rose & Stone Salon was born when two stylists realized they
                shared the same frustration. Every salon felt rushed. Impersonal.
                More like a factory than a place to relax.
              </p>
              <p>
                So Betty and Bree built something different. With over a decade of
                combined experience — from advanced blonding techniques to
                L&apos;Oréal color certification to specialized training in NYC —
                they created a private, boutique space where every client gets
                their full, undivided attention.
              </p>
              <p>
                Their goal is simple: leave your stresses at the door while they
                transform your look to the next level. No double-booking. No
                rushing. Just an hour that&apos;s entirely yours.
              </p>
              <p className="font-serif text-lg text-charcoal/80 italic leading-relaxed pt-2">
                &ldquo;Come relax in our oasis while we bring your hair dreams
                to life.&rdquo;
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-[1px] bg-gold/30" />
              <span className="text-taupe text-sm tracking-wider font-light italic">
                Betty & Bree
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
