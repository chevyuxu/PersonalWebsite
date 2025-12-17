import { useLanguage } from '../../context/LanguageContext';
import { siteMeta } from '../../data';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  const { getText } = useLanguage();

  return (
    <a
      href="#hero"
      className={`flex items-center gap-2 text-xl font-bold font-display text-primary hover:text-primary-light transition-colors ${className}`}
    >
      {/* Logo icon placeholder - can be replaced with actual logo */}
      <span className="flex items-center justify-center w-8 h-8 bg-primary text-text-on-primary rounded-full text-sm">
        ✿
      </span>
      <span>{getText(siteMeta.name)}</span>
    </a>
  );
}

