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
          className="text-center mb-12"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
            Book Online
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] font-light text-charcoal tracking-tight max-w-[800px] mx-auto">
            Find Your{" "}
            <span className="italic text-blush">Spot Today</span>
          </h2>
          <p className="mt-4 text-stone font-light text-[15px] leading-relaxed max-w-[500px] mx-auto">
            Real-time availability. Pick your stylist, pick your time, and we&apos;ll take care of the rest.
          </p>
        </motion.div>

        {/* Booking embed cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {/* Betty booking */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden border border-beige/40 shadow-sm hover:shadow-lg hover:shadow-blush/5 transition-all duration-300"
          >
            <div className="p-6 text-center border-b border-beige/30">
              <h3 className="font-serif text-xl text-charcoal tracking-tight">Betty Vandivier</h3>
              <p className="text-blush text-[10px] tracking-[0.15em] uppercase mt-1 font-light">Blonding Specialist</p>
            </div>
            <div className="relative w-full" style={{ minHeight: "480px" }}>
              <iframe
                src="https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so"
                className="absolute inset-0 w-full h-full border-0"
                title="Book with Betty — Square Appointments"
                allow="payment"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Bree booking */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl overflow-hidden border border-beige/40 shadow-sm hover:shadow-lg hover:shadow-blush/5 transition-all duration-300"
          >
            <div className="p-6 text-center border-b border-beige/30">
              <h3 className="font-serif text-xl text-charcoal tracking-tight">Bree Szalkowski</h3>
              <p className="text-blush text-[10px] tracking-[0.15em] uppercase mt-1 font-light">Color Expert</p>
            </div>
            <div className="p-8 flex flex-col items-center justify-center text-center" style={{ minHeight: "480px" }}>
              <p className="text-stone font-light text-[15px] leading-relaxed max-w-sm mb-6">
                Bree books through her personal site. View her availability, services, and schedule your appointment.
              </p>
              <a
                href="https://www.colourmebree.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs py-3.5 bg-blush text-white text-center text-[12px] tracking-wider uppercase rounded-full hover:bg-blush-dark hover:scale-[1.03] transition-all duration-300 active:scale-[0.97] block"
              >
                Book with Bree
              </a>
              <p className="text-stone-light text-[11px] mt-3 font-light">Opens ColourMeBree.com</p>

              <div className="mt-8 pt-6 border-t border-beige/30 w-full space-y-2">
                <p className="text-stone text-xs font-light">Or reach her directly:</p>
                <div className="flex flex-col items-center gap-1 text-[13px]">
                  <a href="tel:9847770699" className="text-blush hover:text-blush-dark transition-colors duration-200">(984) 777-0699</a>
                  <a href="mailto:colourmebree@gmail.com" className="text-blush hover:text-blush-dark transition-colors duration-200 text-[12px]">colourmebree@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
