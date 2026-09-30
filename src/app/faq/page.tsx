"use client";
import React, { useState } from "react";
import Link from "next/link";
import { faqData, FAQCategory } from "@/data/faq";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter logic
  const filteredData = faqData.map(category => {
    const filteredItems = category.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, items: filteredItems };
  }).filter(category => category.items.length > 0);

  return (
    <main className="w-full bg-[#F8F4ED] min-h-screen">
      
      {/* HEADER */}
      <section className="w-full pt-20 pb-12 px-gutter md:px-gutter-tablet lg:px-gutter-desktop max-w-[1280px] mx-auto border-b border-hairline/20">
        <h1 className="font-display-lg text-primary text-[48px] md:text-[64px] leading-none mb-6">
          Frequently asked questions
        </h1>
        
        <div className="relative max-w-2xl">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate/50">
            search
          </span>
          <input 
            type="text"
            placeholder="Search for a question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-xl border border-hairline bg-surface-white font-body-regular text-primary focus:outline-none focus:ring-2 focus:ring-[#DCA544]/50 transition-all shadow-sm"
          />
        </div>
      </section>

      {/* TWO COLUMN LAYOUT */}
      <section className="w-full py-12 px-gutter md:px-gutter-tablet lg:px-gutter-desktop max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* LEFT SIDEBAR (STICKY) */}
          <aside className="w-full md:w-[280px] flex-shrink-0">
            <div className="md:sticky md:top-32">
              <h3 className="font-title-card text-primary mb-4">Categories</h3>
              <ul className="space-y-3">
                {faqData.map(category => (
                  <li key={category.id}>
                    <a 
                      href={`#${category.id}`}
                      className="font-label-nav text-slate hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#DCA544] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="flex-1">
            {filteredData.length === 0 ? (
              <div className="text-center py-20 bg-surface-white rounded-2xl border border-hairline shadow-sm">
                <span className="material-symbols-outlined text-slate/30 text-5xl mb-4">search_off</span>
                <p className="font-title-card text-primary mb-2">No results found</p>
                <p className="font-body-regular text-slate">Try searching for something else, or contact us directly.</p>
              </div>
            ) : (
              <div className="space-y-16">
                {filteredData.map(category => (
                  <div key={category.id} id={category.id} className="scroll-mt-32">
                    <h2 className="font-display-md text-primary text-3xl mb-6 border-b border-hairline/30 pb-4">
                      {category.name}
                    </h2>
                    
                    <div className="flex flex-col gap-4">
                      {category.items.map(item => (
                        <div key={item.id} className="bg-surface-white rounded-xl border border-hairline shadow-sm overflow-hidden transition-all">
                          <button 
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-black/5 transition-colors"
                          >
                            <h4 className="font-title-card text-primary pr-8">{item.question}</h4>
                            <span className={`material-symbols-outlined text-slate transition-transform duration-300 ${openItems[item.id] ? 'rotate-180' : ''}`}>
                              expand_more
                            </span>
                          </button>
                          
                          <div 
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openItems[item.id] ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'}`}
                          >
                            <p className="font-body-regular text-slate leading-relaxed border-t border-hairline/20 pt-4">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* STILL NOT SURE BLOCK */}
            <div className="mt-20 bg-[#EFE5D7] p-8 md:p-12 rounded-3xl text-center border border-hairline shadow-sm">
              <h3 className="font-display-md text-primary text-3xl mb-4">Still not sure?</h3>
              <p className="font-body-regular text-slate mb-8 max-w-lg mx-auto">
                We're here to help. Reach out to our sleep experts directly to get answers to your specific questions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://wa.me/919600889334" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-label-nav font-medium h-12 px-6 rounded-full bg-[#25D366] text-surface-white hover:bg-[#1EBE5A] transition-colors w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2">chat</span>
                  WhatsApp
                </a>
                <a 
                  href="tel:9600889334" 
                  className="inline-flex items-center justify-center font-label-nav font-medium h-12 px-6 rounded-full bg-surface-white border border-hairline text-primary hover:bg-black/5 transition-colors w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2">call</span>
                  Call Us
                </a>
                <Link 
                  href="/book-consultation" 
                  className="inline-flex items-center justify-center font-label-nav font-medium h-12 px-6 rounded-full bg-primary text-surface-white hover:bg-primary/90 transition-colors w-full sm:w-auto"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2">calendar_month</span>
                  Book Consultation
                </Link>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
      
    </main>
  );
}
