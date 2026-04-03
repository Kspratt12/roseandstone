"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Experience from "@/components/Experience";
import Story from "@/components/Story";
import Stylists from "@/components/Stylists";
import Services from "@/components/Services";
import Policies from "@/components/Policies";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
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
      <TrustStrip />
      <Experience />
      <Story />
      <Stylists />
      <Services onBookClick={() => setBookingOpen(true)} />
      <Policies />
      <Transformations />
      <Testimonials />
      <Booking onBookClick={() => setBookingOpen(true)} />
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
