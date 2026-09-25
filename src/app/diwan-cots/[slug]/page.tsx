import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { cots } from "@/data/cots";
import CotConfigurator from "@/components/CotConfigurator";

export function generateStaticParams() {
  return cots.map((c) => ({ slug: c.slug }));
}

export default async function DiwanCotDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const cot = cots.find((c) => c.slug === slug);

  if (!cot) {
    notFound();
  }

  return (
    <main className="w-full bg-surface-white min-h-screen pb-24">
      {/* SECTION 1 - GALLERY AND CONFIGURATOR */}
      <section className="w-full bg-[#EFE5D7] pt-8 lg:pt-12 pb-12 lg:pb-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-b border-hairline">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT - Gallery */}
          <div className="lg:col-span-7">
            <div className="sticky top-[140px] flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-surface-white rounded-xl overflow-hidden border border-hairline shadow-sm">
                <Image
                  src={cot.image}
                  alt={cot.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-full aspect-square bg-surface-white rounded-lg overflow-hidden border border-hairline opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                    <Image
                      src={cot.image}
                      alt={`${cot.name} view ${i}`}
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
            <CotConfigurator cot={cot} />
          </div>
          
        </div>
      </section>

      {/* SECTION 2 - DELIVERY ACCESS ACCORDION */}
      <section className="w-full bg-surface-white py-16 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-b border-hairline">
        <div className="max-w-[800px] mx-auto">
          {/* Expanded by default for cots */}
          <details className="group" open>
            <summary className="flex items-center justify-between cursor-pointer list-none outline-none font-headline-sm text-primary">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#DCA544] text-3xl">door_open</span>
                <span>Delivery Access Check</span>
              </div>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary text-2xl">
                expand_more
              </span>
            </summary>
            
            <div className="mt-6 pt-6 border-t border-hairline flex flex-col gap-6 text-slate font-body-regular">
              <p className="text-lg">Unlike our mattresses which can bend slightly, Diwan Cots are built with large, rigid frames. Please verify your access routes.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="bg-[#EFE5D7] p-6 rounded-xl">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3">elevator</span>
                  <h4 className="font-label-nav font-semibold text-primary mb-2">Elevator Dimensions</h4>
                  <p className="text-sm">If you live in an apartment, check if your elevator can fit the length of the cot base. (e.g., a 78" cot requires an elevator at least 80" deep or tall diagonally).</p>
                </div>
                <div className="bg-[#EFE5D7] p-6 rounded-xl">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3">stairs</span>
                  <h4 className="font-label-nav font-semibold text-primary mb-2">Stairwell Turns</h4>
                  <p className="text-sm">Measure narrow stairwells and tight corners. Our delivery team needs sufficient clearance to navigate rigid frames around bends.</p>
                </div>
              </div>

              <div className="bg-surface p-4 border-l-4 border-[#DCA544] mt-2">
                <p className="font-medium text-primary">Need a split base?</p>
                <p className="text-sm mt-1">If your access is tight, we can build the cot base in two halves that bolt together in your bedroom. Just mention this requirement when requesting a quote.</p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* SECTION 3 - WHAT IT IS MADE OF */}
      <section className="w-full bg-surface-white py-16 md:py-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Material Details</h2>
            <p className="font-body-regular text-body-regular text-slate mt-2">Honest construction, built for generations.</p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-surface p-8 rounded-2xl border border-hairline text-center">
            <h4 className="font-label-nav text-label-nav font-semibold text-primary uppercase tracking-wider mb-4">Core Structure</h4>
            <p className="font-body-regular text-body-regular text-slate text-lg">{cot.materialDetails}</p>
          </div>
        </div>
      </section>
      
    </main>
  );
}
