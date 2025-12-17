import type { BilingualText } from '../types';

export interface Skill {
  id: string;
  name: BilingualText;
  icon?: string; // Optional: path to icon or icon component name
}

export const skills: Skill[] = [
  {
    id: 'illustrator',
    name: { zh: 'Adobe Illustrator', en: 'Adobe Illustrator' },
  },
  {
    id: 'photoshop',
    name: { zh: 'Adobe Photoshop', en: 'Adobe Photoshop' },
  },
  {
    id: 'figma',
    name: { zh: 'Figma', en: 'Figma' },
  },
  {
    id: 'unity',
    name: { zh: 'Unity', en: 'Unity' },
  },
];

