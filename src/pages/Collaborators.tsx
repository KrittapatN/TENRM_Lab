import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../lib/lang';
import SearchField from '../components/SearchField';
import { collaborators, collaboratorKinds, type CollaboratorKind } from '../data/collaborators';
import './Collaborators.css';

const norm = (s: string) => s.normalize('NFC').toLowerCase();

export default function Collaborators() {
  const { lang, tr } = useLang();
  const [q, setQ] = useState('');
  const [kind, setKind] = useState<CollaboratorKind | 'all'>('all');
  const shown = collaborators.filter(c =>
    (kind === 'all' || c.kind === kind) &&
    norm([c.name.en, c.name.th, c.unit?.en, c.unit?.th, c.country.en, c.country.th].filter(Boolean).join(' ')).includes(norm(q.trim())));

  return (
    <div className="page collab">
      <header className="page-hero container">
        <p className="eyebrow">{tr('Collaborators', 'เครือข่ายความร่วมมือ')}</p>
        <h1>{tr('Rooted in', 'เติบโตจาก')} <span className="serif-accent">{tr('collaboration', 'ความร่วมมือ')}</span></h1>
        <p className="lead">{tr('Universities, research institutes, schools, public agencies and companies we work with in Thailand and abroad.', 'มหาวิทยาลัย สถาบันวิจัย โรงเรียน หน่วยงานภาครัฐ และภาคเอกชน ที่เราร่วมงานด้วยทั้งในประเทศและต่างประเทศ')}</p>
      </header>

      <section className="container">
        <div className="collab-tools">
          <SearchField id="collab-search" value={q} onChange={setQ} label={tr('Search collaborators', 'ค้นหาเครือข่าย')} placeholder={tr('Search an institution or country…', 'ค้นหาสถาบันหรือประเทศ…')} />
          <div className="collab-kinds" role="group" aria-label={tr('Type of organisation', 'ประเภทองค์กร')}>
            <button type="button" className="chip" aria-pressed={kind === 'all'} onClick={() => setKind('all')}>{tr('All', 'ทั้งหมด')} <span className="count">{collaborators.length}</span></button>
            {collaboratorKinds.map(k => <button key={k.id} type="button" className="chip" aria-pressed={kind === k.id} onClick={() => setKind(k.id)}>{k.label[lang]} <span className="count">{collaborators.filter(c => c.kind === k.id).length}</span></button>)}
          </div>
          <p className="result-count" aria-live="polite">{tr(`${shown.length} of ${collaborators.length} collaborators`, `${shown.length} จาก ${collaborators.length} หน่วยงาน`)}</p>
        </div>

        {collaboratorKinds.map(k => {
          const list = shown.filter(c => c.kind === k.id);
          if (!list.length) return null;
          return (
            <div key={k.id} className="collab-group">
              <h2>{k.label[lang]}</h2>
              <div className="collab-grid">
                {list.map(c => (
                  <article key={c.id} className="collab-card">
                    <div className={`collab-mark${c.short.length > 3 ? ' is-long' : ''}`} aria-hidden="true">{c.short}</div>
                    <div>
                      <h3>{c.name[lang]}</h3>
                      {c.unit && <p className="collab-unit">{c.unit[lang]}</p>}
                      <p className="collab-country">{c.country[lang]}</p>
                      <div className="collab-links">{c.links.map(l => <Link key={l.to} className="tag" to={l.to}>{l.label[lang]} →</Link>)}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
        {!shown.length && <div className="empty-note"><p>{tr('No collaborators match your search.', 'ไม่พบหน่วยงานที่ตรงกับคำค้น')}</p></div>}
      </section>
    </div>
  );
}
