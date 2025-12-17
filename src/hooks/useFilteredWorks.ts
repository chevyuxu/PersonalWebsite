import { useMemo } from 'react';
import type { Work, Language } from '../types';

export type FilterCategory = 'all' | 'graphic' | 'project';

interface UseFilteredWorksOptions {
  category: FilterCategory;
  searchQuery: string;
  language: Language;
}

export function useFilteredWorks(
  works: Work[],
  { category, searchQuery, language }: UseFilteredWorksOptions
): Work[] {
  return useMemo(() => {
    let filtered = works;

    // Filter by category
    if (category !== 'all') {
      const categoryMap: Record<'graphic' | 'project', string> = {
        graphic: '平面設計',
        project: '專案',
      };
      const targetCategory = categoryMap[category];
      filtered = filtered.filter((work) =>
        work.categories.includes(targetCategory as Work['categories'][number])
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((work) => {
        const title = language === 'zh-TW' ? work.title.zh : work.title.en;
        const description = language === 'zh-TW' ? work.description.zh : work.description.en;
        return (
          title.toLowerCase().includes(query) ||
          description.toLowerCase().includes(query)
        );
      });
    }

    return filtered;
  }, [works, category, searchQuery, language]);
}

