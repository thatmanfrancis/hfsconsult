"use client";

import React from "react";

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: string;
  goal: string;
  asset: string;
}

export default function StrategyModal({ isOpen, onClose, profile, goal, asset }: StrategyModalProps) {
  if (!isOpen) return null;

  // Custom advice mappings based on selections
  const getStrategyAdvice = () => {
    const prof = profile || "Retail Investor";
    const gl = goal || "Capital Preservation";
    const ast = asset || "Government Securities";

    let title = "Conservative Yield Growth";
    let riskLevel = "Low to Medium";
    let allocation = { primary: "65%", secondary: "25%", alternative: "10%" };
    let primaryAsset = ast;
    let description = "";

    if (prof === "Retail Investor") {
      if (gl === "Capital Preservation") {
        title = "Capital Shield Strategy";
        riskLevel = "Very Low";
        allocation = { primary: "75% Fixed Income", secondary: "20% Cash Reserves", alternative: "5% Blue-Chip Equities" };
        description = "Tailored for retail investors seeking a safe harbor for their capital. By focusing heavily on short-term government securities and premium commercial papers, we ensure your wealth is protected against inflation while generating stable, compounding returns.";
      } else if (gl === "Optimizing Returns") {
        title = "Balanced Yield Maximizer";
        riskLevel = "Medium";
        allocation = { primary: "50% Equities & Real Estate", secondary: "40% Securities", alternative: "10% Liquid Cash" };
        description = "A strategic blend designed to grow your principal steadily. We allocate assets between highly stable treasury instruments and dividend-paying equities to optimize your active yields without taking on excessive market volatility.";
      } else {
        title = "Generational Wealth Incubator";
        riskLevel = "Medium-High";
        allocation = { primary: "60% Diversified Equities", secondary: "30% Real Estate Assets", alternative: "10% Government Bonds" };
        description = "Focused on long-term capital appreciation. We harness the compound power of high-quality equities and early-stage real estate structures, making wealth-building accessible, structured, and resilient over a 5 to 10-year horizon.";
      }
    } else if (prof === "High-Net-Worth Individual (HNI)") {
      if (gl === "Capital Preservation") {
        title = "Sovereign Wealth Preserver";
        riskLevel = "Low";
        allocation = { primary: "60% Institutional Papers", secondary: "30% Prime Real Estate", alternative: "10% Liquid Funds" };
        description = "Designed for high-net-worth portfolios where capital preservation is paramount. We focus on structured sovereign bonds, Grade-A commercial papers, and inflation-hedging real estate syndicates that yield passive cash flow while keeping absolute volatility low.";
      } else if (gl === "Optimizing Returns") {
        title = "Structured Alpha Portfolio";
        riskLevel = "Medium-High";
        allocation = { primary: "45% Co-investment Real Estate", secondary: "35% Focused Equities", alternative: "20% Fixed Yields" };
        description = "A premium, actively managed model seeking to outperform benchmark indices. We lever custom opportunities in commercial paper issuances and real estate land bank expansions to deliver strong double-digit annual returns.";
      } else {
        title = "Dynastic Estate Builder";
        riskLevel = "Medium";
        allocation = { primary: "55% Prime Real Estate Syndicates", secondary: "30% Structured Equities", alternative: "15% Private Credit" };
        description = "For legacy creation and multi-generational security. We construct concentrated holdings in cash-flowing real estate developments, blue-chip domestic equities, and private placements that align with your long-term wealth transfer goals.";
      }
    } else {
      // Institutions
      if (gl === "Capital Preservation") {
        title = "Institutional Treasury Shield";
        riskLevel = "Very Low";
        allocation = { primary: "80% Sovereign Debt (T-Bills)", secondary: "15% High-Grade CP", alternative: "5% Call Deposits" };
        description = "A highly liquid, maximum-security treasury allocation model matching institutional liquidity requirements. Designed to hedge corporate capital reserves against inflation using high-grade federal instruments and top-tier bank placements.";
      } else if (gl === "Optimizing Returns") {
        title = "Corporate Surplus Catalyst";
        riskLevel = "Medium";
        allocation = { primary: "50% Commercial Debt & CP", secondary: "30% Real Estate Credit", alternative: "20% Capital Markets" };
        description = "Optimized for corporate balance sheets looking to maximize yields on reserve cash. We implement structured commercial paper purchases and high-yield institutional credit partnerships that match corporate maturity profiles.";
      } else {
        title = "Endowment Perpetual Growth";
        riskLevel = "Medium-High";
        allocation = { primary: "40% Capital Market Equities", secondary: "40% Structured Real Estate", alternative: "20% Long-Term Bonds" };
        description = "Designed for perpetual-horizon institutional endowments and pension reserves. A resilient portfolio built across diverse growth instruments, aiming for inflation-plus-6% benchmarks to build permanent wealth.";
      }
    }

    return { title, riskLevel, allocation, description, primaryAsset };
  };

  const advice = getStrategyAdvice();

  // Custom WhatsApp message hook
  const waMessage = `Hello Elizabeth, I ran the HFS Strategy Planner on your website for a ${profile} with a goal of ${goal} in ${asset}. I would like to schedule a private advisory consultation.`;
  const encodedWaMessage = encodeURIComponent(waMessage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#B9C7E8]/35 p-8 sm:p-10 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background decorative soft shapes */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#B9C7E8] rounded-full blur-3xl opacity-20 -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D1D067] rounded-full blur-3xl opacity-15 -z-10" />

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#B9C7E8]/20 pb-5 mb-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#D1D067] bg-[#D1D067]/10 px-3 py-1 rounded-full">
              HFS Strategy Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D21A5] mt-2 leading-tight">
              {advice.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-400 hover:text-[#0D21A5] hover:bg-[#B9C7E8]/20 hover:border-[#B9C7E8]/40 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Strategy Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Metrics */}
          <div className="bg-[#f7f9fd] p-5 rounded-2xl border border-[#B9C7E8]/20 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                Target Profile
              </span>
              <span className="text-sm font-bold text-[#0D21A5] block mt-0.5">
                {profile || "Retail Investor"}
              </span>

              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mt-4">
                Primary Asset Target
              </span>
              <span className="text-sm font-bold text-zinc-800 block mt-0.5">
                {asset || "Government Securities"}
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-[#B9C7E8]/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                  Assessed Risk Profile
                </span>
                <span className="text-sm font-extrabold text-[#0D21A5]">
                  {advice.riskLevel}
                </span>
              </div>
              <div className="h-2 w-16 bg-[#B9C7E8]/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#0D21A5]" 
                  style={{ 
                    width: advice.riskLevel.includes("High") ? "80%" : advice.riskLevel.includes("Medium") ? "50%" : "20%" 
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Allocation Breakdown */}
          <div className="bg-[#0D21A5]/5 p-5 rounded-2xl border border-[#0D21A5]/10">
            <span className="text-[10px] font-bold text-[#0D21A5] uppercase tracking-widest block mb-3">
              Recommended Model Allocation
            </span>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-600 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0D21A5]" />
                  Primary Pillar:
                </span>
                <span className="text-xs font-bold text-[#0D21A5]">{advice.allocation.primary}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-600 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D1D067]" />
                  Secondary Pillar:
                </span>
                <span className="text-xs font-bold text-zinc-800">{advice.allocation.secondary}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-600 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B9C7E8]" />
                  Strategic Reserves:
                </span>
                <span className="text-xs font-bold text-zinc-500">{advice.allocation.alternative}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="space-y-4 mb-8">
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
              Advisory Analysis
            </span>
            <p className="text-sm text-zinc-600 leading-relaxed font-medium">
              {advice.description}
            </p>
          </div>

          <div className="bg-[#D1D067]/10 p-4 rounded-xl border border-[#D1D067]/20">
            <p className="text-xs italic text-zinc-800 leading-relaxed font-bold text-center">
              &ldquo;Preserve capital, optimize returns, and build wealth that lasts.&rdquo;
            </p>
          </div>
        </div>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-[#B9C7E8]/20 pt-6">
          <a
            href={`https://wa.me/2347010002333?text=${encodedWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 text-center bg-[#0D21A5] text-white text-xs font-bold py-4 px-6 rounded-full hover:bg-[#0D21A5]/80 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            {/* WhatsApp SVG Icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.47 9.964-9.964.002-2.661-1.026-5.163-2.897-7.036A9.873 9.873 0 0 0 11.992 1.09c-5.492 0-9.965 4.471-9.968 9.965-.001 1.838.503 3.633 1.462 5.222l-.994 3.634 3.738-.98a9.839 9.839 0 0 0 4.417 1.022zM17.47 14.39c-.3-.149-1.777-.878-2.05-.978-.272-.1-.471-.149-.669.149-.198.299-.769.979-.942 1.178-.173.199-.347.224-.647.075-.3-.15-1.266-.466-2.41-1.486-.89-.794-1.49-1.775-1.665-2.074-.173-.3-.018-.462.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.669-1.61-.916-2.203-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.777-.726 2.025-1.43.248-.703.248-1.306.173-1.43-.075-.124-.272-.198-.57-.347z"/>
            </svg>
            Consult with Elizabeth on WhatsApp
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto text-xs font-bold text-zinc-500 hover:text-[#0D21A5] transition-colors py-4 px-6 rounded-full border border-zinc-200 hover:bg-zinc-50 cursor-pointer"
          >
            Modify Selections
          </button>
        </div>
      </div>
    </div>
  );
}
