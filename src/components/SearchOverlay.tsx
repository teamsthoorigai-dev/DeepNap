"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { cots } from "@/data/cots";
import { articlesData } from "@/data/articles";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter logic
  const searchLower = query.toLowerCase().trim();
  
  const mattressResults = searchLower ? products.filter(p => 
    p.name.toLowerCase().includes(searchLower) || p.description.toLowerCase().includes(searchLower)
  ) : [];

  const diwanResults = searchLower ? cots.filter(c => 
    c.name.toLowerCase().includes(searchLower) || c.description.toLowerCase().includes(searchLower)
  ) : [];

  const guideResults = searchLower ? articlesData.filter(a => 
    a.title.toLowerCase().includes(searchLower) || a.excerpt.toLowerCase().includes(searchLower)
  ) : [];

  const hasResults = mattressResults.length > 0 || diwanResults.length > 0 || guideResults.length > 0;
  const isSearching = searchLower.length > 0;

  return (
    <div 
      className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-surface-white w-full max-w-[800px] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="w-full h-[72px] border-b border-hairline/20 bg-surface-white px-6 flex items-center gap-4 shrink-0">
          <span className="material-symbols-outlined text-slate/50 text-[24px]">search</span>
          <input 
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for mattresses, cots, or sleep advice..."
            className="flex-1 bg-transparent border-none outline-none font-display-md text-xl md:text-2xl text-primary placeholder:text-slate/30"
          />
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 transition-colors text-slate flex items-center justify-center"
            aria-label="Close search"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8 w-full">
          
          {!isSearching ? (
            <div className="text-center py-10">
              <p className="font-display-md text-slate/40 text-2xl">What are you looking for?</p>
            </div>
          ) : !hasResults ? (
            /* EMPTY STATE */
            <div className="text-center py-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <span className="material-symbols-outlined text-slate/20 text-5xl mb-4">inventory_2</span>
              <h3 className="font-display-md text-primary text-2xl md:text-3xl mb-3">
                We didn't find that - but we make almost anything to order.
              </h3>
              <p className="font-body-regular text-slate text-base mb-8 max-w-lg mx-auto">
                If you have a specific requirement, size, or shape in mind, just send us a message. Our team can build it.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://wa.me/919600889334" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-label-nav font-medium h-12 px-6 rounded-full bg-[#25D366] text-surface-white hover:bg-[#1EBE5A] transition-colors w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2">chat</span>
                  Ask on WhatsApp
                </a>
                <Link 
                  href="/custom-size" 
                  onClick={onClose}
                  className="inline-flex items-center justify-center font-label-nav font-medium h-12 px-6 rounded-full bg-primary text-surface-white hover:bg-primary/90 transition-colors w-full sm:w-auto"
                >
                  Go to Custom Builder
                </Link>
              </div>
            </div>
          ) : (
            /* RESULTS STATE */
            <div className="space-y-10 pb-10 animate-in fade-in duration-300">
              
              {mattressResults.length > 0 && (
                <section>
                  <h3 className="font-title-card text-slate mb-4 border-b border-hairline/20 pb-2">Mattresses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mattressResults.map(product => (
                      <Link href={`/mattresses/${product.slug}`} onClick={onClose} key={product.id} className="flex gap-4 p-3 rounded-xl hover:bg-surface-container/50 transition-colors group border border-transparent hover:border-hairline/20">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-primary/5">
                          <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="font-title-card text-primary group-hover:text-navy-deep transition-colors">{product.name}</h4>
                          <p className="font-body-regular text-sm text-slate line-clamp-1">{product.description}</p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>
                            <span className="font-label-nav text-xs text-primary font-medium">Firmness: {product.firmness}/10 ({product.firmnessLabel})</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {diwanResults.length > 0 && (
                <section>
                  <h3 className="font-title-card text-slate mb-4 border-b border-hairline/20 pb-2">Diwan Cots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {diwanResults.map(product => (
                      <Link href={`/diwan-cots/${product.slug}`} onClick={onClose} key={product.id} className="flex gap-4 p-3 rounded-xl hover:bg-surface-container/50 transition-colors group border border-transparent hover:border-hairline/20">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-primary/5">
                          <Image src={product.image} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="font-title-card text-primary group-hover:text-navy-deep transition-colors">{product.name}</h4>
                          <p className="font-body-regular text-sm text-slate line-clamp-1">{product.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {guideResults.length > 0 && (
                <section>
                  <h3 className="font-title-card text-slate mb-4 border-b border-hairline/20 pb-2">Sleep Guides</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {guideResults.map(article => (
                      <Link href={`/guide/${article.slug}`} onClick={onClose} key={article.id} className="flex flex-col p-3 rounded-xl hover:bg-surface-container/50 transition-colors group border border-transparent hover:border-hairline/20">
                        <h4 className="font-title-card text-primary group-hover:text-navy-deep transition-colors mb-1">{article.title}</h4>
                        <p className="font-body-regular text-sm text-slate line-clamp-2">{article.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* ALWAYS SHOW AT BOTTOM OF RESULTS */}
              <div className="mt-8 pt-6 border-t border-hairline/20 text-center">
                <p className="font-body-regular text-slate mb-3">Can't find your size?</p>
                <Link 
                  href="/custom-size" 
                  onClick={onClose}
                  className="inline-flex items-center justify-center font-label-nav font-medium h-10 px-5 rounded-full bg-[#EFE5D7] text-primary hover:bg-[#E5D7C3] transition-colors"
                >
                  We make custom
                </Link>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
