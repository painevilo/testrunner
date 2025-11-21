import { CountdownTimer } from './CountdownTimer'

const highlights = [
  'Circuito certificado para 10K, 21K y 42K',
  'Kits completos para los primeros 500 inscritos',
  'Puntos de hidratación cada 2km con staff en vivo'
]

type HeroSectionProps = {
  onCtaClick: () => void
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="gradient-hero">
      <div className="container-page grid min-h-[70vh] items-center gap-10 py-16 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            14 de febrero 2026 · 19:00 hrs
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            RUNEERAPP<br />
            <span className="text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
              Maratón lleno de energía
            </span>
          </h1>
          <p className="text-lg text-white/80">
            Prepárate para vivir la experiencia de correr junto a miles de atletas. Música en vivo, estaciones de energía y un recorrido que ilumina la ciudad.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="button-primary" onClick={onCtaClick}>
              Quiero inscribirme
            </button>
            <button className="button-outline" onClick={onCtaClick}>
              Ver panel de acceso
            </button>
          </div>
          <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-6 shadow-glass">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(110,231,183,0.25),transparent_35%)]" />
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Ruta nocturna</span>
                <span>42K oficial</span>
              </div>
              <div className="relative h-56 overflow-hidden rounded-2xl bg-white/10">
                <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="runnerGradient" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#6EE7B7" />
                      <stop offset="50%" stopColor="#22D3EE" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="400" height="220" fill="#0B1021" />
                  <path
                    d="M20 180 C80 140 140 190 200 160 C260 130 320 170 380 140"
                    fill="none"
                    stroke="url(#runnerGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <circle cx="90" cy="150" r="8" fill="#6EE7B7" />
                  <circle cx="210" cy="140" r="8" fill="#22D3EE" />
                  <circle cx="330" cy="130" r="8" fill="#F59E0B" />
                  <text x="20" y="40" fill="#FFFFFF" fontSize="20" fontWeight="700">
                    Evento deportivo 2026
                  </text>
                  <text x="20" y="70" fill="#94A3B8" fontSize="14">
                    Iluminamos la ruta para cada corredor
                  </text>
                </svg>
              </div>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Ritmo promedio: 4:35/km</span>
                <span>Elevación: +120m</span>
              </div>
            </div>
          </div>

          <CountdownTimer />
        </div>
      </div>
    </section>
  )
}
