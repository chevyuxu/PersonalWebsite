import type { SiteMeta } from '../types';

export const siteMeta: SiteMeta = {
  name: {
    zh: 'Xuan.Design',
    en: 'Xuan.Design',
  },
  tagline: {
    zh: '互動設計師',
    en: 'Interactive Designer',
  },
  email: 'test@gmail.com',
  socialLinks: [
    {
      platform: 'email',
      url: 'mailto:test@gmail.com',
      label: { zh: '電子郵件', en: 'Email' },
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/',
      label: { zh: 'Instagram', en: 'Instagram' },
    },
    {
      platform: 'behance',
      url: 'https://behance.net/',
      label: { zh: 'Behance', en: 'Behance' },
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com/',
      label: { zh: 'YouTube 頻道', en: 'YouTube Channel' },
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/',
      label: { zh: 'LinkedIn', en: 'LinkedIn' },
    },
  ],
};

