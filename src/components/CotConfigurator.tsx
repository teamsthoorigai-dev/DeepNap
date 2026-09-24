"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { DiwanCotProduct } from "@/data/cots";

export default function CotConfigurator({ cot }: { cot: DiwanCotProduct }) {
  const [sizeType, setSizeType] = useState<"standard" | "custom">("standard");
  const [length, setLength] = useState<number>(78);
  const [width, setWidth] = useState<number>(60);
  const [price, setPrice] = useState<number>(cot.priceFrom);

  // Simple mock price updater
  useEffect(() => {
    if (sizeType === "custom") {
      // Just a mock formula for the UI demo
      const customPrice = Math.round((length * width * 10) / 100) * 100;
      setPrice(Math.max(customPrice, cot.priceFrom));
    } else {
      setPrice(cot.priceFrom);
    }
  }, [sizeType, length, width, cot.priceFrom]);

  const standardSizes = ["72x36 Single", "72x48 Double", "78x60 Queen", "78x72 King"];
  
  // Mock finishes to render swatches
  const finishSwatches = [
    { name: "Teak", bg: "#8B5A2B" },
    { name: "Rubber wood", bg: "#D2B48C" },
    { name: "Sheesham", bg: "#5C4033" },
    { name: "Ply and laminate", bg: "#E6D7C3" },
    { name: "MDF", bg: "#A0522D" }
  ];

  const pairsWithSlug = "natural-latex-pocket-spring"; // Example bestseller to cross-sell

  return (
    <div className="flex flex-col space-y-8">
      {/* Header Info */}
      <div>
        <div className="font-caption text-caption text-slate mb-2">
          <Link href="/diwan-cots" className="hover:underline">Diwan Cots</Link> 
          <span className="mx-2">/</span> {cot.name}
        </div>
        <h1 className="font-display-md text-display-md text-primary mb-2">{cot.name}</h1>
        <p className="font-body-regular text-body-regular text-slate">{cot.description}</p>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 group">
          <div className="flex items-center text-[#DCA544]">
            <span className="material-symbols-outlined text-[16px]">star</span>
            <span className="material-symbols-outlined text-[16px]">star</span>
            <span className="material-symbols-outlined text-[16px]">star</span>
            <span className="material-symbols-outlined text-[16px]">star</span>
            <span className="material-symbols-outlined text-[16px]">star_half</span>
          </div>
          <span className="font-label-nav text-label-nav font-medium text-slate group-hover:underline ml-1">4.8 · 34 reviews</span>
        </a>
      </div>

      <div className="w-full h-px bg-hairline"></div>

      {/* Finish Swatches */}
      <div>
        <h3 className="font-label-form text-label-form font-semibold text-primary uppercase tracking-wider mb-4">Finish: {cot.finish}</h3>
        <div className="flex items-center gap-4">
          {finishSwatches.map(swatch => (
            <div key={swatch.name} className="flex flex-col items-center gap-2">
              <div 
                className={`w-12 h-12 rounded-full cursor-pointer relative ${swatch.name === cot.finish ? 'ring-2 ring-primary ring-offset-2' : 'hover:ring-2 hover:ring-hairline hover:ring-offset-2'} transition-all`}
                style={{ backgroundColor: swatch.bg }}
                title={swatch.name}
              >
                {/* Normally an image of wood grain would go here */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="font-label-form text-label-form font-semibold text-primary uppercase tracking-wider mb-4">Size</h3>
        
        {sizeType === "standard" ? (
          <div className="grid grid-cols-2 gap-3 mb-3">
            {standardSizes.map(size => (
              <button 
                key={size}
                className="h-12 border border-primary text-primary font-label-nav text-label-nav font-medium rounded-lg hover:bg-surface-container transition-colors"
                onClick={() => {
                  const [l, w] = size.split(" ")[0].split("x");
                  setLength(Number(l));
                  setWidth(Number(w));
                }}
              >
                {size}
              </button>
            ))}
            <button 
              onClick={() => setSizeType("custom")}
              className="h-12 border border-hairline text-slate font-label-nav text-label-nav font-medium rounded-lg hover:bg-surface-container flex items-center justify-center gap-2 transition-colors relative"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544] absolute left-4"></span>
              Custom size
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block font-label-form text-label-form text-slate mb-1">Length</label>
              <div className="relative">
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value) || 0)}
                  className="w-full h-[48px] bg-surface-white rounded-lg border border-hairline px-3.5 pr-8 font-label-nav text-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-semibold"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-label-form text-label-form text-slate">in</span>
              </div>
            </div>
            <div>
              <label className="block font-label-form text-label-form text-slate mb-1">Width</label>
              <div className="relative">
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value) || 0)}
                  className="w-full h-[48px] bg-surface-white rounded-lg border border-hairline px-3.5 pr-8 font-label-nav text-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-semibold"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-label-form text-label-form text-slate">in</span>
              </div>
            </div>
            <button 
              onClick={() => setSizeType("standard")}
              className="col-span-2 text-left text-sm text-primary underline mt-2"
            >
              Back to standard sizes
            </button>
          </div>
        )}
      </div>

      {/* Storage Indicator */}
      {cot.hasStorage && (
        <div className="flex items-center gap-2 p-3 bg-surface-container rounded-lg border border-hairline">
          <span className="material-symbols-outlined text-primary">inventory_2</span>
          <span className="font-label-nav text-label-nav text-primary font-semibold">Includes built-in storage</span>
        </div>
      )}

      {/* PAIRS WITH MODULE */}
      <div className="border-2 border-primary rounded-xl p-5 bg-[#F8F4ED]">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-label-nav text-label-nav font-bold text-primary uppercase tracking-wider">Pairs Perfectly With</h4>
          <span className="bg-[#DCA544] text-white text-xs font-bold px-2 py-0.5 rounded uppercase">Best Seller</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-hairline flex-shrink-0">
            <Image src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" alt="Natural Latex Mattress" fill className="object-cover" />
          </div>
          <div>
            <h5 className="font-title-card text-primary mb-1">Natural Latex & Pocket Spring</h5>
            <p className="font-caption text-slate line-clamp-2">Our most popular hybrid mattress. Perfectly complements this cot base.</p>
          </div>
        </div>
        <Link 
          href={`/mattresses/${pairsWithSlug}?prefillSize=${length}x${width}`}
          className="mt-4 block w-full text-center h-10 leading-10 rounded-lg bg-surface-white border border-primary text-primary font-label-nav font-semibold hover:bg-primary hover:text-surface-white transition-colors"
        >
          View Mattress (Size Prefilled)
        </Link>
      </div>

      {/* Price Panel */}
      <div className="bg-surface border border-hairline rounded-xl p-5 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-caption text-slate">Base price ({length}x{width} inches)</span>
          <span className="font-label-nav text-primary font-semibold">₹{price.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-caption text-slate">Installation (by our team)</span>
          <span className="font-label-nav text-primary font-semibold">+₹{cot.installationCharge.toLocaleString('en-IN')}</span>
        </div>
        <div className="w-full h-px bg-hairline my-2"></div>
        <div className="flex justify-between items-end">
          <span className="font-label-nav font-bold text-primary">Indicative Total</span>
          <span className="font-display-sm text-display-sm text-primary">₹{(price + cot.installationCharge).toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link 
          href={`/quote?product=${encodeURIComponent(cot.name)}&size=${encodeURIComponent(`${length}x${width}`)}&thickness=N/A&price=${(price + cot.installationCharge).toLocaleString('en-IN')}`}
          className="h-12 flex-1 rounded-lg bg-primary text-surface-white font-label-nav text-label-nav font-semibold flex items-center justify-center hover:bg-navy-deep transition-colors shadow-sm"
        >
          Get a quote
        </Link>
      </div>

      {/* Trust facts */}
      <ul className="space-y-2 text-sm text-slate font-body-regular pt-2">
        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Assembled at your home by our team. Rs {cot.installationCharge} extra.</li>
        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Built to order in {cot.leadTime}</li>
        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>{cot.warranty} warranty</li>
      </ul>
    </div>
  );
}
