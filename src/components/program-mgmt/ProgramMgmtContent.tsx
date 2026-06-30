import Button from "@/components/ui/Button";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function ProgramMgmtContent({ data }: { data: any }) {
  const d = data;
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {d.hero.badges.map((b: string, i: number) => (
              <span key={i} className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">{b}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{d.hero.title}</h1>
          <p className="text-gray-300 text-lg mb-8">{d.hero.subtitle}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact" variant="primary">{d.hero.cta1}</Button>
            <Button href="/contact" variant="outline-white">{d.hero.cta2}</Button>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {d.features.items.map((item: any, i: number) => (
            <div key={i} className="text-center p-6 bg-[#f9fafb] rounded-2xl hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.08)] transition-shadow">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-[#666] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gold Standard */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(rgb(255,255,255) 0%, rgb(244,243,242) 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">{d.gold_standard.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.gold_standard.items.map((item: any, i: number) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-[0_4px_15px_0_rgba(0,0,0,0.08)]">
                <div className="w-10 h-10 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-3 text-sm font-bold">{i + 1}</div>
                <h3 className="font-bold text-navy mb-2 text-sm">{item.title}</h3>
                <p className="text-[#666] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">{d.addons.heading}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {d.addons.items.map((item: string, i: number) => (
              <span key={i} className="bg-[#eef3ff] text-navy text-sm font-medium px-4 py-2 rounded-full">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(rgb(255,255,255) 0%, rgb(244,243,242) 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-2">{d.implementation.heading}</h2>
          <p className="text-[#666] text-center mb-10 italic">({d.implementation.subheading})</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.implementation.steps.map((step: any, i: number) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-[0_4px_15px_0_rgba(0,0,0,0.08)]">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-3 font-bold text-sm">{i + 1}</div>
                <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-[#666] text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Offer */}
      <section className="py-16 px-6 bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{d.launch_offer.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {d.launch_offer.items.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✓</span>
                <span className="text-gray-200 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">{d.faq.heading}</h2>
          <div className="space-y-4">
            {d.faq.items.map((item: any, i: number) => (
              <details key={i} className="border border-gray-200 rounded-xl group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-navy text-sm hover:bg-gray-50 transition-colors list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-primary text-lg group-open:hidden">+</span>
                  <span className="text-primary text-lg hidden group-open:inline">−</span>
                </summary>
                <div className="px-6 pb-4 text-[#666] text-sm leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(rgb(255,255,255) 0%, rgb(244,243,242) 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{d.cta.heading}</h2>
          <p className="text-[#666] text-lg mb-8">{d.cta.subtitle}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact" variant="primary">{d.cta.consult}</Button>
            <Button href="/contact" variant="outline-navy">{d.cta.advisor}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
