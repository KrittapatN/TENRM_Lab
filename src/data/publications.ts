export interface Publication {
  id: number;
  title: string;
  title_th: string;
  authors: string;
  year: number;
  journal: string;
  journal_th: string;
  doi?: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: 'Ecological Modeling of Species Distribution in Tropical Forests',
    title_th: 'แบบจำลองทางนิเวศวิทยาของการกระจายพันธุ์ในป่าเขตร้อน',
    authors: 'Smith, J., & Doe, J.',
    year: 2023,
    journal: 'Journal of Tropical Ecology',
    journal_th: 'วารสารนิเวศวิทยาเขตร้อน',
    doi: '10.1000/example.2023.001',
  },
  {
    id: 2,
    title: 'Resilience of Coastal Ecosystems to Rising Sea Levels',
    title_th: 'ความยืดหยุ่นของระบบนิเวศชายฝั่งต่อระดับน้ำทะเลที่สูงขึ้น',
    authors: 'Brown, M., & Smith, J.',
    year: 2022,
    journal: 'Coastal Management Review',
    journal_th: 'วารสารการจัดการชายฝั่ง',
    doi: '10.1000/example.2022.002',
  },
  {
    id: 3,
    title: 'Sustainable Harvesting Practices in Tropical Environments',
    title_th: 'แนวทางปฏิบัติในการเก็บเกี่ยวที่ยั่งยืนในสภาพแวดล้อมเขตร้อน',
    authors: 'Wilson, S., & Doe, J.',
    year: 2021,
    journal: 'Natural Resource Management Quarterly',
    journal_th: 'วารสารการจัดการทรัพยากรธรรมชาติรายไตรมาส',
    doi: '10.1000/example.2021.003',
  },
];
