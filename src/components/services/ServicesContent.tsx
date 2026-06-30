import Button from "@/components/ui/Button";

export default function ServicesContent({ data }: { data: any }) {
  const d = data;
  return (
    <>
      <section className="bg-navy text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{d.hero.title}</h1>
          <p className="text-gray-300 text-lg">{d.hero.subtitle}</p>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {d.items.map((item: any, i: number) => (
            <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.08)] transition-shadow text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-[#666] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6" style={{ background: "linear-gradient(rgb(255,255,255) 0%, rgb(244,243,242) 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{d.cta.heading}</h2>
          <p className="text-[#666] text-lg mb-8">{d.cta.subtitle}</p>
          <Button href="/contact" variant="primary">{d.cta.button}</Button>
        </div>
      </section>
    </>
  );
}
