interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  align?: "center" | "left" | "responsive";
  className?: string;
}

const alignClasses = {
  center: "items-center text-center mx-auto",
  left: "items-start text-left",
  responsive: "items-center text-center lg:items-start lg:text-left",
};

export default function SectionHeader({
  eyebrow,
  title,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex max-w-3xl flex-col gap-3 ${alignClasses[align]} ${className}`}
    >
      <p className="font-inter text-xs font-bold uppercase leading-5 tracking-[0.16em] text-primary sm:text-[13px]">
        {eyebrow}
      </p>
      <h2 className="font-manrope text-3xl font-extrabold leading-[1.15] text-text-dark sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
