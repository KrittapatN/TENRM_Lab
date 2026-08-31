export interface Project {
  id: number;
  title: string;
  title_th: string;
  description: string;
  description_th: string;
  content?: string;
  content_th?: string;
  status: 'Ongoing' | 'Completed';
}

export const researchProjects: Project[] = [
  {
    id: 1,
    title: 'Biodiversity Monitoring in Tropical Rainforests',
    title_th: 'การตรวจสอบความหลากหลายทางชีวภาพในป่าฝนเขตร้อน',
    description: 'Using advanced sensing and AI to track species diversity and ecosystem health in tropical regions.',
    description_th: 'การใช้การตรวจจับขั้นสูงและ AI เพื่อติดตามความหลากหลายของสายพันธุ์และสุขภาพของระบบนิเวศในภูมิภาคเขตร้อน',
    content: 'This project utilizes a network of acoustic sensors and camera traps deployed across the Amazon basin. We are developing machine learning algorithms to automatically identify species and monitor population trends in real-time, providing critical data for conservation efforts.',
    content_th: 'โครงการนี้ใช้เครือข่ายเซนเซอร์เสียงและกับดักกล้องที่ติดตั้งทั่วลุ่มน้ำอเมซอน เรากำลังพัฒนาอัลกอริทึมการเรียนรู้ของเครื่องเพื่อระบุสายพันธุ์โดยอัตโนมัติและติดตามแนวโน้มของประชากรในเวลาจริง ซึ่งให้ข้อมูลที่สำคัญสำหรับความพยายามในการอนุรักษ์',
    status: 'Ongoing',
  },
  {
    id: 2,
    title: 'Impact of Climate Change on Coral Reef Ecosystems',
    title_th: 'ผลกระทบของการเปลี่ยนแปลงสภาพภูมิอากาศต่อระบบนิเวศแนวปะการัง',
    description: 'Long-term studies on the resilience of tropical reefs to rising temperatures and ocean acidification.',
    description_th: 'การศึกษาระยะยาวเกี่ยวกับความยืดหยุ่นของแนวปะการังเขตร้อนต่ออุณหภูมิที่สูงขึ้นและการเป็นกรดของมหาสมุทร',
    content: 'Our research focuses on the physiological responses of key coral species to thermal stress. We are mapping reef health using high-resolution satellite imagery and conducting underwater surveys to understand the long-term impacts of bleaching events on marine biodiversity.',
    content_th: 'การวิจัยของเรามุ่งเน้นไปที่การตอบสนองทางสรีรวิทยาของสายพันธุ์ปะการังที่สำคัญต่อความเครียดจากความร้อน เรากำลังจัดทำแผนที่สุขภาพของแนวปะการังโดยใช้ภาพถ่ายดาวเทียมความละเอียดสูงและดำเนินการสำรวจใต้น้ำเพื่อทำความเข้าใจผลกระทบระยะยาวของเหตุการณ์ปะการังฟอกขาวต่อความหลากหลายทางชีวภาพทางทะเล',
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'Sustainable Forest Management and Carbon Sequestration',
    title_th: 'การจัดการป่าไม้ที่ยั่งยืนและการกักเก็บคาร์บอน',
    description: 'Investigating the role of tropical forests in global carbon cycles and developing sustainable harvesting models.',
    description_th: 'การตรวจสอบบทบาทของป่าเขตร้อนในวัฏจักรคาร์บอนทั่วโลกและการพัฒนารูปแบบการเก็บเกี่ยวที่ยั่งยืน',
    content: 'By combining ground-based measurements with LIDAR data, we are quantifying the carbon storage capacity of tropical forests. This research aims to develop sustainable logging practices that minimize carbon emissions and preserve ecosystem services while supporting local economies.',
    content_th: 'ด้วยการผสมผสานการวัดภาคพื้นดินเข้ากับข้อมูล LIDAR เรากำลังหาปริมาณความสามารถในการกักเก็บคาร์บอนของป่าเขตร้อน การวิจัยนี้มีวัตถุประสงค์เพื่อพัฒนาแนวทางปฏิบัติในการทำไม้ที่ยั่งยืนซึ่งช่วยลดการปล่อยคาร์บอนและรักษาบริการของระบบนิเวศในขณะที่สนับสนุนเศรษฐกิจในท้องถิ่น',
    status: 'Completed',
  },
];
