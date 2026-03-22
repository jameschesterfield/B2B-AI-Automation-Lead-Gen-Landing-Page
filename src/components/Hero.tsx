import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-10 leading-tight tracking-tightest font-display"
        >
          Precision. Intelligence. <br/>
          <span className="text-brand-blue/80 italic font-light opacity-80">Autonomous Flow.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-gray-500 mb-12 leading-relaxed max-w-xl mx-auto font-light tracking-wide uppercase"
        >
          The next evolution in systemic business efficiency.
        </motion.p>
        
        <div className="flex justify-center">
          <motion.a
            href="#audit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/[0.03] border border-white/[0.08] text-white text-lg font-medium rounded-full hover:bg-white/[0.06] transition-all duration-700"
          >
            <div className="absolute inset-x-0 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            Strategic Automation Audit
            <ArrowRight size={20} className="text-gray-500 group-hover:text-brand-blue transition-colors duration-700" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
