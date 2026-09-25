"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MattressProduct } from "@/data/products";
import { calculateIndicativePrice } from "@/actions/calculatePrice";

export default function ProductConfigurator({ product }: { product: MattressProduct }) {
  const searchParams = useSearchParams();
  const prefillSize = searchParams.get("prefillSize"); // e.g., "78x60"

  const defaultLength = prefillSize ? parseInt(prefillSize.split("x")[0]) || 78 : 78;
  const defaultWidth = prefillSize ? parseInt(prefillSize.split("x")[1]) || 60 : 60;
  
  const [sizeType, setSizeType] = useState<"standard" | "custom">(prefillSize ? "custom" : "standard");
  const [selectedThickness, setSelectedThickness] = useState<number>(6);
  
  // Custom size state
  const [length, setLength] = useState<number>(defaultLength);
  const [width, setWidth] = useState<number>(defaultWidth);
  
  const [price, setPrice] = useState<number>(product.priceFrom);

  useEffect(() => {
    async function updatePrice() {
      if (sizeType === "custom") {
        const customPrice = await calculateIndicativePrice(length, width, selectedThickness);
        // Since we are mocking, let's just make sure the base logic doesn't drop below the product's starting price
        setPrice(Math.max(customPrice, product.priceFrom));
      } else {
        // Mock standard pricing logic (just add slightly based on thickness for the demo)
        setPrice(product.priceFrom + ((selectedThickness - 4) * 1200));
      }
    }
    updatePrice();
  }, [sizeType, length, width, selectedThickness, product.priceFrom]);

  const thicknesses = [4, 5, 6, 8, 10, 12];
  const standardSizes = ["72x36 Single", "72x48 Double", "78x60 Queen", "78x72 King"];

  return (
    <div className="flex flex-col space-y-8">
      {/* Header Info */}
      <div>
        <div className="font-caption text-caption text-slate mb-2">
          <Link href="/mattresses" className="hover:underline">Mattresses</Link> 
          <span className="mx-2">/</span> {product.name}
        </div>
        <h1 className="font-headline-lg text-headline-lg text-primary mb-2">{product.name}</h1>
        <p className="font-body-regular text-body-regular text-slate">{product.description}</p>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 group">
          <div className="flex items-center text-[#DCA544]">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
          </div>
          <span className="font-label-nav text-label-nav font-medium text-slate group-hover:underline ml-1">4.6 · 62 reviews</span>
        </a>
      </div>

      <div className="w-full h-px bg-hairline"></div>

      {/* Firmness */}
      <div>
        <h3 className="font-label-form text-label-form font-semibold text-primary uppercase tracking-wider mb-4">Firmness</h3>
        <div className="flex flex-col gap-2">
          <span className="font-label-nav text-label-nav font-semibold text-primary whitespace-nowrap">{product.firmness} / 10 ({product.firmnessLabel})</span>
          <div className="w-full max-w-[200px] h-2 bg-surface-white border border-primary rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${(product.firmness / 10) * 100}%` }}></div>
          </div>
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

      {/* Thickness */}
      <div>
        <h3 className="font-label-form text-label-form font-semibold text-primary uppercase tracking-wider mb-4">Thickness</h3>
        <div className="flex flex-wrap gap-3">
          {thicknesses.map(t => (
            <button 
              key={t}
              onClick={() => setSelectedThickness(t)}
              className={`h-12 w-16 border font-label-nav text-label-nav font-medium rounded-lg transition-colors ${
                selectedThickness === t 
                  ? "border-primary bg-primary text-surface-white" 
                  : "border-hairline text-slate hover:bg-surface-container"
              }`}
            >
              {t}"
            </button>
          ))}
        </div>
      </div>

      {/* Price Panel */}
      <div className="bg-[#F8F4ED] border border-hairline rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="block font-caption text-caption text-slate mb-1">Indicative price for this configuration</span>
          <div className="flex items-end gap-3">
            <span className="font-display-sm text-display-sm text-primary">₹{price.toLocaleString('en-IN')}</span>
            <span className="font-caption text-caption text-slate mb-1 pb-0.5">Confirmed on quote</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link 
          href={`/quote?product=${encodeURIComponent(product.name)}&size=${encodeURIComponent(sizeType === 'custom' ? `${length}x${width}` : 'Standard size')}&thickness=${selectedThickness}&price=${price.toLocaleString('en-IN')}`}
          className="h-12 flex-1 rounded-lg bg-primary text-surface-white font-label-nav text-label-nav font-semibold flex items-center justify-center hover:bg-navy-deep transition-colors shadow-sm"
        >
          Get a quote
        </Link>
        <Link 
          href={`https://wa.me/919600889334?text=${encodeURIComponent(`Hi Deep Nap, I have a question about the ${product.name}.`)}`}
          className="h-12 sm:w-[60px] rounded-lg border border-primary text-primary flex items-center justify-center hover:bg-surface-container transition-colors flex-shrink-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
        </Link>
      </div>

      {/* Trust facts */}
      <ul className="space-y-2 text-sm text-slate font-body-regular pt-2">
        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Cash on delivery available</li>
        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Built to order in 4-6 days</li>
        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Free pillows included</li>
      </ul>

      {sizeType === "custom" && (
        <div className="bg-[#F3E3C2] text-primary p-3 rounded-lg text-sm font-medium mt-2">
          Custom sizes are made only for you and cannot be returned.
        </div>
      )}
    </div>
  );
}
