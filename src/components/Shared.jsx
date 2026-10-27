import { Heart, AlertTriangle } from 'lucide-react'
import './Brand.css'
import logo from "../assets/maatritmithra-logo.png";

export function Brand() {
  return (
    <div className="brand">
      <img
        src={logo}
        alt="MaatriMithra logo"
        className="brand-logo"
      />
    </div>
  );
}

export function PageHeading({ title, subtitle, action }) {
  return <div className="section-title-row"><div><p className="eyebrow">HEALTHCARE SERVICES & ADMINISTRATION</p><h1>{title}</h1><p className="subtitle">{subtitle}</p></div>{action}</div>
}
export function Notice({ children = 'Please confirm care decisions with a qualified healthcare professional.' }) {
  return <div className="notice"><AlertTriangle size={16} />{children}</div>
}
export function MotherRows({ rows }) {
  if (!rows.length) return <p className="empty-state">No matching records found.</p>
  return <div className="mother-list">{rows.map(m => <div className="mother-row" key={m.id}><div className="mother-avatar">{m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</div><div className="mother-info"><strong>{m.name}</strong><span>{m.week} weeks pregnant · {m.village}</span></div><span className={`status ${m.status === 'High Risk' ? 'status-risk' : m.status === 'Normal' ? 'status-normal' : 'status-review'}`}>{m.status}</span><div className="visit-date">Next visit: {m.visit}</div></div>)}</div>
}
