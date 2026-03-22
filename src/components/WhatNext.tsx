import { Phone, ShieldOff, FileText, ThumbsUp } from 'lucide-react';

export default function WhatNext() {
  const steps = [
    {
      icon: Phone,
      number: "01",
      label: "Intro Call",
      description: "A precision 15-minute diagnostic challenging your current operational status quo."
    },
    {
      icon: ShieldOff,
      number: "02",
      label: "Pure Insight",
      description: "Zero pressure. This session serves clarity, not conversion. Insight is our currency."
    },
    {
      icon: FileText,
      number: "03",
      label: "Strategic Audit",
      description: "A calculated blueprint mapping every bottleneck to an autonomous solution."
    },
    {
      icon: ThumbsUp,
      number: "04",
      label: "Linear Output",
      description: "The roadmap belongs to you. Execute with us, or carry the strategy elsewhere."
    }
  ];

  return (
    <section className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tightest font-display">
            Selective <span className="text-brand-blue/70 italic font-light">Engagement.</span>
          </h2>
          <p className="text-gray-500 text-sm font-light tracking-wide max-w-xl mx-auto uppercase mt-4">
            A frictionless path to operational autonomy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/[0.03] mb-8 group-hover:scale-110 transition-transform duration-700">
                  <Icon className="text-brand-blue/40" size={20} />
                </div>
                
                <div className="flex flex-col items-center mb-8">
                  <div className="text-5xl font-semibold text-white tracking-tightest font-display inline-block opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                    {step.number}
                  </div>
                  <div className="text-xl font-light text-brand-blue/60 mt-3 font-display italic">
                    {step.label}
                  </div>
                </div>

                <p className="text-gray-600 text-[12px] font-light leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
