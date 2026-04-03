"use client";

import { motion } from "framer-motion";

const stylists = [
  {
    name: "Betty Vandivier",
    title: "Owner + Blonding Specialist",
    specialties: ["Blonding", "Balayage", "Brazilian Blowout", "Dimensional Color"],
    description:
      "If you've ever shown a stylist a photo of the blonde you wanted and left with something… not that — Betty is who you've been looking for. She's spent years perfecting dimensional, lived-in blondes that actually look like the inspiration photo. Whether it's icy platinum or warm honey balayage, she'll get you there.",
    personality:
      "The kind of stylist who remembers your coffee order and texts you aftercare tips at 9pm.",
    instagram: "@bettywiththegoodhair_",
    bookingUrl:
      "https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so",
    bookingLabel: "Book with Betty",
  },
  {
    name: "Brianna Szalkowski",
    title: "Owner + Color Expert",
    specialties: ["Color Transformations", "Highlights", "Dry Cutting", "Hair Loss Care"],
    description:
      "Bree trained under some of the best colorists in New York City and became a certified L'Oréal color expert — but what sets her apart is how she makes you feel. She's specially trained in hair loss care, and she approaches every client with the kind of warmth that makes you forget you're in a salon chair.",
    personality:
      "A book lover, beach person, and animal mom of four — she'll feel like a friend by the end of your first visit.",
    instagram: "@colourmebree",
    bookingUrl: "https://www.colourmebree.com/",
    bookingLabel: "Book with Bree",
  },
];

export default function Stylists() {
  return (
    <section id="stylists" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">
            Your Stylists
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Two stylists. Your full attention.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {stylists.map((stylist, i) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="group"
            >
              {/* Portrait Area */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] bg-beige relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blush/8 to-rose-gold/8" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-8xl text-blush/15 group-hover:text-blush/25 transition-colors duration-700">
                      {stylist.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-all duration-700" />
                </div>

                {/* Floating specialties */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5"
                >
                  {stylist.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-white/85 backdrop-blur-sm text-charcoal text-[11px] tracking-wider rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Info */}
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-1">
                {stylist.name}
              </h3>
              <p className="text-blush text-xs tracking-[0.15em] uppercase mb-4">
                {stylist.title}
              </p>
              <p className="text-stone font-light leading-[1.75] text-[15px] mb-3">
                {stylist.description}
              </p>
              <p className="text-blush-dark/80 text-sm italic mb-6">
                {stylist.personality}
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={stylist.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3 bg-blush text-white text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97]"
                >
                  {stylist.bookingLabel}
                </a>
                <a
                  href={`https://instagram.com/${stylist.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3 border border-beige text-stone text-sm tracking-wider rounded-full hover:border-blush-light hover:text-blush-dark transition-all duration-300"
                >
                  {stylist.instagram}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
