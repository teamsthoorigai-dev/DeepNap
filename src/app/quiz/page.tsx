"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, MattressProduct } from "@/data/products";

// Define the steps
const steps = [
  { id: 1, title: "Who is this mattress for?" },
  { id: 2, title: "How do you usually sleep?" },
  { id: 3, title: "Any of these apply to you?" },
  { id: 4, title: "How firm do you like it?" },
  { id: 5, title: "Do you know your size?" },
  { id: 6, title: "Results" }
];

type Answers = {
  forWho: string;
  sleepPos: string;
  concerns: string[];
  firmness: string;
  size: string;
};

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({
    forWho: "",
    sleepPos: "",
    concerns: [],
    firmness: "",
    size: ""
  });
  
  const [recommended, setRecommended] = useState<MattressProduct[]>([]);

  // Advance automatically for single select
  const handleSingleSelect = (field: keyof Answers, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setTimeout(() => {
      if (step === 5) {
        calculateResults({ ...answers, [field]: value });
      } else {
        setStep(prev => prev + 1);
      }
    }, 400); // Short beat
  };

  const handleMultiToggle = (value: string) => {
    setAnswers(prev => {
      let newConcerns = [...prev.concerns];
      if (value === "None") {
        newConcerns = ["None"];
      } else {
        newConcerns = newConcerns.filter(c => c !== "None");
        if (newConcerns.includes(value)) {
          newConcerns = newConcerns.filter(c => c !== value);
        } else {
          newConcerns.push(value);
        }
      }
      return { ...prev, concerns: newConcerns };
    });
  };

  const calculateResults = (finalAnswers: Answers) => {
    // Basic scoring engine
    const scoredProducts = products.map(p => {
      let score = 0;
      let reason = "";

      // Who is it for
      if (finalAnswers.forWho === "A guest room or hostel") {
        if (p.category === "Orthopaedic" || p.category === "Coir") score += 3;
      }
      
      // Sleep position
      if (finalAnswers.sleepPos === "Side") {
        if (p.category === "Pocket spring" || p.category === "Memory foam") score += 3;
      } else if (finalAnswers.sleepPos === "Back" || finalAnswers.sleepPos === "Front") {
        if (p.firmness >= 7) score += 3;
      }

      // Concerns
      if (finalAnswers.concerns.includes("Back pain") || finalAnswers.concerns.includes("Neck or shoulder pain")) {
        if (p.category === "Orthopaedic") score += 5;
        if (p.category === "Latex" && p.firmness >= 7) score += 4;
      }
      if (finalAnswers.concerns.includes("You sleep hot")) {
        if (p.category === "Latex" || p.category === "Coir") score += 5;
        if (p.category === "Memory foam") score -= 5;
      }

      // Firmness preference
      if (finalAnswers.firmness === "Soft" && p.firmness <= 5) score += 5;
      if (finalAnswers.firmness === "Medium" && (p.firmness >= 5 && p.firmness <= 7)) score += 5;
      if (finalAnswers.firmness === "Firm" && p.firmness >= 8) score += 5;

      return { product: p, score };
    });

    // Sort and pick top 3
    scoredProducts.sort((a, b) => b.score - a.score);
    setRecommended(scoredProducts.slice(0, 3).map(sp => sp.product));
    setStep(6);
  };

  const handleWhatsApp = () => {
    const text = `Hi Deep Nap, I just took the mattress quiz.
My profile: ${answers.forWho}, ${answers.sleepPos} sleeper.
Preferences: Firmness: ${answers.firmness}. Concerns: ${answers.concerns.join(", ")}.
Size: ${answers.size}.
    
I'm interested in getting quotes for:
${recommended.map(r => "- " + r.name).join("\n")}`;

    window.open(`https://wa.me/919600889334?text=${encodeURIComponent(text)}`, "_blank");
  };

  const OptionCard = ({ 
    icon, label, desc, isSelected, onClick 
  }: { 
    icon: string, label: string, desc: string, isSelected: boolean, onClick: () => void 
  }) => (
    <button 
      onClick={onClick}
      className={`flex flex-col text-left p-5 md:p-6 rounded-xl border-2 transition-all min-h-[140px] w-full ${
        isSelected ? "border-primary bg-primary-container/10" : "border-hairline bg-surface-white hover:border-primary/50"
      }`}
    >
      <span className={`material-symbols-outlined text-[32px] mb-4 ${isSelected ? "text-primary" : "text-[#DCA544]"}`}>
        {icon}
      </span>
      <span className="font-title-card text-primary mb-1">{label}</span>
      <span className="font-caption text-slate">{desc}</span>
    </button>
  );

  return (
    <main className="w-full h-full min-h-screen bg-[#EFE5D7] flex flex-col relative overflow-y-auto">
      {/* Progress Bar & Header */}
      <div className="absolute top-0 left-0 w-full h-1 bg-surface-white/50">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${(step / 6) * 100}%` }}
        ></div>
      </div>
      
      <div className="w-full p-6 flex items-center justify-between z-10 sticky top-0">
        <Link href="/" className="font-display-sm text-primary">Deep Nap</Link>
        <Link href="/" className="w-10 h-10 rounded-full bg-surface-white flex items-center justify-center text-primary shadow-sm hover:bg-surface transition-colors">
          <span className="material-symbols-outlined">close</span>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center p-6 pb-24">
        <div className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {step < 6 && (
            <h1 className="font-display-lg text-primary text-center mb-10">{steps[step-1].title}</h1>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <OptionCard icon="person" label="One person" desc="Just for myself." isSelected={answers.forWho === "One person"} onClick={() => handleSingleSelect("forWho", "One person")} />
              <OptionCard icon="group" label="Two people" desc="Me and my partner." isSelected={answers.forWho === "Two people"} onClick={() => handleSingleSelect("forWho", "Two people")} />
              <OptionCard icon="child_care" label="A child" desc="For my kid's room." isSelected={answers.forWho === "A child"} onClick={() => handleSingleSelect("forWho", "A child")} />
              <OptionCard icon="bed" label="Guest room" desc="Or hostel/rental setup." isSelected={answers.forWho === "A guest room or hostel"} onClick={() => handleSingleSelect("forWho", "A guest room or hostel")} />
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <OptionCard icon="airline_seat_flat" label="Side" desc="I mostly sleep on my side." isSelected={answers.sleepPos === "Side"} onClick={() => handleSingleSelect("sleepPos", "Side")} />
              <OptionCard icon="airline_seat_flat_angled" label="Back" desc="I mostly sleep on my back." isSelected={answers.sleepPos === "Back"} onClick={() => handleSingleSelect("sleepPos", "Back")} />
              <OptionCard icon="hotel" label="Front" desc="I sleep on my stomach." isSelected={answers.sleepPos === "Front"} onClick={() => handleSingleSelect("sleepPos", "Front")} />
              <OptionCard icon="cached" label="It changes" desc="I toss and turn all night." isSelected={answers.sleepPos === "It changes"} onClick={() => handleSingleSelect("sleepPos", "It changes")} />
            </div>
          )}

          {/* STEP 3 (Multi-select) */}
          {step === 3 && (
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <OptionCard icon="physical_therapy" label="Back pain" desc="Lower back or spine issues." isSelected={answers.concerns.includes("Back pain")} onClick={() => handleMultiToggle("Back pain")} />
                <OptionCard icon="sick" label="Neck pain" desc="Neck or shoulder stiffness." isSelected={answers.concerns.includes("Neck or shoulder pain")} onClick={() => handleMultiToggle("Neck or shoulder pain")} />
                <OptionCard icon="thermometer" label="You sleep hot" desc="I wake up sweating easily." isSelected={answers.concerns.includes("You sleep hot")} onClick={() => handleMultiToggle("You sleep hot")} />
                <OptionCard icon="sentiment_satisfied" label="None" desc="No major concerns, just want comfort." isSelected={answers.concerns.includes("None")} onClick={() => handleMultiToggle("None")} />
              </div>
              <button 
                onClick={() => setStep(4)}
                disabled={answers.concerns.length === 0}
                className="w-full h-14 bg-primary text-surface-white font-label-nav font-semibold rounded-lg disabled:opacity-50 transition-opacity"
              >
                Next Step
              </button>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <OptionCard icon="cloud" label="Soft" desc="I want to sink in." isSelected={answers.firmness === "Soft"} onClick={() => handleSingleSelect("firmness", "Soft")} />
              <OptionCard icon="waves" label="Medium" desc="A balanced feel." isSelected={answers.firmness === "Medium"} onClick={() => handleSingleSelect("firmness", "Medium")} />
              <OptionCard icon="straighten" label="Firm" desc="Strict support, no sinking." isSelected={answers.firmness === "Firm"} onClick={() => handleSingleSelect("firmness", "Firm")} />
              <OptionCard icon="question_mark" label="Not sure" desc="Show me your bestsellers." isSelected={answers.firmness === "Not sure"} onClick={() => handleSingleSelect("firmness", "Not sure")} />
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <OptionCard icon="check_box" label="Standard sizes" desc="Single, Queen, King etc." isSelected={answers.size === "Standard size picker"} onClick={() => handleSingleSelect("size", "Standard size picker")} />
              <OptionCard icon="architecture" label="A custom size" desc="Odd dimensions to the inch." isSelected={answers.size === "A custom size"} onClick={() => handleSingleSelect("size", "A custom size")} />
              <OptionCard icon="help" label="Not sure yet" desc="I'll measure later." isSelected={answers.size === "Not sure yet"} onClick={() => handleSingleSelect("size", "Not sure yet")} />
            </div>
          )}

          {/* STEP 6 - RESULTS */}
          {step === 6 && (
            <div className="w-full max-w-[900px] mx-auto -mt-10">
              <h1 className="font-display-lg text-primary text-center mb-10">Three that would suit you</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {recommended.map((product, index) => (
                  <div key={product.id} className="flex flex-col">
                    {/* The Reasoning */}
                    <div className="min-h-[48px] font-label-nav font-semibold text-[#DCA544] mb-3 leading-snug">
                      {index === 0 && `Because you want ${answers.firmness.toLowerCase()} support.`}
                      {index === 1 && `A great alternative for ${answers.sleepPos.toLowerCase()} sleepers.`}
                      {index === 2 && `Our most popular all-rounder.`}
                    </div>
                    
                    {/* Product Card */}
                    <Link href={`/mattresses/${product.slug}`} className="bg-surface-white rounded-xl border border-hairline overflow-hidden flex flex-col group hover:shadow-md transition-all flex-grow">
                      <div className="relative w-full aspect-[4/3] bg-surface-container">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="font-title-card text-primary mb-1 line-clamp-1">{product.name}</h3>
                        <p className="font-caption text-slate line-clamp-2 mb-4">{product.description}</p>
                        <div className="mt-auto pt-4 border-t border-hairline">
                          <div className="font-label-nav font-semibold text-primary">₹{product.priceFrom.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
                <button 
                  onClick={handleWhatsApp}
                  className="w-full h-14 bg-primary text-surface-white font-label-nav font-semibold rounded-lg hover:bg-navy-deep transition-colors shadow-sm"
                >
                  Get a quote on these
                </button>
                <button 
                  onClick={handleWhatsApp}
                  className="w-full h-14 bg-surface-white border-2 border-primary text-primary font-label-nav font-semibold rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#DCA544]"></span>
                  Talk it through on WhatsApp
                </button>
              </div>
              
              <div className="text-center mt-6">
                <button onClick={() => setStep(1)} className="font-caption text-primary underline">Retake quiz</button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Back Button (Only for steps 2-5) */}
      {step > 1 && step < 6 && (
        <div className="absolute bottom-6 left-6 z-10">
          <button 
            onClick={() => setStep(prev => prev - 1)}
            className="w-12 h-12 bg-surface-white rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-surface transition-colors border border-hairline"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </div>
      )}
    </main>
  );
}
