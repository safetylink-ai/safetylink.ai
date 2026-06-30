import Button from "@/components/ui/Button";

interface CTASectionProps {
  heading: string;
  subheading: string;
  demo: string;
  consult: string;
}

export default function CTASection({ heading, subheading, demo, consult }: CTASectionProps) {
  return (
    <section className="py-20 px-6 bg-navy text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-300 text-lg mb-10">{subheading}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="/contact" variant="primary">
            {demo}
          </Button>
          <Button href="/contact" variant="outline-white">
            {consult}
          </Button>
        </div>
      </div>
    </section>
  );
}
