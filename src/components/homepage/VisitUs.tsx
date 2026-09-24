import React from "react";
import Link from "next/link";
import { PrimaryButton } from "../Buttons";

export default function VisitUs() {
  return (
    <section className="w-full bg-surface py-16 md:py-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        
        {/* Left info (6 cols) */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <div>
            <span className="font-overline text-overline text-[#DCA544] uppercase tracking-wider">Experience Center & Workshop</span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">Visit us</h2>
          </div>
          
          <div className="space-y-4 text-on-surface">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#DCA544] text-[20px] shrink-0 mt-0.5">location_on</span>
              <div>
                <p className="font-label-nav text-label-nav font-semibold text-primary">Deep Nap Manufacturing & Experience Unit</p>
                <p className="font-body-regular text-body-regular text-slate mt-0.5">Irugur Road, Chinniyampalayam, Coimbatore, Tamil Nadu 641062</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#DCA544] text-[20px] shrink-0">schedule</span>
              <div>
                <p className="font-body-regular text-body-regular text-primary font-medium">Open 9am - 10pm, every day</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#DCA544] text-[20px] shrink-0">phone</span>
              <div>
                <a className="font-title-card text-title-card font-bold text-primary hover:underline" href="tel:9600889334">
                  +91 96008 89334
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-surface-white font-label-nav text-label-nav font-medium hover:bg-navy-deep transition-all shadow-sm"
              href="https://wa.me/919600889334?text=Hello%20Deep%20Nap,%20I%20would%20like%20to%20visit%20your%20Coimbatore%20unit"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="w-2 h-2 rounded-full bg-[#DCA544]"></span>
              WhatsApp
            </a>
            <a
              className="inline-flex items-center gap-1.5 h-11 px-5 rounded-full border border-primary-container text-primary font-label-nav text-label-nav font-semibold hover:bg-surface-white transition-all"
              href="https://maps.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">near_me</span>
              Get directions
            </a>
          </div>
        </div>

        {/* Right visual & map (6 cols) */}
        <div className="lg:col-span-6 flex flex-col space-y-4">
          <div className="w-full h-72 rounded-xl overflow-hidden border border-hairline shadow-sm relative">
            {/* Static map visual */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXg-7oimRADNPQ41RU6J4nlOhR8cH1RbQAFGq8tRGp3WSSDEm9yszGMH86n6lD8iix2ZnO7Y4VA2lDaEfiBvceY6Z1ugDYgV2xPpegu568fpEZtsi3808f0BIjZyDgkgZAaw3rKt1qNIaWIcmbLhYB0L0XyBxpRlNc2UwTa6UEJ4YJ9K7bLNRBDQpTUr1Cjz974kYtBdVA1U9C7Tyr37stlshcfRMTGUZ6FUvkmIBkmPsQuzYZSB2HcQ')",
              }}
            >
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center p-4">
                <div className="bg-surface-white/95 backdrop-blur-sm p-4 rounded-lg border border-hairline shadow-md text-center max-w-xs">
                  <span className="material-symbols-outlined text-error-red text-[24px]">pin_drop</span>
                  <p className="font-label-nav text-label-nav font-bold text-primary mt-1">Chinniyampalayam Experience Unit</p>
                  <p className="font-caption text-caption text-slate mt-0.5">Adjacent to Coimbatore Airport Bypass (NH 544)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
