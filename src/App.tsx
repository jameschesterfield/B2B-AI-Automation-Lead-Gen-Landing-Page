import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import FreeAudit from './components/FreeAudit';
import WhatNext from './components/WhatNext';
import FinalCTA from './components/FinalCTA';
import BackgroundLayer from './components/BackgroundLayer';
import ScrollProgress from './components/ScrollProgress';
import { SlideUp } from './components/AnimatedReveal';
import { MotionConfig, useReducedMotion } from 'framer-motion';

function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "never"}>
      <div className="min-h-screen relative text-white scroll-smooth selection:bg-blue-500/30">
        <BackgroundLayer />
        <ScrollProgress />
        <Hero />
        <SlideUp><ForWhom /></SlideUp>
        <SlideUp><HowItWorks /></SlideUp>
        <SlideUp><WhyUs /></SlideUp>
        <SlideUp><FreeAudit /></SlideUp>
        <SlideUp><WhatNext /></SlideUp>
        <SlideUp><FinalCTA /></SlideUp>
      </div>
    </MotionConfig>
  );
}

export default App;
