import React from "react";
import Image from "next/image";
import { PrimaryButton } from "../Buttons";

export default function ConsultationBanner() {
  return (
    <section className="w-full bg-surface py-16 md:py-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        
        {/* Left 45% (5 cols) */}
        <div className="lg:col-span-5">
          <div className="w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-sm border border-hairline relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYsOleMvBpqW8g4PzsQ924QRvBCkLoVs7mZN2U96P_RFsQsh5S5URuBKcwAY96FYFxr8gtQ49hYP-kevoI3cShNepvp9E6VhhFVOWl0GfxCLGd5U0zLZReFtYKoe9yI8syZZfKHyjt_STbZt6_Q5DH-nYoM6o_zgKdrQaLk2I9W330RWgr5_w7zYIc00ghbqyQiFOgcdZ4g_jfeofEA-Ht2m4_wYSeswsUVn-T2rwPEb2N-cJsFFMicw"
              alt="Real bedroom in Coimbatore with open louvered shutters and warm sunlight"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right 55% (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-space-md lg:pl-space-md">
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Built around how you actually sleep.
          </h2>
          <p className="font-body-editorial text-body-editorial text-on-surface-variant max-w-xl">
            Book a 15-minute video call. We ask about your bed, your back and how you sleep, then specify the mattress around it.
          </p>
          <p className="font-body-editorial text-body-editorial text-on-surface-variant max-w-xl">
            Or book a home visit: an advisor can bring physical foam, latex and fabric samples to your house anywhere in Coimbatore.
          </p>
          <div className="pt-space-xs">
            <PrimaryButton href="/book-consultation">
              Book a consultation
            </PrimaryButton>
          </div>
        </div>

      </div>
    </section>
  );
}
