import React from "react";

export default function TrustStrip() {
  return (
    <section className="w-full bg-surface-white border-y border-hairline py-4 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#DCA544] text-[20px]">check_circle</span>
          <span className="font-label-nav text-label-nav text-primary font-medium">ISO certified materials</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#DCA544] text-[20px]">check_circle</span>
          <span className="font-label-nav text-label-nav text-primary font-medium">Warranty up to 20 years</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#DCA544] text-[20px]">check_circle</span>
          <span className="font-label-nav text-label-nav text-primary font-medium">Made in our own unit</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#DCA544] text-[20px]">check_circle</span>
          <span className="font-label-nav text-label-nav text-primary font-medium">2-4 day delivery in TN</span>
        </div>
      </div>
    </section>
  );
}
