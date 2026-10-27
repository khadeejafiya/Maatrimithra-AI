import { Heart, Users, Activity, Syringe, Baby, Bell, Settings, Search, CalendarDays, AlertTriangle, ChevronRight, Plus, CheckCircle2, Clock, Phone, Globe2, Save, Stethoscope, ShieldCheck, TrendingUp } from 'lucide-react'
import { PageHeading, Notice, MotherRows } from '../components/Shared'

export default function Notifications({ readNotifications, setReadNotifications }) {
 const notificationItems = [
 { id: 1, title: 'High-risk follow-up needs review', detail: 'Meera S · Please review this record with the supervising clinician.', time: 'Today', priority: 'High priority' },
 { id: 2, title: 'Upcoming home visit', detail: 'Anjali Nair · Confirm the appointment with the family.', time: 'Tomorrow', priority: 'Reminder' },
 { id: 3, title: 'Vaccination record check', detail: 'Review the immunisation schedule and update after confirmation.', time: 'In 4 days', priority: 'Reminder' },
 ];
  return <>
    <PageHeading title="Notifications" subtitle="Review reminders and follow-up tasks in one place." action={<span className="soft-pill"><Bell size={15} /> {notificationItems.length - readNotifications.length} unread</span>} />
    <section className="panel"><div className="panel-heading"><div><h2>Recent notifications</h2><p>Stay aware of upcoming care activities.</p></div><button className="text-button" onClick={() => setReadNotifications(notificationItems.map(n => n.id))}>Mark all read</button></div>
      <div className="notification-list">{notificationItems.map(n => <article className={`notification-card ${readNotifications.includes(n.id) ? 'notification-read' : ''}`} key={n.id}><div className={`notification-symbol ${n.priority === 'High priority' ? 'risk' : ''}`}><Bell size={19} /></div><div className="notification-copy"><div className="notification-title-row"><h3>{n.title}</h3><span className={`priority ${n.priority === 'High priority' ? 'priority-high' : ''}`}>{n.priority}</span></div><p>{n.detail}</p><span className="notification-time"><Clock size={14} /> {n.time}</span></div><button className="small-action" onClick={() => setReadNotifications(prev => prev.includes(n.id) ? prev.filter(id => id !== n.id) : [...prev, n.id])}>{readNotifications.includes(n.id) ? 'Mark unread' : 'Mark read'}</button></article>)}</div>
      
    </section>
  </>
}
