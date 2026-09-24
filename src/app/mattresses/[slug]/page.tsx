import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import ProductConfigurator from "@/components/ProductConfigurator";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="w-full bg-surface-white min-h-screen pb-24">
      {/* SECTION 1 - GALLERY AND CONFIGURATOR */}
      <section className="w-full bg-surface-white pt-8 lg:pt-12 pb-12 lg:pb-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-b border-hairline">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT - Gallery */}
          <div className="lg:col-span-7">
            <div className="sticky top-[140px] flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-surface-white rounded-xl overflow-hidden border border-hairline shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-full aspect-square bg-surface-white rounded-lg overflow-hidden border border-hairline opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                    <Image
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - Configurator */}
          <div className="lg:col-span-5">
            <React.Suspense fallback={<div className="p-8 text-center text-primary font-label-nav">Loading configurator...</div>}>
              <ProductConfigurator product={product} />
            </React.Suspense>
          </div>
          
        </div>
      </section>

      {/* SECTION 2 - DELIVERY CHECK */}
      <section className="w-full bg-surface-white py-8 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-b border-hairline">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[28px]">local_shipping</span>
            <span className="font-label-nav text-label-nav text-primary font-bold">Delivery & Installation Check</span>
          </div>
          <div className="flex w-full md:max-w-md gap-3">
            <input 
              type="text" 
              placeholder="Enter PIN code (e.g. 641062)" 
              className="flex-1 h-12 px-4 rounded-lg border border-hairline font-label-nav focus:outline-none focus:border-primary"
            />
            <button className="h-12 px-6 bg-primary text-surface-white font-label-nav font-semibold rounded-lg hover:bg-navy-deep transition-colors">
              Check
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHAT IT IS MADE OF */}
      <section className="w-full bg-surface-white py-16 md:py-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">What's inside</h2>
            <p className="font-body-regular text-body-regular text-slate mt-2">Transparent materials, honest construction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="bg-surface-container-low aspect-square rounded-2xl flex items-center justify-center p-10 relative border border-hairline">
              {/* Dummy diagram representing layers */}
              <div className="w-full h-full border-2 border-primary border-dashed rounded-lg flex flex-col p-4 gap-4">
                <div className="h-1/3 bg-surface-white border border-primary flex items-center justify-center text-primary font-bold rounded">
                  {product.comfortLayer}
                </div>
                <div className="h-2/3 bg-primary/10 border border-primary flex items-center justify-center text-primary font-bold rounded">
                  {product.coreMaterial}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-8">
              <div>
                <h4 className="font-label-nav text-label-nav font-bold text-primary uppercase tracking-wider mb-2">Comfort Layer</h4>
                <p className="font-body-regular text-body-regular text-slate">{product.comfortLayer}. Designed to relieve pressure points and regulate temperature where your body meets the mattress.</p>
              </div>
              <div className="w-12 h-px bg-hairline"></div>
              <div>
                <h4 className="font-label-nav text-label-nav font-bold text-primary uppercase tracking-wider mb-2">Support Core</h4>
                <p className="font-body-regular text-body-regular text-slate">{product.coreMaterial}. Engineered to keep your spine in alignment and prevent the heavy parts of your body from sinking too deeply.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
