"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selected, setSelected] = useState<"betty" | "bree" | null>(null);

  const handleClose = () => {
    setSelected(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-cream hover:bg-beige transition-colors"
              aria-label="Close booking"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-charcoal">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Header */}
            <div className="px-6 pt-6 pb-4 text-center border-b border-beige/40">
              <p className="text-blush text-xs tracking-[0.3em] uppercase mb-2">
                Book Your Appointment
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal font-light">
                {selected ? (selected === "betty" ? "Book with Betty" : "Book with Bree") : "Choose your stylist"}
              </h3>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {!selected ? (
                /* Stylist Selection */
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Betty Card */}
                  <button
                    onClick={() => setSelected("betty")}
                    className="group text-left bg-cream rounded-xl p-5 border border-beige hover:border-blush-light transition-all duration-300 active:scale-[0.98]"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto ring-2 ring-beige group-hover:ring-blush-light transition-colors">
                      <Image src="/images/betty.jpg" alt="Betty Vandivier" width={64} height={64} quality={85} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-serif text-xl text-charcoal text-center mb-0.5">
                      Betty Vandivier
                    </h4>
                    <p className="text-blush text-xs tracking-wider text-center uppercase mb-3">
                      Blonding Specialist
                    </p>
                    <p className="text-stone text-xs text-center font-light leading-relaxed">
                      Blonding, balayage, Brazilian Blowout, extensions
                    </p>
                    <div className="mt-4 py-2 bg-blush/10 rounded-full text-center">
                      <span className="text-blush text-xs tracking-wider">
                        Select Betty →
                      </span>
                    </div>
                  </button>

                  {/* Bree Card */}
                  <button
                    onClick={() => setSelected("bree")}
                    className="group text-left bg-cream rounded-xl p-5 border border-beige hover:border-blush-light transition-all duration-300 active:scale-[0.98]"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto ring-2 ring-beige group-hover:ring-blush-light transition-colors">
                      <Image src="/images/bree.jpg" alt="Bree Szalkowski" width={64} height={64} quality={85} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-serif text-xl text-charcoal text-center mb-0.5">
                      Bree Szalkowski
                    </h4>
                    <p className="text-blush text-xs tracking-wider text-center uppercase mb-3">
                      Color Expert
                    </p>
                    <p className="text-stone text-xs text-center font-light leading-relaxed">
                      Color, highlights, dry cut, hair loss care
                    </p>
                    <div className="mt-4 py-2 bg-blush/10 rounded-full text-center">
                      <span className="text-blush text-xs tracking-wider">
                        Select Bree →
                      </span>
                    </div>
                  </button>

                  {/* Help text */}
                  <p className="sm:col-span-2 text-center text-stone text-xs font-light mt-2">
                    Not sure? Call Betty at{" "}
                    <a href="tel:9196510004" className="text-blush underline">(919) 651-0004</a>
                    {" "}or Bree at{" "}
                    <a href="tel:9847770699" className="text-blush underline">(984) 777-0699</a>
                  </p>
                </div>
              ) : (
                /* Embedded Booking */
                <div className="flex flex-col">
                  {/* Back button */}
                  <button
                    onClick={() => setSelected(null)}
                    className="flex items-center gap-2 px-6 pt-4 text-stone text-sm hover:text-blush transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15,18 9,12 15,6" />
                    </svg>
                    Choose different stylist
                  </button>

                  {selected === "betty" ? (
                    <div className="p-6 flex flex-col items-center">
                      <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden bg-cream mb-4">
                        <iframe
                          src="https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so"
                          className="w-full h-full border-0 min-h-[400px]"
                          title="Book with Betty - Square Appointments"
                          allow="payment"
                        />
                      </div>
                      <p className="text-stone text-xs font-light text-center">
                        Powered by Square Appointments
                      </p>

                      {/* Fallback link */}
                      <div className="mt-4 text-center">
                        <p className="text-stone text-xs font-light mb-2">
                          Having trouble? Open booking in a new tab:
                        </p>
                        <a
                          href="https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-blush text-white text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-colors active:scale-[0.97]"
                        >
                          Book with Betty
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15,3 21,3 21,9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      </div>

                      <div className="mt-4 pt-4 border-t border-beige/40 w-full text-center space-y-1">
                        <p className="text-stone text-xs font-light">
                          <a href="tel:9196510004" className="text-blush hover:text-blush-dark transition-colors">(919) 651-0004</a>
                          {" · "}
                          <a href="mailto:betty@roseandstonesalon.com" className="text-blush hover:text-blush-dark transition-colors">betty@roseandstonesalon.com</a>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 flex flex-col items-center">
                      <p className="text-stone text-sm font-light text-center mb-4 max-w-sm">
                        Bree books through her personal site, ColourMeBree.com.
                        Tap below to view her availability and schedule your
                        appointment.
                      </p>

                      <a
                        href="https://www.colourmebree.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-xs py-3.5 bg-blush text-white text-center text-sm tracking-wider uppercase rounded-full hover:bg-blush-dark transition-colors active:scale-[0.97] shadow-sm shadow-blush/15 block"
                      >
                        Book with Bree →
                      </a>
                      <p className="text-stone-light text-[11px] mt-2 font-light">
                        Opens ColourMeBree.com in a new tab
                      </p>

                      <div className="mt-6 pt-4 border-t border-beige/40 w-full text-center space-y-1">
                        <p className="text-stone text-xs font-light">
                          <a href="tel:9847770699" className="text-blush hover:text-blush-dark transition-colors">(984) 777-0699</a>
                          {" · "}
                          <a href="mailto:colourmebree@gmail.com" className="text-blush hover:text-blush-dark transition-colors">colourmebree@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
