import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const title = "Your operations shouldn't feel like manual labor";
  const words = title.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    reveal: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    reveal: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="reveal"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={child}
              className="inline-block mr-[0.2em]"
            >
              {word === "manual" || word === "labor" ? (
                <span className="text-brand-blue">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
          Most businesses run on disconnected tools and repetitive tasks. AI automation isn't about replacing people—it's about building systems that let your team focus on what actually matters.
        </p>
        
        <div className="flex justify-center">
          <Magnetic strength={0.3}>
            <a
              href="#audit"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-xl font-semibold rounded-full hover:bg-brand-blue hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(74,158,255,0.4)]"
            >
              Request an Automation Audit
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
