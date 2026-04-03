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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Experience />
      <Story />
      <Stylists />
      <Services />
      <Policies />
      <Transformations />
      <Testimonials />
      <Booking />
      <InstagramFeed />
      <Contact />
      <FinalCTA />
      <Footer />
      <ChatBox />
      <MobileBookButton />
    </main>
  );
}
