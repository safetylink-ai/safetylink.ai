interface Step {
  number: number;
  title: string;
  desc: string;
}

interface ProcessProps {
  heading: string;
  steps: Step[];
}

export default function Process({ heading, steps }: ProcessProps) {
  return (
    <section className="py-20 px-6 bg-navy text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
