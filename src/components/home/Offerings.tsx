import Button from "@/components/ui/Button";

interface Offering {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
}

interface OfferingsProps {
  heading: string;
  software: Offering;
  program: Offering;
}

export default function Offerings({ heading, software, program }: OfferingsProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-14">
          {heading}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Software Card */}
          <div className="bg-[#f9fafb] border border-[rgba(3,22,40,0.03)] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-navy mb-3">{software.title}</h3>
            <p className="text-[#666] mb-8 leading-relaxed">{software.subtitle}</p>
            <ul className="space-y-3 mb-8">
              {software.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#666]">
                  <span className="text-primary mt-1">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Button href="/safety-software" variant="primary">
              {software.cta}
            </Button>
          </div>

          {/* Program Card */}
          <div className="bg-[#f9fafb] border border-[rgba(3,22,40,0.03)] rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-navy mb-3">{program.title}</h3>
            <p className="text-[#666] mb-8 leading-relaxed">{program.subtitle}</p>
            <ul className="space-y-3 mb-8">
              {program.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#666]">
                  <span className="text-primary mt-1">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Button href="/safety-program-management" variant="outline-navy">
              {program.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
