"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-beige rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blush/15 to-rose-gold/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-6xl text-blush/20">R&S</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-charcoal/15 to-transparent" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-28 h-28 bg-blush/8 rounded-2xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">
              The Rose & Stone Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-8">
              A dream brought to life
              <br />
              <span className="italic">by two girls with a love of hair.</span>
            </h2>

            <div className="space-y-5 text-stone font-light leading-[1.8] text-[15px]">
              <p>
                Rose & Stone Salon was a dream brought to life by two girls
                with a love of hair. With years of experience in the industry,
                we&apos;re highly trained in the latest trends and techniques,
                and we strive for excellence in every service we provide.
              </p>
              <p>
                Our goal is simple: leave your stresses at the door while we
                transform your look to the next level. This is a private,
                boutique space in Cary where every detail is intentional — from
                the warm lighting to the personalized consultations, from the
                premium products to the genuine conversations.
              </p>
              <p className="font-serif text-xl text-charcoal italic leading-relaxed">
                &ldquo;Come relax in our oasis while we bring your hair dreams
                to life.&rdquo;
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="w-10 h-[1px] bg-blush/60" />
              <span className="text-blush-dark text-sm tracking-wider font-light">
                Betty & Bree
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
