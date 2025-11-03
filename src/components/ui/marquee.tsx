"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

interface Logo {
  src: string;
  alt?: string;
}

interface MarqueeProps {
  logos?: Logo[];
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
}

const colors = {
  white: "#FFFFFF",
  darkSlateGray: "#2F4F4F",
};

// Company logos
const companyLogos: Logo[] = [
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dccbe7cfa5a9eb3b13b22e_Adroit.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/681c88a97949ca6715235471_image%2020.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/681c88a97105f6634c173ce6_image%2019.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68e5faf0d01ca104117b6735_Manarah%20Publication.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dcce0f253834bb65f9d950_Punch.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dccca8e62eaaf3d287f0de_SSB.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dcce2fc921399353969fb9_Nazim.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/681c8280ca43c8b05e4b4cd8_image%206.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dccde1a53a3090dd2c38df_Matita.png",
  },
  {
    src: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/68dccf02d98b2d060bb9a9c7_Shaver.png",
  },
];

const Marquee: React.FC<MarqueeProps> = ({
  logos = companyLogos,
  speed = 30,
  gap = 20,
  pauseOnHover = true,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Triple the logos for truly seamless infinite scroll
  const triplicatedLogos = [...logos];

  return (
    <div
      className="pt-10 pb-6 overflow-hidden w-full"
      style={{ backgroundColor: colors.white }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2
          className="text-md font-bold text-center"
          style={{ color: colors.darkSlateGray }}
        >
          Trusted by top brands
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="logos-container relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className={`logos-row flex ${pauseOnHover ? "hover:pause-animation" : ""}`}
          style={{
            animation: `marquee ${speed}s linear infinite`,
            gap: `${gap}px`,
          }}
        >
          {triplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="logo shrink-0 flex items-center justify-center w-32 h-16 sm:w-36 sm:h-18 md:w-44 md:h-22 lg:w-52 lg:h-26"
            >
              <Image
                src={logo.src}
                alt={logo.alt || `Company Logo ${(idx % logos.length) + 1}`}
                width={200}
                height={100}
                className="max-w-full max-h-full object-contain"
                loading="eager"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="logos-gradient absolute top-0 left-0 h-full w-32 md:w-40 pointer-events-none z-10" />
        <div className="logos-gradient is-inverted absolute top-0 right-0 h-full w-32 md:w-40 pointer-events-none z-10" />
      </div>

      <style jsx>{`
        .logos-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .logos-row {
          display: flex;
          width: max-content;
        }

        .logos-gradient {
          background: linear-gradient(to right, ${colors.white}, transparent);
        }

        .logos-gradient.is-inverted {
          background: linear-gradient(to left, ${colors.white}, transparent);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .pause-animation {
          animation-play-state: paused;
        }

        @media (hover: hover) {
          .logos-row:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
