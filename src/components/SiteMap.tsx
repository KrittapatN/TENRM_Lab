import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './SiteMap.css';

export interface MapPoint {
  id: string;
  label: string;
  lat: number;
  lng: number;
  count: number;
}

interface Props {
  points: MapPoint[];
  activeId?: string | null;
  onSelect?: (id: string | null) => void;
  ariaLabel: string;
}

// Thailand, so every site is in view on first load.
const THAILAND: L.LatLngBoundsExpression = [[5.6, 97.3], [20.5, 105.7]];

export default function SiteMap({ points, activeId, onSelect, ariaLabel }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const layer = useRef<L.LayerGroup | null>(null);
  const select = useRef(onSelect);
  useEffect(() => { select.current = onSelect; });

  useEffect(() => {
    if (!el.current) return;
    const m = L.map(el.current, { scrollWheelZoom: false, zoomSnap: 0.25, attributionControl: true });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(m);
    m.fitBounds(THAILAND);
    map.current = m;
    layer.current = L.layerGroup().addTo(m);
    const ro = new ResizeObserver(() => m.invalidateSize());
    ro.observe(el.current);
    return () => { ro.disconnect(); m.remove(); map.current = null; };
  }, []);

  useEffect(() => {
    const group = layer.current;
    if (!group) return;
    group.clearLayers();
    for (const p of points) {
      const active = p.id === activeId;
      const size = Math.min(44, 26 + p.count * 2);
      const icon = L.divIcon({
        className: '',
        html: `<span class="site-pin${active ? ' is-active' : ''}" style="width:${size}px;height:${size}px">${p.count}</span>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });
      L.marker([p.lat, p.lng], { icon, title: p.label, keyboard: true, riseOnHover: true })
        .bindTooltip(p.label, { direction: 'top', offset: [0, -size / 2] })
        .on('click', () => select.current?.(active ? null : p.id))
        .addTo(group);
    }
  }, [points, activeId]);

  return <div className="site-map" ref={el} role="region" aria-label={ariaLabel} />;
}
