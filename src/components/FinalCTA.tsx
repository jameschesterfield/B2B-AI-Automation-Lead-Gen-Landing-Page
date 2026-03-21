import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#1f1f1f] to-[#1a1a1a]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Ready to see what's possible?
        </h2>

        <a
          href="#audit"
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#2d2d2d] text-white text-xl font-medium rounded-lg hover:bg-[#3d3d3d] transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-8"
        >
          Request Your Free Automation Audit
          <ArrowRight size={24} />
        </a>

        <p className="text-lg text-[#b0b0b0] leading-relaxed max-w-2xl mx-auto">
          The audit takes 2-3 business days to complete and includes specific recommendations for your business.
        </p>
      </div>
    </section>
  );
}
