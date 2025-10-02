"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/80 border-b border-white/10">
      <div className="w-full px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-[--color-accent]"></span>
          <span className="text-[22px] font-semibold tracking-tight">VirtualStrategy</span>
        </Link>

        {/* Center nav + search */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="/" className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10">Home</a>
          <a href="/dashboard" className="px-4 py-2 rounded-full bg-transparent border border-white/10 text-sm hover:bg-white/5">Dashboard</a>
          <a href="/#story" className="px-4 py-2 rounded-full bg-transparent border border-white/10 text-sm hover:bg-white/5">How it works</a>
          <div className="ml-3 flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-2 min-w-[240px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-70"><path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/></svg>
            <input className="bg-transparent outline-none text-sm placeholder:text-white/60 w-full" placeholder="Search..." />
          </div>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/dashboard"
            className="hidden sm:inline-flex text-sm px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10"
          >
            View Dashboard
          </a>
          <a
            href="/dashboard"
            className="hidden sm:inline-flex text-sm px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-500/20 hover:bg-emerald-500/30"
          >
            Butler
          </a>
          <a
            href="https://dexscreener.com/base/0xc4da0cb0e9cc712ab8b2b90d282bd55a05518d76"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm px-4 py-2 rounded-full bg-[--color-accent] hover:opacity-90"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}


