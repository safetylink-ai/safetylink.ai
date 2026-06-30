import Button from "@/components/ui/Button";

export default function SolutionsContent({ data }: { data: any }) {
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {d.cards.map((card: any, i: number) => (
            <div key={i} className="bg-[#f9fafb] rounded-2xl overflow-hidden shadow-[0_10px_28px_0_rgba(0,0,0,0.12)] hover:shadow-[0_10px_28px_0_rgba(0,0,0,0.18)] transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${card.img}')` }} />
              <div className="p-8">
                <h2 className="text-2xl font-bold text-navy mb-3">{card.title}</h2>
                <p className="text-[#666] text-sm mb-6 leading-relaxed">{card.desc}</p>
                <Button href={card.href} variant="primary">{card.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
