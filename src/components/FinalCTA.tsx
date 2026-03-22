import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">
          Ready to see what's possible?
        </h2>

        <div className="flex justify-center mb-12">
          <Magnetic strength={0.3}>
            <a
              href="#audit"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-xl font-semibold rounded-full hover:bg-brand-blue hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(74,158,255,0.4)]"
            >
              Request Your Free Automation Audit
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>
        </div>

        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
          The audit takes 2-3 business days to complete and includes specific actionable recommendations for your business.
        </p>
      </div>
    </section>
  );
}
