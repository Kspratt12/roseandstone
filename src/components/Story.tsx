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
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-8">
              We built the salon
              <br />
              <span className="italic">we always wished existed.</span>
            </h2>

            <div className="space-y-5 text-stone font-light leading-[1.8] text-[15px]">
              <p>
                Betty and Bree met doing what they love — and realized they
                shared the same frustration. Every salon felt rushed.
                Impersonal. Like a factory with better lighting.
              </p>
              <p>
                So they built something different. Betty brought years of
                blonding expertise. Bree brought NYC-trained color mastery and
                a L&apos;Or&eacute;al certification. Together, they opened Rose &
                Stone — a private, two-chair studio in Cary where every
                client gets their full attention.
              </p>
              <p>
                There&apos;s no front desk. No waiting room full of strangers.
                Just warm light, good conversation, and two stylists who treat
                your hair like it matters — because it does.
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
