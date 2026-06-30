interface DifferentiatorItem {
  title: string;
  desc: string;
}

interface DifferentiatorsProps {
  heading: string;
  subheading: string;
  items: DifferentiatorItem[];
}

const icons = [
  "/images/download__2___1_-removebg-preview.png",
  "/images/download__3___1_-removebg-preview.png",
  "/images/download__4___1_-removebg-preview.png",
  "/images/download__7___1_-removebg-preview.png",
  "/images/download__8___1_-removebg-preview.png",
  "/images/download__9___1_-removebg-preview.png",
];

export default function Differentiators({ heading, subheading, items }: DifferentiatorsProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          {heading}
        </h2>
        <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
          {subheading}
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#f9fafb] border border-[rgba(3,22,40,0.03)] rounded-2xl p-8 hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.08)] transition-shadow"
          >
            <img src={icons[i]} alt="" className="w-12 h-12 mb-4 object-contain" />
            <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
            <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
