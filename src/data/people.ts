import type { Bi } from '../lib/lang';

export type LeaderId = 'pd' | 'nrd' | 'va';

export interface ProfileLink {
  label: string;
  url: string;
}

export interface Leader {
  id: LeaderId;
  name: Bi;
  position: Bi;
  affiliation: Bi;
  interests: Bi;
  /** Path under public/, e.g. "team/pd.jpg". Initials are shown until a photo is added. */
  photo?: string;
  profile: ProfileLink;
}

export interface Student {
  name: Bi;
  level: 'phd' | 'master' | 'undergraduate';
  topic?: Bi;
  institution?: Bi;
  photo?: string;
}

const biology: Bi = {
  en: 'Department of Biology, Faculty of Science, Chulalongkorn University',
  th: 'ภาควิชาชีววิทยา คณะวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
};

// Names and profile links come from the website brief and the leaders' public
// Google Scholar profiles. Thai names for NRD and VA, positions and photos are
// still to be confirmed by the lab.
export const leaders: Leader[] = [
  {
    id: 'pd',
    name: { en: 'Assoc. Prof. Dr. Pongchai Dumrongrojwatthana', th: 'รองศาสตราจารย์ ดร.พงษ์ชัย ดำรงโรจน์วัฒนา' },
    position: { en: 'Lab leader', th: 'หัวหน้าห้องปฏิบัติการ' },
    affiliation: biology,
    interests: { en: 'Companion modelling · Participatory research · Agroecology', th: 'การสร้างแบบจำลองแบบมีส่วนร่วม · การวิจัยแบบมีส่วนร่วม · นิเวศเกษตร' },
    profile: { label: 'Google Scholar', url: 'https://scholar.google.com/scholar?hl=th&as_sdt=0%2C5&q=pongchai+dumrongrojwatthana&btnG=&oq=pongchai+d' },
  },
  {
    id: 'nrd',
    name: { en: 'Nipada Ruankaew Disyatat', th: 'Nipada Ruankaew Disyatat' },
    position: { en: 'Lab leader', th: 'หัวหน้าห้องปฏิบัติการ' },
    affiliation: biology,
    interests: { en: 'Forest restoration · Urban birds · Soil fungi', th: 'การฟื้นฟูป่า · นกในเมือง · ราในดิน' },
    profile: { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=tLvBKW4AAAAJ&hl=en' },
  },
  {
    id: 'va',
    name: { en: 'Varanya Aranyavalai', th: 'วรัญญา อรัญวาลัย' },
    position: { en: 'Lab leader', th: 'หัวหน้าห้องปฏิบัติการ' },
    affiliation: { en: 'TENRM Lab', th: 'TENRM Lab' },
    interests: { en: 'Herpetology · Animal ecology · Coastal environments', th: 'สัตว์เลื้อยคลาน · นิเวศวิทยาของสัตว์ · สิ่งแวดล้อมชายฝั่ง' },
    profile: { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Varanya-Aranyavalai' },
  },
];

export const leaderShort: Record<LeaderId, string> = { pd: 'Pongchai D.', nrd: 'Nipada R. D.', va: 'Varanya A.' };

// Add students here as { name: { en, th }, level, topic?, institution?, photo? }.
export const students: Student[] = [];

export const studentLevels: { id: Student['level']; label: Bi }[] = [
  { id: 'phd', label: { en: 'PhD students', th: 'นิสิตปริญญาเอก' } },
  { id: 'master', label: { en: "Master's students", th: 'นิสิตปริญญาโท' } },
  { id: 'undergraduate', label: { en: 'Undergraduate students', th: 'นิสิตปริญญาตรี' } },
];

export const initials = (name: string) =>
  name
    .replace(/^(Assoc\.|Asst\.|Assist\.|Prof\.|Dr\.|Mr\.|Ms\.|Mrs\.)\s*/g, '')
    .replace(/(Assoc\.|Prof\.|Dr\.)\s*/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
