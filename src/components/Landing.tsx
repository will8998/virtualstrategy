"use client";

import Link from "next/link";

export function Landing() {
  return (
    <div>
      <section className="relative overflow-hidden py-24 sm:py-32 md:py-40 bg-gradient-to-b from-black/40 to-transparent">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 text-center">
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

      <section id="story" className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">The Ultimate Investment</h2>
          <p className="text-white/60 max-w-3xl">A story of resilience, community, and an automated market strategy.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-5">
              <h3 className="font-medium mb-2">The Strategy</h3>
              <p className="text-white/70 text-sm leading-6">
                Fees accumulate into a reserve. When the reserve threshold is reached, the protocol buys the asset.
                Positions are listed for a premium, and when sold, proceeds are used to burn the token and reinforce liquidity.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="font-medium mb-2">The Data</h3>
              <p className="text-white/70 text-sm leading-6">
                All movements are on-chain. Orders, targets, and results are tracked live for full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
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


