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
    <section id="audit" className="py-32 px-6 bg-[#1f1f1f]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Free Automation Audit
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            What You Get
          </h3>
          <p className="text-xl text-[#b0b0b0] leading-relaxed">
            A comprehensive review of your current workflows with specific automation opportunities identified. This audit has value whether you work with us or not.
          </p>
        </div>

        <div className="bg-[#2a2a2a] rounded-xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            What We Cover
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {coverage.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#4a9eff] bg-opacity-10 flex items-center justify-center">
                    <Icon className="text-[#4a9eff]" size={24} />
                  </div>
                  <span className="text-lg text-[#b0b0b0]">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
