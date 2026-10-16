import { Link } from 'react-router-dom';
import { useLang } from '../lib/lang';
import { courses } from '../data/courses';
import './Academic.css';

export default function Academic() {
  const { lang, tr } = useLang();
  return (
    <div className="page academic">
      <header className="page-hero container">
        <p className="eyebrow">{tr('Academic', 'วิชาการ')}</p>
        <h1>{tr('Teaching', 'การสอน')} <span className="serif-accent">{tr('& learning', 'และการเรียนรู้')}</span></h1>
        <p className="lead">{tr('Courses taught by TENRM Lab members at the Department of Biology, Faculty of Science, Chulalongkorn University.', 'รายวิชาที่สอนโดยสมาชิก TENRM Lab ภาควิชาชีววิทยา คณะวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย')}</p>
      </header>

      <section className="container">
        <div className="section-head"><div><p className="eyebrow">{tr('Courses', 'รายวิชา')}</p><h2>{tr('Course list', 'รายชื่อรายวิชา')}</h2></div></div>
        {courses.length ? (
          <div className="academic-courses">
            {courses.map(c => (
              <article key={c.title.en} className="academic-course">
                <p className="academic-code">{c.code ?? ''} {c.code && '·'} {c.level[lang]}{c.credits ? ` · ${c.credits} ${tr('credits', 'หน่วยกิต')}` : ''}</p>
                <h3>{c.title[lang]}</h3>
                {c.description && <p>{c.description[lang]}</p>}
                {c.url && <a className="text-link" href={c.url} target="_blank" rel="noreferrer">{tr('Course details', 'รายละเอียดรายวิชา')} ↗</a>}
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-note"><p>{tr('The course list will be published here soon.', 'รายชื่อรายวิชาจะเผยแพร่ที่นี่เร็ว ๆ นี้')}</p></div>
        )}
      </section>

      <section className="tinted">
        <div className="container academic-related">
          <div>
            <p className="eyebrow">{tr('Field curriculum', 'หลักสูตรภาคสนาม')}</p>
            <h2>{tr('Agroecology in the field', 'นิเวศเกษตรในพื้นที่จริง')}</h2>
            <p>{tr('A university curriculum developed with ADAPT-Nan: online preparation followed by an intensive field block in Nan Province.', 'หลักสูตรระดับมหาวิทยาลัยที่พัฒนาร่วมกับโครงการ ADAPT-Nan เตรียมตัวออนไลน์แล้วเรียนรู้ภาคสนามแบบเข้มข้นในจังหวัดน่าน')}</p>
            <Link className="btn btn-primary" to="/adapt/curriculum">{tr('View the curriculum', 'ดูหลักสูตร')} →</Link>
          </div>
          <div>
            <p className="eyebrow">{tr('Student research', 'งานวิจัยของนิสิต')}</p>
            <h2>{tr('Theses & senior projects', 'วิทยานิพนธ์และโครงงาน')}</h2>
            <p>{tr('Dissertations, theses and senior projects from the lab are listed with our other outputs.', 'ดุษฎีนิพนธ์ วิทยานิพนธ์ และโครงงานของห้องปฏิบัติการ รวบรวมไว้ในหน้าการเผยแพร่ผลงาน')}</p>
            <Link className="btn btn-ghost" to="/dissemination?type=thesis">{tr('Browse theses', 'ดูวิทยานิพนธ์')} →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
