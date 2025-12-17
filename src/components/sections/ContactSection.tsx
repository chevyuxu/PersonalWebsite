import { useLanguage } from '../../context/LanguageContext';
import { useInViewFadeIn } from '../../hooks';
import { SectionHeading, Button } from '../ui';
import { siteMeta } from '../../data';
import {
  EmailIcon,
  InstagramIcon,
  BehanceIcon,
  YoutubeIcon,
  LinkedInIcon,
} from '../icons';

const iconMap = {
  email: EmailIcon,
  instagram: InstagramIcon,
  behance: BehanceIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedInIcon,
};

export function ContactSection() {
  const { t, getText } = useLanguage();
  const { ref, isVisible } = useInViewFadeIn<HTMLElement>();

  const mainEmail = siteMeta.socialLinks.find((link) => link.platform === 'email');
  const socialLinks = siteMeta.socialLinks.filter((link) => link.platform !== 'email');

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 md:py-28 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t('contact.sectionLabel')}
          title={t('contact.title')}
        />

        {/* Contact card */}
        <div className="bg-page-alt/50 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-text-muted mb-8 max-w-lg mx-auto">
            {t('contact.description')}
          </p>

          {/* Email button */}
          {mainEmail && (
            <div className="mb-8">
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<EmailIcon size={20} />}
                onClick={() => window.open(mainEmail.url, '_blank')}
              >
                {siteMeta.email}
              </Button>
            </div>
          )}

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border-subtle rounded-full text-text-main hover:text-primary hover:border-primary transition-colors"
                  aria-label={getText(link.label)}
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{getText(link.label)}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

