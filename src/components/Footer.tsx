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
              <span className="font-headline-md text-headline-md text-surface-white tracking-tight font-bold">
                Deep Nap
              </span>
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
                <span>Open 9am – 10pm daily</span>
              </p>
            </div>
            <a
              className="inline-flex items-center gap-1.5 text-tertiary-fixed-dim hover:text-surface-white font-label-nav text-label-nav transition-colors pt-space-xs"
              href="https://maps.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              Get directions
            </a>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                  WhatsApp: 96008 89334
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 hover:text-surface-white transition-colors" href="tel:9600889334">
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  Call: 96008 89334
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
            View Map & Timings →
          </Link>
        </div>
        
        <div className="border-t border-hairline/20 py-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-form text-label-form text-secondary-fixed/70">
          <div className="flex items-center gap-space-xs">
            <div className="flex text-tertiary-fixed-dim">
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span className="material-symbols-outlined text-[16px]">star_half</span>
            </div>
            <span>4.6 stars from 62 Google reviews</span>
            <span className="text-secondary-fixed/40">·</span>
            <a className="text-tertiary-fixed-dim hover:underline" href="https://google.com" rel="noopener noreferrer" target="_blank">
              Review us on Google
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-space-md">
            <span>GSTIN: 33AAAAA0000A1Z5</span>
            <span>© 2025 Deep Nap Mattress. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
