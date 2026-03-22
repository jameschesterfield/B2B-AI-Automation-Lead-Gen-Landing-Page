import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import AutomationComparison from './components/AutomationComparison';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import FreeAudit from './components/FreeAudit';
import WhatNext from './components/WhatNext';
import FinalCTA from './components/FinalCTA';
import LiveStats from './components/LiveStats';
import BackgroundLayer from './components/BackgroundLayer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import { SlideUp } from './components/AnimatedReveal';
import { MotionConfig, useReducedMotion } from 'framer-motion';

function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "never"}>
      <div className="min-h-screen relative text-white scroll-smooth selection:bg-blue-500/30 font-sans">
        <CustomCursor />
        <BackgroundLayer />
        <ScrollProgress />
        <Hero />
        <SlideUp><AutomationComparison /></SlideUp>
        <SlideUp><ForWhom /></SlideUp>
        <SlideUp><HowItWorks /></SlideUp>
        <SlideUp><WhyUs /></SlideUp>
        <SlideUp><FreeAudit /></SlideUp>
        <SlideUp><WhatNext /></SlideUp>
        <SlideUp><FinalCTA /></SlideUp>
        <SlideUp><LiveStats /></SlideUp>
      </div>
    </MotionConfig>
  );
}

export default App;
