import { Search, AlertCircle, Wrench, CheckSquare } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-20 tracking-tight font-display">
          How It <span className="text-brand-blue">Works</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              step={step} 
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, isHovered, onMouseEnter, onMouseLeave }: any) {
  const Icon = step.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // More subtle parallax
  const iconX = useTransform(mouseX, [-100, 100], [-5, 5]);
  const iconY = useTransform(mouseY, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => {
        onMouseLeave();
        mouseX.set(0);
        mouseY.set(0);
      }}
      onMouseMove={handleMouseMove}
      animate={{
        y: isHovered ? -2 : 0,
      }}
      className="relative p-10 bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden group transition-all duration-700 hover:border-brand-blue/20"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-blue/[0.03] rounded-full blur-[80px] group-hover:bg-brand-blue/[0.08] transition-colors duration-700" />
      
      <div className="flex items-start gap-8 relative z-10">
        <div className="flex-shrink-0">
          <motion.div 
            style={{ x: iconX, y: iconY }}
            className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700"
          >
            <Icon className="text-brand-blue/60" size={24} />
          </motion.div>
        </div>
        <div className="flex-1">
          <div className="text-brand-blue/50 text-xs font-medium mb-3 tracking-widest uppercase">
            STEP {step.number}
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">
            {step.title}
          </h3>
          <p className="text-gray-500 text-base leading-relaxed font-light">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
