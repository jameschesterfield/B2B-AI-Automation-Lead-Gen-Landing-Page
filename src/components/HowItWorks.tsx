import { Search, AlertCircle, Wrench, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight">
          How It Works
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md overflow-hidden group transition-colors duration-500 hover:border-brand-blue/30"
              >
                {/* Decorative background glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/10 rounded-full blur-[80px] group-hover:bg-brand-blue/20 transition-colors duration-500" />
                
                <div className="flex items-start gap-8 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="text-brand-blue" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-brand-blue text-sm font-bold mb-3 tracking-widest uppercase">
                      STEP {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
