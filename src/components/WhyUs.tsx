import { Calendar, Zap, Building2 } from 'lucide-react';

export default function WhyUs() {
  const stats = [
    {
      icon: Calendar,
      value: "8+ Years",
      description: "Building systems and working with data across industries"
    },
    {
      icon: Zap,
      value: "200+ Automations",
      description: "Currently running in production for real businesses"
    },
    {
      icon: Building2,
      value: "Multiple Industries",
      description: "From manufacturing to professional services to e-commerce"
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
          Why Work With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-[#2a2a2a] hover:bg-[#333333] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#4a9eff] bg-opacity-10 mb-6">
                  <Icon className="text-[#4a9eff]" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {stat.value}
                </h3>
                <p className="text-lg text-[#b0b0b0] leading-relaxed">
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
