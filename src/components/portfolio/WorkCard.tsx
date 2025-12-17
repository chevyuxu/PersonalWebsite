import { useLanguage } from '../../context/LanguageContext';
import { Chip } from '../ui';
import { PlayIcon } from '../icons';
import type { Work } from '../../types';

interface WorkCardProps {
  work: Work;
  onClick: () => void;
}

export function WorkCard({ work, onClick }: WorkCardProps) {
  const { getText, t } = useLanguage();
  const isVideo = work.type === 'project' && work.youtubeId;

  return (
    <button
      onClick={onClick}
      className="group w-full text-left bg-card rounded-2xl overflow-hidden shadow-md card-hover work-card-enter focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-page-alt to-chip">
        {/* Placeholder gradient background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl opacity-50">
            {work.type === 'graphic' ? '🎨' : '🎬'}
          </span>
        </div>

        {/* Actual image when available */}
        <img
          src={work.thumbnailSrc}
          alt={getText(work.title)}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity"
          onLoad={(e) => {
            (e.target as HTMLImageElement).style.opacity = '1';
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />

        {/* Video indicator - overlay on top of thumbnail */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 bg-text-main/80 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
              <PlayIcon size={24} className="text-text-on-primary ml-1" />
            </div>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Chip variant="category">
            {work.type === 'graphic' ? t('filters.graphic') : t('filters.project')}
          </Chip>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-text-main mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {getText(work.title)}
        </h3>
        <p className="text-sm text-text-muted line-clamp-2">
          {getText(work.description)}
        </p>
        <p className="text-xs text-text-muted mt-2">{work.year}</p>
      </div>
    </button>
  );
}

