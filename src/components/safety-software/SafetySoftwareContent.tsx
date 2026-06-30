import Button from "@/components/ui/Button";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function SafetySoftwareContent({ data }: { data: any }) {
  const d = data;
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{d.hero.title}</h1>
          <p className="text-gray-300 text-lg mb-8 italic max-w-2xl mx-auto">{d.hero.subtitle}</p>
          <Button href="/contact" variant="primary">{d.hero.cta}</Button>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {d.differentiators.items.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-3 text-sm text-[#666]">
              <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(rgb(255,255,255) 0%, rgb(244,243,242) 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">{d.capabilities.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {d.capabilities.items.map((item: any, i: number) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-[0_4px_15px_0_rgba(0,0,0,0.08)]">
                <p className="font-bold text-navy text-sm mb-1">{item.name}</p>
                <p className="text-[#666] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-2">{d.comparison.heading}</h2>
          <p className="text-primary text-center font-semibold mb-8 italic">{d.comparison.subtitle}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 text-navy">Feature</th>
                  <th className="text-center py-3 text-[#666]">Other Tools</th>
                  <th className="text-center py-3 text-primary font-bold">Safety Link</th>
                </tr>
              </thead>
              <tbody>
                {d.comparison.rows.map((row: any, i: number) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 text-[#333]">{row.feature}</td>
                    <td className="text-center py-3 text-[#666]">{row.others}</td>
                    <td className="text-center py-3 text-primary font-bold">{row.safetylink}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deployment Paths */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(rgb(255,255,255) 0%, rgb(244,243,242) 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">{d.deployment.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_28px_0_rgba(0,0,0,0.12)]">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/software-tablet-BSMxY2uI.jpg')" }} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{d.deployment.software.title}</h3>
                <p className="text-[#666] text-sm mb-4">{d.deployment.software.desc}</p>
                <Button href="/contact" variant="primary">{d.deployment.software.cta}</Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_28px_0_rgba(0,0,0,0.12)]">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/program-team-BDtLA316.jpg')" }} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{d.deployment.program.title}</h3>
                <p className="text-[#666] text-sm mb-4">{d.deployment.program.desc}</p>
                <Button href="/safety-program-management" variant="outline-navy">{d.deployment.program.cta}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Standard */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">{d.gold_standard.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.gold_standard.items.map((item: any, i: number) => (
              <div key={i} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(rgb(255,255,255) 0%, rgb(244,243,242) 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">{d.features_grid.heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.features_grid.items.map((item: any, i: number) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_15px_0_rgba(0,0,0,0.08)] hover:shadow-[0_10px_28px_0_rgba(0,0,0,0.12)] transition-shadow">
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${item.img}')` }} />
                <div className="p-5">
                  <h3 className="font-bold text-navy text-sm mb-1">{item.name}</h3>
                  <p className="text-[#666] text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">{d.how_it_works.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.how_it_works.steps.map((step: any, i: number) => (
              <div key={i}>
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">{i + 1}</div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">{d.built_for.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[d.built_for.smb, d.built_for.enterprise].map((item: any, i: number) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${item.img}')` }} />
                <div className="p-6">
                  <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-[#666] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">{d.stats.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.stats.items.map((item: any, i: number) => (
              <div key={i}>
                <p className="text-4xl font-bold text-primary mb-2">{item.value}</p>
                <p className="text-gray-300 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">{d.industries.heading}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {d.industries.list.map((ind: string, i: number) => (
              <span key={i} className="bg-[#f9fafb] text-navy font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-navy hover:text-white transition-all">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(rgb(255,255,255) 0%, rgb(244,243,242) 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">{d.cta.heading}</h2>
          <p className="text-[#666] text-lg mb-8">{d.cta.subtitle}</p>
          <Button href="/contact" variant="primary">{d.cta.button}</Button>
        </div>
      </section>
    </>
  );
}
