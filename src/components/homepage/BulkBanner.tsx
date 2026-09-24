import React from "react";
import Link from "next/link";

export default function BulkBanner() {
  return (
    <section className="w-full bg-[#142C47] text-[#EFE5D7] py-16 md:py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-[#EFE5D7] tracking-tight">
            Supplying hotels, hostels, hospitals and builders
          </h2>
          <p className="font-body-lead text-body-lead text-[#EFE5D7]/70">
            Bulk pricing, consistent specification, delivery anywhere in Tamil Nadu.
          </p>
          
          {/* Sub-badges */}
          <div className="flex flex-wrap gap-4 pt-2">
            <span className="inline-flex items-center gap-1.5 text-caption font-caption text-[#EFE5D7]/80 bg-surface-white/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>10+ units pricing
            </span>
            <span className="inline-flex items-center gap-1.5 text-caption font-caption text-[#EFE5D7]/80 bg-surface-white/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>GST invoice
            </span>
            <span className="inline-flex items-center gap-1.5 text-caption font-caption text-[#EFE5D7]/80 bg-surface-white/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>Direct factory dispatch
            </span>
          </div>
        </div>
        <div className="shrink-0">
          <Link
            href="/b2b"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full border-[1.5px] border-[#EFE5D7] text-[#EFE5D7] font-label-nav text-label-nav font-semibold hover:bg-surface-white hover:text-primary transition-all"
          >
            Request bulk pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
