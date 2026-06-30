import Link from "next/link";

type ButtonVariant = "primary" | "outline-white" | "outline-navy" | "ghost";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white px-10 py-4 rounded-full font-semibold text-sm hover:bg-[#009c2f] shadow-[0_2px_6px_0_rgba(0,183,55,0.25)] transition-all",
  "outline-white":
    "bg-transparent text-white border-2 border-white px-10 py-4 rounded-[10px] font-semibold text-sm hover:bg-white hover:text-navy transition-all",
  "outline-navy":
    "bg-white text-navy px-9 py-3.5 rounded-[10px] font-medium text-sm shadow-[rgba(0,0,0,0.3)_0px_0px_1px_0px] hover:shadow-md transition-all",
  ghost:
    "bg-transparent text-navy font-semibold text-sm hover:text-primary transition-colors",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`inline-block ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
