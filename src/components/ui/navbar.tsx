"use client";
import { Fragment } from "react";
import { colors } from "@/constants/colors";
import { cn } from "@/lib/utils";
import { images } from "@/constants/images";
import Image from "next/image";
import BookCallButton from "@/components/button/bookCall";

const navLinks = [
  { href: "/", label: "Solutions", dividerClass: true },
  {
    href: "#features",
    label: "Features",
    dividerClass: true,
  },
  { href: "#pricing", label: "Pricing", dividerClass: true },
  { href: "#contact", label: "Contacts" },
];

const Navbar = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="flex items-center justify-center mt-5">
        <div
          className={cn(
            `rounded-2xl border border-[${colors.veryLightGray}] shadow-xs px-7 py-6 flex items-center justify-between gap-14 min-w-[1000px]`
          )}
        >
          {/* Logo Section */}

          <Image src={images.logo} alt="logo" width={150} height={150} />
          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {navLinks.map((link, idx) => (
              <Fragment key={link.href}>
                <a
                  href={link.href}
                  className={`text-[${colors.softSilver}] hover:text-[${colors.graphiteGray}] font-semibold text-xs uppercase tracking-wide transition-colors duration-200`}
                >
                  {link.label}
                </a>
                {/* Only add divider after an item if it's not the last */}
                {link.dividerClass && idx !== navLinks.length - 1 && (
                  <div className={`h-2.5 w-px bg-[${colors.softSilver}]`}></div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Call to Action Button */}
          <BookCallButton
            text="Book a demo"
            onClick={() => console.log("Book a call clicked")}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
