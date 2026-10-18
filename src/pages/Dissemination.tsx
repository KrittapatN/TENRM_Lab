import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLang } from '../lib/lang';
import SearchField from '../components/SearchField';
import SiteMap, { type MapPoint } from '../components/SiteMap';
import { outputs, outputTypes, thesisLevels, tags, sites, partners, scholarSearch, type Output } from '../data/dissemination';
import { leaders, type LeaderId } from '../data/people';
import './Dissemination.css';

const norm = (s: string) => s.normalize('NFC').toLowerCase();

const searchable = (o: Output) => norm([
  o.title, o.authors, o.venue, String(o.year ?? ''),
  ...o.tags.flatMap(t => [tags[t].en, tags[t].th]),
  ...(o.sites ?? []).flatMap(s => [sites[s].name.en, sites[s].name.th]),
  ...(o.partners ?? []).flatMap(p => [partners[p].en, partners[p].th]),
].join(' '));

export default function Dissemination() {
  const { lang, tr } = useLang();
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const type = params.get('type') ?? 'all';
  const person = params.get('person') as LeaderId | null;
  const level = params.get('level');
  const tag = params.get('tag');
  const site = params.get('site');
  const partner = params.get('partner');

  const set = (key: string, value: string | null) => {
    const next = new URLSearchParams(params);
    if (value && value !== 'all') next.set(key, value); else next.delete(key);
    if (key === 'type') next.delete('level');
    setParams(next, { replace: true });
  };

  // Everything except type/level/site, so tab counts and map pins reflect the other filters.
  const base = useMemo(() => outputs.filter(o =>
    searchable(o).includes(norm(q.trim())) &&
    (!person || o.leaders.includes(person)) &&
    (!tag || o.tags.includes(tag)) &&
    (!partner || o.partners?.includes(partner)),
  ), [q, person, tag, partner]);

  const byType = base.filter(o => (type === 'all' || o.type === type) && (!level || o.thesisLevel === level));
  const visible = byType
    .filter(o => !site || o.sites?.includes(site))
    .sort((a, b) => (a.bookKind === 'library' ? -1 : b.bookKind === 'library' ? 1 : (b.year ?? 0) - (a.year ?? 0)));

  const points: MapPoint[] = Object.entries(sites)
    .map(([id, s]) => ({ id, label: s.name[lang], lat: s.lat, lng: s.lng, count: byType.filter(o => o.sites?.includes(id)).length }))
    .filter(p => p.count > 0);

  const typeLabel = (o: Output) => {
    if (o.type === 'thesis') return thesisLevels.find(l => l.id === o.thesisLevel)?.label[lang];
    if (o.type === 'book') return o.bookKind === 'chapter' ? tr('Book chapter', 'บทในหนังสือ') : o.bookKind === 'library' ? tr('Online library', 'ห้องสมุดออนไลน์') : tr('Book', 'หนังสือ');
    return outputTypes.find(t => t.id === o.type)?.label[lang];
  };

  const active = [
    person && { key: 'person', label: leaders.find(l => l.id === person)?.name[lang] },
    tag && tags[tag] && { key: 'tag', label: tags[tag][lang] },
    site && sites[site] && { key: 'site', label: `📍 ${sites[site].name[lang]}` },
    partner && partners[partner] && { key: 'partner', label: partners[partner][lang] },
  ].filter(Boolean) as { key: string; label: string }[];

  return (
    <div className="page diss">
      <header className="page-hero container">
        <p className="eyebrow">{tr('Dissemination', 'การเผยแพร่ผลงาน')}</p>
        <h1>{tr('Research, shared', 'งานวิจัยที่')} <span className="serif-accent">{tr('widely', 'ส่งต่อ')}</span></h1>
        <p className="lead">{tr('Journal articles, conference papers, books and theses from the lab — searchable by topic, person and place.', 'บทความวารสาร การประชุมวิชาการ หนังสือ และวิทยานิพนธ์ของห้องปฏิบัติการ ค้นหาได้ตามหัวข้อ บุคคล และพื้นที่')}</p>
      </header>

      <section className="container diss-leaders" aria-label={tr('Profiles of lab leaders', 'โปรไฟล์หัวหน้าห้องปฏิบัติการ')}>
        {leaders.map(l => {
          const n = outputs.filter(o => o.leaders.includes(l.id)).length;
          return (
            <div key={l.id} className={`diss-leader${person === l.id ? ' is-active' : ''}`}>
              <button type="button" onClick={() => set('person', person === l.id ? null : l.id)} aria-pressed={person === l.id}>
                <strong>{l.name[lang]}</strong>
                <span>{n} {tr('outputs', 'รายการ')}</span>
              </button>
              <a href={l.profile.url} target="_blank" rel="noreferrer">{l.profile.label} ↗</a>
            </div>
          );
        })}
      </section>

      <section className="container diss-tools">
        <SearchField id="diss-search" value={q} onChange={v => set('q', v)} label={tr('Search outputs', 'ค้นหาผลงาน')} placeholder={tr('Search a title, author, topic or place…', 'ค้นหาชื่อเรื่อง ผู้แต่ง หัวข้อ หรือพื้นที่…')} />
        <div className="diss-tabs" role="group" aria-label={tr('Output type', 'ประเภทผลงาน')}>
          <button type="button" className="chip" aria-pressed={type === 'all'} onClick={() => set('type', 'all')}>{tr('All', 'ทั้งหมด')} <span className="count">{base.length}</span></button>
          {outputTypes.map(t => <button key={t.id} type="button" className="chip" aria-pressed={type === t.id} onClick={() => set('type', t.id)}>{t.label[lang]} <span className="count">{base.filter(o => o.type === t.id).length}</span></button>)}
        </div>
        {type === 'thesis' && (
          <div className="diss-sub" role="group" aria-label={tr('Thesis level', 'ระดับวิทยานิพนธ์')}>
            {thesisLevels.map(l => <button key={l.id} type="button" className="chip" aria-pressed={level === l.id} onClick={() => set('level', level === l.id ? null : l.id)}>{l.label[lang]} <span className="count">{base.filter(o => o.thesisLevel === l.id).length}</span></button>)}
          </div>
        )}
        <div className="diss-tags" role="group" aria-label={tr('Topic tags', 'แท็กหัวข้อ')}>
          {Object.entries(tags).map(([id, t]) => <button key={id} type="button" className={`tag-btn${tag === id ? ' is-on' : ''}`} aria-pressed={tag === id} onClick={() => set('tag', tag === id ? null : id)}>#{t[lang]}</button>)}
        </div>
        <div className="diss-status">
          <p className="result-count" aria-live="polite">{tr(`${visible.length} of ${outputs.length} outputs`, `${visible.length} จาก ${outputs.length} รายการ`)}</p>
          {active.map(a => <button key={a.key} type="button" className="chip active-filter" onClick={() => set(a.key, null)}>{a.label} <span aria-label={tr('Remove filter', 'ลบตัวกรอง')}>×</span></button>)}
          {(active.length > 0 || q || type !== 'all') && <button type="button" className="clear" onClick={() => setParams({}, { replace: true })}>{tr('Clear all', 'ล้างทั้งหมด')}</button>}
        </div>
      </section>

      <section className="container diss-body">
        <div className="diss-map">
          <SiteMap points={points} activeId={site} onSelect={id => set('site', id)} ariaLabel={tr('Map of project sites', 'แผนที่พื้นที่โครงการ')} />
          <p className="diss-map-note">{tr('Pins show study sites for the outputs listed. Select a pin to filter by place.', 'หมุดแสดงพื้นที่ศึกษาของผลงานในรายการ เลือกหมุดเพื่อกรองตามพื้นที่')}</p>
        </div>

        <ol className="diss-list">
          {visible.length === 0 && (
            <li className="empty-note">
              {type === 'thesis' && level === 'senior'
                ? <p>{tr('Senior projects will be listed here soon.', 'โครงงานวิทยาศาสตร์ระดับปริญญาตรีจะแสดงที่นี่เร็ว ๆ นี้')}</p>
                : <p>{tr('No outputs match these filters. Try another keyword or clear the filters.', 'ไม่พบผลงานที่ตรงกับตัวกรอง ลองใช้คำค้นอื่นหรือล้างตัวกรอง')}</p>}
            </li>
          )}
          {visible.map(o => (
            <li key={o.id} className={`diss-item${o.bookKind === 'library' ? ' is-library' : ''}`}>
              <div className="diss-year">{o.year ?? ''}</div>
              <div className="diss-main">
                <p className="diss-kind">{typeLabel(o)}</p>
                <h3><a href={o.url ?? scholarSearch(o.title)} target="_blank" rel="noreferrer">{o.title}</a></h3>
                <p className="diss-authors">{o.authors}</p>
                <p className="diss-venue">{o.venue}</p>
                {(o.tags.length > 0 || o.sites?.length) && (
                  <div className="diss-meta">
                    {o.tags.map(t => <button key={t} type="button" className="tag" onClick={() => set('tag', t)}>#{tags[t][lang]}</button>)}
                    {o.sites?.map(s => <button key={s} type="button" className="tag tag-site" onClick={() => set('site', s)}>📍 {sites[s].name[lang]}</button>)}
                  </div>
                )}
                {o.bookKind !== 'library' && <details className="diss-detail">
                  <summary>{tr('Details', 'รายละเอียด')}</summary>
                  <dl>
                    <dt>{tr('Lab leaders', 'หัวหน้าห้องปฏิบัติการ')}</dt>
                    <dd>{o.leaders.length ? o.leaders.map(id => leaders.find(l => l.id === id)?.name[lang]).join(', ') : '—'}</dd>
                    <dt>{tr('Project sites', 'พื้นที่โครงการ')}</dt>
                    <dd>{o.sites?.length ? o.sites.map(s => sites[s].name[lang]).join(', ') : tr('Not specified', 'ไม่ระบุ')}</dd>
                    {o.partners?.length ? <><dt>{tr('Partners', 'ภาคีความร่วมมือ')}</dt><dd>{o.partners.map(p => partners[p][lang]).join(', ')}</dd></> : null}
                  </dl>
                  <a className="text-link" href={o.url ?? scholarSearch(o.title)} target="_blank" rel="noreferrer">{o.url ? tr('Open', 'เปิด') : tr('Find on Google Scholar', 'ค้นหาใน Google Scholar')} ↗</a>
                </details>}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
