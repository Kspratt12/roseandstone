"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-beige rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blush/20 to-rose-gold/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-6xl text-blush/30">
                    R&S
                  </span>
                </div>
              </div>
              {/* Replace with real salon image */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blush/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-blush text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal leading-tight mb-8">
              Two women.
              <br />
              One shared dream.
            </h2>

            <div className="space-y-6 text-stone font-light leading-relaxed">
              <p>
                Rose & Stone was born from a simple belief: a salon visit should
                feel like a retreat, not just an appointment. Betty and Bree
                didn&apos;t just want to do hair — they wanted to create a space
                where women could exhale.
              </p>
              <p>
                With over 12 years of combined experience — Betty mastering the
                art of blonding and Bree studying under the best colorists in
                New York City — they brought their skills and their hearts to
                Cary, North Carolina.
              </p>
              <p>
                What they built isn&apos;t just a salon. It&apos;s a private,
                boutique space where every detail is intentional — from the warm
                lighting to the personalized consultations, from the premium
                products to the genuine conversations. This is a place where you
                matter.
              </p>
              <p className="font-serif text-xl text-charcoal italic">
                &ldquo;We created the space we always wished existed — peaceful,
                personal, and just for you.&rdquo;
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-blush" />
              <span className="text-blush-dark text-sm tracking-wider">
                Betty & Bree
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
