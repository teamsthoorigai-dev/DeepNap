import React from "react";
import Image from "next/image";
import Link from "next/link";
import B2BForm from "@/components/B2BForm";

export default function B2BPage() {
  return (
    <main className="w-full bg-surface-white">
      
      {/* SECTION 1 - HERO */}
      <section className="w-full bg-navy-deep text-surface-white pt-16 lg:pt-24 pb-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"></div>
        <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display-lg text-[40px] md:text-[52px] leading-[1.1] tracking-tight mb-6">
              Mattresses for hotels, hostels, hospitals and sites.
            </h1>
            <p className="font-body-regular text-lg md:text-xl text-surface-white/80 max-w-2xl mb-10">
              Consistent specification, repeatable quality, delivery anywhere in Tamil Nadu. Made in our own unit, so we control the batch.
            </p>
            <a 
              href="#requirement-form"
              className="inline-flex items-center justify-center font-label-nav font-medium h-[52px] px-8 rounded-lg border-2 border-surface-white text-surface-white hover:bg-surface-white/10 transition-colors"
            >
              Send your requirement
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 - WHO WE SUPPLY */}
      <section className="w-full bg-[#F8F4ED] py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-b border-hairline">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-primary text-center mb-12 leading-tight">Who we supply</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-surface-white p-6 rounded-xl border border-hairline hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">hotel</span>
              <h3 className="text-xl font-semibold text-primary mb-2">Hotels and resorts</h3>
              <p className="font-caption text-slate">Durable, high-density comfort layers that withstand daily commercial turnover.</p>
            </div>
            
            <div className="bg-surface-white p-6 rounded-xl border border-hairline hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">bed</span>
              <h3 className="text-xl font-semibold text-primary mb-2">Hostels and PG</h3>
              <p className="font-caption text-slate">Cost-effective, firm coir and foam blends built for heavy student use.</p>
            </div>
            
            <div className="bg-surface-white p-6 rounded-xl border border-hairline hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">local_hospital</span>
              <h3 className="text-xl font-semibold text-primary mb-2">Hospitals</h3>
              <p className="font-caption text-slate">Medical-grade firmness profiles with optional waterproof encasements.</p>
            </div>
            
            <div className="bg-surface-white p-6 rounded-xl border border-hairline hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">apartment</span>
              <h3 className="text-xl font-semibold text-primary mb-2">Builders and projects</h3>
              <p className="font-caption text-slate">Turnkey furnishing for model apartments and fully-furnished build setups.</p>
            </div>
            
            <div className="bg-surface-white p-6 rounded-xl border border-hairline hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">architecture</span>
              <h3 className="text-xl font-semibold text-primary mb-2">Interior designers</h3>
              <p className="font-caption text-slate">Custom shapes, odd cuts, and bespoke thickness to fit carpenter-built frames.</p>
            </div>
            
            <div className="bg-surface-white p-6 rounded-xl border border-hairline hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">storefront</span>
              <h3 className="text-xl font-semibold text-primary mb-2">Furniture dealers</h3>
              <p className="font-caption text-slate">Reliable white-label or co-branded supply for your showroom floors.</p>
            </div>
            
            <div className="bg-surface-white p-6 rounded-xl border border-hairline hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">school</span>
              <h3 className="text-xl font-semibold text-primary mb-2">Schools and colleges</h3>
              <p className="font-caption text-slate">Bulk dormitory outfitting delivered exactly on schedule before term starts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHY BUY FROM A MANUFACTURER */}
      <section className="w-full bg-surface-white py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-b border-hairline">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-full bg-[#EFE5D7] flex items-center justify-center text-primary text-[26px] font-semibold mb-6">1</div>
              <h3 className="text-[26px] font-semibold text-primary mb-3">No middleman markup</h3>
              <p className="font-body-lead text-slate">You buy directly from the unit that cuts the foam and stitches the cover. No distributor margins, no retail overheads factored into your bulk price.</p>
            </div>
            
            <div className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-full bg-[#EFE5D7] flex items-center justify-center text-primary text-[26px] font-semibold mb-6">2</div>
              <h3 className="text-[26px] font-semibold text-primary mb-3">Same specification every batch</h3>
              <p className="font-body-lead text-slate">National brands often change suppliers by region. Because we make it ourselves in Coimbatore, order 100 today and 50 next year, and the density and feel will be exactly the same.</p>
            </div>
            
            <div className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-full bg-[#EFE5D7] flex items-center justify-center text-primary text-[26px] font-semibold mb-6">3</div>
              <h3 className="text-[26px] font-semibold text-primary mb-3">Inspect the unit before you commit</h3>
              <p className="font-body-lead text-slate">Don't trust a brochure. You are welcome to visit our Chinniyampalayam facility, see the raw materials, and watch a sample mattress being built for your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5 - FORM & TERMS */}
      <section id="requirement-form" className="w-full bg-[#EFE5D7] py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-b border-hairline scroll-mt-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20">
          
          <div className="xl:col-span-5 flex flex-col justify-start">
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-primary mb-6 leading-tight">What we need from you</h2>
            <p className="font-body-regular text-slate text-lg mb-8">
              Fill out this short form to help us understand the scope of your project. We usually reply with a preliminary quotation and timeline within 2-3 hours during business days.
            </p>
            
            {/* TERMS FOR BULK */}
            <div className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-4 border-b border-hairline pb-4">Terms for Institutional Orders</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#DCA544] text-[20px] mt-0.5">check_circle</span>
                  <span className="font-body-regular text-slate">Bulk pricing tiers begin at <strong>10+ units</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#DCA544] text-[20px] mt-0.5">check_circle</span>
                  <span className="font-body-regular text-slate">B2B GST invoices provided with your organisation's GSTIN.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#DCA544] text-[20px] mt-0.5">check_circle</span>
                  <span className="font-body-regular text-slate">Staged delivery is available for large construction projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#DCA544] text-[20px] mt-0.5">check_circle</span>
                  <span className="font-body-regular text-slate">Standard retail warranty applies per individual unit supplied.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="xl:col-span-7">
            <div className="bg-surface-white p-6 md:p-10 rounded-2xl border border-hairline shadow-sm">
              <B2BForm />
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 6 - PROOF */}
      <section className="w-full bg-surface-white py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
        <div className="max-w-[1280px] mx-auto text-center">
          <h3 className="font-label-nav font-bold text-slate uppercase tracking-wider mb-10">Trusted by institutions across Tamil Nadu</h3>
          
          {/* Client List (Typographic Treatment) */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-6 opacity-80">
            <div className="font-display-sm text-xl md:text-2xl font-bold text-primary tracking-tight">The Residency</div>
            <span className="hidden md:block text-slate/30 text-xl leading-none">•</span>
            <div className="font-display-sm text-xl md:text-2xl font-bold text-primary tracking-tight">PSG Hospitals</div>
            <span className="hidden md:block text-slate/30 text-xl leading-none">•</span>
            <div className="font-display-sm text-xl md:text-2xl font-bold text-primary tracking-tight">KGISL Infrastructure</div>
            <span className="hidden md:block text-slate/30 text-xl leading-none">•</span>
            <div className="font-display-sm text-xl md:text-2xl font-bold text-primary tracking-tight">Kumaraguru College</div>
          </div>
          
        </div>
      </section>
      
    </main>
  );
}
