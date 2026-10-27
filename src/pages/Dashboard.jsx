import { Heart, Users, Activity, Syringe, Baby, Bell, Settings, Search, CalendarDays, AlertTriangle, ChevronRight, Plus, CheckCircle2, Clock, Phone, Globe2, Save, Stethoscope, ShieldCheck, TrendingUp } from 'lucide-react'
import { PageHeading, Notice, MotherRows } from '../components/Shared'

export default function Dashboard({ mothers, completed, filteredMothers, search, setSearch, go }) {
  const searchBox = <label className="search-box"><Search size={18} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, ward, or status..." /></label>
  return <>
    <div className="summary-grid">
      <div className="summary-card"><span className="metric-label">Registered Mothers</span><strong>{mothers.length}</strong><span className="metric-note">Records in your workspace</span></div>
      <div className="summary-card"><span className="metric-label">Assigned Mothers</span><strong>{mothers.length}</strong><span className="metric-note">Current assigned records</span></div>
      <div className="summary-card"><span className="metric-label">Vaccination Alerts</span><strong>{3 - completed.length}</strong><span className="metric-note">Items to review</span></div>
      <div className="summary-card"><span className="metric-label">Upcoming Visits</span><strong>3</strong><span className="metric-note">Scheduled follow-ups</span></div>
    </div>
    <div className="content-grid">
      <section className="panel"><div className="panel-heading"><div><h2>Assigned Mothers</h2><p>Recent pregnancy records</p></div><button className="text-button" onClick={() => go('Registered Mothers')}>View all <ChevronRight size={16} /></button></div>{searchBox}<MotherRows rows={filteredMothers.slice(0, 4)} /></section>
      <section className="panel"><div className="panel-heading"><div><h2>Attention Needed</h2><p>Follow up on these care activities</p></div><AlertTriangle size={21} className="alert-heading-icon" /></div>
        <div className="alert-item"><div><strong>High-risk follow-up</strong><p>Review the care plan with the supervising clinician.</p></div></div>
        <div className="alert-item"><div><strong>Vaccination review</strong><p>Check upcoming immunisation records.</p></div></div>
        <div className="alert-item"><div><strong>Upcoming home visits</strong><p>Confirm appointments with families.</p></div></div>
        <Notice />
      </section>
    </div>
    <section className="quick-section"><h2>Healthcare Services</h2><p>Quick access to your main responsibilities</p><div className="quick-grid">
      {[['Registered Mothers', Users, 'Mother Records', 'View and update records', 'green'], ['Vaccination Alerts', Syringe, 'Vaccination Schedule', 'Review due and upcoming items', 'orange'], ['Postpartum & Baby Care', Baby, 'Postpartum & Baby Care', 'Open care information', 'pink'], ['Settings', Settings, 'Settings', 'Manage workspace preferences', 'blue']].map(([label, Icon, title, desc, tone]) => <button className="quick-card" key={label} onClick={() => go(label)}><div className={`quick-icon ${tone}`}><Icon size={21} /></div><strong>{title}</strong><span>{desc}</span></button>)}
    </div></section>
  </>
}
