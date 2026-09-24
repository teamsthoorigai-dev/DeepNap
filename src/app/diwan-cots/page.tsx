"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cots, CotFinish } from "@/data/cots";

const finishes: CotFinish[] = ["Teak", "Rubber wood", "Sheesham", "Ply and laminate", "MDF"];

export default function DiwanCotsPage() {
  const [currentFinish, setCurrentFinish] = useState<CotFinish | null>(null);
  const [storageOnly, setStorageOnly] = useState<boolean>(false);

  let filteredCots = cots;
  if (currentFinish) {
    filteredCots = filteredCots.filter((c) => c.finish === currentFinish);
  }
  if (storageOnly) {
    filteredCots = filteredCots.filter((c) => c.hasStorage);
  }

  return (
    <main className="w-full bg-surface min-h-screen relative pb-20">
      {/* Header Area */}
      <div className="relative w-full pt-16 pb-12 px-gutter md:px-gutter-tablet lg:px-gutter-desktop overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=2000"
          alt="Diwan Cots Collection Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="font-caption text-caption text-surface-white/80 mb-4">
            <Link href="/" className="hover:text-surface-white transition-colors">Home</Link> <span className="mx-2">/</span> Diwan Cots
          </div>
          <p className="font-body-lead text-body-lead text-surface-white mt-2 max-w-2xl font-medium drop-shadow-sm">
            We make diwan cots to order in five finishes. Everything is built for your size and installed by our team.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="w-full bg-surface-white border-b border-hairline sticky top-20 z-30 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar min-w-max">
            <span className="font-label-nav text-label-nav text-slate mr-2 font-medium">Finish:</span>
            
            <button
              onClick={() => setCurrentFinish(null)}
              className={`h-10 px-5 rounded-full font-label-nav text-label-nav font-medium transition-colors border flex-shrink-0 ${
                !currentFinish
                  ? "bg-primary text-surface-white border-primary"
                  : "bg-surface text-primary border-hairline hover:bg-surface-container"
              }`}
            >
              All
            </button>
            
            {finishes.map((f) => (
              <button
                key={f}
                onClick={() => setCurrentFinish(f)}
                className={`h-10 px-5 rounded-full font-label-nav text-label-nav font-medium transition-colors border flex-shrink-0 ${
                  currentFinish === f
                    ? "bg-primary text-surface-white border-primary"
                    : "bg-surface text-primary border-hairline hover:bg-surface-container"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l-0 md:border-l border-hairline md:pl-4">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="checkbox"
                checked={storageOnly}
                onChange={(e) => setStorageOnly(e.target.checked)}
                className="w-5 h-5 rounded border-hairline text-primary focus:ring-primary"
              />
              <span className="font-label-nav text-slate group-hover:text-primary transition-colors">Has Storage</span>
            </label>
          </div>
          
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop py-8 md:py-10">
        {filteredCots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {filteredCots.map((cot) => (
              <Link href={`/diwan-cots/${cot.slug}`} key={cot.id} className="block group">
                <div className="bg-surface-white rounded-xl border border-hairline overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow relative">
                  
                  <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
                    {cot.isBestSeller && (
                      <div className="absolute top-4 left-4 z-10 bg-[#F3E3C2] text-primary px-3 py-1 rounded-full font-caption text-caption font-semibold">
                        Best seller
                      </div>
                    )}
                    <Image
                      src={cot.image}
                      alt={cot.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-title-card text-title-card text-primary pr-4">{cot.name}</h3>
                      {cot.hasStorage && (
                        <span className="material-symbols-outlined text-slate" title="Has Storage">inventory_2</span>
                      )}
                    </div>
                    
                    <p className="font-body-regular text-body-regular text-slate text-sm line-clamp-2 mb-4">{cot.description}</p>
                    
                    <div className="w-full h-px bg-hairline mb-4"></div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Finish</div>
                        <div className="font-label-nav text-label-nav font-semibold text-primary">{cot.finish}</div>
                      </div>
                      <div>
                        <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Lead Time</div>
                        <div className="font-label-nav text-label-nav font-semibold text-primary">{cot.leadTime}</div>
                      </div>
                    </div>

                    <div className="mt-auto flex items-end justify-between pt-4 border-t border-hairline">
                      <div>
                        <div className="font-price-display text-price-display text-primary">₹{cot.priceFrom.toLocaleString('en-IN')}</div>
                        <div className="font-caption text-caption text-slate">indicative starting price</div>
                      </div>
                      <div className="h-10 px-5 rounded-lg border border-primary text-primary font-label-nav text-label-nav font-semibold flex items-center justify-center group-hover:bg-primary group-hover:text-surface-white transition-colors">
                        View details
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface-white rounded-xl border border-hairline px-6">
            <span className="material-symbols-outlined text-[48px] text-slate mb-4">search_off</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">No cots match these filters</h3>
            <p className="font-body-regular text-body-regular text-slate max-w-md mx-auto mb-8">
              Try removing the storage filter or changing the finish.
            </p>
            <button 
              onClick={() => { setCurrentFinish(null); setStorageOnly(false); }}
              className="h-12 px-6 mx-auto rounded-lg border border-primary text-primary font-label-nav text-label-nav font-semibold flex items-center justify-center hover:bg-surface transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
