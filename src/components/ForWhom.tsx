import { CheckCircle2, XCircle } from 'lucide-react';

export default function ForWhom() {
  const forYou = [
    "You run a business with real operations",
    "Your team spends time on repetitive manual work",
    "You want clarity before making any investment",
    "You're curious about AI but skeptical of the hype"
  ];

  const notForYou = [
    "You're looking for magic button solutions",
    "This is a hobby project or experiment",
    "You expect instant, overnight results",
    "You're not ready to examine your current processes"
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="p-10 bg-black/40 border border-white/10 rounded-3xl backdrop-blur-md relative overflow-hidden group">
            {/* Subtle light ray effect */}
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-brand-blue/10 to-transparent rotate-45 pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 relative z-10 tracking-tight">
              This is for you if:
            </h2>
            <ul className="space-y-6 relative z-10">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-5 group/item">
                  <div className="mt-1 flex-shrink-0 relative">
                    <CheckCircle2 className="text-brand-blue relative z-10" size={26} />
                    <div className="absolute inset-0 bg-brand-blue blur-lg opacity-40 group-hover/item:opacity-70 transition-opacity" />
                  </div>
                  <span className="text-lg text-gray-300 leading-relaxed font-medium transition-colors group-hover/item:text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 bg-black/20 border border-white/5 rounded-3xl opacity-80 hover:opacity-100 transition-opacity backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-500 mb-10 tracking-tight">
              This isn't for you if:
            </h2>
            <ul className="space-y-6">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-5">
                  <XCircle className="text-gray-700 mt-1 flex-shrink-0" size={26} />
                  <span className="text-lg text-gray-400 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
