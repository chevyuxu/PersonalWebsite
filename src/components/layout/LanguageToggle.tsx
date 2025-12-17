import { useLanguage } from '../../context/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'zh-TW' ? 'en' : 'zh-TW');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-sm font-medium text-primary bg-chip border border-border-subtle rounded-full hover:bg-page-alt transition-colors"
      aria-label={language === 'zh-TW' ? 'Switch to English' : '切換至中文'}
    >
      {t('language.toggle')}
    </button>
  );
}

