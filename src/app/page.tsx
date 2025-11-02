import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/sections/heroSection";
import MarqueeSection from "@/components/sections/marqueeSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
    </div>
  );
}
