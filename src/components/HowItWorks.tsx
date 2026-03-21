import { Search, AlertCircle, Wrench, CheckSquare } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Understand Your Current System",
      description: "We map out how work actually flows through your business today.",
      icon: Search
    },
    {
      number: "2",
      title: "Identify Bottlenecks and Waste",
      description: "We pinpoint where time and energy get lost in manual handoffs.",
      icon: AlertCircle
    },
    {
      number: "3",
      title: "Design Practical Automations",
      description: "We create solutions that fit your existing operations, not the other way around.",
      icon: Wrench
    },
    {
      number: "4",
      title: "Decide Together What Makes Sense",
      description: "You get clear recommendations and decide what to implement, if anything.",
      icon: CheckSquare
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
          How It Works
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative p-8 bg-[#2a2a2a] rounded-xl hover:bg-[#333333] transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#4a9eff] bg-opacity-10 flex items-center justify-center">
                      <Icon className="text-[#4a9eff]" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[#4a9eff] text-sm font-bold mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#b0b0b0] text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
