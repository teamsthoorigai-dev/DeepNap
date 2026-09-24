import React, { Suspense } from "react";
import Image from "next/image";
import CompareTable from "./CompareTable";

export default function ComparePage() {
  return (
    <main className="w-full bg-surface-white min-h-screen">
      {/* Header Area */}
      <div className="relative w-full pt-16 pb-12 px-gutter md:px-gutter-tablet lg:px-gutter-desktop overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=2000"
          alt="Compare Mattresses Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="max-w-[1280px] mx-auto relative z-10 text-center">
          <h1 className="font-display-lg text-display-lg text-surface-white drop-shadow-sm">Compare Mattresses</h1>
          <p className="font-body-lead text-body-lead text-surface-white mt-2 max-w-2xl mx-auto font-medium drop-shadow-sm">
            Side-by-side specifications to help you decide.
          </p>
        </div>
      </div>
      
      <div className="w-full">
        <Suspense fallback={<div className="p-12 text-center text-primary font-label-nav">Loading comparison...</div>}>
          <CompareTable />
        </Suspense>
      </div>
    </main>
  );
}
