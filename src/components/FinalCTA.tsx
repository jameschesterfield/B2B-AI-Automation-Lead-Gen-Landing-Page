import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-12 tracking-tightest font-display">
          Ready to see what's possible?
        </h2>

        <div className="flex justify-center mb-12">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="#audit"
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/[0.02] border border-white/[0.08] text-white text-lg font-medium rounded-full hover:bg-white/[0.05] transition-all duration-700"
          >
            <div className="absolute inset-x-0 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            Request Your Strategic Audit
            <ArrowRight size={20} className="text-gray-500 group-hover:text-brand-blue transition-colors duration-700" />
          </motion.a>
        </div>

        <p className="text-gray-500 text-sm font-light tracking-wide max-w-xl mx-auto uppercase">
          Precision results. Systemic growth. Zero friction.
        </p>
      </div>
    </section>
  );
}
