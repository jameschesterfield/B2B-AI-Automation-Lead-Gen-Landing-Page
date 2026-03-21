import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import FreeAudit from './components/FreeAudit';
import WhatNext from './components/WhatNext';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] scroll-smooth">
      <Hero />
      <ForWhom />
      <HowItWorks />
      <WhyUs />
      <FreeAudit />
      <WhatNext />
      <FinalCTA />
    </div>
  );
}

export default App;
