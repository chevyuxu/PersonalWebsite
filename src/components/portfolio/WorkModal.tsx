import { useLanguage } from '../../context/LanguageContext';
import { Modal, Chip } from '../ui';
import { CloseIcon, ExternalLinkIcon } from '../icons';
import type { Work } from '../../types';

interface WorkModalProps {
  work: Work | null;
  isOpen: boolean;
  onClose: () => void;
}

export function WorkModal({ work, isOpen, onClose }: WorkModalProps) {
  const { getText, t } = useLanguage();

  if (!work) return null;

  const isVideo = work.type === 'project' && work.youtubeId;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="2xl">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-card/80 backdrop-blur-sm rounded-full text-text-muted hover:text-text-main hover:bg-card transition-colors"
        aria-label={t('modal.close')}
      >
        <CloseIcon size={24} />
      </button>

      {/* Media content */}
      <div className="relative">
        {isVideo ? (
          // YouTube embed
          <div className="relative aspect-video bg-text-main">
            <iframe
              src={`https://www.youtube.com/embed/${work.youtubeId}?rel=0`}
              title={getText(work.title)}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          // Image
          <div className="relative aspect-[4/3] bg-gradient-to-br from-page-alt to-chip">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-30">🎨</span>
            </div>
            <img
              src={work.thumbnailSrc}
              alt={getText(work.title)}
              className="absolute inset-0 w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Year */}
        <div className="flex items-center gap-3 mb-3">
          <Chip variant="category">
            {work.type === 'graphic' ? t('filters.graphic') : t('filters.project')}
          </Chip>
          <span className="text-sm text-text-muted">{work.year}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-text-main mb-3 font-display">
          {getText(work.title)}
        </h2>

        {/* Description */}
        <p className="text-text-muted leading-relaxed mb-4">
          {getText(work.description)}
        </p>

        {/* YouTube link for video projects */}
        {isVideo && (
          <a
            href={`https://www.youtube.com/watch?v=${work.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
          >
            <ExternalLinkIcon size={18} />
            {t('portfolio.viewOnYoutube')}
          </a>
        )}
      </div>
    </Modal>
  );
}

