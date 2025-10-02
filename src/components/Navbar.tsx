"use client";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/75 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
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
          <ConnectButton chainStatus="icon" showBalance={false} />
        </div>
      </div>
    </div>
  );
}


