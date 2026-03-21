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
    <section className="py-32 px-6 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              This is for you if:
            </h2>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#4a9eff] mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-[#b0b0b0] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 md:border-l md:border-[#2a2a2a] md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              This isn't for you if:
            </h2>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <XCircle className="text-[#666666] mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-[#b0b0b0] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
