"use client";

import { motion } from "framer-motion";

export default function BookNow() {
  return (
    <section id="book" className="py-16 md:py-24 bg-cream">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-charcoal tracking-tight">
            Find Your{" "}
            <span className="italic text-blush">Spot Today</span>
          </h2>
          <p className="mt-4 text-stone font-light text-base leading-relaxed">
            Real-time availability. Pick your stylist, pick your time.
          </p>
        </motion.div>

        {/* Booking embed — full width like Haven */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[900px] mx-auto"
        >
          <div className="bg-white rounded-2xl overflow-hidden border border-beige/40 shadow-sm">
            {/* Header tabs */}
            <div className="flex border-b border-beige/30">
              <a
                href="https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 text-center text-[12px] tracking-[0.12em] uppercase font-light bg-blush text-white hover:bg-blush-dark transition-colors duration-200"
              >
                Book with Betty
              </a>
              <a
                href="https://www.colourmebree.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 text-center text-[12px] tracking-[0.12em] uppercase font-light text-stone hover:text-blush hover:bg-cream/50 transition-all duration-200 border-l border-beige/30"
              >
                Book with Bree
              </a>
            </div>

            {/* Square embed */}
            <div className="relative w-full" style={{ height: "520px" }}>
              <iframe
                src="https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so"
                className="absolute inset-0 w-full h-full border-0"
                title="Book with Betty — Square Appointments"
                allow="payment"
                loading="lazy"
              />
            </div>
          </div>

          <p className="text-center text-stone/40 text-[11px] font-light mt-4">
            Betty books through Square · Bree books through{" "}
            <a href="https://www.colourmebree.com/" target="_blank" rel="noopener noreferrer" className="text-blush/50 hover:text-blush transition-colors duration-200">
              ColourMeBree.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
