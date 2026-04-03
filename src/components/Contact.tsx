"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">
            Say Hello
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">
            Questions? We&apos;re here.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8">
              <h3 className="font-serif text-lg text-charcoal mb-2">
                Find Us
              </h3>
              <p className="text-stone font-light text-[15px] leading-relaxed">
                1340 SE Maynard Rd, Suite 101
                <br />
                Cary, NC 27511
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg text-charcoal mb-2">Betty</h3>
                <div className="space-y-0.5 text-stone font-light text-[15px]">
                  <p>
                    <a href="tel:9196510004" className="hover:text-blush transition-colors">
                      (919) 651-0004
                    </a>
                  </p>
                  <p>
                    <a href="mailto:betty@roseandstonesalon.com" className="hover:text-blush transition-colors">
                      betty@roseandstonesalon.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg text-charcoal mb-2">Bree</h3>
                <div className="space-y-0.5 text-stone font-light text-[15px]">
                  <p>
                    <a href="tel:9847770699" className="hover:text-blush transition-colors">
                      (984) 777-0699
                    </a>
                  </p>
                  <p>
                    <a href="mailto:colourmebree@gmail.com" className="hover:text-blush transition-colors">
                      colourmebree@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 aspect-[16/9] bg-beige/60 rounded-xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.8!2d-78.78!3d35.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ1JzM2LjAiTiA3OMKwNDYnNDguMCJX!5e0!3m2!1sen!2sus!4v1"
                className="absolute inset-0 w-full h-full border-0 opacity-80"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rose & Stone Salon location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <form className="space-y-5">
              <div>
                <label className="block text-xs text-charcoal/70 tracking-wider uppercase mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-cream border border-beige/60 rounded-lg focus:outline-none focus:border-blush/60 transition-colors text-charcoal font-light text-[15px]"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-charcoal/70 tracking-wider uppercase mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-cream border border-beige/60 rounded-lg focus:outline-none focus:border-blush/60 transition-colors text-charcoal font-light text-[15px]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-charcoal/70 tracking-wider uppercase mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-cream border border-beige/60 rounded-lg focus:outline-none focus:border-blush/60 transition-colors text-charcoal font-light text-[15px]"
                    placeholder="(000) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-charcoal/70 tracking-wider uppercase mb-1.5">
                  What are you interested in?
                </label>
                <select className="w-full px-4 py-3 bg-cream border border-beige/60 rounded-lg focus:outline-none focus:border-blush/60 transition-colors text-stone font-light text-[15px] appearance-none">
                  <option value="">Pick one</option>
                  <option value="blonding">Blonding</option>
                  <option value="balayage">Balayage</option>
                  <option value="color">Color & Highlights</option>
                  <option value="blowout">Brazilian Blowout</option>
                  <option value="cut">Haircut</option>
                  <option value="extensions">Extensions</option>
                  <option value="other">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-charcoal/70 tracking-wider uppercase mb-1.5">
                  Tell us more
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-cream border border-beige/60 rounded-lg focus:outline-none focus:border-blush/60 transition-colors text-charcoal font-light text-[15px] resize-none"
                  placeholder="What are your hair goals? Any concerns we should know about?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-blush text-white text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-all duration-300 active:scale-[0.97]"
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
