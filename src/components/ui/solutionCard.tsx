import SectionHeader from "@/components/ui/sectionHeader";
import { colors } from "@/constants/colors";

const SolutionCard = () => {
  return (
    <div className={`py-10 md:px-7 md:py-22 bg-[${colors.ultraLightGray}]`}>
      <SectionHeader
        smallHeading="SOLUTION BOOKLEE OFFERS"
        mainHeading="Booklee replies to all of your customers so that you can focus on growth"
        description="Booklee handles all your incoming calls, messages, and booking requests across every channel — replying instantly, scheduling appointments, and keeping every customer engaged while you focus on your business."
        maxWidth="max-w-5xl"
        marginBottom={12}
      />
      <div>
        <video
          className={`w-full max-w-xl mx-auto border-0.5 border-[${colors.lightGray}]`}
          src="/videos/solutionVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};

export default SolutionCard;
