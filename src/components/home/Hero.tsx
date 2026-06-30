import Button from "@/components/ui/Button";

interface HeroProps {
  title: string;
  cta_demo: string;
  cta_consult: string;
}

export default function Hero({ title, cta_demo, cta_consult }: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/imgi_2_hero-bg-DGNkGLMx.png')" }}
      />
      {/* Navy overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(14, 53, 94, 0.84) 0%, rgba(14, 53, 94, 0.76) 100%)",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          {title}
        </h1>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="/contact" variant="primary">
            {cta_demo}
          </Button>
          <Button href="/contact" variant="outline-white">
            {cta_consult}
          </Button>
        </div>
      </div>
    </section>
  );
}
