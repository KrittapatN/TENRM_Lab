import { Link } from 'react-router-dom';
import { useLang } from '../lib/lang';
import Landscape from '../components/Landscape';
import { heroPhoto, studentLife } from '../data/home';
import { outputs, sites } from '../data/dissemination';
import { leaders } from '../data/people';
import games from '../features/games/content.json';
import './Home.css';

const pillarIcons = {
  field: <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4c-6 5-8 11-5 17 1.2 2.4 3 4 5 5 2-1 3.8-2.6 5-5 3-6 1-12-5-17Z" /><path d="M16 9v19" /></svg>,
  model: <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="8" cy="9" r="3.5" /><circle cx="24" cy="9" r="3.5" /><circle cx="16" cy="23" r="3.5" /><path d="M11 10.5 13.5 20M21 10.5 18.5 20M11.5 9h9" /></svg>,
  people: <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="10" cy="11" r="3.5" /><circle cx="22" cy="11" r="3.5" /><path d="M3.5 25c1-5 3.5-7.5 6.5-7.5s5.5 2.5 6.5 7.5M15.5 25c1-5 3.5-7.5 6.5-7.5s5.5 2.5 6.5 7.5" /></svg>,
};

export default function Home() {
  const { lang, tr } = useLang();
  const count = (tag: string) => outputs.filter(o => o.tags.includes(tag)).length;

  const pillars = [
    { icon: pillarIcons.field, title: tr('Field ecology', 'นิเวศวิทยาภาคสนาม'), sub: tr('Evidence from tropical ecosystems', 'หลักฐานจากระบบนิเวศเขตร้อน') },
    { icon: pillarIcons.model, title: tr('Participatory modelling', 'แบบจำลองแบบมีส่วนร่วม'), sub: tr('Knowledge created together', 'ความรู้ที่สร้างร่วมกัน') },
    { icon: pillarIcons.people, title: tr('Social engagement', 'พันธกิจเพื่อสังคม'), sub: tr('Learning with communities', 'เรียนรู้ไปกับชุมชน') },
  ];

  const themes = [
    { tag: 'commod', scene: 'people' as const, title: tr('Companion modelling & games', 'แบบจำลองเพื่อนร่วมทางและเกม'), body: tr('Role-playing games and agent-based models that help farmers, foresters and agencies negotiate how land and resources are shared.', 'เกมบทบาทสมมติและแบบจำลองเชิงตัวแทน ที่ช่วยให้เกษตรกร เจ้าหน้าที่ป่าไม้ และหน่วยงานต่าง ๆ เจรจาการใช้ที่ดินและทรัพยากรร่วมกัน') },
    { tag: 'forest', scene: 'forest' as const, title: tr('Forests & biodiversity', 'ป่าไม้และความหลากหลายทางชีวภาพ'), body: tr('Forest restoration, soil fungi, birds and reptiles — how tropical biodiversity responds to disturbance and recovery.', 'การฟื้นฟูป่า ราในดิน นก และสัตว์เลื้อยคลาน — ความหลากหลายทางชีวภาพเขตร้อนตอบสนองต่อการรบกวนและการฟื้นตัวอย่างไร') },
    { tag: 'urban', scene: 'city' as const, title: tr('Urban & farming landscapes', 'ภูมิทัศน์เมืองและเกษตรกรรม'), body: tr('Green roofs and city parks, agroecology and pest control — making everyday landscapes work for nature and people.', 'หลังคาเขียวและสวนสาธารณะ นิเวศเกษตรและการควบคุมศัตรูพืช — ทำให้ภูมิทัศน์รอบตัวเอื้อต่อทั้งธรรมชาติและผู้คน') },
  ];

  const stats = [
    { value: outputs.filter(o => o.bookKind !== 'library').length, label: tr('Publications & theses', 'ผลงานตีพิมพ์และวิทยานิพนธ์') },
    { value: Object.keys(sites).length, label: tr('Study sites on the map', 'พื้นที่ศึกษาบนแผนที่') },
    { value: games.length, label: tr('Learning games', 'เกมเพื่อการเรียนรู้') },
    { value: leaders.length, label: tr('Lab leaders', 'หัวหน้าห้องปฏิบัติการ') },
  ];

  const explore = [
    { to: '/academic', title: tr('Academic', 'วิชาการ'), body: tr('Courses taught by the lab', 'รายวิชาที่ห้องปฏิบัติการสอน') },
    { to: '/engagement', title: tr('Social engagement', 'พันธกิจเพื่อสังคม'), body: tr('STEAM education, training and academic service', 'สะเต็มศึกษา การฝึกอบรม และบริการวิชาการ') },
    { to: '/collaborators', title: tr('Collaborators', 'เครือข่ายความร่วมมือ'), body: tr('Universities, schools and agencies we work with', 'มหาวิทยาลัย โรงเรียน และหน่วยงานที่ทำงานร่วมกัน') },
    { to: '/team', title: tr('Team', 'ทีมงาน'), body: tr('Lab leaders and students', 'หัวหน้าห้องปฏิบัติการและนิสิต') },
  ];

  return (
    <div className="page home">
      <header className="home-hero">
        <div className="home-hero-text">
          <p className="eyebrow">{tr('Chulalongkorn University · Bangkok', 'จุฬาลงกรณ์มหาวิทยาลัย · กรุงเทพฯ')}</p>
          <h1>
            {tr('Tropical ecology,', 'นิเวศวิทยาเขตร้อน')}<br />
            {tr('managed', 'จัดการ')} <span className="serif-accent">{tr('together.', 'ร่วมกัน')}</span>
          </h1>
          <p className="home-hero-lead">{tr('Tropical Ecology and Natural Resource Management Laboratory — connecting field science, local knowledge and the next generation.', 'ห้องปฏิบัติการนิเวศวิทยาเขตร้อนและการจัดการทรัพยากรธรรมชาติ — เชื่อมโยงวิทยาศาสตร์ภาคสนาม ภูมิปัญญาท้องถิ่น และคนรุ่นใหม่')}</p>
          <div className="home-actions">
            <Link className="btn btn-primary" to="/dissemination">{tr('Explore our work', 'สำรวจผลงาน')} <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" to="/team">{tr('Meet the team', 'รู้จักทีมงาน')} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <figure className="home-hero-media">
          <Landscape scene="valley" photo={heroPhoto} alt={tr('Rice fields and forested hills', 'ทุ่งนาและเนินเขาที่มีป่าปกคลุม')} />
          <span className="home-hero-pill">{tr('Thailand', 'ประเทศไทย')}</span>
          <figcaption>{tr('Forests, farms, coasts and cities', 'ป่า ไร่นา ชายฝั่ง และเมือง')}</figcaption>
        </figure>
      </header>

      <div className="home-pillars tinted">
        <div className="container home-pillars-grid">
          {pillars.map(p => <div key={p.title} className="home-pillar">{p.icon}<div><strong>{p.title}</strong><span>{p.sub}</span></div></div>)}
        </div>
      </div>

      <section className="container home-about">
        <p className="eyebrow">{tr('About TENRM', 'เกี่ยวกับ TENRM')}</p>
        <div className="home-about-grid">
          <h2>{tr('Ecology that people can use', 'นิเวศวิทยาที่ผู้คนนำไปใช้ได้')}</h2>
          <div>
            <p>{tr(
              'The Tropical Ecology and Natural Resource Management (TENRM) Lab is part of the Department of Biology, Faculty of Science, Chulalongkorn University. We study how tropical ecosystems — forests, farmland, coasts and cities — change, and how people can manage them together.',
              'ห้องปฏิบัติการนิเวศวิทยาเขตร้อนและการจัดการทรัพยากรธรรมชาติ (TENRM Lab) สังกัดภาควิชาชีววิทยา คณะวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เราศึกษาการเปลี่ยนแปลงของระบบนิเวศเขตร้อน ทั้งป่าไม้ พื้นที่เกษตร ชายฝั่ง และเมือง รวมถึงแนวทางที่ผู้คนจะร่วมกันจัดการทรัพยากรเหล่านั้น')}</p>
            <p>{tr(
              'Our work combines field ecology with participatory approaches such as companion modelling, role-playing games and agent-based simulation, so that researchers, farmers, students and local agencies can learn from one another and design more sustainable futures.',
              'งานของเราผสานนิเวศวิทยาภาคสนามเข้ากับกระบวนการมีส่วนร่วม เช่น การสร้างแบบจำลองเพื่อนร่วมทาง เกมบทบาทสมมติ และแบบจำลองเชิงตัวแทน เพื่อให้นักวิจัย เกษตรกร นักเรียน และหน่วยงานท้องถิ่นได้เรียนรู้ร่วมกันและออกแบบอนาคตที่ยั่งยืนไปด้วยกัน')}</p>
          </div>
        </div>
        <dl className="home-stats">
          {stats.map(s => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}
        </dl>
      </section>

      <section className="home-themes">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">{tr('Our research', 'งานวิจัยของเรา')}</p><h2>{tr('Understanding the land,', 'เข้าใจผืนดิน')}<br />{tr('supporting the people', 'สนับสนุนผู้คน')}</h2></div>
            <p>{tr('Three connected themes run through our publications, theses and fieldwork.', 'สามประเด็นที่เชื่อมโยงกันในผลงานตีพิมพ์ วิทยานิพนธ์ และงานภาคสนามของเรา')}</p>
          </div>
          <div className="home-theme-grid">
            {themes.map((t, i) => (
              <Link key={t.tag} to={`/dissemination?tag=${t.tag}`} className="home-theme">
                <Landscape scene={t.scene} alt="" />
                <p className="home-theme-num">0{i + 1} / {tr('Research theme', 'ประเด็นวิจัย')}</p>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
                <span className="text-link">{tr(`Explore ${count(t.tag)} outputs`, `ดูผลงาน ${count(t.tag)} รายการ`)} <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container home-life">
        <div className="section-head">
          <div><p className="eyebrow">{tr('Student life', 'ชีวิตนิสิต')}</p><h2>{tr('Life in the lab', 'ชีวิตในห้องปฏิบัติการ')}</h2></div>
          <p>{tr('From forest plots and coral coasts to village workshops — learning happens wherever the questions are.', 'จากแปลงศึกษาในป่าและชายฝั่ง ไปจนถึงเวิร์กช็อปในหมู่บ้าน — การเรียนรู้เกิดขึ้นทุกที่ที่มีคำถาม')}</p>
        </div>
        <div className="home-life-grid">
          {studentLife.map(item => (
            <figure key={item.caption.en}>
              <Landscape scene={item.scene} photo={item.photo} alt={item.caption[lang]} />
              <figcaption>{item.caption[lang]}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="home-explore tinted">
        <div className="container">
          <p className="eyebrow">{tr('Explore', 'สำรวจ')}</p>
          <div className="home-explore-grid">
            {explore.map(e => <Link key={e.to} to={e.to}><strong>{e.title}</strong><span>{e.body}</span><span className="arrow" aria-hidden="true">→</span></Link>)}
          </div>
        </div>
      </section>
    </div>
  );
}
