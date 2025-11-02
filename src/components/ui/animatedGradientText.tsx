"use client";
import { colors } from "@/constants/colors";

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <>
      <style jsx>{`
        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <span
        className={`inline-block bg-clip-text text-transparent ${className}`}
        style={{
          background: colors.gradientColorRight,
          backgroundSize: "400% 400%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "gradient-flow 2.2s ease-in-out infinite",
        }}
      >
        {text}
      </span>
    </>
  );
};

export default AnimatedGradientText;
