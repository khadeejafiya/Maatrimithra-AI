import {
  LayoutDashboard,
  Users,
  Syringe,
  Baby,
  Bell,
  Settings,
  HeartHandshake,
  ChevronRight,
  Activity,
} from 'lucide-react'
import { Brand } from '../components/Shared'
import './Home.css'

const navigation = [
  { id: 'dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { id: 'mothers', label: 'Registered Mothers', Icon: Users },
  { id: 'vaccination', label: 'Vaccination Alerts', Icon: Syringe },
  { id: 'babyCare', label: 'Postpartum & Baby Care', Icon: Baby },
  { id: 'notifications', label: 'Notifications', Icon: Bell },
  { id: 'settings', label: 'Settings', Icon: Settings },
]

const quickAccess = [
  { id: 'dashboard', title: 'Dashboard', description: 'View overview & key information', Icon: LayoutDashboard, color: 'green' },
  { id: 'mothers', title: 'Registered Mothers', description: 'Manage mother records', Icon: Users, color: 'purple' },
  { id: 'vaccination', title: 'Vaccination Alerts', description: 'Track due vaccinations', Icon: Syringe, color: 'pink' },
  { id: 'babyCare', title: 'Postpartum & Baby Care', description: 'Follow-up & care plans', Icon: Baby, color: 'orange' },
  { id: 'notifications', title: 'Notifications', description: 'View recent alerts', Icon: Bell, color: 'blue' },
  { id: 'settings', title: 'Settings', description: 'Personalize your app', Icon: Settings, color: 'teal' },
]

export default function Home({ onNavigate }) {
  const navigate = (id) => onNavigate?.(id)

  return (
    <div className="asha-home">
      <header className="asha-home-header">
        <button className="asha-home-brand-button" onClick={() => navigate('home')} aria-label="MaatriMithra home">
          <Brand />
        </button>
        <nav className="asha-home-nav" aria-label="Main navigation">
          {navigation.map(({ id, label, Icon }) => (
            <button
              key={id}
              className={`asha-home-nav-link ${id === 'dashboard' ? 'is-current' : ''}`}
              onClick={() => navigate(id)}
            >
              <Icon size={19} strokeWidth={1.9} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section className="asha-home-hero">
          <div className="asha-home-copy">
            <p className="asha-home-kicker"><span className="asha-kicker-dot" />CARE THAT CONNECTS</p>
            <h1>Better maternal care begins with every <span>ASHA worker.</span></h1>
            <div className="asha-home-message">
              <div className="asha-home-message-icon"><HeartHandshake size={35} strokeWidth={1.8} /></div>
              <div>
                <strong>Every mother. Every milestone.</strong>
                <p>Connected maternal and child healthcare support.</p>
              </div>
            </div>
          </div>
          <div className="asha-home-art" aria-label="ASHA worker visiting a mother and baby">
            <img src="/asha-hero-crop.png" alt="An ASHA worker in a blue uniform supporting a mother holding her baby" />
          </div>
        </section>

        <section className="asha-quick-access" aria-labelledby="quick-access-title">
          <div className="asha-quick-heading">
            <Activity size={24} strokeWidth={2.2} />
            <div>
              <h2 id="quick-access-title">Quick Access</h2>
              <p>Manage your maternal and child healthcare services.</p>
            </div>
          </div>
          <div className="asha-quick-grid">
            {quickAccess.map(({ id, title, description, Icon, color }) => (
              <button className="asha-quick-card" key={id} onClick={() => navigate(id)}>
                <span className={`asha-quick-icon ${color}`}><Icon size={27} strokeWidth={2} /></span>
                <span className="asha-quick-card-copy"><strong>{title}</strong><small>{description}</small></span>
                <ChevronRight className="asha-quick-arrow" size={19} />
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
