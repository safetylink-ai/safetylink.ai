interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  stars: number;
}

interface TestimonialsProps {
  heading: string;
  items: TestimonialItem[];
}

export default function Testimonials({ heading, items }: TestimonialsProps) {
  return (
    <section
      className="py-20 px-6"
      style={{
        background:
          "linear-gradient(rgb(255, 255, 255) 0%, rgb(244, 243, 242) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-14">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-[0_10px_28px_0_rgba(0,0,0,0.12)]"
            >
              <div className="text-amber-400 mb-4">
                {"★".repeat(item.stars)}
              </div>
              <p className="text-[#666] text-sm leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-navy text-sm">{item.name}</p>
                <p className="text-xs text-[#686868]">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
