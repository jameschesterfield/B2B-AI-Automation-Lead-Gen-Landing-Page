import { Phone, ShieldOff, FileText, ThumbsUp } from 'lucide-react';

export default function WhatNext() {
  const steps = [
    {
      icon: Phone,
      title: "Short Intro Call (15 minutes)",
      description: "We'll ask about your business and current challenges."
    },
    {
      icon: ShieldOff,
      title: "No Sales Pitch",
      description: "This is about understanding your operations, not selling you anything."
    },
    {
      icon: FileText,
      title: "Clear Recommendations",
      description: "You'll receive a detailed audit with specific next steps."
    },
    {
      icon: ThumbsUp,
      title: "You Decide What to Do Next",
      description: "No pressure, no follow-up calls. The choice is entirely yours."
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
          What Happens Next
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-[#2a2a2a] rounded-xl hover:bg-[#333333] transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#4a9eff] bg-opacity-10 flex items-center justify-center">
                    <Icon className="text-[#4a9eff]" size={24} />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-lg text-[#b0b0b0] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
