"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blush text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            We&apos;d love to hear from you
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Address */}
            <div className="mb-10">
              <h3 className="font-serif text-xl text-charcoal mb-3">
                Visit Us
              </h3>
              <p className="text-stone font-light leading-relaxed">
                1340 SE Maynard Rd, Suite 101
                <br />
                Cary, NC 27511
              </p>
            </div>

            {/* Stylists Contact */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  Betty Vandivier
                </h3>
                <div className="space-y-1 text-stone font-light">
                  <p>
                    <a
                      href="tel:9196510004"
                      className="hover:text-blush transition-colors"
                    >
                      (919) 651-0004
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:betty@roseandstonesalon.com"
                      className="hover:text-blush transition-colors"
                    >
                      betty@roseandstonesalon.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  Bree Szalkowski
                </h3>
                <div className="space-y-1 text-stone font-light">
                  <p>
                    <a
                      href="tel:9847770699"
                      className="hover:text-blush transition-colors"
                    >
                      (984) 777-0699
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:colourmebree@gmail.com"
                      className="hover:text-blush transition-colors"
                    >
                      colourmebree@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 aspect-[16/9] bg-beige rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-xl text-stone/40 mb-2">
                    Map
                  </p>
                  <p className="text-stone/30 text-sm">
                    1340 SE Maynard Rd, Cary, NC
                  </p>
                </div>
              </div>
              {/* Replace with embedded Google Map iframe */}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-charcoal tracking-wider uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-cream border border-beige rounded-lg focus:outline-none focus:border-blush transition-colors text-charcoal font-light"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-charcoal tracking-wider uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-cream border border-beige rounded-lg focus:outline-none focus:border-blush transition-colors text-charcoal font-light"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-charcoal tracking-wider uppercase mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-cream border border-beige rounded-lg focus:outline-none focus:border-blush transition-colors text-charcoal font-light"
                  placeholder="(000) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm text-charcoal tracking-wider uppercase mb-2">
                  I&apos;m interested in...
                </label>
                <select className="w-full px-4 py-3 bg-cream border border-beige rounded-lg focus:outline-none focus:border-blush transition-colors text-stone font-light appearance-none">
                  <option value="">Select a service</option>
                  <option value="blonding">Blonding</option>
                  <option value="balayage">Balayage</option>
                  <option value="color">Color & Highlights</option>
                  <option value="blowout">Brazilian Blowout</option>
                  <option value="cut">Precision Cut</option>
                  <option value="extensions">Extensions</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-charcoal tracking-wider uppercase mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-cream border border-beige rounded-lg focus:outline-none focus:border-blush transition-colors text-charcoal font-light resize-none"
                  placeholder="Tell us about your hair goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-blush text-white text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
