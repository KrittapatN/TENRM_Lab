import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/lang';
import SiteMap, { type MapPoint } from '../components/SiteMap';
import { engagementGroups, engagementSites } from '../data/engagement';
import './Engagement.css';

export default function Engagement() {
  const { lang, tr } = useLang();
  const [site, setSite] = useState<string | null>(null);
  const all = engagementGroups.flatMap(g => g.activities);

  const points: MapPoint[] = Object.entries(engagementSites)
    .map(([id, s]) => ({ id, label: s.name[lang], lat: s.lat, lng: s.lng, count: all.filter(a => a.site === id).length }))
    .filter(p => p.count > 0);

  const pending = tr('Details and photos coming soon.', 'รายละเอียดและภาพกิจกรรมจะเพิ่มเร็ว ๆ นี้');

  return (
    <div className="page engage">
      <header className="page-hero container">
        <p className="eyebrow">{tr('Social engagement', 'พันธกิจเพื่อสังคม')}</p>
        <h1>{tr('Science that', 'วิทยาศาสตร์ที่')} <span className="serif-accent">{tr('meets people', 'พบผู้คน')}</span></h1>
        <p className="lead">{tr('Education programmes, field training and academic service with schools, communities, agencies and companies.', 'โครงการการศึกษา การฝึกอบรมภาคสนาม และบริการวิชาการร่วมกับโรงเรียน ชุมชน หน่วยงานรัฐ และภาคเอกชน')}</p>
        <nav className="engage-jump" aria-label={tr('Sections', 'หมวด')}>
          {engagementGroups.map(g => <a key={g.id} href={`#${g.id}`} className="chip">{g.title[lang]}</a>)}
        </nav>
      </header>

      <section className="container engage-layout">
        <div className="engage-groups">
          {engagementGroups.map((g, i) => (
            <section key={g.id} id={g.id} className="engage-group">
              <div className="engage-group-head">
                <span className="engage-num">0{i + 1}</span>
                <div><h2>{g.title[lang]}</h2><p>{g.intro[lang]}</p></div>
              </div>
              <div className="engage-cards">
                {g.activities.map(a => (
                  <article key={a.id} className={`engage-card${a.site && a.site === site ? ' is-active' : ''}`}>
                    <h3>{a.title[lang]}</h3>
                    {a.place && <p className="engage-place">{a.place[lang]}</p>}
                    {a.site && (
                      <button type="button" className="tag tag-site engage-pin" onClick={() => setSite(site === a.site ? null : a.site!)} aria-pressed={site === a.site}>
                        📍 {engagementSites[a.site].name[lang]}
                      </button>
                    )}
                    {a.summary ? <p>{a.summary[lang]}</p> : a.items ? (
                      a.items.length
                        ? <ol className="engage-lessons">{a.items.map(it => <li key={it.en}>{it[lang]}</li>)}</ol>
                        : <p className="engage-pending">{tr('Lessons will be listed here.', 'รายการบทเรียนจะแสดงที่นี่')}</p>
                    ) : <p className="engage-pending">{pending}</p>}
                    {a.links && <div className="engage-links">{a.links.map(l => <Link key={l.to} className="text-link" to={l.to}>{l.label[lang]} →</Link>)}</div>}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        <aside className="engage-map">
          <SiteMap points={points} activeId={site} onSelect={setSite} ariaLabel={tr('Map of engagement sites', 'แผนที่พื้นที่กิจกรรม')} />
          <p className="diss-map-note">{site ? <>{engagementSites[site].name[lang]} · <button type="button" className="clear" onClick={() => setSite(null)}>{tr('Show all', 'แสดงทั้งหมด')}</button></> : tr('Select a pin to highlight the activities there.', 'เลือกหมุดเพื่อเน้นกิจกรรมในพื้นที่นั้น')}</p>
        </aside>
      </section>
    </div>
  );
}
