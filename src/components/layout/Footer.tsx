import { useLanguage } from '../../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border-subtle bg-page-alt/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-text-muted text-sm">{t('footer.copyright')}</p>
        <p className="text-text-muted text-xs mt-2">{t('footer.madeWith')}</p>
      </div>
    </footer>
  );
}

