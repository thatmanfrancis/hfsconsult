"use client";

import React, { useState } from "react";
import Logo from "./components/Logo";
import StrategyModal from "./components/StrategyModal";
import Image from "next/image";

export default function Page() {
  // Mobile navbar states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Strategy planner states
  const [profile, setProfile] = useState("Retail Investor");
  const [goal, setGoal] = useState("Capital Preservation");
  const [asset, setAsset] = useState("Government Securities");
  const [modalOpen, setModalOpen] = useState(false);

  // Contact form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Custom interactive chart highlights
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  // Function to handle scroll to section
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll by header height (approx 64px)
      const offset = 64;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  // Form submission handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formEmail && formMessage) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormName("");
        setFormEmail("");
        setFormMessage("");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fd] font-sans antialiased">
      {/* ── STICKY FULL-WIDTH HEADER / NAVBAR (Exact Shack Design Pattern) ── */}
      <header className="w-full bg-white border-b border-[#B9C7E8]/20 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16 w-full">
          {/* Brand Logo */}
          <Image
            src="/logo.jpeg"
            alt="HFS Consult Logo"
            width={100}
            height={100}
          />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 rounded-lg text-xs font-bold text-zinc-500 hover:text-[#0D21A5] hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              About HFS
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 rounded-lg text-xs font-bold text-zinc-500 hover:text-[#0D21A5] hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="px-4 py-2 rounded-lg text-xs font-bold text-zinc-500 hover:text-[#0D21A5] hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              Vision & Mission
            </button>
            <button
              onClick={() => scrollToSection("managing-partner")}
              className="px-4 py-2 rounded-lg text-xs font-bold text-zinc-500 hover:text-[#0D21A5] hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              Managing Partner
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 rounded-lg text-xs font-bold text-zinc-500 hover:text-[#0D21A5] hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("planner")}
              className="rounded-full bg-[#0D21A5] hover:bg-[#0D21A5]/85 text-white font-bold text-xs px-5 py-2.5 transition-colors cursor-pointer"
            >
              Analyze Strategy
            </button>
          </div>

          {/* Mobile Hamburguer Toggler (Shack style wrapper) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-zinc-900 transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>

        {/* Mobile Menu Dropdown Panel (Exact Shack mobile navbar style) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-100 bg-white px-6 py-4 flex flex-col gap-1 w-full text-left">
            <button
              onClick={() => scrollToSection("about")}
              className="px-3 py-2.5 text-xs font-bold text-zinc-500 hover:text-[#0D21A5] hover:bg-zinc-50 rounded-lg transition-colors text-left"
            >
              About HFS
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-3 py-2.5 text-xs font-bold text-zinc-500 hover:text-[#0D21A5] hover:bg-zinc-50 rounded-lg transition-colors text-left"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="px-3 py-2.5 text-xs font-bold text-zinc-500 hover:text-[#0D21A5] hover:bg-zinc-50 rounded-lg transition-colors text-left"
            >
              Vision & Mission
            </button>
            <button
              onClick={() => scrollToSection("managing-partner")}
              className="px-3 py-2.5 text-xs font-bold text-zinc-500 hover:text-[#0D21A5] hover:bg-zinc-50 rounded-lg transition-colors text-left"
            >
              Managing Partner
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-3 py-2.5 text-xs font-bold text-zinc-500 hover:text-[#0D21A5] hover:bg-zinc-50 rounded-lg transition-colors text-left"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("planner")}
              className="flex items-center justify-center gap-1.5 rounded-full bg-[#0D21A5] px-5 py-3 text-xs font-bold text-white hover:bg-[#0D21A5]/85 transition-colors mt-2"
            >
              Analyze Strategy
            </button>
          </div>
        )}
      </header>

      {/* ── MAIN CONTENT CONTAINER (Shack Page Structure: Flat pages, no enclosing outer card shadow, max-w-6xl centered) ── */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col gap-16">
        {/* ── HERO SECTION ── */}
        <section className="flex flex-col lg:flex-row items-center pt-4 pb-4 gap-12 relative">
          {/* Left Column: Branding Copy */}
          <div className="w-full lg:w-[50%] flex flex-col items-start gap-6 text-left">
            <div className="space-y-2">
              <h1 className="leading-[1.05] tracking-tight text-zinc-900">
                <span className="block text-4xl sm:text-5xl md:text-6xl font-light text-zinc-500">
                  Investing with
                </span>
                <strong className="block text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0D21A5]">
                  Clarity & Confidence
                </strong>
              </h1>
            </div>

            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-semibold max-w-lg">
              We empower individuals and institutions to preserve corporate
              capital, optimize yield opportunities, and build sustainable
              multi-generational wealth.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                onClick={() => scrollToSection("planner")}
                className="rounded-full bg-[#0D21A5] hover:bg-[#0D21A5]/85 px-8 py-3.5 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Plan Your Strategy
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="rounded-full bg-[#B9C7E8]/20 hover:bg-[#B9C7E8]/40 border border-[#B9C7E8]/30 px-8 py-3.5 text-xs font-bold text-[#0D21A5] transition-colors cursor-pointer"
              >
                Explore Philosophy
              </button>
            </div>
          </div>

          {/* Right Column: Custom Asset Compound Graph Card (Flat white, rounded-2xl, border-only, zero shadows) */}
          <div className="w-full lg:w-[50%] flex items-center justify-center p-2">
            <div className="w-full max-w-[450px] aspect-square relative rounded-2xl bg-white border border-[#B9C7E8]/35 p-6 flex flex-col justify-between overflow-hidden">
              {/* Header inside Graphic Card */}
              <div className="flex items-center justify-between border-b border-[#B9C7E8]/10 pb-4">
                <div>
                  <span className="text-[9px] font-black uppercase text-zinc-400 tracking-wider">
                    Current Focus
                  </span>
                  <span className="block text-xs font-bold text-[#0D21A5]">
                    Capital Preservation
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-black uppercase text-[#D1D067] tracking-wider bg-[#D1D067]/10 px-2 py-0.5 rounded-full">
                    Target Yield
                  </span>
                  <span className="block text-xs font-bold text-zinc-800">
                    Optimal & Compounded
                  </span>
                </div>
              </div>

              {/* Main SVG Vector Graphic */}
              <div className="flex-1 flex items-center justify-center py-4">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 320 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-h-[160px]"
                >
                  {/* Grid lines */}
                  <line
                    x1="20"
                    y1="170"
                    x2="300"
                    y2="170"
                    stroke="#B9C7E8"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.4"
                  />
                  <line
                    x1="20"
                    y1="120"
                    x2="300"
                    y2="120"
                    stroke="#B9C7E8"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.2"
                  />

                  {/* Asset growth vector path */}
                  <path
                    d="M 20 170 Q 100 150, 180 90 T 300 20"
                    stroke="#B9C7E8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                  <path
                    d="M 20 170 Q 100 150, 180 90 T 300 20"
                    stroke="#0D21A5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="8 6"
                  />

                  {/* Wave support line */}
                  <path
                    d="M 10 180 C 80 195, 240 195, 310 180 C 270 172, 50 172, 10 180 Z"
                    fill="#B9C7E8"
                    opacity="0.4"
                  />
                  <path
                    d="M 25 182 C 100 197, 220 197, 295 182 C 250 176, 70 176, 25 182 Z"
                    fill="#0D21A5"
                  />

                  {/* Rising Sailboat Bars */}
                  {/* Bar 1 */}
                  <g
                    className="cursor-pointer group"
                    onMouseEnter={() => setHoveredBar(1)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <rect
                      x="60"
                      y="125"
                      width="18"
                      height="50"
                      rx="4"
                      fill={hoveredBar === 1 ? "#0D21A5" : "#D1D067"}
                      className="transition-colors duration-300"
                    />
                    <text
                      x="69"
                      y="115"
                      fill="#0D21A5"
                      fontSize="9"
                      fontWeight="bold"
                      textAnchor="middle"
                      className={`transition-opacity duration-300 ${hoveredBar === 1 ? "opacity-100" : "opacity-0"}`}
                    >
                      CP
                    </text>
                  </g>

                  {/* Bar 2 */}
                  <g
                    className="cursor-pointer group"
                    onMouseEnter={() => setHoveredBar(2)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <rect
                      x="92"
                      y="90"
                      width="18"
                      height="85"
                      rx="4"
                      fill={hoveredBar === 2 ? "#0D21A5" : "#B9C7E8"}
                      className="transition-colors duration-300"
                    />
                    <text
                      x="101"
                      y="80"
                      fill="#0D21A5"
                      fontSize="9"
                      fontWeight="bold"
                      textAnchor="middle"
                      className={`transition-opacity duration-300 ${hoveredBar === 2 ? "opacity-100" : "opacity-0"}`}
                    >
                      Bonds
                    </text>
                  </g>

                  {/* Bar 3 */}
                  <g
                    className="cursor-pointer group"
                    onMouseEnter={() => setHoveredBar(3)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <rect
                      x="124"
                      y="50"
                      width="18"
                      height="125"
                      rx="4"
                      fill={hoveredBar === 3 ? "#D1D067" : "#6D85B3"}
                      className="transition-colors duration-300"
                    />
                    <text
                      x="133"
                      y="40"
                      fill="#0D21A5"
                      fontSize="9"
                      fontWeight="bold"
                      textAnchor="middle"
                      className={`transition-opacity duration-300 ${hoveredBar === 3 ? "opacity-100" : "opacity-0"}`}
                    >
                      T-Bills
                    </text>
                  </g>

                  {/* Main wind Sail (Deep Navy) */}
                  <path
                    d="M 160 30 C 160 30, 215 70, 205 165 C 165 170, 145 130, 160 30 Z"
                    fill="#0D21A5"
                    className="cursor-pointer hover:fill-[#0D21A5]/80 transition-colors"
                  />

                  {/* Glowing indicator */}
                  <circle cx="300" cy="20" r="5" fill="#D1D067" />
                </svg>
              </div>

              {/* Bottom Details */}
              <div className="flex justify-between items-center text-[10px] font-bold text-zinc-400 pt-3 border-t border-[#B9C7E8]/10">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D1D067]" />
                  Compound Assets
                </span>
                <span>Active Risk Protection</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY TRUST BAR (Flat, rounded-2xl, border-only, zero shadows) ── */}
        <section className="w-full">
          <div className="bg-[#0D21A5] text-white py-6 px-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-l-8 border-[#D1D067]">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[9px] font-black uppercase text-[#B9C7E8] tracking-widest block">
                Corporate philosophy
              </span>
              <p className="text-base sm:text-lg italic font-extrabold text-white tracking-wide">
                &ldquo;Preserve capital, optimize returns, and build wealth that
                lasts.&rdquo;
              </p>
            </div>
            <div className="shrink-0 bg-white/10 px-4 py-2.5 rounded-full border border-white/10">
              <span className="text-[9.5px] font-black uppercase tracking-wider text-[#B9C7E8] flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#D1D067]" />
                Disciplined & Insight-Driven
              </span>
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE STRATEGY PLANNER (Exact Shack Search Block layout: flat, border border-zinc-150, rounded-2xl, no shadows) ── */}
        <section id="planner" className="py-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0D21A5] bg-[#B9C7E8]/35 px-4 py-1.5 rounded-full inline-block">
                Interactive Advisory Tool
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
                Plan Your Investment Direction
              </h2>
              <p className="text-zinc-500 text-xs font-semibold max-w-sm mx-auto">
                Align your investment profile and goal with the ideal HFS
                strategic advice in real-time.
              </p>
            </div>

            {/* Custom search-style selector block (Shack conventions: no shadows, border-only, rounded-2xl) */}
            <div className="bg-white rounded-2xl border border-[#B9C7E8]/35 p-2 flex flex-col md:flex-row items-stretch md:items-center gap-2">
              {/* Profile Selector */}
              <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-[#B9C7E8]/20">
                <div className="flex flex-col gap-1 w-full text-left">
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    I am a...
                  </span>
                  <select
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm font-extrabold outline-none cursor-pointer text-zinc-800 w-full mt-1 border-0 p-0 focus:ring-0"
                  >
                    <option value="Retail Investor">Retail Investor</option>
                    <option value="High-Net-Worth Individual (HNI)">
                      High-Net-Worth Individual (HNI)
                    </option>
                    <option value="Institution">Institution</option>
                  </select>
                </div>
              </div>

              {/* Goal Selector */}
              <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-[#B9C7E8]/20">
                <div className="flex flex-col gap-1 w-full text-left">
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                    My Primary Goal is...
                  </span>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm font-extrabold outline-none cursor-pointer text-zinc-800 w-full mt-1 border-0 p-0 focus:ring-0"
                  >
                    <option value="Capital Preservation">
                      Capital Preservation
                    </option>
                    <option value="Optimizing Returns">
                      Optimizing Returns
                    </option>
                    <option value="Long-term Wealth Building">
                      Long-Term Wealth Building
                    </option>
                  </select>
                </div>
              </div>

              {/* Asset Preference */}
              <div className="flex-1 flex items-center px-4 py-3">
                <div className="flex flex-col gap-1 w-full text-left">
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    Asset Interest
                  </span>
                  <select
                    value={asset}
                    onChange={(e) => setAsset(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm font-extrabold outline-none cursor-pointer text-zinc-800 w-full mt-1 border-0 p-0 focus:ring-0"
                  >
                    <option value="Government Securities">
                      Government Securities
                    </option>
                    <option value="Commercial Papers">Commercial Papers</option>
                    <option value="Real Estate Syndicates">
                      Real Estate Syndicates
                    </option>
                    <option value="Equities">Equities</option>
                  </select>
                </div>
              </div>

              {/* Call trigger button (Shack Search Button convention) */}
              <button
                onClick={() => setModalOpen(true)}
                className="h-14 md:w-14 rounded-xl bg-[#0D21A5] text-white flex items-center justify-center shrink-0 hover:bg-[#0D21A5]/85 transition-colors self-center px-6 md:px-0 cursor-pointer"
                aria-label="Analyze strategy"
              >
                <span className="md:hidden text-xs font-bold mr-2">
                  Generate Advice
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ── ABOUT HFS SECTION (Flat grid layouts, rounded-2xl, border border-[#B9C7E8]/25, zero shadow) ── */}
        <section
          id="about"
          className="py-6 border-t border-[#B9C7E8]/10 text-left"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0D21A5] bg-[#B9C7E8]/35 px-4 py-1.5 rounded-full inline-block">
                Corporate Profile
              </span>
              <h2 className="text-3xl font-extrabold text-[#0D21A5] tracking-tight">
                About HFS Consult
              </h2>

              <div className="space-y-4 text-zinc-600 text-sm leading-relaxed font-semibold">
                <p>
                  HFS is a premier consulting firm that delivers tailored
                  investment advisory services to retail investors,
                  high-net-worth individuals (HNIs), and institutional clients.
                  The firm is committed to providing strategic guidance across
                  diverse asset classes, helping clients make informed decisions
                  that align with their financial goals and risk appetite.
                </p>
                <p>
                  Leveraging deep market insight and a disciplined investment
                  approach, HFS identifies and recommends high-quality
                  opportunities across instruments such as government
                  securities, commercial papers, real estate, and equities. By
                  combining rigorous analysis with a client-centric philosophy,
                  HFS aims to preserve capital, optimize returns, and build
                  sustainable wealth over the long term.
                </p>
              </div>

              {/* Call out stat points */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#B9C7E8]/20">
                <div>
                  <span className="block text-xl font-black text-[#0D21A5]">
                    Tailored
                  </span>
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                    Guidance
                  </span>
                </div>
                <div>
                  <span className="block text-xl font-black text-[#0D21A5]">
                    Disciplined
                  </span>
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                    Analysis
                  </span>
                </div>
                <div>
                  <span className="block text-xl font-black text-[#0D21A5]">
                    Risk
                  </span>
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                    Protection
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Client Pillars Card Grid */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-[10px] font-black text-[#D1D067] uppercase tracking-widest text-left">
                WHO WE SERVE
              </span>

              {/* Pillar 1 */}
              <div className="bg-white p-5 rounded-2xl border border-[#B9C7E8]/25 text-left group">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg bg-[#0D21A5]/5 text-[#0D21A5] flex items-center justify-center font-black text-xs transition-colors">
                    1
                  </span>
                  <h3 className="font-extrabold text-[#0D21A5] text-sm">
                    Retail Investors
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 mt-2 font-semibold leading-relaxed">
                  Compounding models built to make structured, safe,
                  wealth-building accessible and understandable for everyone.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white p-5 rounded-2xl border border-[#B9C7E8]/25 text-left group">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg bg-[#D1D067]/10 text-zinc-800 flex items-center justify-center font-black text-xs transition-colors">
                    2
                  </span>
                  <h3 className="font-extrabold text-[#0D21A5] text-sm">
                    High-Net-Worth Individuals (HNIs)
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 mt-2 font-semibold leading-relaxed">
                  Sophisticated, private wealth preservation models utilizing
                  prime sovereign debt issuances and prime property syndicates.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white p-5 rounded-2xl border border-[#B9C7E8]/25 text-left group">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg bg-[#6D85B3]/10 text-zinc-800 flex items-center justify-center font-black text-xs transition-colors">
                    3
                  </span>
                  <h3 className="font-extrabold text-[#0D21A5] text-sm">
                    Institutions
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 mt-2 font-semibold leading-relaxed">
                  Corporate treasury solutions focused on hedging excess
                  liquidity with short-term bills, deposits, and prime corporate
                  notes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR SERVICES SECTION (Flat white grid, rounded-2xl, border-only, zero shadow) ── */}
        <section id="services" className="py-6 text-left">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#0D21A5] bg-[#B9C7E8]/35 px-4 py-1.5 rounded-full inline-block">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-[#0D21A5] tracking-tight">
              Strategic Services We Deliver
            </h2>
            <p className="text-zinc-500 text-xs font-semibold">
              Combining active research, disciplined portfolio analysis, and
              risk structures to achieve strategic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#B9C7E8]/25 flex flex-col justify-between group relative overflow-hidden">
              <div className="space-y-4 pl-1">
                <div className="h-9 w-9 rounded-lg bg-[#0D21A5]/5 text-[#0D21A5] flex items-center justify-center font-black">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <h3 className="text-base font-black text-[#0D21A5]">
                  Data-Backed Investment Advisory
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
                  We deploy rigorous asset analysis to deliver data-backed
                  advisory advice. Every opportunity goes through stress testing
                  to safeguard client funds.
                </p>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-6 text-[9px] font-black text-[#0D21A5] hover:text-[#D1D067] uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
              >
                Inquire Service
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#B9C7E8]/25 flex flex-col justify-between group relative overflow-hidden">
              <div className="space-y-4 pl-1">
                <div className="h-9 w-9 rounded-lg bg-[#D1D067]/10 text-zinc-800 flex items-center justify-center font-black">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-base font-black text-[#0D21A5]">
                  Market Opportunity Discovery
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
                  We discover and screen high-quality commercial opportunities
                  across diverse asset classes, including government
                  instruments, commercial papers, and premium properties.
                </p>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-6 text-[9px] font-black text-[#D1D067] hover:text-[#0D21A5] uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
              >
                Inquire Service
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[#B9C7E8]/25 flex flex-col justify-between group relative overflow-hidden">
              <div className="space-y-4 pl-1">
                <div className="h-9 w-9 rounded-lg bg-[#B9C7E8]/20 text-[#0D21A5] flex items-center justify-center font-black">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-base font-black text-[#0D21A5]">
                  Portfolio Goal Alignment
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
                  We perfectly align asset allocations with each client's
                  specific liquidity timelines and risk tolerance limits to
                  deliver maximum balance sheet efficiency.
                </p>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-6 text-[9px] font-black text-[#0D21A5] hover:text-[#D1D067] uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
              >
                Inquire Service
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION SECTION (Flat white cards, rounded-2xl, border-only, zero shadow) ── */}
        <section id="vision" className="py-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-[#0D21A5] text-white p-8 rounded-2xl relative overflow-hidden border border-[#B9C7E8]/25 flex flex-col justify-between min-h-[260px]">
              <div className="space-y-4 z-10 relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#B9C7E8]">
                    Our Vision
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#D1D067] tracking-tight">
                  A Trusted Wealth Catalyst
                </h3>
              </div>

              <p className="text-sm text-zinc-100 leading-relaxed font-semibold mt-4 z-10 relative">
                &ldquo;To become a trusted catalyst for wealth creation,
                empowering individuals and institutions to achieve lasting
                financial prosperity.&rdquo;
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl relative overflow-hidden border border-[#B9C7E8]/25 flex flex-col justify-between min-h-[260px]">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#0D21A5]/5 border border-[#0D21A5]/10 px-4 py-1.5 rounded-full">
                  <span className="text-[9.5px] font-black uppercase tracking-widest text-zinc-500">
                    Our Mission
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#0D21A5] tracking-tight">
                  Disciplined Asset Strategies
                </h3>
              </div>

              <p className="text-sm text-zinc-500 leading-relaxed font-semibold mt-4">
                &ldquo;To deliver disciplined, insight-driven investment
                strategies that preserve capital, optimize returns, and make
                wealth-building accessible to all.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ── MANAGING PARTNER SECTION (Flat white panel, rounded-2xl, border-only, zero shadow) ── */}
        <section id="managing-partner" className="py-6 text-left">
          <div className="bg-white rounded-2xl border border-[#B9C7E8]/20 p-8 sm:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Silhouette Logo Card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-60 h-60 rounded-2xl bg-gradient-to-tr from-[#0D21A5] via-[#B9C7E8] to-[#D1D067] p-1 shadow-none overflow-hidden group">
                  {/* Decorative background sails */}
                  <div className="absolute inset-0 bg-[#0D21A5] flex items-center justify-center text-white">
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 100 100"
                      fill="none"
                      className="opacity-15"
                    >
                      <path
                        d="M15 78 C 30 84, 70 84, 85 78 C 65 72, 35 72, 15 78 Z"
                        fill="#B9C7E8"
                      />
                      <rect
                        x="24"
                        y="56"
                        width="8"
                        height="18"
                        fill="#D1D067"
                      />
                      <rect
                        x="36"
                        y="42"
                        width="8"
                        height="32"
                        fill="#B9C7E8"
                      />
                      <path
                        d="M62 18 C 62 18, 86 42, 80 72 C 60 74, 52 56, 62 18 Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  {/* Partner badge title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white text-base font-black tracking-tight leading-none">
                      Elizabeth O. Nwankwo
                    </span>
                    <span className="text-[#D1D067] text-[9px] font-black uppercase tracking-widest mt-1">
                      Managing Partner
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Partner Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0D21A5] bg-[#B9C7E8]/35 px-4 py-1.5 rounded-full inline-block">
                    Executive Profile
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0D21A5] tracking-tight">
                    Elizabeth O. Nwankwo
                  </h3>
                  <span className="block text-xs font-bold text-zinc-400 italic">
                    Managing Partner, HFS Consult Limited
                  </span>
                </div>

                <div className="text-zinc-600 text-sm leading-relaxed font-semibold space-y-4">
                  <p>
                    Under Elizabeth&apos;s strategic leadership, HFS Consult
                    operates on a rigid, client-centric framework designed to
                    yield resilient investment strategies. Elizabeth and the
                    team focus on navigating capital preservation goals for HNIs
                    and retail partners across sub-Saharan corporate and federal
                    debt markets.
                  </p>
                  <blockquote className="pl-4 text-xs italic font-bold text-zinc-700 bg-[#D1D067]/10 p-3 rounded-xl">
                    &ldquo;Our commitment is to guide our clients towards
                    sustainable wealth creation with complete clarity and
                    absolute confidence.&rdquo;
                  </blockquote>
                </div>

                {/* Direct hooks */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="mailto:info@hfsconsult.us"
                    className="rounded-full bg-[#0D21A5] hover:bg-[#0D21A5]/85 text-white font-bold text-xs px-6 py-3.5 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Send Email
                  </a>
                  <a
                    href="https://wa.me/2347010002333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#B9C7E8]/20 hover:bg-[#B9C7E8]/40 border border-[#B9C7E8]/35 text-[#0D21A5] font-bold text-xs px-6 py-3.5 flex items-center gap-2 transition-colors"
                  >
                    WhatsApp Elizabeth
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT & CONSULTATION SECTION (Flat cards, rounded-2xl, border-only, zero shadow) ── */}
        <section
          id="contact"
          className="py-6 border-t border-[#B9C7E8]/10 text-left"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Consultation Request Form */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#B9C7E8]/20">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0D21A5] bg-[#B9C7E8]/35 px-4 py-1.5 rounded-full inline-block mb-4">
                Get In Touch
              </span>
              <h3 className="text-2xl font-black text-[#0D21A5] tracking-tight mb-1">
                Request a Consultation
              </h3>
              <p className="text-zinc-400 text-xs font-semibold mb-6">
                Fill in your details and our team will get back to you within 24
                business hours.
              </p>

              {formSubmitted ? (
                <div className="bg-[#D1D067]/15 p-6 rounded-xl border border-[#D1D067]/40 text-center space-y-2 animate-scale-up">
                  <div className="h-9 w-9 bg-[#D1D067] text-white flex items-center justify-center rounded-full mx-auto font-black text-sm">
                    ✓
                  </div>
                  <h4 className="font-extrabold text-[#0D21A5] text-sm">
                    Request Received Successfully
                  </h4>
                  <p className="text-xs text-zinc-500 font-semibold">
                    Thank you. Managing Partner Elizabeth Nwankwo will review
                    your parameters shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[9.5px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#B9C7E8] focus:bg-white transition-all text-zinc-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[9.5px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. johndoe@company.com"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#B9C7E8] focus:bg-white transition-all text-zinc-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[9.5px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">
                      Your Message / Parameters
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Please briefly describe your wealth objectives..."
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#B9C7E8] focus:bg-white transition-all text-zinc-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0D21A5] hover:bg-[#0D21A5]/85 text-white font-bold text-xs py-3.5 px-6 rounded-full transition-colors cursor-pointer text-center"
                  >
                    Submit Advisory Request
                  </button>
                </form>
              )}
            </div>

            {/* Right: Business Card Replication (Flat, rounded-2xl, border-only, zero shadow) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[10px] font-black text-[#D1D067] uppercase tracking-widest mb-4">
                OFFICIAL BUSINESS CARD
              </span>

              {/* Physical Business Card Mockup (Replication from Image 1) */}
              <div className="w-full max-w-[480px] bg-white rounded-2xl border border-[#B9C7E8]/40 self-center flex flex-col justify-between min-h-[290px] p-6 sm:p-8 relative">
                {/* Gold Stripe separator */}
                <div className="absolute right-0 bottom-[56px] left-0 h-1.5 bg-[#D1D067] opacity-80" />

                {/* Card Top Side */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6">
                  {/* Left: Logo details */}
                  <Logo showText={true} />

                  {/* Right: Managing Partner name and position */}
                  <div className="text-left sm:text-right border-l-4 sm:border-l-0 sm:border-r-4 border-[#D1D067] pl-3 sm:pl-0 sm:pr-3">
                    <span className="block text-base font-black text-zinc-800 leading-none font-sans">
                      Elizabeth O. Nwankwo
                    </span>
                    <span className="block text-[10px] font-bold text-zinc-400 mt-1.5 uppercase tracking-wider">
                      Managing Partner
                    </span>
                  </div>
                </div>

                {/* Card Bottom Side */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-6 pt-4 relative z-10">
                  {/* QR Code graphic */}
                  <div className="flex flex-col items-center justify-center shrink-0 w-20 h-20 bg-white border border-[#B9C7E8]/20 rounded-xl p-1.5 hover:scale-102 transition-transform">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      fill="currentColor"
                      className="text-zinc-800"
                    >
                      <rect x="0" y="0" width="28" height="28" />
                      <rect x="6" y="6" width="16" height="16" fill="white" />
                      <rect x="10" y="10" width="8" height="8" />

                      <rect x="72" y="0" width="28" height="28" />
                      <rect x="78" y="6" width="16" height="16" fill="white" />
                      <rect x="82" y="10" width="8" height="8" />

                      <rect x="0" y="72" width="28" height="28" />
                      <rect x="6" y="78" width="16" height="16" fill="white" />
                      <rect x="10" y="82" width="8" height="8" />

                      <rect x="36" y="10" width="8" height="18" />
                      <rect x="48" y="0" width="12" height="8" />
                      <rect x="40" y="36" width="20" height="8" />
                      <rect x="72" y="36" width="16" height="24" />
                      <rect x="82" y="72" width="18" height="18" />
                      <rect x="36" y="72" width="28" height="8" />
                      <rect x="52" y="52" width="12" height="12" />
                    </svg>
                    <span className="text-[6px] font-black text-zinc-400 uppercase tracking-widest mt-1">
                      SCAN URL
                    </span>
                  </div>

                  {/* Contact Info matching card details */}
                  <div className="flex-1 space-y-2 text-left text-[10px] font-bold text-zinc-500 pl-2">
                    {/* Phone row */}
                    <div className="flex items-center gap-2">
                      <span className="h-4.5 w-4.5 rounded-lg bg-[#0D21A5]/5 text-[#0D21A5] flex items-center justify-center shrink-0">
                        📞
                      </span>
                      <div className="flex flex-col">
                        <a
                          href="tel:+2347010002333"
                          className="hover:text-[#0D21A5] transition-colors"
                        >
                          +234 701 000 2333
                        </a>
                        <a
                          href="tel:+2348032548135"
                          className="hover:text-[#0D21A5] transition-colors"
                        >
                          +234 803 254 8135
                        </a>
                      </div>
                    </div>

                    {/* Address row */}
                    <div className="flex items-center gap-2">
                      <span className="h-4.5 w-4.5 rounded-lg bg-[#0D21A5]/5 text-[#0D21A5] flex items-center justify-center shrink-0">
                        📍
                      </span>
                      <a
                        href="https://maps.google.com/?q=No+4,+Carter+Street,+Adekunle,+Yaba,+Lagos+state,+Nigeria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0D21A5] transition-colors leading-tight"
                      >
                        No 4, Carter Street, Adekunle, Yaba
                      </a>
                    </div>

                    {/* Email row */}
                    <div className="flex items-center gap-2">
                      <span className="h-4.5 w-4.5 rounded-lg bg-[#0D21A5]/5 text-[#0D21A5] flex items-center justify-center shrink-0">
                        ✉️
                      </span>
                      <div className="flex flex-col leading-tight">
                        <a
                          href="mailto:info@hfsconsult.us"
                          className="hover:text-[#0D21A5] transition-colors"
                        >
                          info@hfsconsult.us
                        </a>
                        <a
                          href="mailto:hfs0consult@gmail.com"
                          className="hover:text-[#0D21A5] transition-colors"
                        >
                          hfs0consult@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom URL Strip */}
                <div className="absolute right-0 bottom-0 left-0 h-[44px] bg-[#D1D067]/15 flex items-center justify-center px-4">
                  <a
                    href="https://hfsconsult.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-black text-zinc-800 tracking-wider hover:text-[#0D21A5] transition-colors"
                  >
                    🌐 https://hfsconsult.us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-white border-t border-[#B9C7E8]/20 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-2">
            <Logo showText={false} />
            <div className="text-left leading-tight">
              <span className="block text-[11px] font-black text-[#0D21A5] tracking-tight uppercase">
                HFS Consult Limited
              </span>
              <span className="block text-[8px] font-black text-zinc-400 uppercase tracking-widest">
                Investing with Clarity & Confidence.
              </span>
            </div>
          </div>

          <span className="text-[10px] font-bold text-zinc-400">
            &copy; {new Date().getFullYear()} HFS Consult Limited. All rights
            reserved.
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-lg bg-zinc-50 border border-zinc-150 h-8 w-8 flex items-center justify-center text-zinc-400 hover:text-[#0D21A5] hover:bg-[#B9C7E8]/20 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </footer>

      {/* ── STRATEGY PLANNER MODAL ── */}
      <StrategyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        profile={profile}
        goal={goal}
        asset={asset}
      />
    </div>
  );
}
