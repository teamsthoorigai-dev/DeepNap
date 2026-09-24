"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/Buttons";

type ConsultationType = "video" | "home" | "unit" | null;

export default function BookConsultationPage() {
  const [selectedType, setSelectedType] = useState<ConsultationType>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "+91 ",
    day: "",
    timeSlot: "Morning (10am - 1pm)",
    address: "",
    pincode: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    let typeName = "";
    if (selectedType === "video") typeName = "15-minute Video Call";
    if (selectedType === "home") typeName = "Home Visit (Coimbatore)";
    if (selectedType === "unit") typeName = "Unit Visit (Chinniyampalayam)";

    let text = `*Consultation Booking Request*
    
*Type:* ${typeName}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Preferred Day:* ${formData.day}
*Preferred Time:* ${formData.timeSlot}`;

    if (selectedType === "home") {
      text += `\n*Address:* ${formData.address}
*Pincode:* ${formData.pincode}`;
    }

    text += `\n\nPlease confirm availability.`;

    window.open(`https://wa.me/919600889334?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="w-full bg-[#EFE5D7] min-h-screen">
      
      {/* SECTION 1 - HERO */}
      <section className="w-full py-16 lg:py-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-display-lg text-primary text-[40px] md:text-[52px] leading-[1.1] tracking-tight mb-6">
            Talk to someone who actually makes them.
          </h1>
          <p className="font-body-regular text-lg text-slate">
            We don't offer a 100-night trial because we specify the mattress around how you actually sleep before we build it. Book a free consultation to get it right the first time.
          </p>
        </div>
      </section>

      {/* SECTION 2 - THREE WAYS */}
      <section className="w-full px-gutter md:px-gutter-tablet lg:px-gutter-desktop pb-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <button 
            onClick={() => setSelectedType("video")}
            className={`flex flex-col text-left p-8 rounded-2xl border-2 transition-all bg-surface-white ${selectedType === "video" ? "border-primary shadow-md ring-4 ring-primary/10" : "border-hairline hover:border-primary/50"}`}
          >
            <span className="material-symbols-outlined text-[40px] text-primary mb-6">videocam</span>
            <h3 className="font-display-sm text-primary text-2xl mb-3">15-minute video call</h3>
            <p className="font-body-regular text-slate flex-grow mb-8">
              We ask about your bed, your back and how you sleep, then specify the mattress around it. Free, no obligation.
            </p>
            <div className={`w-full py-3 rounded-lg text-center font-label-nav font-medium transition-colors ${selectedType === "video" ? "bg-primary text-surface-white" : "bg-primary-container/10 text-primary"}`}>
              {selectedType === "video" ? "Selected" : "Select this"}
            </div>
          </button>
          
          <button 
            onClick={() => setSelectedType("home")}
            className={`flex flex-col text-left p-8 rounded-2xl border-2 transition-all bg-surface-white ${selectedType === "home" ? "border-primary shadow-md ring-4 ring-primary/10" : "border-hairline hover:border-primary/50"}`}
          >
            <span className="material-symbols-outlined text-[40px] text-primary mb-6">home_pin</span>
            <h3 className="font-display-sm text-primary text-2xl mb-3">Home visit (Coimbatore)</h3>
            <p className="font-body-regular text-slate flex-grow mb-8">
              We bring material samples to your house so you can feel the difference before we build anything.
            </p>
            <div className={`w-full py-3 rounded-lg text-center font-label-nav font-medium transition-colors ${selectedType === "home" ? "bg-primary text-surface-white" : "bg-primary-container/10 text-primary"}`}>
              {selectedType === "home" ? "Selected" : "Select this"}
            </div>
          </button>
          
          <button 
            onClick={() => setSelectedType("unit")}
            className={`flex flex-col text-left p-8 rounded-2xl border-2 transition-all bg-surface-white ${selectedType === "unit" ? "border-primary shadow-md ring-4 ring-primary/10" : "border-hairline hover:border-primary/50"}`}
          >
            <span className="material-symbols-outlined text-[40px] text-primary mb-6">factory</span>
            <h3 className="font-display-sm text-primary text-2xl mb-3">Visit the unit</h3>
            <p className="font-body-regular text-slate flex-grow mb-8">
              Come and see your mattress being made. We are open until 10pm, every day in Chinniyampalayam.
            </p>
            <div className={`w-full py-3 rounded-lg text-center font-label-nav font-medium transition-colors ${selectedType === "unit" ? "bg-primary text-surface-white" : "bg-primary-container/10 text-primary"}`}>
              {selectedType === "unit" ? "Selected" : "Select this"}
            </div>
          </button>

        </div>
      </section>

      {/* SECTION 3 - BOOKING FORM (Conditional) */}
      {selectedType && (
        <section className="w-full px-gutter md:px-gutter-tablet lg:px-gutter-desktop pb-20 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="max-w-[700px] mx-auto bg-surface-white p-8 md:p-10 rounded-2xl border border-hairline shadow-sm relative">
            
            <button 
              onClick={() => setSelectedType(null)}
              className="absolute top-6 right-6 text-slate hover:text-primary transition-colors"
              title="Cancel selection"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h2 className="font-headline-lg text-primary mb-2">
              {selectedType === "video" && "Book your video call"}
              {selectedType === "home" && "Schedule a home visit"}
              {selectedType === "unit" && "Let us know when you're coming"}
            </h2>
            <p className="font-body-regular text-slate mb-8 pb-8 border-b border-hairline">
              We'll confirm this booking with you on WhatsApp shortly.
            </p>

            <form onSubmit={handleWhatsAppRedirect} className="flex flex-col gap-6">
              
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
                  <label className="font-label-form text-slate text-sm">Preferred day</label>
                  <input 
                    required
                    type="date" 
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                    className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-form text-slate text-sm">Preferred time slot</label>
                  <select 
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="Morning (10am - 1pm)">Morning (10am - 1pm)</option>
                    <option value="Afternoon (1pm - 5pm)">Afternoon (1pm - 5pm)</option>
                    <option value="Evening (5pm - 9pm)">Evening (5pm - 9pm)</option>
                  </select>
                </div>
              </div>

              {selectedType === "home" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-in fade-in duration-300">
                  <div className="md:col-span-8 flex flex-col gap-1">
                    <label className="font-label-form text-slate text-sm">Street address (Coimbatore only)</label>
                    <input 
                      required
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="md:col-span-4 flex flex-col gap-1">
                    <label className="font-label-form text-slate text-sm">Pincode</label>
                    <input 
                      required
                      type="text" 
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
              )}

              <div className="mt-4">
                <PrimaryButton type="submit" className="w-full justify-center !h-14 font-semibold text-base">
                  Request Booking via WhatsApp
                </PrimaryButton>
              </div>

            </form>
          </div>
        </section>
      )}

      {/* SECTION 4 - WHAT TO EXPECT */}
      <section className="w-full bg-surface-white py-16 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-y border-hairline">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-label-nav font-bold text-slate uppercase tracking-wider text-center mb-10">What to expect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-hairline"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#EFE5D7] flex items-center justify-center text-primary font-headline-sm mb-4 border-4 border-surface-white">1</div>
              <h4 className="font-title-card text-primary mb-2">Request</h4>
              <p className="font-caption text-slate">Submit your preferred time slot above.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#EFE5D7] flex items-center justify-center text-primary font-headline-sm mb-4 border-4 border-surface-white">2</div>
              <h4 className="font-title-card text-primary mb-2">Confirm</h4>
              <p className="font-caption text-slate">We message you on WhatsApp to confirm.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#EFE5D7] flex items-center justify-center text-primary font-headline-sm mb-4 border-4 border-surface-white">3</div>
              <h4 className="font-title-card text-primary mb-2">Consult</h4>
              <p className="font-caption text-slate">We discuss your sleep habits and measurements.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#DCA544]/20 flex items-center justify-center text-[#DCA544] font-headline-sm mb-4 border-4 border-surface-white">4</div>
              <h4 className="font-title-card text-primary mb-2">Quote</h4>
              <p className="font-caption text-slate">You receive a firm quote for your exact specs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - SAMPLE PHOTOGRAPHY */}
      <section className="w-full bg-[#EFE5D7] py-16 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-headline-sm text-primary">Feel the difference at home</h2>
            <p className="font-caption text-slate mt-2">If you book a home visit, we bring these core materials directly to you.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-hairline group">
              <Image src="https://images.unsplash.com/photo-n9r0S3zfoMc?auto=format&fit=crop&q=80&w=800" alt="Natural Latex" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-title-card text-surface-white">Natural Latex</div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-hairline group">
              <Image src="https://images.unsplash.com/photo-pWUyHVJgLhg?auto=format&fit=crop&q=80&w=800" alt="Rubberised Coir" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-title-card text-surface-white">Rubberised Coir</div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-hairline group">
              <Image src="https://images.unsplash.com/photo-SLIFI67jv5k?auto=format&fit=crop&q=80&w=800" alt="Memory Foam" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-title-card text-surface-white">Memory Foam</div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-hairline group">
              <Image src="https://images.unsplash.com/photo-9GwMIek9jnY?auto=format&fit=crop&q=80&w=800" alt="Premium Fabric" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-title-card text-surface-white">Premium Fabric</div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
