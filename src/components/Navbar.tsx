"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter } from "lucide-react";

export function Navbar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/80 border-b border-white/10">
      <div className="w-full px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="VirtualStrategy" width={120} height={120} className="h-14 w-28 object-contain" />
          <span className="sr-only">VirtualStrategy</span>
        </Link>

        {/* Center nav + search */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/" className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10">Home</Link>
          <a
            href="https://dexscreener.com/base/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-transparent border border-white/10 text-sm hover:bg-white/5"
          >
            Dexscreener
          </a>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="hidden sm:inline-flex text-sm px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10">View Dashboard</Link>
          {/* Butler button removed */}
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm px-4 py-2 rounded-full bg-[--color-accent] hover:opacity-90"
          >
            Buy
          </a>
          <a
            href="https://t.me/virstrstrategy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10"
          >
            Community
          </a>
          <a
            href="https://x.com/VIRSTRStrategy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10"
          >
            <Twitter size={14} /> Twitter
          </a>
        </div>
      </div>
    </div>
  );
}


