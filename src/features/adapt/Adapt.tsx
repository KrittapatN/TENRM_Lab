import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import content from './content.json';
import './Adapt.css';

type Language = 'en' | 'th';
const asset = (name: string) => `${import.meta.env.BASE_URL}adapt/${name}`;
const text = (lang: Language, en: string, th: string) => lang === 'th' ? th : en;
const themes = [
  { en: 'Agrarian change', th: 'การเปลี่ยนแปลงสังคมเกษตร', detail: { en: 'Landscapes, livelihoods and biodiversity in transition.', th: 'ภูมิทัศน์ วิถีชีวิต และความหลากหลายทางชีวภาพที่เปลี่ยนแปลง' } },
  { en: 'Social engagement', th: 'การมีส่วนร่วมทางสังคม', detail: { en: 'Learning with farmers, local networks and young people.', th: 'เรียนรู้ร่วมกับเกษตรกร เครือข่ายท้องถิ่น และเยาวชน' } },
  { en: 'Agroecology emergence', th: 'การก่อเกิดนิเวศเกษตร', detail: { en: 'Connecting learning spaces, practices and movements.', th: 'เชื่อมโยงพื้นที่เรียนรู้ แนวปฏิบัติ และขบวนการทางสังคม' } },
];

function Overview({ lang }: { lang: Language }) {
  return <>
    <header className="adapt-hero">
      <div>
        <p className="adapt-eyebrow">NAN, THAILAND · {text(lang, 'RESEARCH & LEARNING', 'วิจัยและเรียนรู้')}</p>
        <h1>{text(lang, 'Growing knowledge.\nCultivating change.', 'เรียนรู้ร่วมกัน\nสร้างการเปลี่ยนแปลง')}</h1>
        <p className="adapt-hero-intro">{text(lang, 'Advancing Development of Agroecology in Nan Province in Thailand', 'การพัฒนาระบบนิเวศเกษตรในจังหวัดน่าน ประเทศไทย')}</p>
        <p>{text(lang, 'Connecting research, education and community knowledge to support agroecological transitions.', 'เชื่อมโยงงานวิจัย การศึกษา และภูมิปัญญาชุมชน เพื่อสนับสนุนการเปลี่ยนผ่านสู่นิเวศเกษตร')}</p>
        <div className="adapt-actions"><Link className="adapt-button" to="/adapt/research">{text(lang, 'Explore our research', 'สำรวจงานวิจัย')} <span aria-hidden="true">↗</span></Link><Link className="adapt-text-link" to="/adapt/curriculum">{text(lang, 'Learn with us', 'เรียนรู้ไปด้วยกัน')} →</Link></div>
      </div>
      <div className="adapt-identity"><img src={asset('logo.png')} alt="ADAPT-Nan" width="228" height="279" /><p>{text(lang, 'Science · Practice · Community', 'วิทยาศาสตร์ · การปฏิบัติ · ชุมชน')}</p></div>
    </header>
    <section className="adapt-section">
      <div className="adapt-section-heading"><div><p className="adapt-eyebrow">{text(lang, 'AT A GLANCE', 'รู้จักโครงการ')}</p><h2>{text(lang, 'A shared future for farming', 'ร่วมสร้างอนาคตของเกษตรกรรม')}</h2></div><Link className="adapt-text-link" to="/adapt/about">{text(lang, 'About the project', 'เกี่ยวกับโครงการ')} →</Link></div>
      <p className="adapt-lead">{text(lang, 'ADAPT-Nan supports a transition from monocropping and intensive chemical use to diverse farming systems. Participatory research and experiential learning bring teachers, students, farmers and researchers together.', 'ADAPT-Nan สนับสนุนการเปลี่ยนผ่านจากเกษตรเชิงเดี่ยวและการใช้สารเคมีเข้มข้น สู่ระบบเกษตรที่หลากหลาย ผ่านการวิจัยแบบมีส่วนร่วมและการเรียนรู้จากประสบการณ์ร่วมกันของครู นักเรียน เกษตรกร และนักวิจัย')}</p>
      <div className="adapt-pillars">{[
        [text(lang,'Higher education','อุดมศึกษา'),text(lang,'Connect scientific theory with immersive field learning in Nan.','เชื่อมโยงทฤษฎีทางวิทยาศาสตร์กับการเรียนรู้ภาคสนามในจังหวัดน่าน')],
        [text(lang,'Secondary schools','มัธยมศึกษา'),text(lang,'Explore agroecology through games, workshops and farm visits.','เรียนรู้นิเวศเกษตรผ่านเกม เวิร์กช็อป และการเยี่ยมชมฟาร์ม')],
        [text(lang,'Farmers & communities','เกษตรกรและชุมชน'),text(lang,'Share local knowledge and support organic farming networks.','แลกเปลี่ยนภูมิปัญญาท้องถิ่นและสนับสนุนเครือข่ายเกษตรอินทรีย์')],
      ].map(([title, body], i) => <article key={title}><span className="adapt-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>
    <section className="adapt-section adapt-tint"><p className="adapt-eyebrow">{text(lang, 'OUR RESEARCH', 'งานวิจัยของเรา')}</p><h2>{text(lang, 'Three connected perspectives', 'สามมุมมองที่เชื่อมโยงกัน')}</h2><div className="adapt-theme-grid">{themes.map((theme, i) => <Link to={`/adapt/research#theme-${i + 1}`} className="adapt-theme" key={theme.en}><span className="adapt-number">0{i + 1} <span aria-hidden="true">↗</span></span><h3>{theme[lang]}</h3><p>{theme.detail[lang]}</p><span className="adapt-text-link">{text(lang,'Explore theme','สำรวจประเด็น')} →</span></Link>)}</div></section>
    <section className="adapt-section adapt-partners"><p className="adapt-eyebrow">{text(lang,'COLLABORATIVE PARTNERSHIP','เครือข่ายความร่วมมือ')}</p><h2>{text(lang, 'Rooted in collaboration', 'เติบโตจากความร่วมมือ')}</h2><img src={asset('partners.png')} alt={text(lang,'Partner and supporting institutions shown in the ADAPT-Nan project document','สถาบันพันธมิตรและผู้สนับสนุนตามเอกสารโครงการ ADAPT-Nan')} width="1364" height="311" loading="lazy" /><Link className="adapt-text-link" to="/adapt/contacts">{text(lang, 'Meet the project team', 'รู้จักทีมโครงการ')} →</Link></section>
  </>;
}

function About({ lang }: { lang: Language }) {
  return <section className="adapt-section"><p className="adapt-eyebrow">ADAPT-NAN</p><h1>{text(lang, 'About the project', 'เกี่ยวกับโครงการ')}</h1><div className="adapt-prose">
    <p className="adapt-lead">{text(lang, 'Participatory research and transformative teaching in support of agroecology actors in Nan province, Thailand.', 'การวิจัยแบบมีส่วนร่วมและการเรียนรู้ที่สร้างการเปลี่ยนแปลง เพื่อสนับสนุนผู้ขับเคลื่อนนิเวศเกษตรในจังหวัดน่าน ประเทศไทย')}</p>
    <h2>{text(lang,'Why this work matters','ความสำคัญของโครงการ')}</h2><p>{text(lang,'An ageing farming population, environmental pressures and the challenge of passing knowledge between generations call for new ways of learning. ADAPT-Nan brings scientific and local knowledge together so that young people and farming communities can explore alternatives to intensive monocropping.', 'สังคมเกษตรที่สูงวัยขึ้น แรงกดดันด้านสิ่งแวดล้อม และความท้าทายในการส่งต่อความรู้ระหว่างรุ่น ทำให้จำเป็นต้องพัฒนารูปแบบการเรียนรู้ใหม่ ADAPT-Nan เชื่อมโยงความรู้ทางวิทยาศาสตร์กับภูมิปัญญาท้องถิ่น เพื่อให้เยาวชนและชุมชนเกษตรได้ร่วมสำรวจทางเลือกจากเกษตรเชิงเดี่ยวเข้มข้น')}</p>
    <h2>{text(lang,'Our intentions','เป้าหมายการเปลี่ยนแปลง')}</h2><p>{text(lang,'The project supports diversified systems that integrate crops, trees and livestock, with examples including rice, vegetables, tea, cocoa, coffee and herbs. Food sovereignty, food security, ecosystem health and quality of life guide this transition.', 'โครงการสนับสนุนระบบเกษตรที่หลากหลายและผสมผสานพืช ไม้ยืนต้น และปศุสัตว์ เช่น ข้าว ผัก ชา โกโก้ กาแฟ และสมุนไพร โดยให้ความสำคัญกับอธิปไตยทางอาหาร ความมั่นคงทางอาหาร สุขภาวะของระบบนิเวศ และคุณภาพชีวิต')}</p>
    <h2>{text(lang,'Environmental challenges','ความท้าทายด้านสิ่งแวดล้อม')}</h2><ul>{[
      text(lang,'Climate change mitigation and adaptation','การลดผลกระทบและการปรับตัวต่อการเปลี่ยนแปลงสภาพภูมิอากาศ'),
      text(lang,'Water management, drought and flooding','การจัดการน้ำ ภัยแล้ง และน้ำท่วม'),
      text(lang,'Biomass burning, haze and PM 2.5','การเผาชีวมวล หมอกควัน และฝุ่น PM 2.5'),
      text(lang,'Biodiversity, forests and ecosystem health','ความหลากหลายทางชีวภาพ ป่าไม้ และสุขภาวะของระบบนิเวศ'),
      text(lang,'Agricultural chemical use and safe food systems','การใช้สารเคมีทางการเกษตรและระบบอาหารปลอดภัย'),
    ].map(s => <li key={s}>{s}</li>)}</ul>
    <h2>{text(lang,'How we work','แนวทางดำเนินงาน')}</h2><p>{text(lang,'Direct observation, interviews, focus groups and role-play games create opportunities for knowledge co-production. Teachers and university researchers co-design and test experiential modules with students. Farmer networks contribute practical knowledge, while field activities connect systems thinking with community priorities.', 'การสังเกตโดยตรง การสัมภาษณ์ กลุ่มสนทนา และเกมบทบาทสมมติ เปิดพื้นที่ให้เกิดการสร้างความรู้ร่วมกัน ครูและนักวิจัยร่วมออกแบบและทดลองกิจกรรมกับนักเรียน เครือข่ายเกษตรกรร่วมแบ่งปันความรู้จากการปฏิบัติ และกิจกรรมภาคสนามเชื่อมโยงการคิดเชิงระบบกับความต้องการของชุมชน')}</p>
    <h2>{text(lang,'Learning that can be shared','การเรียนรู้ที่ส่งต่อได้')}</h2><p>{text(lang,'The architecture sets out teaching materials, serious games, recorded learning modules and an online manual as project outputs. The resource library will make approved materials available to teachers, trainers and other agroecology initiatives.', 'โครงสร้างโครงการกำหนดผลผลิตด้านสื่อการสอน เกมเพื่อการเรียนรู้ บทเรียนบันทึกวิดีโอ และคู่มือออนไลน์ เพื่อให้ครู วิทยากร และโครงการนิเวศเกษตรอื่น ๆ สามารถนำสื่อที่พร้อมเผยแพร่ไปใช้ต่อได้')}</p>
    <Link className="adapt-button" to="/adapt/resources">{text(lang,'Explore resources','สำรวจแหล่งเรียนรู้')} →</Link>
  </div></section>;
}

function Research({ lang }: { lang: Language }) {
  return <section className="adapt-section"><p className="adapt-eyebrow">{text(lang,'SCIENCE IN CONTEXT','วิทยาศาสตร์กับพื้นที่')}</p><h1>{text(lang,'Research','งานวิจัย')}</h1><p className="adapt-lead">{text(lang,'Nine lines of inquiry connect changing landscapes, community engagement and the emergence of agroecology in Nan.', 'เก้าประเด็นการศึกษาที่เชื่อมโยงภูมิทัศน์ที่เปลี่ยนแปลง การมีส่วนร่วมของชุมชน และการก่อเกิดนิเวศเกษตรในจังหวัดน่าน')}</p>
    {themes.map((theme,i) => <section className="adapt-research-group" key={theme.en} id={`theme-${i+1}`}><div className="adapt-group-title"><span className="adapt-number">0{i+1}</span><h2>{theme[lang]}</h2><p>{theme.detail[lang]}</p></div><div>{content.topics.filter(t => t.id.startsWith(`${i+1}.`)).map(topic => <details className="adapt-topic" key={topic.id}><summary><span>{topic.id}</span><h3>{topic.title[lang]}</h3><span className="adapt-expand" aria-hidden="true">+</span></summary><div className="adapt-topic-body">{lang==='th' ? <><p>{topic.summary.th}</p><details className="adapt-original"><summary>อ่านรายละเอียดต้นฉบับภาษาอังกฤษ</summary><div lang="en">{topic.paragraphs.map((p,j)=><p key={j}>{p}</p>)}</div></details></> : topic.paragraphs.map((p,j)=><p key={j}>{p}</p>)}</div></details>)}</div></section>)}
  </section>;
}

function Curriculum({ lang, track }: { lang: Language; track?: 'high-school' | 'university' }) {
  return <section className="adapt-section"><p className="adapt-eyebrow">{text(lang,'EXPERIENTIAL EDUCATION','การศึกษาผ่านประสบการณ์')}</p><h1>{text(lang,'Learning beyond the classroom','เรียนรู้นอกห้องเรียน')}</h1><p className="adapt-lead">{text(lang,'Connect agroecological principles with the experience of farmers and communities in Nan.', 'เชื่อมโยงหลักการนิเวศเกษตรกับประสบการณ์ของเกษตรกรและชุมชนในจังหวัดน่าน')}</p>
    <div className="adapt-track-nav"><NavLink to="/adapt/curriculum/high-school">{text(lang,'High school','มัธยมปลาย')}</NavLink><NavLink to="/adapt/curriculum/university">{text(lang,'University BSc','ระดับปริญญาตรี')}</NavLink></div>
    {(!track || track==='high-school') && <article className="adapt-course"><p className="adapt-eyebrow">01 / {text(lang,'HIGH SCHOOL','มัธยมปลาย')}</p><h2>{text(lang,'Safe vegetables & agroecology','ผักปลอดภัยและนิเวศเกษตร')}</h2><p>{text(lang,'A learning pathway co-developed by university researchers and high school teachers. Practical workshops, simulation games and farm visits help students investigate food systems and socio-ecological issues.', 'แนวทางการเรียนรู้ที่พัฒนาร่วมกันระหว่างนักวิจัยมหาวิทยาลัยและครูมัธยม กิจกรรมเชิงปฏิบัติการ เกมจำลองสถานการณ์ และการเยี่ยมชมฟาร์ม ช่วยให้นักเรียนสำรวจระบบอาหารและประเด็นทางสังคมและนิเวศวิทยา')}</p><div className="adapt-learning-flow"><span>{text(lang,'Explore food systems','สำรวจระบบอาหาร')}</span><span>{text(lang,'Learn through games','เรียนรู้ผ่านเกม')}</span><span>{text(lang,'Reflect with communities','สะท้อนการเรียนรู้ร่วมกับชุมชน')}</span></div><Link className="adapt-text-link" to="/games">{text(lang,'Browse learning games','สำรวจเกมเพื่อการเรียนรู้')} →</Link></article>}
    {(!track || track==='university') && <article className="adapt-course"><p className="adapt-eyebrow">02 / {text(lang,'UNIVERSITY BSc','ระดับปริญญาตรี')}</p><h2>{text(lang,'Agroecology in the field','นิเวศเกษตรในพื้นที่จริง')}</h2><p>{text(lang,'The proposed curriculum combines online preparation with an intensive field block in Nan. Students connect agroecology foundations, sustainable practices, systems thinking and community solutions through experiential learning.', 'โครงสร้างหลักสูตรที่เสนอผสมผสานการเตรียมตัวออนไลน์กับการเรียนรู้ภาคสนามในจังหวัดน่าน โดยเชื่อมโยงพื้นฐานนิเวศเกษตร แนวปฏิบัติที่ยั่งยืน การคิดเชิงระบบ และแนวทางแก้ปัญหาของชุมชน ผ่านการเรียนรู้จากประสบการณ์')}</p><div className="adapt-course-facts"><span>45 {text(lang,'hours','ชั่วโมง')}</span><span>3 {text(lang,'credits','หน่วยกิต')}</span><span>16 {text(lang,'hours online','ชั่วโมงออนไลน์')}</span><span>29 {text(lang,'hours in Nan','ชั่วโมงภาคสนามในน่าน')}</span></div><figure><a href={asset('curriculum.png')} target="_blank" rel="noreferrer"><img src={asset('curriculum.png')} alt={text(lang,'Curriculum architecture: 16 hours of online preparation and 29 hours of field learning in Nan','โครงสร้างหลักสูตร: เตรียมตัวออนไลน์ 16 ชั่วโมง และเรียนรู้ภาคสนามในน่าน 29 ชั่วโมง')} width="1376" height="739" loading="lazy" /></a><figcaption>{text(lang,'Curriculum architecture from the project document. Select the diagram to view it at full size.','แผนภาพโครงสร้างหลักสูตรจากเอกสารโครงการ กดที่ภาพเพื่อดูขนาดเต็ม')}</figcaption></figure></article>}
    <p className="adapt-availability">{text(lang,'Full course documents, teaching videos and enrolment details have not yet been published here.', 'เอกสารหลักสูตรฉบับเต็ม วิดีโอการสอน และรายละเอียดการสมัครยังไม่ได้เผยแพร่ในเว็บไซต์นี้')}</p>
  </section>;
}

function Resources({ lang }: { lang: Language }) {
  return <section className="adapt-section"><p className="adapt-eyebrow">{text(lang,'KNOWLEDGE TO SHARE','ความรู้เพื่อแบ่งปัน')}</p><h1>{text(lang,'Resources & project outputs','แหล่งเรียนรู้และผลผลิตโครงการ')}</h1><p className="adapt-lead">{text(lang,'Explore tools for participatory learning and follow the development of the project’s publication and video collections.', 'สำรวจเครื่องมือสำหรับการเรียนรู้แบบมีส่วนร่วม และติดตามคลังสิ่งพิมพ์และวิดีโอของโครงการ')}</p><div className="adapt-theme-grid">
    <article className="adapt-theme"><span className="adapt-number">01</span><h2>{text(lang,'Game repository','คลังเกม')}</h2><p>{text(lang,'Browse the TENRM Lab catalogue of board and card games, with available learning materials.', 'สำรวจบอร์ดเกมและการ์ดเกมของ TENRM Lab พร้อมสื่อการเรียนรู้ที่มีให้ใช้งาน')}</p><Link className="adapt-button" to="/games">{text(lang,'Explore games','สำรวจเกม')} →</Link></article>
    <article className="adapt-theme"><span className="adapt-number">02</span><h2>{text(lang,'Paper library','คลังสิ่งพิมพ์')}</h2><p>{text(lang,'A dedicated collection of ADAPT-Nan research papers and reports.', 'แหล่งรวบรวมบทความวิจัยและรายงานของ ADAPT-Nan')}</p><span className="adapt-availability">{text(lang,'Publications will be added when available.','จะเพิ่มสิ่งพิมพ์เมื่อพร้อมเผยแพร่')}</span></article>
    <article className="adapt-theme"><span className="adapt-number">03</span><h2>{text(lang,'Video learning','วิดีโอเพื่อการเรียนรู้')}</h2><p>{text(lang,'Recorded training modules and participatory learning activities.', 'บทเรียนฝึกอบรมและกิจกรรมการเรียนรู้แบบมีส่วนร่วมในรูปแบบวิดีโอ')}</p><span className="adapt-availability">{text(lang,'The official video channel will be linked here.','จะเพิ่มลิงก์ช่องวิดีโอทางการที่นี่')}</span></article>
  </div></section>;
}

function Contacts({ lang }: { lang: Language }) {
  const institutions = [...new Set(content.members.map(m=>m.institution.en))];
  return <section className="adapt-section"><p className="adapt-eyebrow">{text(lang,'PEOPLE & PARTNERS','ผู้คนและเครือข่าย')}</p><h1>{text(lang,'Working together in Nan','ร่วมทำงานในจังหวัดน่าน')}</h1><p className="adapt-lead">{text(lang,'Meet the project team across universities, schools and research institutions.', 'รู้จักทีมโครงการจากมหาวิทยาลัย โรงเรียน และสถาบันวิจัย')}</p><div className="adapt-office"><h2>{text(lang,'Project locations','สถานที่ดำเนินงาน')}</h2><p>{text(lang,'Faculty of Science, Chulalongkorn University · Bangkok\nChulalongkorn University Center for Social Engagement · Nan', 'คณะวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย · กรุงเทพฯ\nศูนย์พันธกิจเพื่อสังคม จุฬาลงกรณ์มหาวิทยาลัย · น่าน')}</p><Link className="adapt-text-link" to="/contact">{text(lang,'Lab location & contact information','สถานที่ตั้งและข้อมูลติดต่อห้องปฏิบัติการ')} →</Link></div>
    {institutions.map(institution=>{const members=content.members.filter(m=>m.institution.en===institution);return <div className="adapt-institution" key={institution}><h2>{members[0].institution[lang]}</h2><ul className="adapt-people">{members.map(m=><li key={m.id}><span className="adapt-person-index">{String(m.id).padStart(2,'0')}</span><div><h3>{m.name[lang]}</h3>{m.department[lang] && <p>{m.department[lang]}</p>}</div></li>)}</ul></div>;})}
  </section>;
}

export default function Adapt() {
  const { i18n } = useTranslation();
  const lang: Language = i18n.language.startsWith('th') ? 'th' : 'en';
  const tabs = [['','Overview','ภาพรวม'],['about','About','เกี่ยวกับ'],['research','Research','งานวิจัย'],['curriculum','Curriculum','หลักสูตร'],['resources','Resources','แหล่งเรียนรู้'],['contacts','People & contact','ทีมและการติดต่อ']];
  return <div className="adapt-site"><div className="adapt-shell"><div className="adapt-topline"><Link className="adapt-wordmark" to="/adapt">ADAPT<span>-Nan</span></Link><span>{text(lang,'Agroecology through shared learning','นิเวศเกษตรผ่านการเรียนรู้ร่วมกัน')}</span></div><nav className="adapt-navigation" aria-label={text(lang,'ADAPT navigation','เมนู ADAPT')}>{tabs.map(([path,en,th])=><NavLink key={path} to={`/adapt${path?`/${path}`:''}`} end={!path}>{text(lang,en,th)}</NavLink>)}</nav><Routes>
    <Route index element={<Overview lang={lang}/>} /><Route path="about" element={<About lang={lang}/>} /><Route path="research" element={<Research lang={lang}/>} /><Route path="curriculum" element={<Curriculum lang={lang}/>} /><Route path="curriculum/high-school" element={<Curriculum lang={lang} track="high-school"/>} /><Route path="curriculum/university" element={<Curriculum lang={lang} track="university"/>} /><Route path="resources" element={<Resources lang={lang}/>} /><Route path="contacts" element={<Contacts lang={lang}/>} /><Route path="*" element={<section className="adapt-section"><h1>{text(lang,'Page not found','ไม่พบหน้าเว็บ')}</h1><Link to="/adapt" className="adapt-button">{text(lang,'Back to ADAPT-Nan','กลับสู่ ADAPT-Nan')}</Link></section>}/>
  </Routes><div className="adapt-footnote">ADAPT-Nan · {text(lang,'Advancing Development of Agroecology in Nan Province in Thailand','การพัฒนาระบบนิเวศเกษตรในจังหวัดน่าน ประเทศไทย')}</div></div></div>;
}
