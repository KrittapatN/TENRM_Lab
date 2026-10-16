// Illustrated stand-in for photographs the lab has not supplied yet.
// Pass `photo` (a path under public/) to show the real image instead.
import { asset } from '../lib/lang';

type Scene = 'valley' | 'forest' | 'coast' | 'field' | 'city' | 'people';

interface Props {
  scene: Scene;
  photo?: string;
  alt: string;
  className?: string;
}

const palettes: Record<Scene, [string, string, string, string]> = {
  valley: ['#dfe8d2', '#a9c08a', '#6f9358', '#2b5a3e'],
  forest: ['#e3ead8', '#8fae74', '#4f7a3a', '#1d3a2a'],
  coast: ['#e2ece9', '#9cc3bb', '#5e9a8a', '#2b5a3e'],
  field: ['#f0ecd6', '#cfd59a', '#8aa65a', '#4f7a3a'],
  city: ['#e7ebe1', '#b9c7ae', '#7f9a73', '#3a5a45'],
  people: ['#ece8d8', '#c8d3aa', '#8aa65a', '#2b5a3e'],
};

export default function Landscape({ scene, photo, alt, className = '' }: Props) {
  if (photo) return <img className={`landscape ${className}`} src={asset(photo)} alt={alt} loading="lazy" />;
  const [sky, far, mid, near] = palettes[scene];
  return (
    <svg className={`landscape ${className}`} viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={alt}>
      <rect width="400" height="300" fill={sky} />
      <circle cx="300" cy="80" r="34" fill="#f3dd9a" opacity=".85" />
      <path d="M0 170 Q60 110 120 150 T250 130 T400 150 V300 H0Z" fill={far} />
      {scene === 'coast' ? (
        <>
          <path d="M0 200 H400 V300 H0Z" fill={mid} />
          <path d="M0 215 Q50 208 100 215 T200 215 T300 215 T400 215" stroke="#fff" strokeOpacity=".5" strokeWidth="2" fill="none" />
          <path d="M240 200 Q300 160 400 175 V200Z" fill={near} />
        </>
      ) : scene === 'city' ? (
        <>
          <path d="M0 200 H400 V300 H0Z" fill={mid} />
          {[30, 80, 140, 210, 270, 330].map((x, i) => <rect key={x} x={x} y={150 - (i % 3) * 25} width="40" height={150 + (i % 3) * 25} fill={near} opacity={0.75 + (i % 2) * 0.2} />)}
          {[30, 140, 270].map(x => <path key={x} d={`M${x - 6} ${150 - 2} q26 -26 52 0z`} fill="#8aa65a" />)}
        </>
      ) : (
        <>
          <path d="M0 210 Q100 160 200 200 T400 190 V300 H0Z" fill={mid} />
          {scene === 'field' || scene === 'valley'
            ? [0, 1, 2, 3, 4].map(i => <path key={i} d={`M0 ${235 + i * 14} Q200 ${222 + i * 14} 400 ${238 + i * 14}`} stroke={near} strokeOpacity=".35" strokeWidth="5" fill="none" />)
            : null}
          {(scene === 'forest' || scene === 'valley' || scene === 'people') &&
            [40, 90, 150, 300, 350].map((x, i) => <path key={x} d={`M${x} ${250 - (i % 2) * 20} l14 -46 l14 46z`} fill={near} />)}
          {scene === 'people' && [170, 205, 240].map((x, i) => (
            <g key={x} fill={near}><circle cx={x} cy={215 - (i % 2) * 6} r="9" /><path d={`M${x - 13} ${255} q13 -38 26 0z`} transform={`translate(0 ${-(i % 2) * 6})`} /></g>
          ))}
        </>
      )}
    </svg>
  );
}
