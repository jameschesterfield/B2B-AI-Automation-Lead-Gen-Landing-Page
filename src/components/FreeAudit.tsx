import { FileCheck, Target, TrendingUp, MapPin, DollarSign } from 'lucide-react';

export default function FreeAudit() {
  const coverage = [
    {
      icon: MapPin,
      text: "Current process mapping"
    },
    {
      icon: Target,
      text: "Bottleneck identification"
    },
    {
      icon: FileCheck,
      text: "Automation opportunity assessment"
    },
    {
      icon: TrendingUp,
      text: "Implementation roadmap"
    },
    {
      icon: DollarSign,
      text: "ROI projections for each opportunity"
    }
  ];

  return (
    <section id="audit" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Free <span className="shimmer text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-white to-brand-blue">Automation Audit</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            A comprehensive review of your current workflows with specific automation opportunities identified. This audit has value whether you work with us or not.
          </p>
        </div>

        <div className="relative group">
          {/* Animated Glow behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative p-8 md:p-16 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
              What We Cover
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {coverage.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                      <Icon className="text-brand-blue" size={24} />
                    </div>
                    <span className="text-lg text-gray-300 font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
