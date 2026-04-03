"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookNow from "@/components/BookNow";
import TrustStrip from "@/components/TrustStrip";
import Experience from "@/components/Experience";
import Story from "@/components/Story";
import Stylists from "@/components/Stylists";
import Services from "@/components/Services";
import Policies from "@/components/Policies";
import Transformations from "@/components/Transformations";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
// Booking replaced by BookNow (Haven-style)
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ChatBox from "@/components/ChatBox";
import MobileBookButton from "@/components/MobileBookButton";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main>
      <Navbar onBookClick={() => setBookingOpen(true)} />
      <Hero onBookClick={() => setBookingOpen(true)} />
      <BookNow />
      <TrustStrip />
      <Experience />
      <Story />
      <Stylists />
      <Services onBookClick={() => setBookingOpen(true)} />
      <Policies />
      <Transformations />
      <Products />
      <Testimonials />
      {/* Old Booking removed — BookNow handles this above */}
      <InstagramFeed />
      <Contact />
      <FinalCTA onBookClick={() => setBookingOpen(true)} />
      <Footer />
      <ChatBox />
      <MobileBookButton onBookClick={() => setBookingOpen(true)} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
