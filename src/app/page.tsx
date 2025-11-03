import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/sections/heroSection";
import FeedbackSection from "@/components/sections/feedbackSection";
import ProblemSection from "@/components/sections/problemSection";
import SolutionSection from "@/components/sections/solutionSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeedbackSection />
      <ProblemSection />
      <SolutionSection />
    </div>
  );
}
