import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColor?: string;
}

export default function Logo({ className = "", showText = true, textColor = "text-[#0D21A5]" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Sailboat Bar Chart SVG */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {/* Sailboat wave base */}
        <path
          d="M15 78 C 30 84, 70 84, 85 78 C 65 72, 35 72, 15 78 Z"
          fill="#B9C7E8"
          opacity="0.8"
        />
        <path
          d="M10 80 C 35 88, 65 88, 90 80 C 70 74, 30 74, 10 80 Z"
          fill="#0D21A5"
        />

        {/* Bar 1 (Shortest - Green/Gold) */}
        <rect
          x="24"
          y="56"
          width="8"
          height="18"
          rx="4"
          fill="#D1D067"
        />
        {/* Bar 2 (Medium - Lavender/Light Blue) */}
        <rect
          x="36"
          y="42"
          width="8"
          height="32"
          rx="4"
          fill="#B9C7E8"
        />
        {/* Bar 3 (Tall - Grey Blue) */}
        <rect
          x="48"
          y="28"
          width="8"
          height="46"
          rx="4"
          fill="#6D85B3"
        />

        {/* Main wind-swept Sail on the right (Deep Navy) */}
        <path
          d="M62 18 C 62 18, 86 42, 80 72 C 60 74, 52 56, 62 18 Z"
          fill="#0D21A5"
        />
        <path
          d="M62 18 C 62 18, 54 36, 62 70 C 66 70, 68 64, 62 18 Z"
          fill="#D1D067"
          opacity="0.3"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`text-xl font-black tracking-tight ${textColor} font-sans`}>
            HFS
          </span>
          <span className={`text-lg font-black tracking-wide ${textColor} font-sans`}>
            CONSULT
          </span>
          <span className="text-[7.5px] font-bold text-zinc-400 tracking-wider uppercase mt-0.5">
            Investing with Clarity & Confidence.
          </span>
        </div>
      )}
    </div>
  );
}
