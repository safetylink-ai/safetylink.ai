interface IndustriesProps {
  heading: string;
  subheading: string;
  list: string[];
}

export default function Industries({ heading, subheading, list }: IndustriesProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          {heading}
        </h2>
        <p className="text-lg text-[#666] mb-10">{subheading}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {list.map((industry, i) => (
            <div
              key={i}
              className="bg-[#f9fafb] rounded-xl px-6 py-4 text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-all"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
