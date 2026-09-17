import { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import games from './content.json';
import './Games.css';

const categories = [
  { id: 'all', en: 'All games', th: 'เกมทั้งหมด' },
  { id: 'urban', en: 'Urban nature', th: 'ธรรมชาติในเมือง' },
  { id: 'forest', en: 'Forests', th: 'ป่าไม้' },
  { id: 'biodiversity', en: 'Biodiversity', th: 'ความหลากหลายทางชีวภาพ' },
  { id: 'agriculture', en: 'Agriculture', th: 'เกษตรกรรม' },
];

function GameArtwork({ category }: { category: string }) {
  return <div className={`game-art game-art-${category}`} aria-hidden="true"><div className="game-board"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div><span className="game-piece piece-one"/><span className="game-piece piece-two"/><span className="game-die">⠿</span></div>;
}

export default function Games() {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('th') ? 'th' : 'en';
  const tr = (en: string, th: string) => lang === 'th' ? th : en;
  const { slug } = useParams();
  const [params, setParams] = useSearchParams();
  const search = params.get('q') ?? '';
  const category = categories.some(c=>c.id===params.get('category')) ? params.get('category')! : 'all';
  const [guidesOnly, setGuidesOnly] = useState(false);
  const filtered = games.filter(game => {
    const searchable = [game.title.en,game.title.th,game.description.en,game.description.th,game.format.en,game.format.th].join(' ').normalize('NFC').toLowerCase();
    return searchable.includes(search.trim().normalize('NFC').toLowerCase()) && (category==='all' || game.category===category) && (!guidesOnly || game.guide);
  });
  const update = (key: string, value: string) => { const next = new URLSearchParams(params); if(value && value!=='all') next.set(key,value); else next.delete(key); setParams(next,{replace:true}); };
  const game = games.find(g=>g.slug===slug);

  return <div className="games-site"><div className="games-shell"><div className="games-topline"><Link to="/games" className="games-wordmark">TENRM<span> / GAME LIBRARY</span></Link><Link to="/adapt">ADAPT-Nan ↗</Link></div>
    {slug ? game ? <>
      <Link to="/games" className="games-back">← {tr('Back to all games','กลับสู่เกมทั้งหมด')}</Link>
      <article className="game-detail"><GameArtwork category={game.category}/><div><p className="games-kicker">{game.format[lang]} · {categories.find(c=>c.id===game.category)?.[lang]}</p><h1>{game.title[lang]}</h1><p className="games-intro">{game.description[lang]}</p><p>{tr('A physical learning game from the TENRM Lab collection. The illustrations on this website represent the collection; consult the guide for the actual components and rules.', 'เกมเพื่อการเรียนรู้จากคลังของ TENRM Lab ภาพประกอบบนเว็บไซต์ใช้สื่อถึงคลังเกม โปรดดูอุปกรณ์และกติกาจริงจากคู่มือ')}</p><h2>{tr('Learning materials','สื่อการเรียนรู้')}</h2>{game.guide ? <a className="games-button" href={`${import.meta.env.BASE_URL}games/${game.guide}`} target="_blank" rel="noreferrer">{tr('Open game guide · PDF','เปิดคู่มือเกม · PDF')} ↗</a> : <p className="games-note">{tr('A public game guide is not yet available on this website.','ยังไม่มีคู่มือเกมสำหรับเผยแพร่ในเว็บไซต์นี้')}</p>}<Link className="games-contact" to="/contact">{tr('Lab location & contact information','สถานที่ตั้งและข้อมูลติดต่อห้องปฏิบัติการ')} →</Link></div></article>
    </> : <section><h1>{tr('Game not found','ไม่พบเกม')}</h1><Link className="games-button" to="/games">{tr('Browse the game library','สำรวจคลังเกม')}</Link></section> : <>
      <header className="games-hero"><div><p className="games-kicker">{tr('PLAY · DISCUSS · DISCOVER','เล่น · แลกเปลี่ยน · ค้นพบ')}</p><h1>{tr('Big ideas.\nShared around a table.', 'เรียนรู้เรื่องใหญ่\nผ่านวงเล่นเกม')}</h1><p className="games-intro">{tr('Explore the lab’s board games, card games and simulations about biodiversity, forests, agriculture and urban nature.', 'สำรวจบอร์ดเกม การ์ดเกม และเกมจำลองสถานการณ์ของห้องปฏิบัติการ เกี่ยวกับความหลากหลายทางชีวภาพ ป่าไม้ เกษตรกรรม และธรรมชาติในเมือง')}</p><div className="games-hero-links"><a className="games-button" href="#game-catalogue">{tr('Explore the collection','สำรวจคลังเกม')} ↓</a><span>{games.length} {tr('games in the collection','เกมในคลัง')}</span></div></div><GameArtwork category="urban"/></header>
      <section id="game-catalogue" className="games-catalogue"><div className="games-section-title"><div><p className="games-kicker">{tr('THE COLLECTION','คลังเกม')}</p><h2>{tr('Find your next learning experience','ค้นหาประสบการณ์การเรียนรู้')}</h2></div><p aria-live="polite">{filtered.length} / {games.length} {tr('games','เกม')}</p></div>
        <div className="games-tools"><div className="games-search"><label htmlFor="game-search">{tr('Search the collection','ค้นหาในคลังเกม')}</label><input id="game-search" type="search" value={search} onChange={e=>update('q',e.target.value)} placeholder={tr('Search by title or topic…','ค้นหาชื่อเกมหรือหัวข้อ…')}/></div><label className="games-guide-filter"><input type="checkbox" checked={guidesOnly} onChange={e=>setGuidesOnly(e.target.checked)}/>{tr('With a downloadable guide','มีคู่มือให้ดาวน์โหลด')}</label></div>
        <div className="games-filters" role="group" aria-label={tr('Filter by topic','กรองตามหัวข้อ')}>{categories.map(c=><button key={c.id} type="button" aria-pressed={category===c.id} onClick={()=>update('category',c.id)}>{c[lang]}</button>)}</div>
        {filtered.length ? <div className="games-grid">{filtered.map((g,i)=><article className="game-card" key={g.slug}><Link to={`/games/${g.slug}`} aria-label={`${tr('Explore','สำรวจ')} ${g.title[lang]}`}><GameArtwork category={g.category}/><div className="game-card-body"><div className="game-card-meta"><span>{g.format[lang]}</span><span>{String(i+1).padStart(2,'0')}</span></div><h3>{g.title[lang]}</h3><p>{g.description[lang]}</p><div className="game-card-bottom"><span>{g.guide?tr('Guide available','มีคู่มือ'):tr('Explore game','รู้จักเกม')}</span><span aria-hidden="true">↗</span></div></div></Link></article>)}</div> : <div className="games-empty"><h3>{tr('No games match these filters','ไม่พบเกมที่ตรงกับการค้นหา')}</h3><p>{tr('Try another keyword or choose a different topic.','ลองใช้คำค้นอื่นหรือเลือกหัวข้อใหม่')}</p><button className="games-button" onClick={()=>{setParams({});setGuidesOnly(false);}}>{tr('Clear filters','ล้างตัวกรอง')}</button></div>}
      </section>
      <aside className="games-adapt-banner"><div><p className="games-kicker">ADAPT-NAN</p><h2>{tr('Where games meet agroecology','เมื่อเกมเชื่อมโยงกับนิเวศเกษตร')}</h2><p>{tr('Discover how participatory tools and experiential learning support agroecological transitions in Nan.', 'ค้นพบการใช้เครื่องมือแบบมีส่วนร่วมและการเรียนรู้จากประสบการณ์ เพื่อสนับสนุนการเปลี่ยนผ่านสู่นิเวศเกษตรในจังหวัดน่าน')}</p></div><Link className="games-button" to="/adapt">{tr('Explore ADAPT-Nan','สำรวจ ADAPT-Nan')} ↗</Link></aside>
    </>}
  </div></div>;
}
