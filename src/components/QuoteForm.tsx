"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function QuoteForm() {
  const searchParams = useSearchParams();
  
  // Extract configuration from URL
  const product = searchParams.get("product") || "Custom Mattress";
  const size = searchParams.get("size") || "Not specified";
  const thickness = searchParams.get("thickness") || "Not specified";
  const price = searchParams.get("price") || "TBD";

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [replyPref, setReplyPref] = useState<"WhatsApp" | "Call" | "Either">("WhatsApp");
  const [notes, setNotes] = useState("");

  const handleSendEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message
    const message = `
*New Quote Request*

*Configuration:*
Product: ${product}
Size: ${size}
Thickness: ${thickness} inch
Indicative Price: Rs ${price}

*Customer Details:*
Name: ${name}
Phone: ${phone}
Pincode: ${pincode}
Contact Preference: ${replyPref}

*Notes:*
${notes || "None"}
    `.trim();

    // The business WhatsApp number
    const businessPhone = "919600889334";
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20">
      
      {/* LEFT - THE FORM */}
      <div className="flex-1">
        <h1 className="font-display-lg text-display-lg text-primary mb-2">Get your quote</h1>
        <p className="font-body-regular text-body-regular text-slate mb-8">
          We'll confirm the price and the build date, usually within an hour during shop hours.
        </p>

        <form onSubmit={handleSendEnquiry} className="space-y-6">
          <div>
            <label className="block font-label-form text-label-form text-slate mb-1.5 font-medium">Name</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 bg-surface-white rounded-lg border border-hairline px-4 font-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block font-label-form text-label-form text-slate mb-1.5 font-medium">Phone number</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-label-nav text-slate">+91</span>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-12 bg-surface-white rounded-lg border border-hairline pl-12 pr-4 font-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="10-digit mobile number"
              />
            </div>
          </div>

          <div>
            <label className="block font-label-form text-label-form text-slate mb-1.5 font-medium">Pincode</label>
            <input
              required
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-full h-12 bg-surface-white rounded-lg border border-hairline px-4 font-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="e.g. 641062"
            />
          </div>

          <div>
            <label className="block font-label-form text-label-form text-slate mb-3 font-medium">How would you like us to reply?</label>
            <div className="flex gap-3">
              {(["WhatsApp", "Call", "Either"] as const).map((pref) => (
                <button
                  key={pref}
                  type="button"
                  onClick={() => setReplyPref(pref)}
                  className={`h-10 px-5 rounded-full font-label-nav text-sm transition-colors border ${
                    replyPref === pref
                      ? "bg-primary text-surface-white border-primary"
                      : "bg-surface-white text-slate border-hairline hover:bg-surface"
                  }`}
                >
                  {pref}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-label-form text-label-form text-slate mb-1.5 font-medium">Anything we should know? <span className="font-normal text-slate/70">(optional)</span></label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full min-h-[100px] bg-surface-white rounded-lg border border-hairline p-4 font-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-y"
              placeholder="e.g. Need it delivered to the 3rd floor..."
            ></textarea>
          </div>

          <div className="pt-4 border-t border-hairline">
            <button
              type="submit"
              className="w-full h-14 bg-primary text-surface-white rounded-full font-label-nav font-semibold hover:bg-navy-deep transition-all shadow-sm"
            >
              Send enquiry
            </button>
            <div className="mt-6 text-center flex flex-col items-center justify-center gap-2">
              <span className="font-label-nav text-slate">Prefer to just message us?</span>
              <Link 
                href="https://wa.me/919600889334" 
                target="_blank"
                className="inline-flex items-center gap-2 border-[1.5px] border-primary bg-transparent text-primary px-5 py-2 rounded-full font-label-nav font-semibold hover:bg-primary hover:text-surface-white transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#DCA544]"></span>
                WhatsApp us directly
              </Link>
            </div>
          </div>
        </form>
      </div>

      {/* RIGHT - SUMMARY TRAY */}
      <div className="w-full lg:w-[380px] flex-shrink-0">
        <div className="bg-surface-white rounded-xl border border-hairline p-6 sticky top-24 shadow-sm">
          <h3 className="font-label-nav font-bold text-primary uppercase tracking-wider mb-6">Your Configuration</h3>
          
          <div className="space-y-4 mb-6">
            <div>
              <div className="font-caption text-slate uppercase tracking-wider mb-1">Product</div>
              <div className="font-label-nav font-semibold text-primary">{product}</div>
            </div>
            
            <div className="w-full h-px bg-hairline"></div>
            
            <div>
              <div className="font-caption text-slate uppercase tracking-wider mb-1">Size</div>
              <div className="font-label-nav font-semibold text-primary">{size}</div>
            </div>
            
            <div className="w-full h-px bg-hairline"></div>
            
            <div>
              <div className="font-caption text-slate uppercase tracking-wider mb-1">Thickness</div>
              <div className="font-label-nav font-semibold text-primary">{thickness}"</div>
            </div>
          </div>

          <div className="bg-[#EFE5D7] p-5 rounded-lg">
            <div className="font-caption text-slate uppercase tracking-wider mb-1">Indicative Price</div>
            <div className="font-display-sm text-primary">₹{price}</div>
            <div className="font-caption text-slate mt-1">Confirmed on quote</div>
          </div>
        </div>
      </div>

    </div>
  );
}
