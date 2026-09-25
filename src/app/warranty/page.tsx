"use client";
import React, { useState } from "react";
import { warrantyData } from "@/data/warranties";
import { PrimaryButton } from "@/components/Buttons";

export default function WarrantyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculatedEndDate, setCalculatedEndDate] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "+91 ",
    invoiceNo: "",
    purchaseDate: "",
    product: warrantyData[0].productName,
    sizeThickness: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Find the warranty years for the selected product
    const selectedProduct = warrantyData.find(w => w.productName === formData.product);
    const yearsToAdd = selectedProduct ? selectedProduct.years : 0;
    
    // Calculate end date
    const purchase = new Date(formData.purchaseDate);
    if (!isNaN(purchase.getTime())) {
      const endDate = new Date(purchase);
      endDate.setFullYear(endDate.getFullYear() + yearsToAdd);
      
      // Format as "15 October 2036"
      const formattedDate = endDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      setCalculatedEndDate(formattedDate);
    } else {
      setCalculatedEndDate("Unknown Date");
    }
    
    // Mock an API call delay, then show confirmation
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <main className="w-full bg-[#EFE5D7] min-h-screen py-16 lg:py-24 px-gutter md:px-gutter-tablet flex flex-col items-center">
      
      <div className="w-full max-w-[640px]">
        
        {!isSubmitted ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-display-lg text-primary text-[40px] md:text-[52px] leading-[1.1] mb-4 text-center">
              Register your warranty
            </h1>
            <p className="font-body-regular text-slate text-lg text-center mb-10">
              Register once and we'll have your details when you need us. Warranties run from 2 to 10 years depending on the core material.
            </p>

            <form onSubmit={handleRegister} className="bg-surface-white p-8 md:p-10 rounded-2xl border border-hairline shadow-sm flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label className="font-label-form text-slate text-sm">Your name</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-form text-slate text-sm">Phone number</label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-end">
                    <label className="font-label-form text-slate text-sm">Invoice number</label>
                    <button type="button" onClick={(e) => e.preventDefault()} className="font-caption text-primary hover:underline" title="Usually found at the top right of your receipt">where do I find this?</button>
                  </div>
                  <input 
                    required
                    type="text" 
                    name="invoiceNo"
                    value={formData.invoiceNo}
                    onChange={handleChange}
                    className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all uppercase"
                    placeholder="e.g. DN-2026-405"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-form text-slate text-sm">Purchase date</label>
                  <input 
                    required
                    type="date" 
                    name="purchaseDate"
                    value={formData.purchaseDate}
                    onChange={handleChange}
                    max={new Date().toISOString().split("T")[0]}
                    className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-form text-slate text-sm">Product category</label>
                <select 
                  required
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  {warrantyData.map(w => (
                    <option key={w.productName} value={w.productName}>
                      {w.productName} ({w.years} Year Warranty)
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-form text-slate text-sm">Size and thickness (if applicable)</label>
                <input 
                  type="text" 
                  name="sizeThickness"
                  value={formData.sizeThickness}
                  onChange={handleChange}
                  className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="e.g. 78x72, 6 inch"
                />
              </div>

              <div className="flex flex-col gap-1 opacity-70">
                <label className="font-label-form text-slate text-sm">Upload a photo of the bill (Optional)</label>
                <input 
                  type="file" 
                  accept="image/*,.pdf"
                  className="h-12 w-full rounded-lg border border-dashed border-hairline bg-surface-container px-4 py-2 text-sm text-slate file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                />
              </div>

              <div className="mt-2">
                <PrimaryButton type="submit" className="w-full justify-center !h-14 font-semibold text-base">
                  Register Warranty
                </PrimaryButton>
              </div>
            </form>
          </div>
        ) : (
          <div className="animate-in zoom-in-95 duration-500 bg-surface-white p-10 md:p-14 rounded-2xl border border-hairline shadow-sm text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
            </div>
            
            <h2 className="font-display-md text-primary mb-2">Registered</h2>
            <p className="font-body-regular text-slate mb-8">
              Thank you, {formData.name.split(' ')[0]}. We've saved your invoice details securely.
            </p>
            
            <div className="bg-[#EFE5D7] rounded-xl p-6 mb-8 inline-block min-w-[280px]">
              <div className="font-label-nav text-xs text-slate uppercase tracking-wider mb-2">Your warranty is valid until</div>
              <div className="font-display-md text-primary text-3xl">{calculatedEndDate}</div>
            </div>
            
            <div className="border-t border-hairline pt-8">
              <p className="font-body-regular text-slate mb-4">Need to make a claim in the future?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/919600889334" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-label-nav font-medium h-12 px-6 rounded-lg bg-[#25D366] text-surface-white hover:bg-[#1EBE5A] transition-colors w-full sm:w-auto">
                  <span className="material-symbols-outlined text-[18px] mr-2">chat</span>
                  WhatsApp Us
                </a>
                <span className="text-slate font-caption">or call 96008 89334</span>
              </div>
            </div>
          </div>
        )}

        {/* BELOW THE FORM - COVERAGE POLICY */}
        <div className="mt-16 text-left bg-surface-white p-8 rounded-2xl border border-hairline">
          <h3 className="font-title-card text-primary mb-6 text-xl">What the warranty covers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-label-nav font-semibold text-slate mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#DCA544] text-[18px]">done</span> 
                Covered
              </h4>
              <ul className="space-y-3 font-body-regular text-slate text-sm">
                <li>• Abnormal sagging or indentation greater than 1 inch (2.5cm) when no weight is applied.</li>
                <li>• Physical flaws in the latex or foam that cause it to split or crack despite normal usage.</li>
                <li>• Manufacturing defects in the zipper assembly of the mattress cover.</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-label-nav font-semibold text-slate mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ef4444] text-[18px]">close</span> 
                Not Covered
              </h4>
              <ul className="space-y-3 font-body-regular text-slate text-sm opacity-80">
                <li>• Normal softening of foam or latex over time (this is a break-in period, not a defect).</li>
                <li>• Fabric pilling, stains, burns, tears, or liquid damage caused by misuse or lacking a mattress protector.</li>
                <li>• Mattresses placed on an improper base (e.g., slatted bed bases with gaps wider than 3 inches).</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
