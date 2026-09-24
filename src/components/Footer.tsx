import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-navy-deep text-secondary-fixed pt-space-xl border-t border-hairline/20">
      <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-xs">
              <img src="/logo-light-horizontal.png" alt="Deep Nap" className="h-[36px] w-auto" />
            </div>
            <p className="font-body-regular text-body-regular text-secondary-fixed/80">
              Bespoke, climate-adapted sleep systems crafted with artisanal precision in our Coimbatore unit.
            </p>
            <div className="space-y-space-xs font-label-form text-label-form text-secondary-fixed/90 pt-space-xs">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px] shrink-0">
                  location_on
                </span>
                <span>
                  Irugur Road, Chinniyampalayam,<br />
                  Coimbatore, Tamil Nadu 641062
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px] shrink-0">
                  schedule
                </span>
                <span>Open 9am - 10pm daily</span>
              </p>
            </div>
            
          </div>
          
          <div className="space-y-space-md">
            <div className="font-title-card text-title-card text-surface-white border-b border-hairline/20 pb-2">
              Shop
            </div>
            <ul className="space-y-2.5 font-label-nav text-label-nav text-secondary-fixed/80">
              <li><Link className="hover:text-surface-white transition-colors" href="/mattresses?type=Latex">Latex Mattresses</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/mattresses?type=Pocket+spring">Pocket Spring</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/mattresses?type=Orthopaedic">Orthopaedic</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/quiz">Mattress Finder Quiz</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/diwan-cots">Diwan Cots</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/manufacturing">Our Manufacturing</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/custom-size">Custom Size Builder</Link></li>
            </ul>
          </div>
          
          <div className="space-y-space-md">
            <div className="font-title-card text-title-card text-surface-white border-b border-hairline/20 pb-2">
              Help
            </div>
            <ul className="space-y-2.5 font-label-nav text-label-nav text-secondary-fixed/80">
              <li><Link className="hover:text-surface-white transition-colors" href="/faq">FAQ</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/warranty">Warranty Registration</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/returns">Returns & Refunds</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/guide">Sleep Guide (Blog)</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/b2b">Bulk & Institutional Orders</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div className="space-y-space-md">
            <div className="font-title-card text-title-card text-surface-white border-b border-hairline/20 pb-2">
              Talk to Us
            </div>
            <ul className="space-y-2.5 font-label-nav text-label-nav text-secondary-fixed/80">
              <li>
                <a className="flex items-center gap-2 hover:text-surface-white transition-colors" href="https://wa.me/919600889334">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="text-[#25D366]">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.625 2.952-6.57 6.577-6.57a6.59 6.59 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  96008 89334
                </a>
              </li>
              <li><Link className="hover:text-surface-white transition-colors" href="/book-consultation">Book a Consultation</Link></li>
              <li><Link className="hover:text-surface-white transition-colors" href="/visit">Visit the Unit</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="w-full rounded-lg overflow-hidden border border-hairline/20 bg-primary/40 py-3 px-4 mb-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm text-secondary-fixed/90 font-label-form text-label-form">
            <span className="material-symbols-outlined text-tertiary-fixed-dim">map</span>
            <span>Workshop & Experience Facility: Chinniyampalayam, Coimbatore (NH 544 Airport Bypass)</span>
          </div>
          <Link className="text-tertiary-fixed-dim hover:text-surface-white font-label-nav text-label-nav shrink-0 transition-colors" href="/visit">
            View Map &amp; Timings &rarr;
          </Link>
        </div>
        
        <div className="border-t border-hairline/20 py-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-form text-label-form text-secondary-fixed/70">
          <div className="flex items-center gap-space-xs">
            <div className="flex text-tertiary-fixed-dim" style={{ fontVariationSettings: '"FILL" 1' }}>
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star_half</span>
            </div>
            <span>4.6 stars from 62 Google reviews</span>
            <span className="text-secondary-fixed/40">&bull;</span>
            <a className="text-tertiary-fixed-dim hover:underline" href="https://google.com" rel="noopener noreferrer" target="_blank">
              Review us on Google
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-space-md">
            <span>GSTIN: 33AAAAA0000A1Z5</span>
            <span>&copy; 2026 Dreamland Pictures. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
