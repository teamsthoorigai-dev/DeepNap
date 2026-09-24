import React from "react";
import Image from "next/image";
import Link from "next/link";
import FirmnessScale from "./FirmnessScale";
import { PrimaryButton, SecondaryButton } from "../Buttons";

export default function Hero() {
  return (
    <section className="w-full bg-surface py-12 md:py-16 lg:py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Left Column (approx 55% / 7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-space-md">
          <span className="font-overline text-overline text-accent-teal tracking-widest uppercase">
            MADE TO ORDER IN COIMBATORE
          </span>
          <h1 className="font-display-hero text-headline-lg md:font-display-hero md:text-display-hero text-primary tracking-tight leading-tight">
            Firmness you can<br />actually measure.
          </h1>
          <p className="font-body-lead text-body-lead text-slate max-w-xl">
            Every mattress built to order in our own unit, rated on a 10-point firmness scale, made in any size.
          </p>
          
          {/* Live Firmness Scale interactive component */}
          <FirmnessScale />

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <PrimaryButton href="/mattresses">
              Get a quote
            </PrimaryButton>
            <SecondaryButton href="/visit">
              Book a store visit
            </SecondaryButton>
          </div>
          <p className="font-label-form text-label-form text-slate pt-space-xs">
            No online payment. Tell us the size, we quote, then we build it.
          </p>
        </div>

        {/* Right Column (approx 45% / 5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] bg-surface-white rounded-xl shadow-md border border-hairline p-6 flex flex-col space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-title-card text-title-card text-primary font-bold">
                  Natural Latex & Pocket Spring
                </h2>
                <p className="font-body-regular text-body-regular text-slate mt-0.5 text-xs">
                  Pin-core natural latex with individually encased pocket springs
                </p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-soft/60 text-tertiary-container font-caption text-caption font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>Best seller
              </span>
            </div>

            {/* Product Image */}
            <div className="w-full h-56 rounded-lg overflow-hidden bg-surface-container relative">
              <Image
                className="object-cover"
                alt="Natural Latex & Pocket Spring mattress resting on a solid teak platform bed"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOv10oLyUmveNBx7AWdsq7owaAWMYA9Ho_ArxcKpsltOqarxd9REXO_LjWvFYe9N094A2E_bg1CyTXdWS7d84-Ke-r8ZMt5rIrz_s5TvS7jD86-xQePJ_x8uPO4uH_PRz0ccfTPBznLV7hf3GhEEtCTRL_LoIyd6k4949vXQGZ8wTC01E2BlPKQbZtuZbLr2-uoN-FZJPqIt0lywRVbkNfZVwBvg1PFXnIKyg0P3nj3l-8Jd_c4v0Mkg"
                fill
              />
            </div>

            {/* 4-Up Spec Row */}
            <div className="grid grid-cols-4 gap-2 pt-1 text-center border-b border-hairline pb-4">
              <div>
                <p className="font-caption text-caption text-slate uppercase">Firmness</p>
                <p className="font-label-nav text-label-nav font-semibold text-primary mt-0.5">7 / 10</p>
              </div>
              <div>
                <p className="font-caption text-caption text-slate uppercase">Thickness</p>
                <p className="font-label-nav text-label-nav font-semibold text-primary mt-0.5">4–12 in</p>
              </div>
              <div>
                <p className="font-caption text-caption text-slate uppercase">Warranty</p>
                <p className="font-label-nav text-label-nav font-semibold text-primary mt-0.5">20 years</p>
              </div>
              <div>
                <p className="font-caption text-caption text-slate uppercase">Sizes</p>
                <p className="font-label-nav text-label-nav font-semibold text-primary mt-0.5">18 + custom</p>
              </div>
            </div>

            {/* Bottom Enquire */}
            <div className="flex items-center justify-between pt-1">
              <span className="font-title-card text-title-card text-primary font-semibold">
                Enquire for price
              </span>
              <SecondaryButton href="/compare" className="!h-9 !px-4 !text-sm">
                Compare
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
