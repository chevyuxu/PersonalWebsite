import { useLanguage } from '../../context/LanguageContext';
import { useScrollToSection, useInViewFadeIn } from '../../hooks';
import { Button } from '../ui';
import { EmailIcon, ExternalLinkIcon } from '../icons';
import { getAssetUrl } from '../../utils/assets';

export function HeroSection() {
  const { t } = useLanguage();
  const { scrollToSection } = useScrollToSection();
  const { ref, isVisible } = useInViewFadeIn<HTMLElement>();

  return (
    <section
      id="hero"
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center pt-20 pb-16 fade-in-section ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Avatar placeholder */}
        <div className="mb-8">
          <div className="inline-block p-1 bg-card rounded-full shadow-lg">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary/20 to-accent-yellow/30 flex items-center justify-center overflow-hidden">
              <img
                src={getAssetUrl('assets/avatar.png')}
                alt="Xuan's avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-3xl md:text-5xl font-bold text-text-main mb-4">
          {t('hero.greeting')}{' '}
          <span className="text-primary font-display">{t('hero.name')}</span>！
        </h1>

        {/* Role subtitle */}
        <p className="text-lg md:text-xl text-text-muted mb-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mr-2">
            {t('hero.graphicDesign')}
          </span>
          {t('hero.and')}
          <span className="inline-block px-3 py-1 bg-accent-blue/20 text-blue-600 rounded-full text-sm font-medium ml-2">
            {t('hero.interactiveDesign')}
          </span>
          {' '}{t('hero.role')}
        </p>

        {/* Description */}
        <p className="text-text-muted max-w-xl mx-auto mb-8">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            leftIcon={<ExternalLinkIcon size={20} />}
            onClick={() => scrollToSection('portfolio')}
          >
            {t('hero.ctaViewWorks')}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            leftIcon={<EmailIcon size={20} />}
            onClick={() => scrollToSection('contact')}
          >
            {t('hero.ctaContact')}
          </Button>
        </div>
      </div>
    </section>
  );
}
