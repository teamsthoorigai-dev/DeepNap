"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, ProductCategory } from "@/data/products";
import CustomSizeBuilder from "@/components/homepage/CustomSizeBuilder";

const categories: ProductCategory[] = ["Latex", "Pocket spring", "Orthopaedic", "Memory foam", "Coir"];

export default function MattressesPage() {
  const [currentType, setCurrentType] = useState<ProductCategory | null>(null);
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);

  const filteredProducts = currentType
    ? products.filter((p) => p.category === currentType)
    : products;

  const handleCompareToggle = (slug: string) => {
    setCompareSlugs((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((s) => s !== slug);
      }
      if (prev.length >= 3) {
        // Can't add more than 3
        return prev;
      }
      return [...prev, slug];
    });
  };

  const selectedProducts = products.filter(p => compareSlugs.includes(p.slug));

  return (
    <main className="w-full bg-surface min-h-screen relative pb-20">
      {/* Header Area */}
      <div className="relative w-full pt-16 pb-12 px-gutter md:px-gutter-tablet lg:px-gutter-desktop overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=2000"
          alt="Mattresses Collection Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="font-caption text-caption text-surface-white/80 mb-4">
            <Link href="/" className="hover:text-surface-white transition-colors">Home</Link> <span className="mx-2">/</span> Mattresses
          </div>
          <p className="font-body-lead text-body-lead text-surface-white mt-2 max-w-2xl font-medium drop-shadow-sm">
            Every mattress made to order in our own unit, in any of 18 standard sizes or yours. Built for comfort, backed by honest pricing.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="w-full bg-surface-white border-b border-hairline sticky top-20 z-30 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop py-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 whitespace-nowrap min-w-max">
            <span className="font-label-nav text-label-nav text-slate mr-2 font-medium">Filter by Type:</span>
            
            <button
              onClick={() => setCurrentType(null)}
              className={`h-10 px-5 rounded-full font-label-nav text-label-nav font-medium transition-colors border ${
                !currentType
                  ? "bg-primary text-surface-white border-primary"
                  : "bg-surface text-primary border-hairline hover:bg-surface-container"
              }`}
            >
              All types
            </button>
            
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCurrentType(cat)}
                className={`h-10 px-5 rounded-full font-label-nav text-label-nav font-medium transition-colors border ${
                  currentType === cat
                    ? "bg-primary text-surface-white border-primary"
                    : "bg-surface text-primary border-hairline hover:bg-surface-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop py-8 md:py-10">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              const isSelected = compareSlugs.includes(product.slug);
              
              return (
                <div key={product.id} className="bg-surface-white rounded-xl border border-hairline overflow-hidden flex flex-col group hover:shadow-md transition-shadow relative">
                  
                  {/* Compare Checkbox */}
                  <div className={`absolute top-4 right-4 z-20 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <label className="flex items-center gap-2 bg-surface-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm cursor-pointer border border-hairline hover:border-primary transition-colors">
                      <input 
                        type="checkbox" 
                        checked={isSelected}
                        onChange={() => handleCompareToggle(product.slug)}
                        disabled={!isSelected && compareSlugs.length >= 3}
                        className="w-4 h-4 rounded border-hairline text-primary focus:ring-primary cursor-pointer disabled:opacity-50"
                      />
                      <span className="font-caption text-caption text-primary font-medium">Compare</span>
                    </label>
                  </div>

                  <div className="relative w-full aspect-[4/3] bg-surface-container">
                    {product.isBestSeller && (
                      <div className="absolute top-4 left-4 z-10 bg-[#F3E3C2] text-primary px-3 py-1 rounded-full font-caption text-caption font-semibold">
                        Best seller
                      </div>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-title-card text-title-card text-primary mb-1">{product.name}</h3>
                    <p className="font-body-regular text-body-regular text-slate text-sm line-clamp-1 mb-3">{product.description}</p>
                    
                    <div className="w-full h-px bg-hairline mb-3"></div>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-3 mb-4">
                      {/* Top-Left: Rating */}
                      <div>
                        <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Rating</div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-[#DCA544]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="font-label-nav text-label-nav font-bold text-primary text-[12px] md:text-sm">4.8/5 <span className="font-normal text-xs text-slate">(120+)</span></span>
                        </div>
                      </div>
                      {/* Top-Right: Firmness */}
                      <div>
                        <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Firmness</div>
                        <div className="flex items-center gap-1">
                          <div className="w-8 h-1.5 bg-surface-container rounded-full overflow-hidden shrink-0">
                            <div 
                              className="h-full bg-primary rounded-full" 
                              style={{ width: `${(product.firmness / 10) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-label-nav text-label-nav font-bold text-primary text-[12px] whitespace-nowrap">{product.firmness}/10</span>
                        </div>
                      </div>
                      {/* Bottom-Left: Thickness */}
                      <div>
                        <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Thickness</div>
                        <div className="font-label-nav text-label-nav font-semibold text-primary text-[12px] md:text-sm">{product.thicknesses}</div>
                      </div>
                      {/* Bottom-Right: Warranty */}
                      <div>
                        <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Warranty</div>
                        <div className="font-label-nav text-label-nav font-semibold text-primary text-[12px] md:text-sm">{product.warranty}</div>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-4 pt-4 border-t border-hairline">
                      <div>
                        <div className="font-price-display text-price-display text-primary">₹{product.priceFrom.toLocaleString('en-IN')}</div>
                        <div className="font-caption text-caption text-slate">indicative starting price</div>
                      </div>
                      <Link 
                        href={`/mattresses/${product.slug}`}
                        className="w-full h-10 px-5 rounded-full border border-primary text-primary font-label-nav text-label-nav font-semibold flex items-center justify-center hover:bg-primary hover:text-surface-white transition-colors"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface-white rounded-xl border border-hairline px-6">
            <span className="material-symbols-outlined text-[48px] text-slate mb-4">search_off</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Nothing matches that combination</h3>
            <p className="font-body-regular text-body-regular text-slate max-w-md mx-auto mb-8">
              We make everything to order, so we can probably build exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => setCurrentType(null)} className="h-12 px-6 rounded-lg border border-primary text-primary font-label-nav text-label-nav font-semibold flex items-center justify-center hover:bg-surface transition-colors">
                Clear filters
              </button>
              <a 
                href="https://wa.me/919600889334" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-full bg-primary text-surface-white font-label-nav text-label-nav font-semibold flex items-center justify-center hover:bg-navy-deep transition-colors gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#DCA544]"></span>
                Ask us on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>

      <CustomSizeBuilder />

      {/* Compare Tray */}
      {compareSlugs.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-surface-white border-t border-hairline shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-40 transform transition-transform animate-in slide-in-from-bottom-8">
          <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-label-nav text-slate hidden md:inline-block">
                Comparing {compareSlugs.length} of 3
              </span>
              <div className="flex gap-2">
                {selectedProducts.map((p) => (
                  <div key={p.id} className="relative w-12 h-12 md:w-16 md:h-16 rounded border border-hairline overflow-hidden group">
                    <Image src={p.image} alt={p.name} fill className="object-cover" />
                    <button 
                      onClick={() => handleCompareToggle(p.slug)}
                      className="absolute inset-0 bg-ink/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="material-symbols-outlined text-surface-white text-sm">close</span>
                    </button>
                  </div>
                ))}
                {/* Empty slots placeholders */}
                {Array.from({ length: 3 - compareSlugs.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="w-12 h-12 md:w-16 md:h-16 rounded border border-dashed border-hairline flex items-center justify-center bg-surface">
                    <span className="material-symbols-outlined text-slate/40">add</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setCompareSlugs([])} 
                className="font-label-nav text-primary underline hidden sm:block"
              >
                Clear
              </button>
              <Link 
                href={`/compare?m=${compareSlugs.join(',')}`}
                className="h-10 md:h-12 px-5 md:px-8 bg-primary text-surface-white rounded-lg font-label-nav font-semibold flex items-center justify-center hover:bg-navy-deep transition-colors shadow-sm"
              >
                Compare {compareSlugs.length} {compareSlugs.length === 1 ? 'mattress' : 'mattresses'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}



