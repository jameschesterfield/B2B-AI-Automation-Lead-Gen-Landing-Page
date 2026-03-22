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
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight">
          What Happens Next
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group flex items-start gap-8 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08] hover:border-brand-blue/30"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="text-brand-blue" size={28} />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-white text-black font-bold rounded-full flex items-center justify-center text-sm shadow-xl">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed font-medium">
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
