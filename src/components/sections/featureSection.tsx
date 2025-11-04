import GradientBackground from "@/components/GradientBackground";

const featureSectionData = [
  {
    title: "Message & Comment Automation",
    description:
      "Every DM and comment is answered instantly—no more late replies or missed orders.",
    buttonText: "Get Started",
    videoSrc: "/videos/feature1.mp4",
  },
  {
    title: "Speak into their language automatically",
    description:
      "Automatically respond in English, Bangla, Banglish or any other language",
    buttonText: "Get Started",
    videoSrc: "/videos/feature2.mp4",
  },
  {
    title: "Ads running? So are the sales",
    description:
      "Customers clicking on your Facebook/Instagram ads get instant, personalized replies—before they click away.",
    buttonText: "Get Started",
    videoSrc: "/videos/feature3.mp4",
  },
  {
    title: "Superpower your support team",
    description:
      "LazyChat suggests smart replies in real time and tracks agent performance—so your humans get sharper with every message.",
    buttonText: "Get Started",
    videoSrc: "/videos/feature4.mp4",
  },
  {
    title: "Stop repeating while Start resolving",
    description:
      "From “Where’s my order?” to “How to return?”— LazyChat answers instantly and flags issues for humans only when needed.",
    buttonText: "Get Started",
    videoSrc: "/videos/feature5.mp4",
  },
];

const FeatureSection = () => {
  return (
    <GradientBackground>
      <div className="max-w-6xl mx-auto px-2 py-27 md:px-14 w-full">
        <div className="flex flex-col">
          {featureSectionData.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0"
            >
              <div className="flex flex-col items-center justify-center max-w-lg w-full py-6 gap-4">
                <div className="text-7xl font-bold font-neuepower-ultra text-center text-white">
                  {feature.title}
                </div>
                <div className="text-white text-lg font-semibold text-center">
                  {feature.description}
                </div>
                <button className="py-4 px-9 bg-white text-black cursor-pointer rounded-md text-xl font-bold">
                  {feature.buttonText}
                </button>
              </div>
              <div className="flex items-center justify-center">
                <video
                  src={feature.videoSrc}
                  width={350}
                  height={350}
                  loop
                  playsInline
                  autoPlay
                  muted
                  className="rounded-3xl "
                >
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GradientBackground>
  );
};

export default FeatureSection;
