import React from "react";
import { colors } from "@/constants/colors";

interface BookCallButtonProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  px?: string; // e.g. "px-5"
  py?: string; // e.g. "py-2"
  fontWeight?: string; // e.g. "font-bold"
  className?: string;
  onClick?: () => void;
}

const BookCallButton: React.FC<BookCallButtonProps> = ({
  text,
  textColor = "text-white",
  bgColor = "bg-black",
  px = "px-5",
  py = "py-2",
  fontWeight = "font-bold",
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} ${px} ${py} rounded-lg ${fontWeight} cursor-pointer shadow ease-in-out transition-all duration-200 ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = colors.gradientColorLeft;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "";
      }}
    >
      {text}
    </button>
  );
};

export default BookCallButton;
