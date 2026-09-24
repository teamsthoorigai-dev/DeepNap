import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/Buttons";

export default function ManufacturingPage() {
  return (
    <main className="w-full bg-surface-white">
      
      {/* SECTION 1 - HERO */}
      <section className="relative w-full h-[60vh] min-h-[500px] bg-navy-deep flex items-center justify-center">
        {/* Placeholder for real factory wide shot */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-n9r0S3zfoMc?auto=format&fit=crop&q=80&w=800" 
            alt="Deep Nap Manufacturing Unit" 
            fill 
            className="object-cover opacity-30" 
            priority
          />
        </div>
        <div className="relative z-10 text-center px-gutter md:px-gutter-tablet max-w-[800px]">
          <h1 className="font-display-lg text-[48px] md:text-[64px] text-surface-white leading-[1.1] mb-6">
            Come and watch us make it.
          </h1>
          <p className="font-body-regular text-lg md:text-xl text-surface-white/90">
            Our unit is in Chinniyampalayam. It is open to customers. Most people who visit buy, because seeing is believing.
          </p>
        </div>
      </section>

      {/* SECTION 2 - THE PROCESS (Zig-Zag) */}
      <section className="w-full bg-surface-white py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop flex flex-col gap-20 lg:gap-32">
          
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="font-label-nav font-bold text-slate uppercase tracking-wider mb-2">How it's made</h2>
            <p className="font-body-regular text-slate">We control every layer. We don't buy pre-assembled blocks and slap a cover on them. Here is how your mattress is built, from raw material to final stitch.</p>
          </div>

          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="font-headline-sm text-[#DCA544] mb-4 block">01</span>
              <h3 className="font-display-sm text-primary text-3xl mb-4">Materials In</h3>
              <p className="font-body-regular text-slate">
                We source high-density rubberised coir and natural latex pin-core sheets from trusted Kerala estates, and certified high-resilience (HR) foams directly from primary chemical plants. Everything is visually inspected and density-tested before it enters the assembly floor.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EFE5D7]">
              <Image src="https://images.unsplash.com/photo-pWUyHVJgLhg?auto=format&fit=crop&q=80&w=800" alt="Materials In" fill className="object-cover" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EFE5D7]">
              <Image src="https://images.unsplash.com/photo-SLIFI67jv5k?auto=format&fit=crop&q=80&w=800" alt="Cutting" fill className="object-cover" />
            </div>
            <div>
              <span className="font-headline-sm text-[#DCA544] mb-4 block">02</span>
              <h3 className="font-display-sm text-primary text-3xl mb-4">Precision Cutting</h3>
              <p className="font-body-regular text-slate">
                Using industrial vertical band saws, we cut the raw blocks down to your exact specifications. Whether it's a standard King size or a custom cut with a corner notch for an antique four-poster bed, the tolerance is within millimetres.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="font-headline-sm text-[#DCA544] mb-4 block">03</span>
              <h3 className="font-display-sm text-primary text-3xl mb-4">Layering</h3>
              <p className="font-body-regular text-slate">
                This is where the firmness is engineered. We bond the support core (like 100D coir) to the transition and comfort layers (like soft latex) using non-toxic, solvent-free adhesives applied via pressurized spray systems.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EFE5D7]">
              <Image src="https://images.unsplash.com/photo-9GwMIek9jnY?auto=format&fit=crop&q=80&w=800" alt="Layering" fill className="object-cover" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EFE5D7]">
              <Image src="https://images.unsplash.com/photo-ABNgkiVCsoo?auto=format&fit=crop&q=80&w=800" alt="Quilting and Stitching" fill className="object-cover" />
            </div>
            <div>
              <span className="font-headline-sm text-[#DCA544] mb-4 block">04</span>
              <h3 className="font-display-sm text-primary text-3xl mb-4">Quilting and Stitching</h3>
              <p className="font-body-regular text-slate">
                The fabric casing isn't just slipped on. The top panel is quilted to a layer of soft peeling foam on our multi-needle quilting machine to create the plush surface. Then, the heavy-duty tape edge machine binds the top, bottom, and border panels together to lock the core in place.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="font-headline-sm text-[#DCA544] mb-4 block">05</span>
              <h3 className="font-display-sm text-primary text-3xl mb-4">Finishing & Quality Check</h3>
              <p className="font-body-regular text-slate">
                Every mattress is manually pressed, brushed, and measured. We check the tape edge for straightness and ensure the overall dimensions match the order exactly before wrapping it in heavy-gauge protective plastic for delivery.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EFE5D7]">
              <Image src="https://images.unsplash.com/photo-8gr6bObQLOI?auto=format&fit=crop&q=80&w=800" alt="Finishing" fill className="object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 - WHAT WE USE */}
      <section className="w-full bg-[#F8F4ED] py-20 lg:py-24 border-y border-hairline">
        <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display-lg text-primary mb-4">The raw materials</h2>
            <p className="font-body-regular text-slate">
              We operate an <strong>ISO 9001:2015 certified</strong> manufacturing facility. Here is exactly what goes inside the casing. No filler, no secrets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Material Card 1 */}
            <div className="bg-surface-white rounded-2xl overflow-hidden border border-hairline hover:border-primary/30 transition-colors">
              <div className="relative h-48 w-full bg-[#EFE5D7]">
                <Image src="https://images.unsplash.com/photo-2PJMDIgK9EA?auto=format&fit=crop&q=80&w=800" alt="Rubberised Coir" fill className="object-cover mix-blend-multiply" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-title-card text-primary mb-1">Rubberised Coir (100D)</h3>
                <span className="inline-block font-label-nav text-xs text-[#DCA544] uppercase tracking-wider mb-4">Sourced from Kerala</span>
                <p className="font-body-regular text-slate text-sm">
                  Coconut husk fibre bound with natural latex sap. It is extremely breathable, preventing heat buildup, and provides the rigid orthopaedic base layer that Indian climates demand.
                </p>
              </div>
            </div>

            {/* Material Card 2 */}
            <div className="bg-surface-white rounded-2xl overflow-hidden border border-hairline hover:border-primary/30 transition-colors">
              <div className="relative h-48 w-full bg-[#EFE5D7]">
                <Image src="https://images.unsplash.com/photo-HpPmiduLDC0?auto=format&fit=crop&q=80&w=800" alt="Natural Latex" fill className="object-cover mix-blend-multiply" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-title-card text-primary mb-1">Natural Pin-Core Latex</h3>
                <span className="inline-block font-label-nav text-xs text-[#DCA544] uppercase tracking-wider mb-4">Sourced from Kerala</span>
                <p className="font-body-regular text-slate text-sm">
                  100% natural tree sap baked into foam. The pin-core holes allow air to circulate. It is naturally dust-mite resistant, highly bouncy, and the most durable comfort layer available.
                </p>
              </div>
            </div>

            {/* Material Card 3 */}
            <div className="bg-surface-white rounded-2xl overflow-hidden border border-hairline hover:border-primary/30 transition-colors">
              <div className="relative h-48 w-full bg-[#EFE5D7]">
                <Image src="https://images.unsplash.com/photo-7Az9gLFn6ek?auto=format&fit=crop&q=80&w=800" alt="HR Foam" fill className="object-cover mix-blend-multiply" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-title-card text-primary mb-1">High-Resilience (HR) Foam</h3>
                <span className="inline-block font-label-nav text-xs text-[#DCA544] uppercase tracking-wider mb-4">Premium grade</span>
                <p className="font-body-regular text-slate text-sm">
                  A high-density polyurethane foam that returns to its original shape faster than standard foam. Used as a supportive transition layer or a core base for non-coir models.
                </p>
              </div>
            </div>

            {/* Material Card 4 */}
            <div className="bg-surface-white rounded-2xl overflow-hidden border border-hairline hover:border-primary/30 transition-colors">
              <div className="relative h-48 w-full bg-[#EFE5D7]">
                <Image src="https://images.unsplash.com/photo-KP6XQIEjjPA?auto=format&fit=crop&q=80&w=800" alt="Memory Foam" fill className="object-cover mix-blend-multiply" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-title-card text-primary mb-1">Visco-Elastic Memory Foam</h3>
                <span className="inline-block font-label-nav text-xs text-[#DCA544] uppercase tracking-wider mb-4">Pressure relief</span>
                <p className="font-body-regular text-slate text-sm">
                  Reacts to your body heat to mold exactly around your shoulders and hips. We use it strictly as a top comfort layer, usually bonded to a firmer base to prevent sinking.
                </p>
              </div>
            </div>

            {/* Material Card 5 */}
            <div className="bg-surface-white rounded-2xl overflow-hidden border border-hairline hover:border-primary/30 transition-colors md:col-span-2 lg:col-span-2">
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative h-48 md:h-full md:w-2/5 bg-[#EFE5D7] border-b md:border-b-0 md:border-r border-hairline">
                  <Image src="https://images.unsplash.com/photo--HMzD04xgFY?auto=format&fit=crop&q=80&w=800" alt="Pocket Springs" fill className="object-cover mix-blend-multiply" />
                </div>
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                  <h3 className="font-title-card text-primary mb-1">Individually Wrapped Pocket Springs</h3>
                  <span className="inline-block font-label-nav text-xs text-[#DCA544] uppercase tracking-wider mb-4">Zero motion transfer</span>
                  <p className="font-body-regular text-slate text-sm mb-4">
                    Unlike old bonnell springs that are wired together (meaning if one side moves, the whole bed shakes), pocket springs operate independently. Each high-tensile steel coil is wrapped in its own fabric pocket.
                  </p>
                  <p className="font-body-regular text-slate text-sm">
                    This provides targeted support to heavier areas like your hips, while completely isolating motion. If your partner tosses and turns, you won't feel a thing.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 - THE TEAM (Placeholders) */}
      <section className="w-full bg-surface-white py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display-lg text-primary mb-4">The Team</h2>
            <p className="font-body-regular text-slate">
              Real people crafting real products. We aren't a marketing agency, we are manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden bg-[#EFE5D7] border-4 border-surface-white shadow-sm mb-4 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-slate/30">person</span>
                {/* To client: Swap this placeholder with real founder image */}
                {/* <Image src="/path-to-founder.jpg" alt="Founder" fill className="object-cover" /> */}
              </div>
              <h4 className="font-title-card text-primary">Founder Name</h4>
              <p className="font-label-nav text-slate">Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden bg-[#EFE5D7] border-4 border-surface-white shadow-sm mb-4 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-slate/30">engineering</span>
              </div>
              <h4 className="font-title-card text-primary">Name</h4>
              <p className="font-label-nav text-slate">Production Lead</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden bg-[#EFE5D7] border-4 border-surface-white shadow-sm mb-4 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-slate/30">precision_manufacturing</span>
              </div>
              <h4 className="font-title-card text-primary">Name</h4>
              <p className="font-label-nav text-slate">Cutting Specialist</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden bg-[#EFE5D7] border-4 border-surface-white shadow-sm mb-4 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-slate/30">local_shipping</span>
              </div>
              <h4 className="font-title-card text-primary">Name</h4>
              <p className="font-label-nav text-slate">Delivery & Install</p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5 - CTA */}
      <section className="w-full bg-navy-deep py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-display-md text-surface-white mb-6">See for yourself.</h2>
          <p className="font-body-regular text-surface-white/80 mb-10 text-lg">
            Reading about it is one thing. Smelling the fresh latex and watching the tape edge machine run is another.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-consultation">
              <PrimaryButton className="bg-[#DCA544] text-navy-deep hover:bg-[#F3E3C2] !h-14 px-8 w-full sm:w-auto">
                Book a Unit Visit
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}
