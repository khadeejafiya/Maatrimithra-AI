import { Heart, Users, Activity, Syringe, Baby, Bell, Settings, Search, CalendarDays, AlertTriangle, ChevronRight, Plus, CheckCircle2, Clock, Phone, Globe2, Save, Stethoscope, ShieldCheck, TrendingUp } from 'lucide-react'
import { PageHeading, Notice, MotherRows } from '../components/Shared'

export default function Mothers({ mothers, filteredMothers, search, setSearch, showRegistration, setShowRegistration, addMother, newName, setNewName, newWeek, setNewWeek }) {
  const searchBox = <label className="search-box"><Search size={18} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, ward, or status..." /></label>
  return <>
    <PageHeading title="Registered Mothers" subtitle="Search, review, and add pregnancy records." action={<button className="primary-button" onClick={() => setShowRegistration(v => !v)}><Plus size={17} /> Register mother</button>} />
    {showRegistration && <form className="panel registration-form" onSubmit={addMother}><h2>Register a mother</h2><p className="form-help">New entries are held in this browser session until you connect a database.</p><div className="form-grid"><label>Mother's name<input required value={newName} onChange={e => setNewName(e.target.value)} placeholder="Enter name" /></label><label>Pregnancy week<input type="number" min="1" max="42" value={newWeek} onChange={e => setNewWeek(e.target.value)} required /></label></div><div className="form-actions"><button type="button" className="secondary-button" onClick={() => setShowRegistration(false)}>Cancel</button><button className="primary-button" type="submit"><Plus size={16} /> Add record</button></div></form>}
    <section className="panel"><div className="panel-heading"><div><h2>Mother records</h2><p>{mothers.length} registered records</p></div><span className="soft-pill"><Users size={14} /> ASHA worker view</span></div>{searchBox}<MotherRows rows={filteredMothers} /><Notice>Patient information should be stored only in a secure, authorised healthcare system.</Notice></section>
  </>
}
