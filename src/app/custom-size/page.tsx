"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { calculateIndicativePrice } from "@/actions/calculatePrice";

export default function CustomSizePage() {
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
    <main className="w-full bg-[#EFE5D7] min-h-screen py-12 md:py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[820px] mx-auto bg-surface-white rounded-2xl shadow-sm border border-hairline overflow-hidden">
        
        {/* Intro */}
        <div className="text-center pt-12 pb-8 px-8 border-b border-hairline">
          <h1 className="font-headline-md text-headline-md text-primary font-semibold mb-4">Tell us the size. We build it.</h1>
          <p className="font-body-regular text-body-regular text-slate max-w-xl mx-auto">
            Most Indian beds are built by carpenters, so standard sizes rarely fit. <br className="hidden sm:block" />We make yours to the inch, with no surcharge.
          </p>
        </div>

        {/* Form Inputs */}
        <div className="p-8 md:p-12 border-b border-hairline">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div>
              <label className="block font-label-form text-label-form text-slate mb-1.5 font-medium">Length</label>
              <div className="relative">
                <select
                  className="w-full h-[52px] bg-surface-white rounded-lg border border-hairline px-3.5 pr-10 appearance-none font-label-nav text-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-semibold"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value) || 0)}
                >
                    <option key={72} value={72}>72</option>
                    <option key={75} value={75}>75</option>
                    <option key={78} value={78}>78</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none text-slate">
                  <span className="font-label-form text-label-form">in</span>
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block font-label-form text-label-form text-slate mb-1.5 font-medium">Width</label>
              <div className="relative">
                <select
                  className="w-full h-[52px] bg-surface-white rounded-lg border border-hairline px-3.5 pr-10 appearance-none font-label-nav text-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-semibold"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value) || 0)}
                >
                    <option key={36} value={36}>36</option>
                    <option key={48} value={48}>48</option>
                    <option key={60} value={60}>60</option>
                    <option key={72} value={72}>72</option>
                    <option key={78} value={78}>78</option>
                    <option key={84} value={84}>84</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none text-slate">
                  <span className="font-label-form text-label-form">in</span>
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block font-label-form text-label-form text-slate mb-1.5 font-medium">Thickness</label>
              <div className="relative">
                <select
                  className="w-full h-[52px] bg-surface-white rounded-lg border border-hairline px-3.5 pr-10 appearance-none font-label-nav text-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-semibold"
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value) || 0)}
                >
                    <option key={3} value={3}>3</option>
                    <option key={4} value={4}>4</option>
                    <option key={5} value={5}>5</option>
                    <option key={6} value={6}>6</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none text-slate">
                  <span className="font-label-form text-label-form">in</span>
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EFE5D7] p-6 rounded-xl border border-hairline flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="block font-caption text-caption text-slate uppercase tracking-wider font-semibold mb-1">Indicative Quote</span>
              <div className="flex items-end gap-3">
                <span className="font-price-display text-price-display text-primary font-semibold">₹{price.toLocaleString('en-IN')}</span>
              </div>
              <p className="font-caption text-caption text-slate mt-1 max-w-[200px]">
                Pricing confirmed upon inquiry. Custom sizes are non-returnable.
              </p>
            </div>
            
            <Link 
              href={`/quote?product=Custom+Mattress&size=${length}x${width}&thickness=${thickness}&price=${price.toLocaleString('en-IN')}`}
              className="h-[52px] px-8 flex items-center justify-center bg-primary text-surface-white rounded-full font-label-nav text-label-nav font-semibold hover:bg-navy-deep transition-all shadow-sm w-full md:w-auto flex-shrink-0 gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#DCA544]"></span>
              Send this enquiry
            </Link>
          </div>
        </div>

        {/* Measure */}
        <div className="p-8 md:p-12 bg-[#F8F4ED]">
          <h3 className="font-label-nav text-label-nav font-semibold text-primary uppercase tracking-wider mb-6 text-center">How to measure</h3>
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            {/* Visual representation of a bed frame */}
            <div className="w-48 h-56 border-4 border-primary rounded relative flex items-center justify-center bg-surface-white">
              <div className="w-40 h-48 border border-dashed border-[#DCA544] flex items-center justify-center">
                <span className="font-caption text-caption text-[#DCA544] font-medium text-center px-4">Measure INSIDE the frame, not outside.</span>
              </div>
            </div>
            
            <ul className="space-y-4 max-w-sm">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-surface-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">1</div>
                <p className="font-body-regular text-body-regular text-slate text-sm pt-0.5">Remove your old mattress and measure the inside dimensions of your bed frame.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-surface-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">2</div>
                <p className="font-body-regular text-body-regular text-slate text-sm pt-0.5">Measure the length (head to foot) and the width (side to side) in inches.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-surface-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">3</div>
                <p className="font-body-regular text-body-regular text-slate text-sm pt-0.5">Determine how thick you want the mattress to be based on your headboard height.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

