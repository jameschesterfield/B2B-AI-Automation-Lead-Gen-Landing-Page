import { FileCheck, Target, TrendingUp, MapPin, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

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
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight font-display">
            Free <span className="text-brand-blue">Automation Audit</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
            A precise evaluation of your operational bottlenecks with a strategic implementation roadmap.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Subtle Glow behind the card */}
          <div className="absolute -inset-[1px] bg-brand-blue/10 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition duration-1000" />
          
          <div className="relative p-8 md:p-12 bg-white/[0.01] border border-white/[0.05] rounded-3xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-10 text-center font-display">
              Strategic Focus Areas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverage.map((item, index) => (
                <AuditItem key={index} item={item} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AuditItem({ item }: any) {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors duration-500">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-blue/[0.03] flex items-center justify-center">
        <Icon className="text-brand-blue/50" size={20} />
      </div>
      <span className="text-base text-gray-400 font-light">{item.text}</span>
    </div>
  );
}
