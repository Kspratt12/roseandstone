"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-soft-black py-14 md:py-16">
      <div className="w-full max-w-[1120px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.jpeg"
              alt="Rose & Stone Salon"
              width={110}
              height={44}
              className="h-9 w-auto mb-4 brightness-200 opacity-80"
            />
            <p className="text-white/30 text-sm font-light leading-relaxed max-w-xs">
              A boutique salon in Cary, North Carolina where your hair gets the attention it deserves.
            </p>
          </div>

          {/* Navigation + Booking */}
          <div>
            <h4 className="text-white/40 text-[11px] tracking-wider uppercase mb-3">Navigate</h4>
            <div className="space-y-1.5 mb-6">
              {[
                { label: "Our Story", href: "#story" },
                { label: "Stylists", href: "#stylists" },
                { label: "Services", href: "#services" },
                { label: "Reviews", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block text-white/25 text-sm font-light hover:text-blush-light transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            <h4 className="text-white/40 text-[11px] tracking-wider uppercase mb-3">Book Online</h4>
            <div className="space-y-1.5">
              <a href="https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so" target="_blank" rel="noopener noreferrer" className="block text-white/25 text-sm font-light hover:text-blush-light transition-colors">
                Book with Betty (Square)
              </a>
              <a href="https://www.colourmebree.com/" target="_blank" rel="noopener noreferrer" className="block text-white/25 text-sm font-light hover:text-blush-light transition-colors">
                Book with Bree (ColourMeBree.com)
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/40 text-[11px] tracking-wider uppercase mb-3">Visit Us</h4>
            <div className="text-white/25 text-sm font-light leading-relaxed mb-5">
              <p>1340 SE Maynard Rd, Suite 101</p>
              <p className="text-white/15 text-xs">(around the back of the building)</p>
              <p>Cary, NC 27511</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-white/35 text-[11px] tracking-wider uppercase mb-1">Betty</p>
                <a href="tel:9196510004" className="block text-white/25 text-sm font-light hover:text-blush-light transition-colors">(919) 651-0004</a>
                <a href="mailto:betty@roseandstonesalon.com" className="block text-white/20 text-xs font-light hover:text-blush-light transition-colors mt-0.5">betty@roseandstonesalon.com</a>
              </div>
              <div>
                <p className="text-white/35 text-[11px] tracking-wider uppercase mb-1">Bree</p>
                <a href="tel:9847770699" className="block text-white/25 text-sm font-light hover:text-blush-light transition-colors">(984) 777-0699</a>
                <a href="mailto:colourmebree@gmail.com" className="block text-white/20 text-xs font-light hover:text-blush-light transition-colors mt-0.5">colourmebree@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="https://www.instagram.com/bettywiththegoodhair_/" target="_blank" rel="noopener noreferrer" className="text-white/15 hover:text-blush-light transition-colors text-xs font-light">Instagram (Betty)</a>
              <a href="https://www.instagram.com/colourmebree/" target="_blank" rel="noopener noreferrer" className="text-white/15 hover:text-blush-light transition-colors text-xs font-light">Instagram (Bree)</a>
              <a href="https://www.facebook.com/ColourMeBree/" target="_blank" rel="noopener noreferrer" className="text-white/15 hover:text-blush-light transition-colors text-xs font-light">Facebook</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/10 text-xs font-light">
            &copy; {new Date().getFullYear()} Rose & Stone Salon. All rights reserved.
          </p>
          <p className="text-white/10 text-xs font-light">Cary, North Carolina</p>
        </div>
      </div>
    </footer>
  );
}
