"use client";

import { useState } from "react";
import { TrendingUp, Coins, Wallet } from "lucide-react";

export function Dashboard() {
  const [progressPercent] = useState(8.6);

  return (
    <div className="py-8 sm:py-10 md:py-12">
      <header className="mb-6 app-container">
        <div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-[--color-muted] border border-white/10 mb-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[--color-accent]"></span>
          Live holdings
        </div>
        <div className="card p-4 sm:p-5 md:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Toshi Strategy is currently holding</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-[--color-muted] p-4 border border-white/10">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Wallet size={16} /> ETH
              </div>
              <div className="text-2xl font-semibold mt-1">0.442</div>
            </div>
            <div className="rounded-xl bg-[--color-muted] p-4 border border-white/10">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Coins size={16} /> TOSHI
              </div>
              <div className="text-2xl font-semibold mt-1">8.97B</div>
            </div>
          </div>
        </div>
      </header>

      <section className="card p-4 sm:p-5 md:p-6 mb-6 app-container">
        <div className="flex items-center justify-between text-xs text-white/70">
          <span>Progress to Next Purchase</span>
          <span>Current rewards: 0.01 ETH</span>
        </div>
        <div className="mt-3 h-10 rounded-lg bg-[--color-muted] border border-white/10 flex items-center px-3">
          <span className="text-xs text-white/70">When the machine acquires the missing <b>4.568 ETH</b>, the first entity to trigger the functions below will process the mechanism forward and earn a reward.</span>
        </div>
        <div className="mt-4">
          <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
            <div
              className="h-2 bg-[--color-accent]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <button className="btn-primary mt-3 w-full py-2.5">Buy</button>
        </div>
      </section>

      <section className="mb-6 app-container">
        <h3 className="sr-only">Orders</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[4, 3, 2, 1].map((num) => (
            <div key={num} className="card p-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium">#{num}</span>
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Open</span>
              </div>
              <dl className="text-sm text-white/80 space-y-1">
                <div className="flex justify-between"><dt>ETH spent</dt><dd>5.0{num}</dd></div>
                <div className="flex justify-between"><dt>TOSHI bought</dt><dd>2.2{num}B</dd></div>
                <div className="flex justify-between"><dt>Est. value (now)</dt><dd>5.0{num}2</dd></div>
                <div className="flex justify-between"><dt>Target to sell</dt><dd>6.0{num}3</dd></div>
              </dl>
              <div className="mt-3">
                <div className="w-full h-1.5 bg-black/30 rounded-full overflow-hidden">
                  <div className="h-1.5 bg-[--color-accent]" style={{ width: "84%" }} />
                </div>
                <button className="mt-3 w-full py-2 text-sm rounded-md bg-white/5 border border-white/10 hover:bg-white/10">
                  Sell
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-3 md:p-4 app-container">
        <div className="flex items-center justify-between text-xs text-white/60 mb-2">
          <span>TOSHISTR Chart</span>
          <span className="opacity-70">Powered by GeckoTerminal</span>
        </div>
        <div className="aspect-[16/9] w-full overflow-hidden rounded-md border border-white/10">
          <iframe
            className="w-full h-full"
            src="https://www.geckoterminal.com/eth/pools/0x0000000000000000000000000000000000000000?embed=1&info=0"
            title="GeckoTerminal"
          />
        </div>
      </section>

      <footer className="mt-8 card p-4 text-xs text-white/60 flex items-center justify-between app-container">
        <span>Toshi Strategy — The perpetual memecoin machine</span>
        <a className="hover:underline" href="#">Telegram</a>
      </footer>
    </div>
  );
}


