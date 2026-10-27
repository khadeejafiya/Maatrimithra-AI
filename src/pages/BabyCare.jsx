import { Heart, Users, Activity, Syringe, Baby, Bell, Settings, Search, CalendarDays, AlertTriangle, ChevronRight, Plus, CheckCircle2, Clock, Phone, Globe2, Save, Stethoscope, ShieldCheck, TrendingUp } from 'lucide-react'
import { PageHeading, Notice, MotherRows } from '../components/Shared'

export default function BabyCare() {
  return <>
    <PageHeading title="Postpartum & Baby Care" subtitle="Helpful topics for postnatal follow-up and infant wellbeing." />
    <Notice>General educational information only. For urgent concerns, contact the appropriate healthcare service.</Notice>
    <div className="care-grid">
      <article className="care-card"><h2>Maternal recovery</h2><p>Check how the mother is feeling, whether follow-up visits are arranged, and whether she has support at home.</p><ul><li>Encourage prescribed follow-up visits.</li><li>Discuss rest and emotional wellbeing.</li><li>Refer urgent concerns to qualified care.</li></ul></article>
      <article className="care-card"><h2>Nutrition & hydration</h2><p>Discuss balanced meals and drinking enough fluids, following local advice and individual needs.</p><ul><li>Encourage varied, nourishing foods.</li><li>Support practical questions from families.</li><li>Refer concerns about eating or feeding.</li></ul></article>
      <article className="care-card"><h2>Newborn care</h2><p>Support families to follow guidance from their healthcare team on safe newborn care.</p><ul><li>Keep scheduled newborn check-ups.</li><li>Ask about feeding and sleep concerns.</li><li>Seek urgent care if the baby seems seriously unwell.</li></ul></article>
      <article className="care-card"><h2>Growth & immunisation</h2><p>Use the child's official health card and local clinic schedule for growth monitoring and vaccinations.</p><ul><li>Bring the health card to appointments.</li><li>Confirm missed or upcoming doses with a clinic.</li><li>Record milestones with a health professional.</li></ul></article>
    </div>
    <section className="panel"><div className="panel-heading"><div><h2>Nearby healthcare contacts</h2><p>Verified local service details can be added when available.</p></div><Phone size={21} /></div><div className="service-row"><div className="service-icon"><Stethoscope size={20} /></div><div><strong>Local health centre</strong><p>Contact details have not been configured.</p></div><span className="soft-pill">Not configured</span></div><div className="service-row"><div className="service-icon"><Phone size={20} /></div><div><strong>Ambulance contact</strong><p>Confirm the correct local emergency number before adding it.</p></div><span className="soft-pill">Not configured</span></div></section>
  </>
}
