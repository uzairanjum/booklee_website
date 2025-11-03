"use client";
import { colors } from "@/constants/colors";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";

const problemData = [
  {
    icon: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/6812f1c5d7e980e3484837a2_card-icon-01.png",
    title: "Your inbox gets overflowed with customer messages.",
  },
  {
    icon: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/6812f1c571254232d0a31a5d_card-icon-02.png",
    title: "All of your time is being wasted replying to customers.",
  },
  {
    icon: "https://cdn.prod.website-files.com/6811ccd7b98203355f3d9732/6812f1c5aeea00b1066faf02_card-icon-03.png",
    title: "Still you are losing sales due to missed or late replies.",
  },
];

const ProblemSection = () => {
  return (
    <div className="bg-white py-16 w-full">
      <div>
        <SectionHeader
          smallHeading="PROBLEM"
          mainHeading="Tired of Replying to Customer Messages"
          description="Running your business on social media is overwhelming. Customers keep messaging and you can't reply to all of them instantly resulting in lost sales which leads to overworking and constant stress. We don't want that for you."
          maxWidth="max-w-2xl"
          mainHeadingColor={colors.ashGray}
        />
      </div>
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {problemData.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left p-5 md:p-5 border border-dashed rounded-lg"
              style={{
                borderColor: colors.lightGray,
                borderWidth: "1px",
                backgroundColor: colors.ultraLightGray,
              }}
            >
              <Image
                src={problem.icon}
                alt={problem.title}
                width={40}
                height={40}
                className="w-10 h-10 object-contain mb-4 "
              />
              <h3
                className="text-base md:text-lg font-extrabold uppercase leading-tight"
                style={{ color: colors.charcoalBlue }}
              >
                {problem.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
