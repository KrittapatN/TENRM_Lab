import type { Bi } from '../lib/lang';

// Photos go in public/home/ and are referenced as "home/<file>".
// Until a photo is set, an illustration is shown in its place.
export const heroPhoto: string | undefined = undefined;

export const studentLife: { caption: Bi; scene: 'valley' | 'forest' | 'coast' | 'field' | 'city' | 'people'; photo?: string }[] = [
  { caption: { en: 'Fieldwork', th: 'งานภาคสนาม' }, scene: 'forest' },
  { caption: { en: 'Workshops & games', th: 'เวิร์กช็อปและเกม' }, scene: 'people' },
  { caption: { en: 'Coastal surveys', th: 'สำรวจชายฝั่ง' }, scene: 'coast' },
  { caption: { en: 'Community learning', th: 'เรียนรู้กับชุมชน' }, scene: 'field' },
];
