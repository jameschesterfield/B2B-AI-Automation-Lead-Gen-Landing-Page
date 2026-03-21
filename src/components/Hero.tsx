import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-[#1a1a1a] to-[#252525]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
          Your operations shouldn't feel like manual labor
        </h1>
        <p className="text-xl md:text-2xl text-[#b0b0b0] mb-12 leading-relaxed max-w-3xl mx-auto animate-slide-up">
          Most businesses run on disconnected tools, repetitive tasks, and constant context switching. AI automation isn't about replacing people—it's about building systems that let your team focus on what actually matters.
        </p>
        <a
          href="#audit"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#2d2d2d] text-white text-lg font-medium rounded-lg hover:bg-[#3d3d3d] transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
        >
          Request an Automation Audit
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
