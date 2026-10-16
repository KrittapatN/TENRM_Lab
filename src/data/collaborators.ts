import type { Bi } from '../lib/lang';

export type CollaboratorKind = 'university' | 'research' | 'school' | 'public' | 'private';

export interface Collaborator {
  id: string;
  /** Acronym shown in the badge. */
  short: string;
  name: Bi;
  unit?: Bi;
  country: Bi;
  kind: CollaboratorKind;
  /** Where the collaboration shows up on this website. */
  links: { label: Bi; to: string }[];
}

export const collaboratorKinds: { id: CollaboratorKind; label: Bi }[] = [
  { id: 'university', label: { en: 'Universities', th: 'มหาวิทยาลัย' } },
  { id: 'research', label: { en: 'Research institutes', th: 'สถาบันวิจัย' } },
  { id: 'school', label: { en: 'Schools & colleges', th: 'โรงเรียนและวิทยาลัย' } },
  { id: 'public', label: { en: 'Public agencies', th: 'หน่วยงานภาครัฐ' } },
  { id: 'private', label: { en: 'Private sector', th: 'ภาคเอกชน' } },
];

const thailand: Bi = { en: 'Thailand', th: 'ประเทศไทย' };
const france: Bi = { en: 'France', th: 'ประเทศฝรั่งเศส' };
const adapt = { label: { en: 'ADAPT-Nan', th: 'ADAPT-Nan' }, to: '/adapt/contacts' };
const service = { label: { en: 'Academic service', th: 'บริการวิชาการ' }, to: '/engagement#service' };

// Built from the ADAPT-Nan partner list, the academic-service partners in the
// website brief, and co-authoring institutions in the publication list.
export const collaborators: Collaborator[] = [
  { id: 'ird', short: 'IRD', name: { en: 'IRD – French National Research Institute for Sustainable Development', th: 'สถาบันวิจัยแห่งชาติฝรั่งเศสเพื่อการพัฒนาที่ยั่งยืน (IRD)' }, country: france, kind: 'research', links: [adapt] },
  { id: 'cirad', short: 'CIRAD', name: { en: 'CIRAD – French Agricultural Research Centre for International Development', th: 'CIRAD – ศูนย์วิจัยการเกษตรเพื่อการพัฒนาระหว่างประเทศ' }, country: france, kind: 'research', links: [{ label: { en: 'Co-authored publications', th: 'ผลงานตีพิมพ์ร่วม' }, to: '/dissemination?partner=cirad' }] },
  { id: 'cu-agri', short: 'CU', name: { en: 'Chulalongkorn University', th: 'จุฬาลงกรณ์มหาวิทยาลัย' }, unit: { en: 'Faculty of Integrated Agriculture', th: 'คณะเกษตรบูรณาการ' }, country: thailand, kind: 'university', links: [adapt] },
  { id: 'cu-cse', short: 'CU', name: { en: 'Chulalongkorn University', th: 'จุฬาลงกรณ์มหาวิทยาลัย' }, unit: { en: 'Center of Social Engagement, Nan', th: 'ศูนย์พันธกิจเพื่อสังคม จังหวัดน่าน' }, country: thailand, kind: 'university', links: [adapt] },
  { id: 'ku', short: 'KU', name: { en: 'Kasetsart University', th: 'มหาวิทยาลัยเกษตรศาสตร์' }, unit: { en: 'Faculties of Agriculture, Economics and Social Sciences', th: 'คณะเกษตร คณะเศรษฐศาสตร์ และคณะสังคมศาสตร์' }, country: thailand, kind: 'university', links: [adapt] },
  { id: 'rmutl', short: 'RMUTL', name: { en: 'Rajamangala University of Technology Lanna Nan', th: 'มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา น่าน' }, country: thailand, kind: 'university', links: [adapt] },
  { id: 'mfu', short: 'MFU', name: { en: 'Mae Fah Luang University', th: 'มหาวิทยาลัยแม่ฟ้าหลวง' }, country: thailand, kind: 'university', links: [service] },
  { id: 'ncc', short: 'NCC', name: { en: 'Nan Community College', th: 'วิทยาลัยชุมชนน่าน' }, country: thailand, kind: 'school', links: [adapt] },
  { id: 'sattha', short: 'SSR', name: { en: 'Sattha Sila Phet Rangsan School', th: 'โรงเรียนศรัทธาศิลาเพชรรังสรรค์' }, country: thailand, kind: 'school', links: [adapt] },
  { id: 'sa', short: 'SA', name: { en: 'Sa School', th: 'โรงเรียนสา' }, country: thailand, kind: 'school', links: [adapt] },
  { id: 'bedo', short: 'BEDO', name: { en: 'Biodiversity-Based Economy Development Office (BEDO)', th: 'สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ (องค์การมหาชน)' }, country: thailand, kind: 'public', links: [service] },
  { id: 'michelin', short: 'MIC', name: { en: 'Michelin', th: 'มิชลิน' }, country: france, kind: 'private', links: [service] },
];
