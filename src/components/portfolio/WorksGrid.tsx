import { WorkCard } from './WorkCard';
import type { Work } from '../../types';

interface WorksGridProps {
  works: Work[];
  onWorkClick: (work: Work) => void;
}

export function WorksGrid({ works, onWorkClick }: WorksGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((work) => (
        <WorkCard key={work.id} work={work} onClick={() => onWorkClick(work)} />
      ))}
    </div>
  );
}

