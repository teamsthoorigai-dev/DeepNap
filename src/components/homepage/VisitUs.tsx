import React from "react";
import Link from "next/link";
import { PrimaryButton } from "../Buttons";

export default function VisitUs() {
  return (
    <section className="w-full bg-surface py-16 md:py-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left info (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div>
            <span className="font-overline text-overline text-[#DCA544] uppercase tracking-wider">Experience Center & Workshop</span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">Visit us</h2>
          </div>
          
          <div className="space-y-4 text-on-surface">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#DCA544] text-[20px] shrink-0 mt-0.5">location_on</span>
              <div>
                <p className="font-label-nav text-label-nav font-semibold text-primary">Deep Nap Manufacturing & Experience Unit</p>
                <p className="font-body-regular text-body-regular text-slate mt-0.5">
                  Irugur Road, Chinniyampalayam, Coimbatore,<br /> Tamil Nadu 641062
                </p>
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
                <a className="font-title-card text-title-card font-semibold text-primary hover:underline" href="tel:9600889334">
                  +91 96008 89334
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="inline-flex items-center justify-center w-[190px] gap-2 h-11 px-5 rounded-full bg-primary text-surface-white font-label-nav text-label-nav font-medium hover:bg-navy-deep transition-all shadow-sm"
              href="https://wa.me/919600889334?text=Hello%20Deep%20Nap,%20I%20would%20like%20to%20visit%20your%20Coimbatore%20unit"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="text-surface-white"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.625 2.952-6.57 6.577-6.57a6.59 6.59 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
              WhatsApp
            </a>
            <a
              className="inline-flex items-center justify-center w-[190px] gap-1.5 h-11 px-5 rounded-full border border-primary-container text-primary font-label-nav text-label-nav font-semibold hover:bg-surface-white transition-all"
              href="https://maps.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">near_me</span>
              Get directions
            </a>
          </div>
        </div>

        {/* Right visual & map (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4 w-full">
          <div className="w-full h-64 md:h-80 lg:h-[400px] rounded-xl overflow-hidden border border-hairline shadow-sm relative">
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
                  <p className="font-label-nav text-label-nav font-semibold text-primary mt-1">Chinniyampalayam Experience Unit</p>
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



