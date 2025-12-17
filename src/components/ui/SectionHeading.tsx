interface SectionHeadingProps {
  label?: string;
  title: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <span className="inline-block px-4 py-1 mb-3 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full uppercase">
          {label}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-text-main font-display">
        {title}
      </h2>
    </div>
  );
}

