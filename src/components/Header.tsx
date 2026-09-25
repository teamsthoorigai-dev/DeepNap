"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PrimaryButton, WhatsAppButton } from "./Buttons";
import SearchOverlay from "./SearchOverlay";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      <div className="bg-surface/90 backdrop-blur-md border-b border-hairline shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop flex items-center justify-between gap-space-md">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-space-md">
            {/* Hamburger (Mobile Only) */}
            <button 
              className="xl:hidden text-primary p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>

            <Link href="/" className="flex items-center gap-space-md">
              <div className="relative h-16 flex items-center">
                {/* 
                  NOTE (2026 Brand Update):
                  Text placeholder. Replace with the new 3-layer wave SVG from the 2026 Brand Identity once available.
                */}
                <img src="/logo-dark-horizontal.png" alt="Deep Nap" className="h-8 md:h-[36px] w-auto" />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-space-md">
            <Link href="/mattresses" className="font-label-nav text-base font-semibold text-slate hover:text-primary transition-colors py-1.5">
              Mattresses
            </Link>
            <Link href="/diwan-cots" className="font-label-nav text-base font-semibold text-slate hover:text-primary transition-colors py-1.5">
              Diwan cots
            </Link>
            <Link href="/custom-size" className="font-label-nav text-base font-semibold text-slate hover:text-primary transition-colors py-1.5">
              Custom size
            </Link>
            <Link href="/b2b" className="font-label-nav text-base font-semibold text-slate hover:text-primary transition-colors py-1.5">
              Bulk orders
            </Link>
            <Link href="/visit" className="font-label-nav text-base font-semibold text-slate hover:text-primary transition-colors py-1.5">
              Visit us
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-space-sm">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-primary hover:bg-black/5 rounded-full transition-colors flex items-center justify-center"
              aria-label="Search"
            >
              <span className="material-symbols-outlined text-[24px]">search</span>
            </button>
            <div className="hidden sm:block">
              <WhatsAppButton />
            </div>
            <Link href="/quote" className="inline-flex items-center justify-center font-label-nav font-medium h-[42px] rounded-full transition-colors bg-primary text-surface-white hover:bg-navy-deep px-5 text-sm">
              Get a quote
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative w-4/5 max-w-sm bg-surface h-full shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-hairline">
              <span className="font-headline-sm text-primary tracking-tight">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-on-surface-variant"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-4">
              <Link href="/mattresses" className="font-label-nav text-lg text-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                Mattresses
              </Link>
              <Link href="/diwan-cots" className="font-label-nav text-lg text-slate font-semibold hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Diwan cots
              </Link>
              <Link href="/custom-size" className="font-label-nav text-lg text-slate font-semibold hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Custom size
              </Link>
              <Link href="/b2b" className="font-label-nav text-lg text-slate font-semibold hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Bulk orders
              </Link>
              <Link href="/visit" className="font-label-nav text-lg text-slate font-semibold hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Visit us
              </Link>
            </nav>
            <div className="mt-auto p-4 border-t border-hairline flex flex-col gap-4">
              <WhatsAppButton className="w-full justify-center" />
              <div className="flex items-center gap-2 text-slate font-label-nav">
                <span className="material-symbols-outlined text-[18px]">call</span>
                96008 89334
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </header>
  );
}
