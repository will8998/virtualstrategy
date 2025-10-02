"use client";

import Link from "next/link";
import Image from "next/image";

export function Landing() {
  return (
    <div>
      <section className="relative overflow-hidden py-24 sm:py-32 md:py-40 bg-hero parallax-hero with-overlay overlay-strong">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            <span className="opacity-90">The Perpetual</span>
            <br />
            <span className="text-[--color-accent]">TOSHI Machine</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Automated buys, smart profit-taking, and deflationary burns—on repeat.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#app" className="btn-primary px-5 py-3">Enter App</a>
            <a href="#story" className="px-5 py-3 rounded-md border border-white/10 hover:bg-white/5">How it works</a>
          </div>
        </div>
      </section>

      <section id="story" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">How it Works</h2>
          <p className="text-white/70 max-w-3xl">A fully automated loop that accumulates TOSHI, realizes profits, and burns TOSTR.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-5 relative overflow-hidden">
              <Image src="/images/diamondhand.jpeg" alt="Strategy" fill className="object-cover opacity-35" priority />
              <div className="absolute inset-0 bg-black/10" />
              <h3 className="font-medium mb-2">Automatic TOSHI Buying</h3>
              <p className="text-white/80 text-sm leading-6">
                A 10% tax on every trade feeds the machine. When 1 ETH accumulates, it automatically buys TOSHI.
              </p>
            </div>
            <div className="card p-5 relative overflow-hidden">
              <Image src="/images/data.jpeg" alt="Data" fill className="object-cover opacity-35" />
              <div className="absolute inset-0 bg-black/10" />
              <h3 className="font-medium mb-2">Smart Profit Taking</h3>
              <p className="text-white/80 text-sm leading-6">
                Monitors prices 24/7 and sells orders at 20% profit via Uniswap V3 for optimal execution.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card p-4">
              <h4 className="font-medium mb-1">Deflationary Burns</h4>
              <p className="text-white/75 text-sm">All TOSHI profits buy back and burn TOSTR, reducing supply forever.</p>
            </div>
            <div className="card p-4">
              <h4 className="font-medium mb-1">Marketing</h4>
              <p className="text-white/75 text-sm">20% of tax revenue funds growth, expanding awareness of $TOSTR.</p>
            </div>
            <div className="card p-4">
              <h4 className="font-medium mb-1">Fully Automated</h4>
              <p className="text-white/75 text-sm">No manual intervention. The contract runs continuously and transparently.</p>
            </div>
            <div className="card p-4">
              <h4 className="font-medium mb-1">V3 Liquidity Access</h4>
              <p className="text-white/75 text-sm">Executes through deep UniV3 pools for best price and low slippage.</p>
            </div>
            <div className="card p-4 sm:col-span-2 lg:col-span-1">
              <h4 className="font-medium mb-1">Self‑Sustaining Loop</h4>
              <p className="text-white/75 text-sm">More trading → more TOSHI buys → more profits → more burns → higher TOSTR value.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden min-h-screen flex items-center justify-center text-center bg-vision parallax-hero with-overlay">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <h3 className="text-xl sm:text-2xl font-semibold">The Vision</h3>
          <p className="mt-3 text-white/85 text-lg">A self-sustaining machine that compounds value into TOSHI and burns TOSTR supply.</p>
          <div className="mt-6">
            <a href="#app" className="btn-primary px-6 py-3">Buy TOSHI</a>
          </div>
        </div>
      </section>
    </div>
  );
}


