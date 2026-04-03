"use client";

import { motion } from "framer-motion";

const stylists = [
  {
    name: "Betty Vandivier",
    title: "Owner + Blonding Specialist",
    specialties: ["Blonding", "Balayage", "Brazilian Blowout", "Dimensional Color"],
    description:
      "Betty is the blonde whisperer. With years of precision and passion, she's built a reputation as one of Cary's most sought-after blonding specialists. Whether it's a sun-kissed balayage or a full platinum transformation, Betty approaches every client with the same philosophy: your hair should feel like the best version of you.",
    personality:
      "Warm, detail-obsessed, and the kind of stylist who remembers your coffee order.",
    phone: "(919) 651-0004",
    email: "betty@roseandstonesalon.com",
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
      "Bree brings New York City training and L'Oréal expertise to every chair. With 12 years in the industry and a mastery of the dry cut, she sees hair as an art form. She's also specially trained in caring for clients experiencing hair loss — because everyone deserves to feel beautiful.",
    personality:
      "Creative, nurturing, and the kind of person who makes you feel like family from the first visit.",
    phone: "(984) 777-0699",
    email: "colourmebree@gmail.com",
    instagram: "@colourmebree",
    bookingUrl: "https://www.colourmebree.com/",
    bookingLabel: "Book with Bree",
  },
];

export default function Stylists() {
  return (
    <section id="stylists" className="py-24 md:py-36 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-blush text-sm tracking-[0.3em] uppercase mb-4">
            Meet Your Stylists
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            The hands behind the magic
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {stylists.map((stylist, i) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group"
            >
              {/* Portrait Area */}
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] bg-beige relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blush/10 to-rose-gold/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-8xl text-blush/20">
                      {stylist.name.charAt(0)}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-500" />
                </div>

                {/* Floating specialties */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                  className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2"
                >
                  {stylist.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-white/90 backdrop-blur-sm text-charcoal text-xs tracking-wider rounded-full"
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
              <p className="text-blush text-sm tracking-wider uppercase mb-4">
                {stylist.title}
              </p>
              <p className="text-stone font-light leading-relaxed mb-4">
                {stylist.description}
              </p>
              <p className="text-blush-dark text-sm italic mb-6">
                {stylist.personality}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={stylist.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blush text-white text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-colors duration-300"
                >
                  {stylist.bookingLabel}
                </a>
                <a
                  href={`https://instagram.com/${stylist.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-blush-light text-blush-dark text-sm tracking-wider uppercase rounded-full hover:bg-blush/10 transition-colors duration-300"
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
