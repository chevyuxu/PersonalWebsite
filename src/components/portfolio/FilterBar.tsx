import { useLanguage } from '../../context/LanguageContext';
import { Chip } from '../ui';
import type { FilterCategory } from '../../hooks';

interface FilterBarProps {
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

export function FilterBar({ selectedCategory, onCategoryChange }: FilterBarProps) {
  const { t } = useLanguage();

  const categories: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: t('filters.all') },
    { key: 'graphic', label: t('filters.graphic') },
    { key: 'project', label: t('filters.project') },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {categories.map((category) => (
        <Chip
          key={category.key}
          variant={selectedCategory === category.key ? 'active' : 'default'}
          onClick={() => onCategoryChange(category.key)}
        >
          {category.label}
        </Chip>
      ))}
    </div>
  );
}

