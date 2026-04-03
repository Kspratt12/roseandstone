"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">
            Say Hello
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Questions? We&apos;re here.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8">
              <h3 className="font-serif text-xl text-charcoal mb-3">Find Us</h3>
              <p className="text-stone font-light text-[15px] leading-relaxed">
                1340 SE Maynard Rd, Suite 101
                <br />
                <span className="text-stone-light text-[13px]">(around the back of the building)</span>
                <br />
                Cary, NC 27511
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-serif text-lg text-charcoal mb-2">Betty</h3>
                <div className="space-y-1 text-stone font-light text-[15px]">
                  <p>
                    <a href="tel:9196510004" className="hover:text-blush transition-colors">
                      (919) 651-0004
                    </a>
                  </p>
                  <p>
                    <a href="mailto:betty@roseandstonesalon.com" className="hover:text-blush transition-colors text-[13px]">
                      betty@roseandstonesalon.com
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg text-charcoal mb-2">Bree</h3>
                <div className="space-y-1 text-stone font-light text-[15px]">
                  <p>
                    <a href="tel:9847770699" className="hover:text-blush transition-colors">
                      (984) 777-0699
                    </a>
                  </p>
                  <p>
                    <a href="mailto:colourmebree@gmail.com" className="hover:text-blush transition-colors text-[13px]">
                      colourmebree@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video bg-beige/40 rounded-2xl overflow-hidden relative border border-beige/30">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=1340+SE+Maynard+Rd+Suite+101+Cary+NC+27511&zoom=14"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rose & Stone Salon location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <form className="space-y-5 bg-cream/50 p-6 md:p-8 rounded-2xl border border-beige/30">
              <div>
                <label className="block text-[11px] text-charcoal/50 tracking-[0.12em] uppercase mb-1.5 font-light">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-beige/50 rounded-lg focus:outline-none focus:border-blush/40 focus:ring-1 focus:ring-blush/10 transition-all text-charcoal font-light text-[15px]"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-charcoal/50 tracking-[0.12em] uppercase mb-1.5 font-light">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-beige/50 rounded-lg focus:outline-none focus:border-blush/40 focus:ring-1 focus:ring-blush/10 transition-all text-charcoal font-light text-[15px]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-charcoal/50 tracking-[0.12em] uppercase mb-1.5 font-light">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white border border-beige/50 rounded-lg focus:outline-none focus:border-blush/40 focus:ring-1 focus:ring-blush/10 transition-all text-charcoal font-light text-[15px]"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-charcoal/50 tracking-[0.12em] uppercase mb-1.5 font-light">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-beige/50 rounded-lg focus:outline-none focus:border-blush/40 focus:ring-1 focus:ring-blush/10 transition-all text-charcoal font-light text-[15px] resize-none"
                  placeholder="Tell us about your hair goals or ask a question..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-blush text-white text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97] cursor-pointer"
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
