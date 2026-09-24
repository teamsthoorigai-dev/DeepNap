import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BulkBanner() {
  return (
    <section className="w-full bg-[#142C47] text-white py-16 md:py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-white tracking-tight">
              Supplying hotels, hostels, hospitals and builders
            </h2>
            <p className="font-body-lead text-body-lead text-white">
              Bulk pricing, consistent specification, delivery anywhere in Tamil Nadu.
            </p>
            
            {/* Sub-badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="inline-flex items-center gap-1.5 text-caption font-caption text-white bg-white/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>10+ units pricing
              </span>
              <span className="inline-flex items-center gap-1.5 text-caption font-caption text-white bg-white/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>GST invoice
              </span>
              <span className="inline-flex items-center gap-1.5 text-caption font-caption text-white bg-white/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DCA544]"></span>Direct factory dispatch
              </span>
            </div>
          </div>

          <Link
            href="/b2b"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full border-[1.5px] border-white text-white font-label-nav text-label-nav font-semibold hover:bg-white hover:text-[#142C47] transition-all"
          >
            Request bulk pricing
          </Link>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 w-full">
          <div className="relative w-full h-64 md:h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-sm border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200"
              alt="Hotel room with freshly made bed"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
