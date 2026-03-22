import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TrendingUp, Users, Zap } from 'lucide-react';

const LiveStats: React.FC = () => {
  const [savings, setSavings] = useState(1240500);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setSavings(prev => prev + Math.floor(Math.random() * 50) + 10);
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.3 }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <section className="py-24 bg-brand-dark border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-emerald-500/[0.03] rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="text-emerald-500/40" size={20} />
            </div>
            <motion.div animate={controls} className="text-3xl font-semibold font-display text-white mb-2 tracking-tight">
              ${savings.toLocaleString()}
            </motion.div>
            <div className="text-gray-500 uppercase tracking-widest text-[10px] font-medium">Global Client Savings</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-brand-blue/[0.03] rounded-full flex items-center justify-center mb-6">
              <Zap className="text-brand-blue/40" size={20} />
            </div>
            <div className="text-3xl font-semibold font-display text-white mb-2 tracking-tight">
              250k+
            </div>
            <div className="text-gray-500 uppercase tracking-widest text-[10px] font-medium">Hours Reclaimed</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-purple-500/[0.03] rounded-full flex items-center justify-center mb-6">
              <Users className="text-purple-500/40" size={20} />
            </div>
            <div className="text-3xl font-semibold font-display text-white mb-2 tracking-tight">
              150+
            </div>
            <div className="text-gray-500 uppercase tracking-widest text-[10px] font-medium">Businesses Optimized</div>
          </motion.div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center text-gray-600 text-[12px] font-light">
          <p>© 2026 AI Automation Agency. Precision in Every Workflow.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
