"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, MattressProduct } from "@/data/products";

export default function CompareTable() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const mParam = searchParams.get("m");
  const initialSlugs = mParam ? mParam.split(",") : [];
  
  // We use local state to handle removals instantly without waiting for router navigation
  const [slugs, setSlugs] = useState<string[]>(initialSlugs);

  useEffect(() => {
    if (mParam) {
      setSlugs(mParam.split(","));
    }
  }, [mParam]);

  const handleRemove = (slugToRemove: string) => {
    const newSlugs = slugs.filter((s) => s !== slugToRemove);
    setSlugs(newSlugs);
    if (newSlugs.length > 0) {
      router.replace(`/compare?m=${newSlugs.join(",")}`);
    } else {
      router.replace(`/mattresses`);
    }
  };

  const selectedProducts = slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as MattressProduct[];

  if (selectedProducts.length === 0) {
    return (
      <div className="py-20 text-center px-4">
        <h2 className="font-headline-sm text-primary mb-4">No mattresses selected</h2>
        <Link href="/mattresses" className="font-label-nav text-primary underline">
          Go back to collection
        </Link>
      </div>
    );
  }

  // Define rows
  const rows = [
    {
      label: "Firmness",
      render: (p: MattressProduct) => (
        <div className="flex flex-col gap-2">
          <span className="font-label-nav font-semibold text-primary">{p.firmness}/10 ({p.firmnessLabel})</span>
          <div className="w-full h-2 bg-surface-white border border-primary rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${(p.firmness / 10) * 100}%` }}></div>
          </div>
        </div>
      ),
    },
    { label: "Comfort layer", render: (p: MattressProduct) => p.comfortLayer },
    { label: "Support core", render: (p: MattressProduct) => p.coreMaterial },
    { label: "Available thicknesses", render: (p: MattressProduct) => p.thicknesses },
    { label: "Standard sizes", render: (p: MattressProduct) => p.sizes.includes("18") ? "18 sizes" : p.sizes },
    { label: "Custom size available", render: (p: MattressProduct) => p.sizes.includes("custom") ? "Yes" : "No" },
    { label: "Warranty", render: (p: MattressProduct) => p.warranty },
    { label: "Build time", render: (p: MattressProduct) => p.buildTime },
    { label: "Breathability", render: (p: MattressProduct) => p.breathability },
    { label: "Best for", render: (p: MattressProduct) => p.bestFor },
  ];

  const emptyCols = Math.max(0, 3 - selectedProducts.length);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop pb-20 relative">
      <div className="overflow-x-auto no-scrollbar border-x border-b border-hairline rounded-b-xl shadow-sm bg-surface-white">
        <table className="w-full min-w-[800px] border-collapse text-left">
          
          {/* STICKY HEADER */}
          <thead className="sticky top-0 z-20 bg-surface-white shadow-[0_1px_0_0_rgba(0,0,0,0.1)]">
            <tr>
              <th className="p-6 w-[20%] min-w-[180px] sticky left-0 z-30 bg-surface-white border-r border-hairline align-middle">
                <span className="font-caption text-slate uppercase tracking-wider block mb-2">Compare</span>
                <span className="font-headline-sm text-primary block leading-tight">Specifications</span>
              </th>
              
              {selectedProducts.map((p) => (
                <th key={p.id} className="p-6 w-[26.6%] min-w-[220px] border-r border-hairline relative align-top">
                  <button 
                    onClick={() => handleRemove(p.slug)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-surface-container rounded-full text-slate hover:bg-red-50 hover:text-red-600 transition-colors z-10"
                    title="Remove"
                  >
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-surface-container">
                    <Image src={p.image} alt={p.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-title-card text-primary mb-2 line-clamp-2">{p.name}</h3>
                  <div className="font-display-sm text-primary mb-4">₹{p.priceFrom.toLocaleString('en-IN')}</div>
                  <Link
                    href={`/mattresses/${p.slug}`}
                    className="block w-full text-center py-2.5 rounded-lg border border-primary text-primary font-label-nav font-semibold hover:bg-primary hover:text-surface-white transition-colors"
                  >
                    View details
                  </Link>
                </th>
              ))}

              {Array.from({ length: emptyCols }).map((_, i) => (
                <th key={`empty-${i}`} className="relative p-6 w-[26.6%] min-w-[220px] border-r border-hairline align-top">
                  <Link 
                    href="/mattresses" 
                    className="absolute inset-6 rounded-lg border-2 border-dashed border-hairline flex flex-col items-center justify-center bg-surface hover:bg-surface-container transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-surface-white border border-hairline shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary text-2xl">add</span>
                    </div>
                    <span className="font-label-nav font-semibold text-primary">Add another</span>
                  </Link>
                </th>
              ))}
            </tr>
          </thead>

          {/* ROWS */}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row.label} className={rowIndex % 2 === 0 ? "bg-surface" : "bg-surface-white"}>
                {/* Row Label - Sticky Left */}
                <td className={`p-4 md:p-6 font-label-form text-slate font-medium sticky left-0 z-10 border-r border-hairline ${rowIndex % 2 === 0 ? "bg-surface" : "bg-surface-white"}`}>
                  {row.label}
                </td>
                
                {/* Product Data */}
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 md:p-6 font-body-regular text-primary border-r border-hairline">
                    {row.render(p)}
                  </td>
                ))}

                {/* Empty Cells */}
                {Array.from({ length: emptyCols }).map((_, i) => (
                  <td key={`empty-cell-${i}`} className="p-4 md:p-6 border-r border-hairline"></td>
                ))}
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}
