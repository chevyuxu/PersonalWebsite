import { useLanguage } from '../../context/LanguageContext';
import { useInViewFadeIn } from '../../hooks';
import { SectionHeading, Chip } from '../ui';
import { skills } from '../../data';
import { getAssetUrl } from '../../utils/assets';

export function AboutSection() {
  const { t, getText } = useLanguage();
  const { ref, isVisible } = useInViewFadeIn<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 md:py-28 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration placeholder */}
          <div className="order-2 md:order-1">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-page-alt to-chip rounded-xl overflow-hidden relative">
                {/* Fallback while loading */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-50">🎨</span>
                </div>
                {/* About illustration */}
                <img
                  src={getAssetUrl('assets/about-illustration.PNG')}
                  alt="About illustration"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300"
                  onLoad={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '1';
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <SectionHeading
              label={t('about.sectionLabel')}
              title={t('about.title')}
              centered={false}
            />

            <p className="text-text-muted leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Skills/Tools Section */}
            <div>
              <h3 className="text-lg font-semibold text-text-main mb-4 flex items-center gap-2">
                <span className="text-primary">✦</span>
                {t('about.skillsTitle')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Chip key={skill.id} variant="default" className="cursor-default hover:bg-chip">
                    {getText(skill.name)}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
