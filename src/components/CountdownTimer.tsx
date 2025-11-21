import { useCountdown } from '../hooks/useCountdown'
import { EVENT_DATE } from '../utils/constants'

export function CountdownTimer() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(EVENT_DATE)

  return (
    <div className="glass-panel p-6 sm:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">Maratón Runeerapp</p>
            <h3 className="text-2xl font-bold text-white">14 de febrero 2026 · 19:00 hrs</h3>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-primary">En vivo pronto</span>
        </div>

        {isExpired ? (
          <p className="text-center text-lg font-semibold text-primary">¡La carrera ha comenzado!</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[{ label: 'Días', value: days }, { label: 'Horas', value: hours }, { label: 'Minutos', value: minutes }, { label: 'Segundos', value: seconds }].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-4 text-center shadow-inner">
                <div className="text-3xl font-extrabold text-white sm:text-4xl">{String(item.value).padStart(2, '0')}</div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
