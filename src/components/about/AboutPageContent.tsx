import Button from "@/components/ui/Button";

interface AdvisoryMember {
  name: string;
  role: string;
  category: string;
  bio: string;
}

interface AboutPageProps {
  hero: { title: string; subtitle: string };
  founded: { heading: string; text: string; advisory_highlight: string; difference: string };
  mission_vision: { heading: string; subheading: string; mission: { title: string; text: string }; vision: { title: string; text: string } };
  values: { heading: string; subheading: string; items: { title: string; desc: string }[] };
  board: { heading: string; subheading: string; members: AdvisoryMember[] };
  cta: { heading: string; subheading: string; demo: string; consult: string };
}

export default function AboutPageContent({ hero, founded, mission_vision, values, board, cta }: AboutPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-sm uppercase tracking-wider font-bold mb-4">About Us</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{hero.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{hero.subtitle}</p>
        </div>
      </section>

      {/* Founded */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">{founded.heading}</h2>
              <p className="text-[#666] leading-relaxed mb-6">{founded.text}</p>
              <p className="text-navy font-semibold mb-6">{founded.advisory_highlight}</p>
              <p className="text-[#666] leading-relaxed">{founded.difference}</p>
            </div>
            <div className="relative">
              <img
                src="/images/safety-Link-Team-.png"
                alt="SafetyLink Team"
                className="rounded-2xl shadow-[0_10px_28px_0_rgba(0,0,0,0.12)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(rgb(255, 255, 255) 0%, rgb(244, 243, 242) 100%)" }}
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{mission_vision.heading}</h2>
          <p className="text-[#666] text-lg">{mission_vision.subheading}</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_15px_0_rgba(0,0,0,0.08)]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold mb-4">🎯</div>
            <h3 className="text-xl font-bold text-navy mb-3">{mission_vision.mission.title}</h3>
            <p className="text-[#666] text-sm leading-relaxed">{mission_vision.mission.text}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_15px_0_rgba(0,0,0,0.08)]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold mb-4">👁️</div>
            <h3 className="text-xl font-bold text-navy mb-3">{mission_vision.vision.title}</h3>
            <p className="text-[#666] text-sm leading-relaxed">{mission_vision.vision.text}</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{values.heading}</h2>
            <p className="text-[#666] text-lg">{values.subheading}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.items.map((v, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-2xl p-6 text-center hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.08)] transition-shadow">
                <div className="text-2xl mb-3">{["🛡️","❤️","📋","💡"][i]}</div>
                <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(rgb(255, 255, 255) 0%, rgb(244, 243, 242) 100%)" }}
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{board.heading}</h2>
          <p className="text-[#666] text-lg">{board.subheading}</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {board.members.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-[0_10px_28px_0_rgba(0,0,0,0.12)] flex gap-6">
              <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy">{m.name}</h3>
                <p className="text-primary text-sm font-semibold mb-1">{m.role}</p>
                <p className="text-xs text-[#686868] uppercase tracking-wider mb-3">{m.category}</p>
                <p className="text-[#666] text-sm leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{cta.heading}</h2>
          <p className="text-gray-300 text-lg mb-10">{cta.subheading}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/contact" variant="primary">{cta.demo}</Button>
            <Button href="/contact" variant="outline-white">{cta.consult}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
