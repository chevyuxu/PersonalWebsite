import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useFilteredWorks, useInViewFadeIn, type FilterCategory } from '../../hooks';
import { SectionHeading } from '../ui';
import { FilterBar, SearchBar, WorksGrid, WorkModal } from '../portfolio';
import { works } from '../../data';
import type { Work } from '../../types';

export function PortfolioSection() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useInViewFadeIn<HTMLElement>();

  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const filteredWorks = useFilteredWorks(works, {
    category: selectedCategory,
    searchQuery,
    language,
  });

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`py-20 md:py-28 bg-page-alt/30 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t('portfolio.sectionLabel')}
          title={t('portfolio.title')}
        />

        {/* Filters and Search */}
        <div className="mb-8 space-y-6">
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Works Grid */}
        {filteredWorks.length > 0 ? (
          <WorksGrid works={filteredWorks} onWorkClick={handleWorkClick} />
        ) : (
          <div className="text-center py-12">
            <p className="text-text-muted">{t('portfolio.noResults')}</p>
          </div>
        )}

        {/* Work Modal */}
        <WorkModal
          work={selectedWork}
          isOpen={selectedWork !== null}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}

