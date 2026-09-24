"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { calculateIndicativePrice } from "@/actions/calculatePrice";

export default function CustomSizeBuilder() {
  const [length, setLength] = useState<number>(78);
  const [width, setWidth] = useState<number>(60);
  const [thickness, setThickness] = useState<number>(6);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    async function fetchPrice() {
      const basePrice = await calculateIndicativePrice(length, width, thickness);
      setPrice(basePrice);
    }
    fetchPrice();
  }, [length, width, thickness]);

  return (
    <section className="w-full bg-surface-white py-14 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-b border-hairline">
      <div className="max-w-[1080px] mx-auto flex flex-col space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary font-bold">
            Tell us the size. We build it.
          </h2>
          <p className="font-body-regular text-body-regular text-on-surface-variant mt-2">
            A quarter to half of what we make is a non-standard size. No surcharge, no waiting for stock.
          </p>
        </div>

        {/* Configurator Panel */}
        <div className="bg-surface-white rounded-xl p-6 md:p-8 shadow-sm border border-hairline/60">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            
            {/* Input 1: Length */}
            <div>
              <label className="block font-label-form text-label-form text-slate mb-1.5 font-medium">Length</label>
              <div className="relative">
                <input
                  className="w-full h-[52px] bg-surface-white rounded-lg border border-hairline px-3.5 pr-8 font-label-nav text-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-semibold"
                  max="90"
                  min="36"
                  type="number"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value) || 0)}
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-label-form text-label-form text-slate">in</span>
              </div>
            </div>

            {/* Input 2: Width */}
            <div>
              <label className="block font-label-form text-label-form text-slate mb-1.5 font-medium">Width</label>
              <div className="relative">
                <input
                  className="w-full h-[52px] bg-surface-white rounded-lg border border-hairline px-3.5 pr-8 font-label-nav text-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-semibold"
                  max="84"
                  min="30"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value) || 0)}
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-label-form text-label-form text-slate">in</span>
              </div>
            </div>

            {/* Input 3: Thickness */}
            <div>
              <label className="block font-label-form text-label-form text-slate mb-1.5 font-medium">Thickness</label>
              <div className="relative">
                <input
                  className="w-full h-[52px] bg-surface-white rounded-lg border border-hairline px-3.5 pr-8 font-label-nav text-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-semibold"
                  max="12"
                  min="4"
                  type="number"
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value) || 0)}
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-label-form text-label-form text-slate">in</span>
              </div>
            </div>

            {/* Output price display */}
            <div className="sm:col-span-3 lg:col-span-1 text-center lg:text-left py-2">
              <span className="block font-caption text-caption text-slate uppercase tracking-wider font-semibold">Indicative</span>
              <div className="font-price-display text-price-display text-primary">
                ₹{price.toLocaleString('en-IN')}
              </div>
            </div>

            {/* CTA Enquiry button */}
            <div className="sm:col-span-3 lg:col-span-1 flex items-end">
              <Link 
                href={`https://wa.me/919600889334?text=${encodeURIComponent(`Hello, I would like to get a quote for a custom mattress (${length}x${width}x${thickness} inches).`)}`}
                className="w-full h-[52px] flex items-center justify-center bg-primary-container text-surface-white rounded-full font-label-nav text-label-nav font-semibold hover:bg-navy-deep transition-all shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send this enquiry
              </Link>
            </div>

          </div>
          <p className="font-label-form text-label-form text-slate text-center mt-5">
            Indicative. Confirmed on quote. Custom sizes are non-returnable.
          </p>
        </div>
      </div>
    </section>
  );
}
