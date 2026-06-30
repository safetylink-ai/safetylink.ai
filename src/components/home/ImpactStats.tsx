interface StatItem {
  value: string;
  label: string;
  icon: string;
}

interface SecondaryStat {
  value: string;
  label: string;
}

interface ImpactStatsProps {
  heading: string;
  stats: StatItem[];
  secondary: SecondaryStat[];
}

const iconMap: Record<string, string> = {
  shield: "🛡️",
  chart: "📊",
  building: "🏢",
};

export default function ImpactStats({ heading, stats, secondary }: ImpactStatsProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center shadow-[0_10px_28px_0_rgba(0,0,0,0.12)]"
            >
              <div className="text-4xl mb-4">{iconMap[stat.icon] || "📌"}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-[#666] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondary.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-[0_4px_15px_0_rgba(0,0,0,0.08)]"
            >
              <div className="text-3xl font-bold text-navy mb-1">{stat.value}</div>
              <p className="text-[#666] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
