"use client";

import Link from "next/link";
import Image from "next/image";

export function Landing() {
  return (
    <div>
      <section className="relative overflow-hidden py-24 sm:py-32 md:py-40 bg-hero parallax-hero with-overlay overlay-strong">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            <span className="opacity-90">The Only Way</span>
            <br />
            <span className="text-[--color-accent]">Is Up</span>
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            A perpetual strategy that accumulates and rebalances with transparency.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#app" className="btn-primary px-5 py-3">Enter App</a>
            <a href="#story" className="px-5 py-3 rounded-md border border-white/10 hover:bg-white/5">How it works</a>
          </div>
        </div>
      </section>

      <section id="story" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">The Ultimate Investment</h2>
          <p className="text-white/60 max-w-3xl">A story of resilience, community, and an automated market strategy.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-5 relative overflow-hidden">
              <Image src="/images/diamondhand.jpeg" alt="Strategy" fill className="object-cover opacity-35" priority />
              <div className="absolute inset-0 bg-black/10" />
              <h3 className="font-medium mb-2">The Strategy</h3>
              <p className="text-white/70 text-sm leading-6">
                Fees accumulate into a reserve. When the reserve threshold is reached, the protocol buys the asset.
                Positions are listed for a premium, and when sold, proceeds are used to burn the token and reinforce liquidity.
              </p>
            </div>
            <div className="card p-5 relative overflow-hidden">
              <Image src="/images/data.jpeg" alt="Data" fill className="object-cover opacity-35" />
              <div className="absolute inset-0 bg-black/10" />
              <h3 className="font-medium mb-2">The Data</h3>
              <p className="text-white/70 text-sm leading-6">
                All movements are on-chain. Orders, targets, and results are tracked live for full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden min-h-screen flex items-center justify-center text-center bg-vision parallax-hero with-overlay">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <h3 className="text-xl sm:text-2xl font-semibold">The Vision</h3>
          <p className="mt-3 text-white/80 text-lg">We dollar cost average TOSHI.</p>
          <div className="mt-6">
            <a href="#app" className="btn-primary px-6 py-3">Buy TOSHI</a>
          </div>
        </div>
      </section>
    </div>
  );
}


