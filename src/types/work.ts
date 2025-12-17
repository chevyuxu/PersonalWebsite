export type WorkType = 'graphic' | 'project';

export type WorkCategory = '平面設計' | '專案';

export interface BilingualText {
  zh: string;
  en: string;
}

export interface Work {
  id: string;
  type: WorkType;
  categories: WorkCategory[];
  year: number;
  thumbnailSrc: string;
  youtubeId?: string;
  title: BilingualText;
  description: BilingualText;
}

export type Language = 'zh-TW' | 'en';

export interface SocialLink {
  platform: 'email' | 'instagram' | 'behance' | 'youtube' | 'linkedin';
  url: string;
  label: BilingualText;
}

export interface SiteMeta {
  name: BilingualText;
  tagline: BilingualText;
  email: string;
  socialLinks: SocialLink[];
}

