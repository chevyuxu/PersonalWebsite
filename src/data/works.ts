import type { Work } from '../types';
import { getAssetUrl } from '../utils/assets';

const workAsset = (file: string) => getAssetUrl(`assets/works/${file}`);

export const works: Work[] = [
  // Graphic Design Works (6)
  {
    id: 'graphic-1',
    type: 'graphic',
    categories: ['平面設計'],
    year: 2024,
    thumbnailSrc: workAsset('graphic-1.jpg'),
    title: {
      zh: '茶包裝設計',
      en: 'Tea packaging design',
    },
    description: {
      zh: '結合傳統茶文化與現代幾何美學。',
      en: 'Combining traditional tea culture with modern geometric aesthetics.',
    },
  },
  {
    id: 'graphic-2',
    type: 'graphic',
    categories: ['平面設計'],
    year: 2024,
    thumbnailSrc: workAsset('graphic-2.png'),
    title: {
      zh: '雜誌設計',
      en: 'Magazine Design',
    },
    description: {
      zh: '透過轉化草間彌生的標誌性波點元素、運用打破限制的靈活跨頁佈局以及紅黑黃高對比配色，共同打造出呼應其前衛美學的獨特設計風格。',
      en: 'By transforming Yayoi Kusama\'s iconic polka dot elements, using a flexible double-page layout that breaks the limitations, and a high-contrast color scheme of red, black, and yellow, a unique design style that echoes her avant-garde aesthetic is created.',
    },
  },
  {
    id: 'graphic-3',
    type: 'graphic',
    categories: ['平面設計'],
    year: 2023,
    thumbnailSrc: workAsset('graphic-3.png'),
    title: {
      zh: '書本封面設計',
      en: 'Book cover design',
    },
    description: {
      zh: '這款《小婦人》封面設計選用明亮檸檬黃配色展現少女活力，並透過堆疊象徵在世姊妹的生活物件，在視覺上構建出代表已故貝絲的鋼琴意象，藉此傳達愛與記憶讓家庭完整的深層隱喻。',
      en: 'This Little Women cover design uses a bright lemon yellow color scheme to showcase the vitality of a young girl, and by stacking up the life objects that symbolize the surviving sisters, it visually constructs the image of a piano representing the late Beth, thereby conveying the deep metaphor that love and memory make a family whole.',
    },
  },
  {
    id: 'graphic-4',
    type: 'graphic',
    categories: ['平面設計'],
    year: 2023,
    thumbnailSrc: workAsset('graphic-4.png'),
    title: {
      zh: '網站介面設計',
      en: 'Website Interface Design',
    },
    description: {
      zh: 'WhimsiCraft Haven 選物品牌透過暖棕與奶油杏色調營造如冬日熱可可般的溫馨氛圍，並結合手繪貼紙風格與大膽色塊設計，將「療癒、創意、溫暖」的核心價值轉化為放鬆且動線明確的購物空間。',
      en: 'WhimsiCraft Haven selects items to create a cozy atmosphere reminiscent of hot cocoa in winter, using warm brown and creamy apricot tones. It combines hand-painted sticker style with bold color block design, transforming the core values ​​of "healing, creativity, and warmth" into a relaxing and well-organized shopping space.',
    },
  },
  {
    id: 'graphic-5',
    type: 'graphic',
    categories: ['平面設計'],
    year: 2024,
    thumbnailSrc: workAsset('graphic-5.jpg'),
    title: {
      zh: '大同電鍋',
      en: 'Tatung Electric Rice Cooker',
    },
    description: {
      zh: '以台灣經典產品為題材，探索 Illustrator 內建的3D效果。挑戰在於不使用專業3D建模軟體的情況下，僅透過向量路徑的運算與材質貼圖，模擬出金屬鍋蓋的反光質感與塑膠機身的霧面光澤，精準還原產品細節。',
      en: 'Using classic Taiwanese products as inspiration, this project explores the built-in 3D effects in Illustrator. The challenge lies in accurately recreating the reflective texture of a metal pot lid and the matte finish of a plastic body without using professional 3D modeling software, solely through vector path calculations and material mapping.',
    },
  },
  {
    id: 'graphic-6',
    type: 'graphic',
    categories: ['平面設計'],
    year: 2023,
    thumbnailSrc: workAsset('graphic-6.png'),
    title: {
      zh: '毛線球圖示',
      en: 'Yarn ball illustration',
    },
    description: {
      zh: '本作旨在練習複雜曲線的結構佈局與色彩光影的應用。將平面的線條轉化為具有鮮明立體感與飽和色澤的球體，呈現向量繪圖在質感表現上的可能性。',
      en: 'This work aims to practice the structural layout of complex curves and the application of color and light. It transforms flat lines into spheres with a distinct three-dimensional feel and saturated colors, showcasing the possibilities of vector drawing in terms of texture representation.',
    },
  },

  // Project Works with YouTube (3)
  {
    id: 'project-1',
    type: 'project',
    categories: ['專案'],
    year: 2023,
    thumbnailSrc: workAsset('project-1.jpg'),
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual video
    title: {
      zh: '祭祀傳承',
      en: 'Sacrificial tradition',
    },
    description: {
      zh: '與COMGO昌泰科醫合作，將「COMGO心血管AI量測儀」結合互動參拜體驗。透過供品答題、虔誠參拜與身體數據檢測，將個人生理狀態轉譯為籤詩內容，創造融合文化與科技的互動儀式。',
      en: 'In collaboration with COMGO Medical, the "COMGO Cardiovascular AI Measurement Device" is integrated with an interactive worship experience. Through offering quizzes, devout worship, and body data monitoring, an individual\'s physiological state is translated into fortune-telling poems, creating an interactive ritual that blends culture and technology.',
    },
  },
  {
    id: 'project-2',
    type: 'project',
    categories: ['專案'],
    year: 2024,
    thumbnailSrc: workAsset('project-2.jpg'),
    youtubeId: 'dx54uYqYakM', // Placeholder - replace with actual video
    title: {
      zh: 'Agevator',
      en: 'Agevator',
    },
    description: {
      zh: '一款以MR技術打造的互動式電影體驗。使用者搭乘象徵人生階段的電梯，進入四個樓層，分別體驗從幼兒到老年的不同視角。過程中透過沉浸式互動，引導玩家重新審視人生選擇與心態。',
      en: 'An interactive cinematic experience built with MR technology. Users ride an elevator symbolizing life stages, entering four floors to experience different perspectives from infancy to old age. Through immersive interaction, the experience guides players to re-examine their life choices and mindset.',
    },
  },
  {
    id: 'project-3',
    type: 'project',
    categories: ['專案'],
    year: 2024,
    thumbnailSrc: workAsset('project-3.jpg'),
    youtubeId: '-aYi4uTXoyA', // Placeholder - replace with actual video
    title: {
      zh: '叫你主管出來',
      en: 'Call your manager',
    },
    description: {
      zh: '一款第三人稱3D模擬遊戲，玩家扮演商店店員，與各式客人互動，挑戰如何用合適的語氣與態度完成服務。若回覆不當將觸怒客人導致扣分，服務得當則能獲得高分。',
      en: 'A third-person 3D simulation game where players take on the role of a shop assistant, interacting with various customers and challenging themselves to provide service using appropriate tone and attitude. Inappropriate responses will anger customers and result in point deductions, while proper service will earn high scores.',
    },
  },
];
