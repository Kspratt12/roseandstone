"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[11px] tracking-[0.3em] uppercase mb-4 font-light">Say Hello</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal tracking-tight max-w-[800px] mx-auto">
            Questions? We&apos;re here.
          </h2>
        </motion.div>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-16 text-center max-w-[960px] mx-auto"
        >
          <div>
            <h3 className="font-serif text-lg text-charcoal mb-2 tracking-wide">Find Us</h3>
            <p className="text-stone font-light text-[14px] leading-relaxed">
              1340 SE Maynard Rd, Suite 101
              <br />
              <span className="text-stone-light text-[12px]">(around the back of the building)</span>
              <br />
              Cary, NC 27511
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-charcoal mb-2 tracking-wide">Betty</h3>
            <div className="space-y-0.5 text-stone font-light text-[14px]">
              <p><a href="tel:9196510004" className="hover:text-blush transition-colors duration-200">(919) 651-0004</a></p>
              <p><a href="mailto:betty@roseandstonesalon.com" className="hover:text-blush transition-colors duration-200 text-[13px]">betty@roseandstonesalon.com</a></p>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg text-charcoal mb-2 tracking-wide">Bree</h3>
            <div className="space-y-0.5 text-stone font-light text-[14px]">
              <p><a href="tel:9847770699" className="hover:text-blush transition-colors duration-200">(984) 777-0699</a></p>
              <p><a href="mailto:colourmebree@gmail.com" className="hover:text-blush transition-colors duration-200 text-[13px]">colourmebree@gmail.com</a></p>
            </div>
          </div>
        </motion.div>

        {/* Form + Map side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-[960px] mx-auto">
          {/* Form - takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 bg-cream/60 p-6 md:p-8 rounded-2xl border border-beige/30"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-charcoal/40 tracking-[0.12em] uppercase mb-1 font-light">First Name</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-white border border-beige/40 rounded-lg focus:outline-none focus:border-blush/40 transition-all duration-200 text-charcoal font-light text-[14px]" placeholder="First name" />
                </div>
                <div>
                  <label className="block text-[10px] text-charcoal/40 tracking-[0.12em] uppercase mb-1 font-light">Last Name</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-white border border-beige/40 rounded-lg focus:outline-none focus:border-blush/40 transition-all duration-200 text-charcoal font-light text-[14px]" placeholder="Last name" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-charcoal/40 tracking-[0.12em] uppercase mb-1 font-light">Email</label>
                  <input type="email" className="w-full px-4 py-2.5 bg-white border border-beige/40 rounded-lg focus:outline-none focus:border-blush/40 transition-all duration-200 text-charcoal font-light text-[14px]" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-[10px] text-charcoal/40 tracking-[0.12em] uppercase mb-1 font-light">Phone</label>
                  <input type="tel" className="w-full px-4 py-2.5 bg-white border border-beige/40 rounded-lg focus:outline-none focus:border-blush/40 transition-all duration-200 text-charcoal font-light text-[14px]" placeholder="(000) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] text-charcoal/40 tracking-[0.12em] uppercase mb-1 font-light">Message</label>
                <textarea rows={4} className="w-full px-4 py-2.5 bg-white border border-beige/40 rounded-lg focus:outline-none focus:border-blush/40 transition-all duration-200 text-charcoal font-light text-[14px] resize-none" placeholder="Tell us about your hair goals..." />
              </div>
              <button type="submit" className="w-full py-3 bg-blush text-white text-[12px] tracking-wider uppercase rounded-full hover:bg-blush-dark hover:scale-[1.03] transition-all duration-300 active:scale-[0.97] cursor-pointer">
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
              {submitted && (
                <p className="text-center text-blush text-[13px] font-light mt-2">
                  Thank you! We&apos;ll get back to you within a few hours.
                </p>
              )}
            </form>
          </motion.div>

          {/* Map - takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="h-full min-h-[280px] bg-beige/30 rounded-2xl overflow-hidden relative border border-beige/30">
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
        </div>
      </div>
    </section>
  );
}
