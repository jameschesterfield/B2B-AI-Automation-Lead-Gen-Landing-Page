import { Calendar, Zap, Building2 } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function WhyUs() {
  const stats = [
    {
      icon: Calendar,
      value: 8,
      label: "Years",
      description: "Building systems and working with data across industries"
    },
    {
      icon: Zap,
      value: 200,
      label: "Automations",
      description: "Currently running in production for real businesses"
    },
    {
      icon: Building2,
      value: 12,
      label: "Industries",
      description: "From manufacturing to professional services to e-commerce"
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-20 tracking-tightest font-display">
          Precision <span className="text-brand-blue/70 italic font-light">Infrastructure.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/[0.03] mb-8 group-hover:scale-110 transition-transform duration-700">
                  <Icon className="text-brand-blue/40" size={24} />
                </div>
                <div className="flex flex-col items-center mb-6">
                  <div className="text-5xl font-semibold text-white tracking-tightest font-display flex items-baseline">
                    <AnimatedCounter value={stat.value} suffix="+" />
                  </div>
                  <div className="text-2xl font-light text-brand-blue/60 mt-2 font-display italic">
                    {stat.label}
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[240px] mx-auto uppercase tracking-widest">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
