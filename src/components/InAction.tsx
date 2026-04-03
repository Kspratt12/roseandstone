"use client";

import { motion } from "framer-motion";

export default function InAction() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
            Behind the Chair
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-tight max-w-[800px] mx-auto">
            Us in action.
          </h2>
          <p className="mt-4 text-stone font-light text-[15px] leading-relaxed max-w-[480px] mx-auto">
            Real sessions, real vibes. This is what a visit to Rose & Stone looks like.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[9/16] max-h-[580px] bg-charcoal group"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            >
              <source src="/videos/reel-betty-1.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent">
              <p className="text-white text-[13px] font-light tracking-wide">Behind the Chair</p>
              <p className="text-white/50 text-[11px] font-light mt-0.5">Betty V.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden aspect-[9/16] max-h-[580px] bg-charcoal group"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            >
              <source src="/videos/reel-salon.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent">
              <p className="text-white text-[13px] font-light tracking-wide">Salon Life</p>
              <p className="text-white/50 text-[11px] font-light mt-0.5">Rose & Stone</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
