"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/75 border-b border-white/10">
      <div className="w-full px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-[--color-accent]"></span>
          <span className="text-[22px] font-semibold tracking-tight">ToshiStrategy</span>
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="#story"
            className="hidden sm:inline-flex text-sm px-3 py-2 rounded-md border border-white/10 hover:bg-white/5"
          >
            How it works
          </a>
          <a
            href="#app"
            className="hidden sm:inline-flex text-sm px-3 py-2 rounded-md border border-white/10 hover:bg-white/5"
          >
            Enter App
          </a>
          <a
            href="https://dexscreener.com/base/0xc4da0cb0e9cc712ab8b2b90d282bd55a05518d76"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-4 py-2"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}


