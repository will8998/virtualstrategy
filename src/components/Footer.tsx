"use client";

import { Github, MessageCircle, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-12 relative overflow-hidden bg-footer bg-cover bg-center with-overlay">
      <div className="absolute inset-0 bg-footer bg-cover bg-center" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h4 className="text-2xl font-semibold">Toshi Strategy</h4>
            <p className="text-white/70 mt-2 max-w-md">The perpetual memecoin machine. Join the community and help steer the machine forward.</p>
          </div>
          <div className="md:col-span-2 flex flex-wrap gap-3 md:justify-end">
            <a href="#" className="btn-primary inline-flex items-center gap-2 px-5 py-3">
              <MessageCircle size={18} /> Telegram
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/10 hover:bg-white/5">
              <Twitter size={18} /> X
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/10 hover:bg-white/5">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Toshi Strategy</span>
          <div className="space-x-4">
            <a className="hover:underline" href="#">Token Contract</a>
            <a className="hover:underline" href="#">Docs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


