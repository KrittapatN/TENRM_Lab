import type { Bi } from '../lib/lang';
import type { Site } from './dissemination';

export interface Activity {
  id: string;
  title: Bi;
  place?: Bi;
  site?: string;
  /** Short description; leave undefined until the lab supplies one. */
  summary?: Bi;
  items?: Bi[];
  links?: { label: Bi; to: string; external?: boolean }[];
}

export interface EngagementGroup {
  id: string;
  title: Bi;
  intro: Bi;
  activities: Activity[];
}

export const engagementSites: Record<string, Site> = {
  nan: { name: { en: 'Nan Province', th: 'จังหวัดน่าน' }, lat: 18.7756, lng: 100.773 },
  saraburi: { name: { en: 'Saraburi Province', th: 'จังหวัดสระบุรี' }, lat: 14.5289, lng: 100.9101 },
  khaokhiao: { name: { en: 'Khao Khiao, Chon Buri', th: 'เขาเขียว ชลบุรี' }, lat: 13.215, lng: 101.055 },
  samaesan: { name: { en: 'Ko Samae San, Chon Buri', th: 'เกาะแสมสาร ชลบุรี' }, lat: 12.575, lng: 100.948 },
  bedo: { name: { en: 'BEDO, Bangkok', th: 'สพภ. กรุงเทพมหานคร' }, lat: 13.885, lng: 100.565 },
  mfu: { name: { en: 'Mae Fah Luang University, Chiang Rai', th: 'มหาวิทยาลัยแม่ฟ้าหลวง เชียงราย' }, lat: 20.045, lng: 99.894 },
};

// Structure from the website brief. Descriptions, photos and media links
// will be added as the lab supplies them.
export const engagementGroups: EngagementGroup[] = [
  {
    id: 'steam',
    title: { en: 'STEAM EDU', th: 'STEAM EDU' },
    intro: { en: 'Science, technology, engineering, arts and mathematics learning with young people in the places they live.', th: 'การเรียนรู้แบบสะเต็มศึกษาและศิลปะร่วมกับเยาวชนในพื้นที่ของพวกเขาเอง' },
    activities: [
      {
        id: 'steam-nan', title: { en: 'La-on Nan', th: 'ละอ่อนน่าน' }, site: 'nan',
        links: [
          { label: { en: 'ADAPT-Nan project', th: 'โครงการ ADAPT-Nan' }, to: '/adapt' },
          { label: { en: 'Learning games', th: 'เกมเพื่อการเรียนรู้' }, to: '/games' },
        ],
      },
      { id: 'steam-saraburi', title: { en: 'Saraburi Youth', th: 'เยาวชนสระบุรี' }, site: 'saraburi' },
    ],
  },
  {
    id: 'carbon',
    title: { en: 'Carbon School (CSE)', th: 'Carbon School (CSE)' },
    intro: { en: 'A course on carbon and climate for schools, organised as a sequence of lessons.', th: 'หลักสูตรเรื่องคาร์บอนและสภาพภูมิอากาศสำหรับโรงเรียน จัดเป็นบทเรียนต่อเนื่อง' },
    activities: [
      { id: 'carbon-course', title: { en: 'Course', th: 'หลักสูตร' }, items: [] },
    ],
  },
  {
    id: 'training',
    title: { en: 'Training', th: 'การฝึกอบรม' },
    intro: { en: 'Field-based training in forest and coastal ecosystems.', th: 'การฝึกอบรมภาคสนามในระบบนิเวศป่าไม้และชายฝั่ง' },
    activities: [
      { id: 'training-khaokhiao', title: { en: 'Khao Khiao', th: 'เขาเขียว' }, site: 'khaokhiao' },
      { id: 'training-samaesan', title: { en: 'Ko Samae San', th: 'เกาะแสมสาร' }, site: 'samaesan' },
    ],
  },
  {
    id: 'service',
    title: { en: 'Academic service', th: 'บริการวิชาการ' },
    intro: { en: 'Expertise in ecology and natural resource management for public agencies, companies and universities.', th: 'ความเชี่ยวชาญด้านนิเวศวิทยาและการจัดการทรัพยากรธรรมชาติสำหรับหน่วยงานรัฐ ภาคเอกชน และมหาวิทยาลัย' },
    activities: [
      { id: 'service-bedo', title: { en: 'BEDO', th: 'สพภ. (BEDO)' }, place: { en: 'Biodiversity-Based Economy Development Office', th: 'สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ' }, site: 'bedo' },
      { id: 'service-michelin', title: { en: 'Michelin', th: 'มิชลิน' }, place: { en: 'Private sector', th: 'ภาคเอกชน' } },
      { id: 'service-mfu', title: { en: 'MFU', th: 'มฟล.' }, place: { en: 'Mae Fah Luang University', th: 'มหาวิทยาลัยแม่ฟ้าหลวง' }, site: 'mfu' },
      { id: 'service-other', title: { en: 'And more', th: 'และหน่วยงานอื่น ๆ' } },
    ],
  },
  {
    id: 'impact',
    title: { en: 'Social impact', th: 'ผลกระทบทางสังคม' },
    intro: { en: 'Photos and media coverage from our work with communities.', th: 'ภาพและสื่อจากการทำงานร่วมกับชุมชน' },
    activities: [
      { id: 'impact-photos', title: { en: 'Photos', th: 'รูปภาพ' } },
      { id: 'impact-media', title: { en: 'Media', th: 'สื่อ' } },
    ],
  },
];
