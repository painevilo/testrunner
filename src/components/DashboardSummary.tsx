import { EVENT_DATE, EVENT_LOCATION, EVENT_TITLE } from '../utils/constants'

const stats = [
  { label: 'Inscritos', value: '1,250', detail: '+120 en la última hora' },
  { label: 'Staff confirmado', value: '86', detail: 'Rutas, hidratación y soporte' },
  { label: 'Kits disponibles', value: '370', detail: 'Aún en reserva' }
]

export function DashboardSummary() {
  return (
    <section className="space-y-6">
      <div className="glass-panel p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">{EVENT_TITLE}</p>
            <h2 className="text-2xl font-bold text-white">Panel de control</h2>
            <p className="text-white/70">{EVENT_LOCATION}</p>
          </div>
          <div className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/80">
            Próximo: {EVENT_DATE.toLocaleDateString('es-MX')} · 19:00 hrs
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <article key={item.label} className="glass-panel p-5">
            <p className="text-sm text-white/60">{item.label}</p>
            <p className="text-3xl font-bold text-white">{item.value}</p>
            <p className="text-xs text-white/50">{item.detail}</p>
          </article>
        ))}
      </div>

      <div className="glass-panel p-6 text-sm text-white/70">
        <p className="font-semibold text-white">Checklist de organización</p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" /> Mapeo de rutas y cierres viales
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-secondary" /> Confirmación de voluntarios y staff médico
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" /> Briefing con corredores élite y pace makers
          </li>
        </ul>
      </div>
    </section>
  )
}
