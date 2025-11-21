import { EVENT_LOCATION } from '../utils/constants'

const infoCards = [
  {
    title: 'Entrega de kits',
    description: '13 de febrero · 10:00 - 18:00 hrs · Centro de Convenciones',
    tag: 'Logística'
  },
  {
    title: 'Ruta iluminada',
    description: 'Inicio en Paseo Marítimo con estaciones musicales y drones guía.',
    tag: 'Experiencia'
  },
  {
    title: 'Recuperación activa',
    description: 'Zona de masajes, hidratación premium y recuperación asistida al finalizar.',
    tag: 'Bienestar'
  }
]

export function InfoGrid() {
  return (
    <section className="container-page my-16 space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.25em] text-white/60">Datos clave</p>
        <h2 className="text-3xl font-bold text-white">Prepárate para el maratón</h2>
        <p className="text-white/70">Un evento diseñado para vibrar con cada zancada en {EVENT_LOCATION}.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {infoCards.map((card) => (
          <article key={card.title} className="glass-panel p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-primary">{card.tag}</span>
            <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-2 text-sm text-white/70">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
