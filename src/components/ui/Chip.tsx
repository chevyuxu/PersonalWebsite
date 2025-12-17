import type { ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  variant?: 'default' | 'active' | 'category';
  onClick?: () => void;
  className?: string;
}

export function Chip({
  children,
  variant = 'default',
  onClick,
  className = '',
}: ChipProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200';

  const variantStyles = {
    default: 'bg-chip text-text-muted hover:bg-page-alt hover:text-primary cursor-pointer',
    active: 'bg-primary text-text-on-primary shadow-sm',
    category: 'bg-primary/10 text-primary text-xs px-3 py-1',
  };

  const Component = onClick ? 'button' : 'span';

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      {children}
    </Component>
  );
}

