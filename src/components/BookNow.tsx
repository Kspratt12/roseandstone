"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const BETTY_URL = "https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so";
const BREE_URL = "https://www.colourmebree.com/";

export default function BookNow() {
  const [activeTab, setActiveTab] = useState<"betty" | "bree">("betty");

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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[900px] mx-auto"
        >
          {/* Stylist tabs — like Haven's Week/Month toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-full p-1 border border-beige/40 shadow-sm">
              <button
                onClick={() => setActiveTab("betty")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-[12px] tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === "betty"
                    ? "bg-blush text-white shadow-md shadow-blush/15"
                    : "text-stone hover:text-charcoal"
                }`}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/50 shrink-0">
                  <Image src="/images/betty.jpg" alt="Betty" width={24} height={24} quality={95} className="w-full h-full object-cover" />
                </div>
                Betty
              </button>
              <button
                onClick={() => setActiveTab("bree")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-[12px] tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === "bree"
                    ? "bg-blush text-white shadow-md shadow-blush/15"
                    : "text-stone hover:text-charcoal"
                }`}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/50 shrink-0">
                  <Image src="/images/bree.jpg" alt="Bree" width={24} height={24} quality={95} className="w-full h-full object-cover" />
                </div>
                Bree
              </button>
            </div>
          </div>

          {/* Booking widget container */}
          <div className="bg-white rounded-2xl overflow-hidden border border-beige/40 shadow-sm">
            {activeTab === "betty" ? (
              /* Betty — Square Appointments embedded */
              <div className="relative w-full" style={{ height: "680px" }}>
                <iframe
                  src={BETTY_URL}
                  className="absolute inset-0 w-full h-full border-0"
                  title="Book with Betty — Real-time availability"
                  allow="payment"
                />
              </div>
            ) : (
              /* Bree — her booking site */
              <div className="flex flex-col items-center justify-center text-center py-16 px-8" style={{ minHeight: "680px" }}>
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-beige/50 mb-6">
                  <Image src="/images/bree.jpg" alt="Bree Szalkowski" width={96} height={96} quality={95} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal tracking-tight mb-2">Bree Szalkowski</h3>
                <p className="text-blush text-[10px] tracking-[0.15em] uppercase mb-4 font-light">Color Expert · 12+ Years</p>
                <p className="text-stone font-light text-[15px] leading-relaxed max-w-sm mb-8">
                  Bree books through her personal site with full availability,
                  pricing, and service details. Pick your service and time below.
                </p>
                <a
                  href={BREE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-blush text-white text-[12px] tracking-[0.15em] uppercase rounded-full hover:bg-blush-dark hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-blush/15 active:scale-[0.97]"
                >
                  View Availability & Book
                </a>
                <p className="text-stone/30 text-[11px] font-light mt-3">Opens ColourMeBree.com</p>

                <div className="mt-10 pt-6 border-t border-beige/30 w-full max-w-xs space-y-2">
                  <p className="text-stone/40 text-[11px] font-light">Or reach Bree directly:</p>
                  <div className="flex flex-col items-center gap-1">
                    <a href="tel:9847770699" className="text-blush hover:text-blush-dark transition-colors duration-200 text-[14px]">(984) 777-0699</a>
                    <a href="mailto:colourmebree@gmail.com" className="text-blush/60 hover:text-blush transition-colors duration-200 text-[13px]">colourmebree@gmail.com</a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <p className="text-center text-stone/30 text-[11px] font-light mt-4">
            {activeTab === "betty" ? "Betty books through Square Appointments" : "Bree books through ColourMeBree.com"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
