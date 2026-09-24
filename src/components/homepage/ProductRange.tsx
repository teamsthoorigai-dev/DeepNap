import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "../Buttons";

export default function ProductRange() {
  return (
    <section className="w-full bg-surface-white py-16 md:py-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[1280px] mx-auto flex flex-col">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">The range</h2>
          <p className="font-body-lead text-body-lead text-slate mt-1">13 mattress types, 18 standard sizes, six thicknesses.</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 items-center mb-6">
          <button className="h-8 px-4 rounded-full bg-[#142C47] text-[#EFE5D7] font-label-form text-label-form font-semibold" type="button">
            All types
          </button>
          <button className="h-8 px-4 rounded-full bg-surface-white border border-hairline text-on-surface-variant hover:text-primary font-label-form text-label-form" type="button">
            Latex
          </button>
          <button className="h-8 px-4 rounded-full bg-surface-white border border-hairline text-on-surface-variant hover:text-primary font-label-form text-label-form" type="button">
            Pocket spring
          </button>
          <button className="h-8 px-4 rounded-full bg-surface-white border border-hairline text-on-surface-variant hover:text-primary font-label-form text-label-form" type="button">
            Orthopaedic
          </button>
          <button className="h-8 px-4 rounded-full bg-surface-white border border-hairline text-on-surface-variant hover:text-primary font-label-form text-label-form" type="button">
            Memory foam
          </button>
          <button className="h-8 px-4 rounded-full bg-surface-white border border-hairline text-on-surface-variant hover:text-primary font-label-form text-label-form" type="button">
            Coir
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-surface-white rounded-xl border border-hairline overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-full h-56 bg-surface-container overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzTtsoT1hMbak1nLhCnYMehQ9VXskYGMRRpu5EV1nLr2P5lupH3gF_yPhUWQuzdcoeRh9D9Xs-fRphinAl3p1yUg5XDwMy-M74779PLj2ynSYuoUVK5xq_atZbaQz01XYnVWybFFKYWwpV6Kx44mZaUvV13W-kihlOirQ3-rSiHoww9EYJGA4YOX2bhNfGrjNsTa1KcDtLJDx6fYp9mRe9K4Ls3SmPL27Jonb1amUuzIh4nMQlXf45KA"
                  alt="Natural Latex Ortho mattress"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-title-card text-title-card text-primary font-bold">Natural Latex Ortho</h3>
                <p className="font-body-regular text-body-regular text-slate">100% Kerala natural latex core with breathable organic cotton cover</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-4 border-t border-hairline flex items-center justify-between">
              <div className="space-x-3 text-caption font-caption text-slate">
                <span>Firmness <strong className="text-primary">7/10</strong></span>
                <span>·</span>
                <span>Warranty <strong className="text-primary">20 yrs</strong></span>
              </div>
              <SecondaryButton href="/mattresses?type=Latex" className="!h-9 !px-4 !text-sm">Enquire</SecondaryButton>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-white rounded-xl border border-hairline overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-full h-56 bg-surface-container overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvP7I8RmEirwVlqRqzyYn8qf1KkQXraYjYx1q_APK49uJvf_TE1-mvWDDFON2tznPESpecCxZebCtSfW7DOVC96UD-YJum-GUTbhE50ERHrkwkhPFjcmJpoqFAqRXphb9PY7iNQ2Hxw7MJky5Owf45jCaEYFskOTev8v5XxToMuNKCAjw6DEpO2qksATl4UolHKoM4Ne_ek-uTw5SjZuXhOVMIJHAN_9ebLqyVT602vl3pJGleHhXt7g"
                  alt="Pocket Spring Comfort mattress"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-title-card text-title-card text-primary font-bold">Pocket Spring Comfort</h3>
                <p className="font-body-regular text-body-regular text-slate">Zero-motion transfer encased coils with high resilience foam top</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-4 border-t border-hairline flex items-center justify-between">
              <div className="space-x-3 text-caption font-caption text-slate">
                <span>Firmness <strong className="text-primary">6/10</strong></span>
                <span>·</span>
                <span>Warranty <strong className="text-primary">15 yrs</strong></span>
              </div>
              <SecondaryButton href="/mattresses?type=Pocket+spring" className="!h-9 !px-4 !text-sm">Enquire</SecondaryButton>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-white rounded-xl border border-hairline overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-full h-56 bg-surface-container overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKMbdB2zloAuQHlHrZ7CZ9mwNSnQn20DiBVFys9TTWdcRQfghWX6AT9Ly1K_oTonBu3SWeWnEV5Jc0lQIH1q3AfjubRNvk0kkZ-18OSv4vS9XRMdkIKfwZWMz3uaEMTxQGl667PphaKcqoL5JUpP2aHkLQEsbxUf0ug4v2EAxynkTCB-g9bKHDipUzw5I8umQuv9UUwzQCoS6QLncaoSYAwcJv98jKZVUFwgGIYL3GtUR0ja1BSf_LCg"
                  alt="Rubberised Coir Spine-Care mattress"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-title-card text-title-card text-primary font-bold">Rubberised Coir Spine-Care</h3>
                <p className="font-body-regular text-body-regular text-slate">High-density natural coconut coir with firm orthopaedic spine support</p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-4 border-t border-hairline flex items-center justify-between">
              <div className="space-x-3 text-caption font-caption text-slate">
                <span>Firmness <strong className="text-primary">8/10</strong></span>
                <span>·</span>
                <span>Warranty <strong className="text-primary">10 yrs</strong></span>
              </div>
              <SecondaryButton href="/mattresses?type=Orthopaedic" className="!h-9 !px-4 !text-sm">Enquire</SecondaryButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
