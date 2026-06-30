interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold text-navy mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}
