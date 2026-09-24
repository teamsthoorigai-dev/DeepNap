import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "../Buttons";

export default function SupportCards() {
  return (
    <section className="w-full bg-surface/50 py-16 md:py-24 px-gutter md:px-gutter-tablet lg:px-gutter-desktop border-b border-hairline">
      <div className="max-w-[1280px] mx-auto flex flex-col space-y-12">
        {/* Heading row with Quiz action */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Find the right support
            </h2>
            <p className="font-body-lead text-body-lead text-slate mt-2 max-w-xl">
              Answer four questions about how you sleep, we shortlist from 13 types.
            </p>
          </div>
          <PrimaryButton href="/quiz" className="shrink-0 mt-1">
            Start the quiz
          </PrimaryButton>
        </div>

        {/* 3 Firmness Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Soft Card */}
          <div className="bg-surface-white shadow-md rounded-xl border border-hairline border-t-4 border-t-hairline p-6 flex flex-col justify-between transition-shadow">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-title-card text-title-card text-primary font-bold">Soft</h3>
                <span className="font-label-nav text-label-nav font-bold text-[#DCA544]">Scale 3–4</span>
              </div>
              <div className="w-full h-36 rounded-lg overflow-hidden bg-surface-container relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtJP2kP6FNh0jaFdCCt3GuG8QCcFSQUxYjPtatnh3EbSt8wdUMn9XtX5gUBV1tDkI2PzF3gNeJagBGTzoQ7WiJkDLB4rvSOBpecBQriWmT9_h2iutOvDiegP2Ie0_4dgadHUn3ccBiGXF2GBNvqT5UL02mryIUkH1bM7cHmBDh0fh80kjRQQGHW6Iul_EJGod1GH_kuCIHtP0YPZasOQpXlTBdnJESpNLj6NX1eihJC4EHcxAPFJui7w"
                  alt="Minimalist top-down photograph of soft natural pin-core latex mattress surface"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-caption text-caption text-slate uppercase font-semibold">Suited for</p>
                <p className="font-body-regular text-body-regular text-on-surface mt-1">Side sleepers, pressure relief on shoulders and hips</p>
              </div>
              <div>
                <p className="font-caption text-caption text-slate uppercase font-semibold">Internal Core</p>
                <p className="font-label-form text-label-form text-slate mt-0.5">Natural Latex, Soft Quilted Foam</p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-hairline">
              <SecondaryButton href="/mattresses?firmness=Soft" className="w-full">
                View Soft Mattresses &rarr;
              </SecondaryButton>
            </div>
          </div>

          {/* Medium Firm Card (Featured) */}
          <div className="bg-surface-white rounded-xl border border-hairline border-t-4 border-t-[#DCA544] p-6 flex flex-col justify-between shadow-md relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#142C47] text-surface-white px-6 py-1.5 rounded-full text-caption font-semibold tracking-wider uppercase whitespace-nowrap">
              Most Chosen
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-title-card text-title-card text-primary font-bold">Medium Firm</h3>
                <span className="font-label-nav text-label-nav font-bold text-[#DCA544]">Scale 6–7</span>
              </div>
              <div className="w-full h-36 rounded-lg overflow-hidden bg-surface-container relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN1qTZ1zuPdJ37U4O67VszEdPoQxDpPDzI_8b3oDSU_XVEIfxOMnmGiuMh4RW5tGZJJ9_gx-aRrZwqhujHljR1IRm9hdq3R0h_PBBHp7eNRRb1zE8uHmOQ8znKjdbO22iKV0n_gN2U0FHqgyDhu_xm21f-Cf5Rw6yjBLrRN9YF7AEcF_OSpoCBNoyt5QiYX4mWQQu-tkDxEjK-_1FkdVZTkHvHaJFWAx5ZEES5JZVg5j45ttx-IE5pHg"
                  alt="Tactile architectural view of an open cross section of pocket spring"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-caption text-caption text-slate uppercase font-semibold">Suited for</p>
                <p className="font-body-regular text-body-regular text-on-surface mt-1">Back & combination sleepers, balanced spinal posture</p>
              </div>
              <div>
                <p className="font-caption text-caption text-slate uppercase font-semibold">Internal Core</p>
                <p className="font-label-form text-label-form text-slate mt-0.5">Pocket Spring + Latex Hybrid Core</p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-hairline">
              <SecondaryButton href="/mattresses?firmness=Medium" className="w-full">
                View Medium Firm Models &rarr;
              </SecondaryButton>
            </div>
          </div>

          {/* Firm Card */}
          <div className="bg-surface-white shadow-md rounded-xl border border-hairline border-t-4 border-t-hairline p-6 flex flex-col justify-between transition-shadow">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-title-card text-title-card text-primary font-bold">Firm</h3>
                <span className="font-label-nav text-label-nav font-bold text-[#DCA544]">Scale 8–9</span>
              </div>
              <div className="w-full h-36 rounded-lg overflow-hidden bg-surface-container relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIimL5IkaRFP0gjKJT-BOKESvkr3jNj6qc38CMFqj9La1y9Z4b9_4g3nfj4AHypo4UOkD5OOUFTNLwppLw3EIg6m5-p76etILsUlEn7AXWgKuR9_DLhfzUBCQJyILdB8Vy5RDICDHLkiYGSAMMhByk5p77PT72tlVhVSU9w6u5KZquhj7_jspZR8eOl2Y4nFAKFJN-vCXKQm026w2Et7wuzmn2GpE3Fe7kXhvuc_nXy1g9PT3E8GGD2w"
                  alt="Clean textured close-up of dense rubberised coconut coir sheet"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-caption text-caption text-slate uppercase font-semibold">Suited for</p>
                <p className="font-body-regular text-body-regular text-on-surface mt-1">Stomach sleepers, firm orthopaedic spine support</p>
              </div>
              <div>
                <p className="font-caption text-caption text-slate uppercase font-semibold">Internal Core</p>
                <p className="font-label-form text-label-form text-slate mt-0.5">High-density Bonded Coir + HR Foam</p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-hairline">
              <SecondaryButton href="/mattresses?type=Orthopaedic" className="w-full">
                View Orthopaedic Models &rarr;
              </SecondaryButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
