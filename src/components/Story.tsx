"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-[1060px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side - use Betty's portrait instead of empty placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-beige">
              <Image
                src="/images/betty.jpg"
                alt="Betty at Rose & Stone Salon"
                fill
                quality={85}
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal/10 to-transparent" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
              The Rose & Stone Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-light text-charcoal leading-[1.15] mb-8">
              A dream brought to life by two girls with a{" "}
              <span className="italic">love of hair.</span>
            </h2>

            <div className="space-y-5 text-stone font-light leading-[1.8] text-[15px]">
              <p>
                Rose & Stone Salon was born when two stylists realized they
                shared the same frustration. Every salon felt rushed. Impersonal.
                More like a factory than a place to relax.
              </p>
              <p>
                So Betty and Bree built something different. With years of
                experience in the industry, they are highly trained in the latest
                trends and techniques, and they strive for excellence in every
                service they provide.
              </p>
              <p>
                Their goal is simple: leave your stresses at the door while they
                transform your look to the next level. This is a private,
                boutique space in Cary where every client gets their full
                attention, every single time.
              </p>
              <p className="font-serif text-lg text-charcoal/80 italic leading-relaxed">
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
