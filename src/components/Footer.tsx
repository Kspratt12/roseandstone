"use client";

export default function Footer() {
  return (
    <footer className="bg-soft-black py-10 md:py-14">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        {/* Top — rose icon + tagline */}
        <div className="text-center mb-8">
          {/* Clean rose icon */}
          <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 mx-auto mb-3">
            <path d="M16 3c4 3 8 7 8 12 0 5.5-3.6 9-8 9s-8-3.5-8-9c0-5 4-9 8-12z" fill="#bd959f" opacity="0.7"/>
            <path d="M16 7c3 2.5 5.5 5.5 5.5 9 0 3.8-2.5 6.5-5.5 6.5s-5.5-2.7-5.5-6.5c0-3.5 2.5-6.5 5.5-9z" fill="#d4b5bc" opacity="0.5"/>
            <path d="M16 11c2 2 3.5 4 3.5 6.5 0 2.5-1.6 4-3.5 4s-3.5-1.5-3.5-4c0-2.5 1.5-4.5 3.5-6.5z" fill="#e8cdd3" opacity="0.4"/>
          </svg>
          <p className="font-serif text-white/20 text-sm tracking-wide">Rose & Stone Salon</p>
        </div>

        {/* Links — compact single row */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-6">
          {[
            { label: "Our Story", href: "#story" },
            { label: "Stylists", href: "#stylists" },
            { label: "Services", href: "#services" },
            { label: "Reviews", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
            { label: "Book Betty", href: "https://book.squareup.com/appointments/lq9qhwhra4o0tn/location/LVTJWVE2XE4QF?buttonTextColor=000000&color=bd959f&locale=en&referrer=so", external: true },
            { label: "Book Bree", href: "https://book.squareup.com/appointments/wt3tmkx142a5b5/location/LS00H08XWN7XA/services?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so", external: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...("external" in link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-white/15 text-[12px] font-light hover:text-blush-light transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact row */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-6 text-[11px] text-white/10 font-light">
          <a href="tel:9196510004" className="hover:text-blush-light transition-colors duration-200">Betty: (919) 651-0004</a>
          <span className="hidden sm:inline">·</span>
          <a href="tel:9847770699" className="hover:text-blush-light transition-colors duration-200">Bree: (984) 777-0699</a>
          <span className="hidden sm:inline">·</span>
          <span>1340 SE Maynard Rd, Suite 101 · Cary, NC 27511</span>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-1">
          <p className="text-white/8 text-[10px] font-light">&copy; {new Date().getFullYear()} Rose & Stone Salon</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/bettywiththegoodhair_/" target="_blank" rel="noopener noreferrer" className="text-white/8 text-[10px] font-light hover:text-blush-light transition-colors duration-200">@bettywiththegoodhair_</a>
            <a href="https://www.instagram.com/colourmebree/" target="_blank" rel="noopener noreferrer" className="text-white/8 text-[10px] font-light hover:text-blush-light transition-colors duration-200">@colourmebree</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
