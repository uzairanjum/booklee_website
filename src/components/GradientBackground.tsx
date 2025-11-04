"use client";

import React from "react";

export default function GradientBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-r from-[#8426E2] via-[#6A16E1] to-[#5004E1]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
