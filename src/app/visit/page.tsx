"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/Buttons";

export default function VisitPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+91 ",
    day: "",
    timeSlot: "Morning (9am - 1pm)"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Store Visit Request*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Preferred Day:* ${formData.day}
*Time:* ${formData.timeSlot}

Please confirm if this time works.`;

    window.open(`https://wa.me/919600889334?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="w-full bg-surface-white">
      
      {/* SECTION 1 - MAP */}
      <section className="w-full h-[400px] lg:h-[500px] bg-[#EFE5D7] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.14782012001!2d77.06208807572737!3d11.027532389137357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857ca0d555555%3A0x8e8ce12d6a57593c!2sChinniyampalayam%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale-[0.3] contrast-[1.1] sepia-[0.1]" // Minor styling to fit brand slightly better
        ></iframe>
      </section>

      {/* SECTION 2 - TWO COLUMN INFO */}
      <section className="w-full py-16 lg:py-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-b border-hairline">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT: Details */}
          <div className="flex flex-col">
            <h1 className="font-display-lg text-primary text-[40px] md:text-[52px] leading-[1.1] mb-8">
              Come and visit us.
            </h1>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[28px] text-primary mt-1">location_on</span>
                <div>
                  <h3 className="font-title-card text-primary mb-1">Workshop & Experience Facility</h3>
                  <p className="font-body-regular text-slate text-lg">
                    Irugur Road, Chinniyampalayam,<br />
                    Coimbatore, Tamil Nadu 641062
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[28px] text-primary mt-1">schedule</span>
                <div>
                  <h3 className="font-title-card text-primary mb-1">Opening Hours</h3>
                  <p className="font-body-regular text-slate text-lg">Open until 10:00 PM, every day.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[28px] text-primary mt-1">call</span>
                <div>
                  <h3 className="font-title-card text-primary mb-1">Contact</h3>
                  <a href="tel:9600889334" className="font-body-regular text-slate text-lg hover:text-primary transition-colors block mb-1">
                    96008 89334
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maps.google.com/maps?daddr=Deep+Nap+Mattress,Chinniyampalayam,Coimbatore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <PrimaryButton className="w-full justify-center !h-14">
                  <span className="material-symbols-outlined text-[20px] mr-2">directions</span>
                  Get directions
                </PrimaryButton>
              </a>
              <a 
                href="https://wa.me/919600889334" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center font-label-nav font-medium h-14 px-6 rounded-lg border-2 border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] mr-2 text-[#25D366]">chat</span>
                WhatsApp us
              </a>
            </div>
          </div>
          
          {/* RIGHT: Photography Masonry */}
          <div className="grid grid-cols-2 gap-4 h-full min-h-[400px]">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EFE5D7]">
                <Image src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800" alt="Shop Interior" fill className="object-cover" />
              </div>
              <div className="relative flex-grow rounded-2xl overflow-hidden bg-[#EFE5D7] min-h-[150px]">
                <Image src="https://images.unsplash.com/photo-n9r0S3zfoMc?auto=format&fit=crop&q=80&w=800" alt="Materials Display" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-10">
              <div className="relative flex-grow rounded-2xl overflow-hidden bg-[#EFE5D7] min-h-[200px]">
                <Image src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=800" alt="Factory View" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#EFE5D7]">
                <Image src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" alt="Custom Beds" fill className="object-cover" />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 3 - INFO BLOCKS */}
      <section className="w-full py-20 lg:py-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop bg-[#F8F4ED]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          <div className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm">
            <h2 className="font-headline-lg text-primary mb-6">What you can do here</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#DCA544] mt-0.5">check_circle</span>
                <span className="font-body-regular text-slate">Feel every material layer (coir, latex, HR foam) in person before you buy.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#DCA544] mt-0.5">check_circle</span>
                <span className="font-body-regular text-slate">Watch mattresses being stitched and tape-edged on the factory floor.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#DCA544] mt-0.5">check_circle</span>
                <span className="font-body-regular text-slate">Discuss exact custom dimensions for antique or carpenter-built beds.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#DCA544] mt-0.5">check_circle</span>
                <span className="font-body-regular text-slate">Collect standard stock sizes immediately, the same day you visit.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm flex items-start gap-5">
              <span className="material-symbols-outlined text-primary text-3xl">directions_car</span>
              <div>
                <h3 className="font-title-card text-primary mb-2">Parking</h3>
                <p className="font-body-regular text-slate">We have ample, free off-street parking available right outside the unit for cars and two-wheelers.</p>
              </div>
            </div>
            
            <div className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm flex items-start gap-5">
              <span className="material-symbols-outlined text-primary text-3xl">signpost</span>
              <div>
                <h3 className="font-title-card text-primary mb-2">Directions</h3>
                <p className="font-body-regular text-slate">Located on Irugur Road. If you are coming from Avinashi Road (NH 544), turn into Chinniyampalayam junction towards Irugur. We are 1km down on the right side.</p>
              </div>
            </div>
            
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm flex items-center justify-between group hover:border-[#DCA544]/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="flex text-[#DCA544] text-2xl">
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined fill-current">star</span>
                  <span className="material-symbols-outlined">star_half</span>
                </div>
                <div>
                  <div className="font-title-card text-primary">4.6 rating on Google</div>
                  <div className="font-caption text-slate">Read our 62 reviews</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate group-hover:text-primary transition-colors">arrow_forward</span>
            </a>
          </div>
          
        </div>
      </section>

      {/* SECTION 4 - BOOKING FORM */}
      <section className="w-full py-20 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-t border-hairline">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-display-md text-primary mb-4">Book a store visit</h2>
          <p className="font-body-regular text-slate mb-10">
            Let us know when you're coming so our sleep experts can be ready for you.
          </p>
          
          <form onSubmit={handleWhatsAppRedirect} className="bg-[#EFE5D7] p-8 md:p-10 rounded-2xl text-left border border-hairline shadow-sm">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                <label className="font-label-form text-slate text-sm">Time slot</label>
                <select 
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="h-12 w-full rounded-lg border border-hairline bg-surface-white px-4 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="Morning (9am - 1pm)">Morning (9am - 1pm)</option>
                  <option value="Afternoon (1pm - 5pm)">Afternoon (1pm - 5pm)</option>
                  <option value="Evening (5pm - 10pm)">Evening (5pm - 10pm)</option>
                </select>
              </div>
            </div>

            <PrimaryButton type="submit" className="w-full justify-center !h-14 font-semibold text-base">
              Send request via WhatsApp
            </PrimaryButton>
            
          </form>
        </div>
      </section>
      
    </main>
  );
}
