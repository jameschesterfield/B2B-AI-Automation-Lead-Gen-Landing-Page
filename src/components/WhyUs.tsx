import { Calendar, Zap, Building2 } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function WhyUs() {
  const stats = [
    {
      icon: Calendar,
      value: 8,
      suffix: "+ Years",
      description: "Building systems and working with data across industries"
    },
    {
      icon: Zap,
      value: 200,
      suffix: "+ Automations",
      description: "Currently running in production for real businesses"
    },
    {
      icon: Building2,
      value: 12, // Using a number for animation
      suffix: "+ Industries",
      description: "From manufacturing to professional services to e-commerce"
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight">
          Why Work With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-blue/30 backdrop-blur-sm transition-all duration-500 group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-blue/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="text-brand-blue" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
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
