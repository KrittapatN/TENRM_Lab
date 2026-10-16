import { useState } from 'react';
import { Link } from 'react-router-dom';
import { asset, useLang } from '../lib/lang';
import SearchField from '../components/SearchField';
import { leaders, students, studentLevels, initials } from '../data/people';
import './Team.css';

const norm = (s: string) => s.normalize('NFC').toLowerCase();

function Avatar({ name, photo, size }: { name: string; photo?: string; size: 'lg' | 'sm' }) {
  return (
    <div className={`avatar avatar-${size}`} aria-hidden={!photo}>
      {photo ? <img src={asset(photo)} alt={name} /> : initials(name)}
    </div>
  );
}

export default function Team() {
  const { lang, tr } = useLang();
  const [q, setQ] = useState('');
  const query = norm(q.trim());
  const match = (...fields: (string | undefined)[]) => norm(fields.filter(Boolean).join(' ')).includes(query);

  const shownLeaders = leaders.filter(l => match(l.name.en, l.name.th, l.affiliation.en, l.affiliation.th, l.interests.en, l.interests.th));
  const shownStudents = students.filter(s => match(s.name.en, s.name.th, s.topic?.en, s.topic?.th, s.institution?.en, s.institution?.th));
  const total = leaders.length + students.length;
  const shown = shownLeaders.length + shownStudents.length;

  return (
    <div className="page team">
      <header className="page-hero container">
        <p className="eyebrow">{tr('Team', 'ทีมงาน')}</p>
        <h1>{tr('The people', 'ผู้คน')} <span className="serif-accent">{tr('behind the work', 'เบื้องหลังผลงาน')}</span></h1>
        <p className="lead">{tr('Lab leaders and the PhD, master’s and undergraduate students of TENRM Lab.', 'หัวหน้าห้องปฏิบัติการ และนิสิตปริญญาเอก ปริญญาโท และปริญญาตรีของ TENRM Lab')}</p>
      </header>

      <section className="container team-body">
        <div className="team-search">
          <SearchField id="team-search" value={q} onChange={setQ} label={tr('Search the team', 'ค้นหาสมาชิก')} placeholder={tr('Search a person or institution…', 'ค้นหาชื่อบุคคลหรือสถาบัน…')} />
          <p className="result-count" aria-live="polite">{tr(`${shown} of ${total} team members`, `${shown} จาก ${total} คน`)}</p>
        </div>

        <h2 className="team-heading">{tr('Lab leaders', 'หัวหน้าห้องปฏิบัติการ')}</h2>
        {shownLeaders.length ? (
          <div className="team-leaders">
            {shownLeaders.map(l => (
              <article key={l.id} className="leader-card">
                <Avatar name={l.name.en} photo={l.photo} size="lg" />
                <div>
                  <h3>{l.name[lang]}</h3>
                  <p className="leader-affil">{l.affiliation[lang]}</p>
                  <p className="leader-interests">{l.interests[lang]}</p>
                  <div className="leader-links">
                    <a className="text-link" href={l.profile.url} target="_blank" rel="noreferrer">{l.profile.label} ↗</a>
                    <Link className="text-link" to={`/dissemination?person=${l.id}`}>{tr('Publications', 'ผลงาน')} →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : <p className="team-none">{tr('No lab leaders match your search.', 'ไม่พบหัวหน้าห้องปฏิบัติการที่ตรงกับคำค้น')}</p>}

        {studentLevels.map(level => {
          const all = students.filter(s => s.level === level.id);
          const list = shownStudents.filter(s => s.level === level.id);
          return (
            <div key={level.id} className="team-level">
              <h2 className="team-heading">{level.label[lang]}</h2>
              {list.length ? (
                <div className="team-students">
                  {list.map(s => (
                    <article key={s.name.en} className="student-card">
                      <Avatar name={s.name.en} photo={s.photo} size="sm" />
                      <div>
                        <h3>{s.name[lang]}</h3>
                        {s.topic && <p>{s.topic[lang]}</p>}
                        {s.institution && <p>{s.institution[lang]}</p>}
                      </div>
                    </article>
                  ))}
                </div>
              ) : all.length ? (
                <p className="team-none">{tr('No one in this group matches your search.', 'ไม่พบสมาชิกในกลุ่มนี้ที่ตรงกับคำค้น')}</p>
              ) : (
                <div className="empty-note"><p>{tr('Student profiles will be added soon.', 'ข้อมูลนิสิตจะเพิ่มเร็ว ๆ นี้')}</p></div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
