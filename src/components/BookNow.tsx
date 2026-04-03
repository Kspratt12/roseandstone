"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const BETTY_URL = "https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so";
const BREE_URL = "https://book.squareup.com/appointments/wt3tmkx142a5b5/location/LS00H08XWN7XA/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so";

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
            {/* Live Square booking iframe — switches between stylists */}
            <div className="relative w-full" style={{ height: "680px" }}>
              <iframe
                key={activeTab}
                src={activeTab === "betty" ? BETTY_URL : BREE_URL}
                className="absolute inset-0 w-full h-full border-0"
                title={`Book with ${activeTab === "betty" ? "Betty" : "Bree"} — Real-time availability`}
                allow="payment"
              />
            </div>
          </div>

          <p className="text-center text-stone/30 text-[11px] font-light mt-4">
            {activeTab === "betty" ? "Betty books through Square Appointments" : "Bree books through ColourMeBree.com"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
