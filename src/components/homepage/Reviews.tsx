import React from "react";
import Link from "next/link";
import { SecondaryButton } from "../Buttons";

export default function Reviews() {
  return (
    <section className="w-full bg-surface-white py-16 md:py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[1280px] mx-auto flex flex-col space-y-10">
        
        {/* Rating Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-1 text-[#DCA544]">
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
          </div>
          <h2 className="font-title-card text-title-card text-primary font-bold">
            4.6 from 62 Google reviews
          </h2>
        </div>

        {/* 3 Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-6 rounded-xl border border-hairline flex flex-col justify-between">
            <p className="font-body-regular text-body-regular text-primary italic">
              “Got an odd 75x68 inch mattress made in 5 days. Fits our carpenter bed perfectly.”
            </p>
            <p className="font-label-form text-label-form text-slate font-semibold mt-4">
              — Karthik S., RS Puram
            </p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-hairline flex flex-col justify-between">
            <p className="font-body-regular text-body-regular text-primary italic">
              “Firmness level 7 is exactly what my lower back needed. Outstanding build quality.”
            </p>
            <p className="font-label-form text-label-form text-slate font-semibold mt-4">
              — Revathi M., Saibaba Colony
            </p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-hairline flex flex-col justify-between">
            <p className="font-body-regular text-body-regular text-primary italic">
              “Visiting their Chinniyampalayam unit convinced us. Watching them layer it gave total confidence.”
            </p>
            <p className="font-label-form text-label-form text-slate font-semibold mt-4">
              — Anand N., Peelamedu
            </p>
          </div>
        </div>

        <div>
          <SecondaryButton href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View our Google listing & reviews &rarr;</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
