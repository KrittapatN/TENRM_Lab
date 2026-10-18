interface Props {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}

export default function SearchField({ id, value, onChange, placeholder, label }: Props) {
  return (
    <div className="search-field">
      <label htmlFor={id} className="visually-hidden">{label}</label>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
      <input id={id} type="search" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} autoComplete="off" />
    </div>
  );
}
