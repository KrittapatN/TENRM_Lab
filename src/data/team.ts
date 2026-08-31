export interface TeamMember {
  id: number;
  name: string;
  name_th: string;
  role: string;
  role_th: string;
  category: 'Head' | 'PhD' | 'Master' | 'Bachelor' | 'Alumni';
  bio: string;
  bio_th: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. John Smith',
    name_th: 'ดร. จอห์น สมิธ',
    role: 'Lab Director & Professor',
    role_th: 'ผู้อำนวยการห้องปฏิบัติการและศาสตราจารย์',
    category: 'Head',
    bio: 'Dr. Smith has over 20 years of experience in tropical ecology and natural resource management.',
    bio_th: 'ดร. สมิธ มีประสบการณ์มากกว่า 20 ปีในด้านนิเวศวิทยาเขตร้อนและการจัดการทรัพยากรธรรมชาติ',
  },
  {
    id: 2,
    name: 'Jane Doe',
    name_th: 'เจน โด',
    role: 'PhD Candidate',
    role_th: 'นักศึกษาปริญญาเอก',
    category: 'PhD',
    bio: 'Researching biodiversity conservation in tropical wetlands.',
    bio_th: 'กำลังวิจัยเกี่ยวกับการอนุรักษ์ความหลากหลายทางชีวภาพในพื้นที่ชุ่มน้ำเขตร้อน',
  },
  {
    id: 3,
    name: 'Michael Brown',
    name_th: 'ไมเคิล บราวน์',
    role: 'Master Student',
    role_th: 'นักศึกษาปริญญาโท',
    category: 'Master',
    bio: 'Focusing on ecological restoration models in degraded tropical lands.',
    bio_th: 'มุ่งเน้นไปที่รูปแบบการฟื้นฟูระบบนิเวศในพื้นที่เขตร้อนที่เสื่อมโทรม',
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    name_th: 'ซาร่าห์ วิลสัน',
    role: 'Bachelor Student',
    role_th: 'นักศึกษาปริญญาตรี',
    category: 'Bachelor',
    bio: 'Assisting in field studies for rainforest canopy research.',
    bio_th: 'ช่วยงานวิจัยภาคสนามสำหรับการวิจัยเรือนยอดป่าฝน',
  },
  {
    id: 5,
    name: 'David Lee',
    role: 'Former PhD Student',
    name_th: 'เดวิด ลี',
    role_th: 'อดีตนักศึกษาปริญญาเอก',
    category: 'Alumni',
    bio: 'Now a Senior Ecologist at Tropical Conservation International.',
    bio_th: 'ปัจจุบันเป็นนักนิเวศวิทยาอาวุโสที่ Tropical Conservation International',
  },
];
