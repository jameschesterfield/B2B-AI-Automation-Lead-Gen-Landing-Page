import React, { useState } from 'react';
import { Bot, AlertCircle, Clock, CheckCircle2, Zap, ArrowRight, MousePointer2 } from 'lucide-react';

const AutomationComparison: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isResizing) return;
    
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const relativeX = ((x - container.left) / container.width) * 100;
    
    setSliderPos(Math.min(Math.max(relativeX, 0), 100));
  };

  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tightest font-display text-white">
            The Evolution of <span className="text-brand-blue/70 italic font-light">Efficiency.</span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto font-light tracking-wide uppercase">
            Comparative analysis of systemic transformation.
          </p>
        </div>

        <div 
          className="relative h-[400px] rounded-3xl overflow-hidden cursor-default border border-white/[0.05] bg-white/[0.01] transition-all duration-700 hover:border-white/[0.08] select-none"
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsResizing(false)}
          onMouseLeave={() => setIsResizing(false)}
          onTouchMove={handleMouseMove}
          onTouchEnd={() => setIsResizing(false)}
        >
          {/* After State (Bottom Layer - The Destination) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 w-full max-w-5xl transition-opacity duration-700">
              <ComparisonCard 
                icon={<Bot size={22} className="text-brand-blue/40" />}
                title="AI Agents"
                desc="Flowing autonomy"
                type="after"
              />
              <ComparisonCard 
                icon={<Zap size={22} className="text-brand-blue/40" />}
                title="Precision"
                desc="Zero latency"
                type="after"
              />
              <ComparisonCard 
                icon={<CheckCircle2 size={22} className="text-brand-blue/40" />}
                title="Reliable"
                desc="Fixed systems"
                type="after"
              />
              <ComparisonCard 
                icon={<ArrowRight size={22} className="text-brand-blue/40" />}
                title="Linear"
                desc="Scale intent"
                type="after"
              />
            </div>
          </div>

          {/* Before State (Top Layer - The Problem) */}
          <div 
            className="absolute inset-0 bg-[#080808] flex items-center justify-center border-r border-white/10 z-10 pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 w-full max-w-5xl">
              <ComparisonCard 
                icon={<AlertCircle size={22} className="text-stone-600" />}
                title="Static"
                desc="Manual weight"
                type="before"
              />
              <ComparisonCard 
                icon={<Clock size={22} className="text-stone-600" />}
                title="Friction"
                desc="Lost velocity"
                type="before"
              />
              <ComparisonCard 
                icon={<AlertCircle size={22} className="text-stone-600" />}
                title="Chaos"
                desc="System noise"
                type="before"
              />
              <ComparisonCard 
                icon={<MousePointer2 size={22} className="text-stone-600" />}
                title="Limited"
                desc="Human limit"
                type="before"
              />
            </div>
          </div>

          {/* Slider Handle Interactive Zone */}
          <div 
            className="absolute top-0 bottom-0 w-12 -ml-6 z-20 cursor-col-resize flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={() => setIsResizing(true)}
            onTouchStart={() => setIsResizing(true)}
          >
            <div className="w-[1px] h-full bg-white/20 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-dark border border-white/[0.1] rounded-full flex items-center justify-center shadow-2xl">
                <div className="flex gap-[2px]">
                  <div className="w-[1px] h-2 bg-white/20" />
                  <div className="w-[1px] h-2 bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ComparisonCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  type: 'before' | 'after';
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ icon, title, desc, type }) => {
  return (
    <div 
      className={`p-6 rounded-2xl bg-white/[0.02] border ${type === 'before' ? 'border-red-500/10' : 'border-brand-blue/10'} backdrop-blur-sm transition-all duration-700 hover:bg-white/[0.05] hover:border-brand-blue/30 group shadow-lg hover:shadow-brand-blue/5`}
    >
      <div className="mb-4 text-brand-blue/30 group-hover:text-brand-blue/60 transition-colors duration-700">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white/90">{title}</h3>
      <p className="text-sm text-gray-500 leading-tight font-light">{desc}</p>
    </div>
  );
};

export default AutomationComparison;
