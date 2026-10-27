import { Heart, Users, Activity, Syringe, Baby, Bell, Settings, Search, CalendarDays, AlertTriangle, ChevronRight, Plus, CheckCircle2, Clock, Phone, Globe2, Save, Stethoscope, ShieldCheck, TrendingUp } from 'lucide-react'
import { PageHeading, Notice, MotherRows } from '../components/Shared'

export default function Vaccination({ completed, setCompleted }) {
 const vaccineItems = [
 { id: 1, name: 'Meera S', detail: 'Antenatal follow-up reminder', due: '17 Oct 2026', status: 'Due soon' },
 { id: 2, name: 'Anjali Nair', detail: 'Review antenatal vaccination record', due: '20 Oct 2026', status: 'Upcoming' },
 { id: 3, name: 'Baby of Lakshmi R', detail: 'Confirm infant immunisation card', due: '24 Oct 2026', status: 'Needs review' },
 ];
  return <>
    <PageHeading title="Vaccination Alerts" subtitle="Review maternal and infant immunisation reminders." action={<span className="soft-pill"><Syringe size={15} /> {vaccineItems.length - completed.length} to review</span>} />
    <div className="summary-grid two-cards"><div className="summary-card"><div className="metric-icon orange"><Clock size={21} /></div><span className="metric-label">Due soon</span><strong>{vaccineItems.filter(v => v.status === 'Due soon' && !completed.includes(v.id)).length}</strong><span className="metric-note">Check the care record</span></div><div className="summary-card"><div className="metric-icon green"><CheckCircle2 size={21} /></div><span className="metric-label">Marked reviewed</span><strong>{completed.length}</strong><span className="metric-note">Current session status</span></div></div>
    <section className="panel"><div className="panel-heading"><div><h2>Reminder schedule</h2><p>Review each item against the official health record.</p></div></div><div className="schedule-list">{vaccineItems.map(v => <div className="schedule-row" key={v.id}><div className="schedule-icon"><Syringe size={20} /></div><div className="schedule-main"><strong>{v.name}</strong><p>{v.detail}</p><span><CalendarDays size={14} /> {v.due}</span></div><span className={`status ${v.status === 'Due soon' ? 'status-risk' : 'status-review'}`}>{completed.includes(v.id) ? 'Reviewed' : v.status}</span><button className={completed.includes(v.id) ? 'secondary-button' : 'small-action'} onClick={() => setCompleted(prev => prev.includes(v.id) ? prev.filter(id => id !== v.id) : [...prev, v.id])}>{completed.includes(v.id) ? 'Undo' : 'Mark reviewed'}</button></div>)}</div><Notice>Follow the official local immunisation schedule and clinician advice. This review status does not update a medical record.</Notice></section>
  </>
}
