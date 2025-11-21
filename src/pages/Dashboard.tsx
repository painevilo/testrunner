import { DashboardSummary } from '../components/DashboardSummary'
import { CountdownTimer } from '../components/CountdownTimer'

export function Dashboard() {
  return (
    <section className="container-page my-12 space-y-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardSummary />
        <div className="space-y-4">
          <div className="glass-panel p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Seguimiento</p>
            <h3 className="text-xl font-semibold text-white">Tiempo restante</h3>
            <p className="text-sm text-white/60">Mantén visible el conteo para coordinar a tu equipo.</p>
          </div>
          <CountdownTimer />
        </div>
      </div>
    </section>
  )
}
