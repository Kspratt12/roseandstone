"use client";

import { motion } from "framer-motion";

const bookingOptions = [
  {
    name: "Betty Vandivier",
    title: "Blonding Specialist",
    specialties: "Blonding • Balayage • Brazilian Blowout",
    phone: "(919) 651-0004",
    email: "betty@roseandstonesalon.com",
    url: "https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so",
    buttonText: "Book with Betty",
    platform: "via Square",
  },
  {
    name: "Bree Szalkowski",
    title: "Color Expert",
    specialties: "Color • Highlights • Dry Cut • Hair Loss Care",
    phone: "(984) 777-0699",
    email: "colourmebree@gmail.com",
    url: "https://www.colourmebree.com/",
    buttonText: "Book with Bree",
    platform: "via ColourMeBree.com",
  },
];

export default function Booking() {
  return (
    <section id="booking" className="py-24 md:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blush text-sm tracking-[0.3em] uppercase mb-4">
            Ready?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Book your appointment
          </h2>
          <p className="mt-4 text-stone font-light max-w-lg mx-auto">
            Choose your stylist and we&apos;ll take care of the rest. Your
            experience starts with a single click.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bookingOptions.map((option, i) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-cream rounded-2xl p-8 md:p-10 border border-beige hover:border-blush-light transition-all duration-500 hover:shadow-lg"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blush/0 to-rose-gold/0 group-hover:from-blush/5 group-hover:to-rose-gold/5 rounded-2xl transition-all duration-500" />

              <div className="relative z-10">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-beige mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <span className="font-serif text-3xl text-blush/40">
                    {option.name.charAt(0)}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-charcoal text-center mb-1">
                  {option.name}
                </h3>
                <p className="text-blush text-sm tracking-wider text-center uppercase mb-4">
                  {option.title}
                </p>

                <div className="w-12 h-[1px] bg-blush-light mx-auto mb-4" />

                <p className="text-stone text-sm text-center mb-6">
                  {option.specialties}
                </p>

                <div className="space-y-2 text-center text-sm text-stone-light mb-8">
                  <p>{option.phone}</p>
                  <p>{option.email}</p>
                </div>

                <a
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-blush text-white text-center text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-colors duration-300"
                >
                  {option.buttonText}
                </a>

                <p className="text-center text-xs text-stone-light mt-3">
                  {option.platform}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-stone text-sm font-light">
            Not sure who to book with?{" "}
            <a
              href="#contact"
              className="text-blush hover:text-blush-dark underline underline-offset-4 transition-colors"
            >
              Send us a message
            </a>{" "}
            and we&apos;ll help you find the perfect match.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
