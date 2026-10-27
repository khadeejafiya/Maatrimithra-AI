import { useMemo, useState } from 'react'
import { LayoutDashboard, Users, Syringe, Baby, Bell, Settings, Search, CalendarDays, Menu, X, ChevronRight, CircleHelp, ExternalLink } from 'lucide-react'
import './App.css'
import { Brand } from './components/Shared'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Mothers from './pages/Mothers'
import Vaccination from './pages/Vaccination'
import BabyCare from './pages/BabyCare'
import Notifications from './pages/Notifications'
import SettingsPage from './pages/Settings'

const initialMothers = [
  { id: 1, name: 'Anjali Nair', week: 24, status: 'Normal', visit: '20 Oct 2026', village: 'North Ward' },
  { id: 2, name: 'Meera S', week: 32, status: 'High Risk', visit: '17 Oct 2026', village: 'Market Ward' },
  { id: 3, name: 'Lakshmi R', week: 18, status: 'Normal', visit: '22 Oct 2026', village: 'East Ward' },
  { id: 4, name: 'Divya Thomas', week: 28, status: 'Normal', visit: '19 Oct 2026', village: 'Church Ward' },
]
const navigation = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Registered Mothers', icon: Users },
  { label: 'Vaccination Alerts', icon: Syringe },
  { label: 'Postpartum & Baby Care', icon: Baby },
  { label: 'Notifications', icon: Bell },
  { label: 'Settings', icon: Settings },
]

export default function App() {
  const [view, setView] = useState('landing')
  const [active, setActive] = useState('Dashboard')
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [mothers, setMothers] = useState(initialMothers)
  const [showRegistration, setShowRegistration] = useState(false)
  const [newName, setNewName] = useState('')
  const [newWeek, setNewWeek] = useState('12')
  const [language, setLanguage] = useState('English')
  const [reminders, setReminders] = useState(true)
  const [highRiskAlerts, setHighRiskAlerts] = useState(true)
  const [savedSettings, setSavedSettings] = useState(false)
  const [completed, setCompleted] = useState([])
  const [readNotifications, setReadNotifications] = useState([])
  const filteredMothers = useMemo(() => mothers.filter(m => `${m.name} ${m.village} ${m.status}`.toLowerCase().includes(search.toLowerCase())), [mothers, search])
  const go = label => { setActive(label); setMenuOpen(false); setSearch('') }
  const addMother = e => { e.preventDefault(); if (!newName.trim()) return; setMothers(prev => [...prev, { id: Date.now(), name: newName.trim(), week: Number(newWeek), status: 'Needs review', visit: 'Not scheduled', village: 'Ward not entered' }]); setNewName(''); setNewWeek('12'); setShowRegistration(false) }
  if (view === 'landing') {
  return (
    <Home
      onNavigate={(id) => {
        if (id === 'home') {
          setView('landing');
        } else {
          const pageNames = {
            dashboard: 'Dashboard',
            mothers: 'Registered Mothers',
            vaccination: 'Vaccination Alerts',
            babyCare: 'Postpartum & Baby Care',
            notifications: 'Notifications',
            settings: 'Settings',
          };

          setActive(pageNames[id] || 'Dashboard');
          setView('dashboard');
        }
      }}
    />
  );
}
  const topDate = <div className="date-chip"><CalendarDays size={17} /> 16 October 2026</div>
  const pageContent = {
    Dashboard: <Dashboard mothers={mothers} completed={completed} filteredMothers={filteredMothers} search={search} setSearch={setSearch} go={go} />,
    'Registered Mothers': <Mothers mothers={mothers} filteredMothers={filteredMothers} search={search} setSearch={setSearch} showRegistration={showRegistration} setShowRegistration={setShowRegistration} addMother={addMother} newName={newName} setNewName={setNewName} newWeek={newWeek} setNewWeek={setNewWeek} />,
    'Vaccination Alerts': <Vaccination completed={completed} setCompleted={setCompleted} />,
    'Postpartum & Baby Care': <BabyCare />,
    Notifications: <Notifications readNotifications={readNotifications} setReadNotifications={setReadNotifications} />,
    Settings: <SettingsPage language={language} setLanguage={setLanguage} reminders={reminders} setReminders={setReminders} highRiskAlerts={highRiskAlerts} setHighRiskAlerts={setHighRiskAlerts} savedSettings={savedSettings} setSavedSettings={setSavedSettings} />
  }
  return <div className="app-shell">
    <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-brand-wrap"><Brand /><button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button></div>
      <div className="role-label">HEALTHCARE SERVICES</div>
      <nav>{navigation.map(({ label, icon: Icon }) => <button key={label} className={`nav-item ${active === label ? 'active' : ''}`} onClick={() => go(label)}><Icon size={19} /><span>{label}</span>{label === 'Vaccination Alerts' && <span className="nav-count">{3 - completed.length}</span>}</button>)}</nav>
      <div className="sidebar-help"><div className="help-icon"><CircleHelp size={18} /></div><strong>Need assistance?</strong><p>Contact your healthcare supervisor for support.</p></div>
      <div className="sidebar-footer"><div className="profile-avatar">AS</div><div><strong>ASHA Worker</strong><span>Healthcare Team</span></div><button className="footer-settings" onClick={() => go('Settings')} aria-label="Open settings"><Settings size={17} /></button></div>
    </aside>
    {menuOpen && <button className="overlay" onClick={() => setMenuOpen(false)} aria-label="Close navigation" />}
    <main className="main-area">
      <header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button><div className="breadcrumb"><button onClick={() => setView('landing')}>Home</button><ChevronRight size={15} /><strong>{active}</strong></div><div className="topbar-actions">{topDate}<button className="icon-button" onClick={() => go('Notifications')} aria-label="Notifications"><Bell size={19} />{3 - readNotifications.length > 0 && <span className="notification-dot" />}</button><button className="top-avatar" onClick={() => go('Settings')} aria-label="Open profile settings">AS</button></div></header>
      <section className="page-content">
        {active === 'Dashboard' && <div className="welcome-row"><div><p className="eyebrow">HEALTHCARE SERVICES &amp; ADMINISTRATION</p><h1>Good morning!</h1><p className="subtitle">Here is an overview of your maternal healthcare activities.</p></div></div>}
        {pageContent[active]}
        <footer className="page-footer"><span>MaatriMithra AI · Supporting maternal and infant care</span><button onClick={() => setView('landing')}>Back to home <ExternalLink size={14} /></button></footer>
      </section>
    </main>
  </div>
}
