import { useMemo } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import type { PageView } from '../types/navigation'

const navLinks: Array<{ label: string; page: PageView }> = [
  { label: 'Inicio', page: 'home' },
  { label: 'Panel', page: 'panel' }
]

type NavbarProps = {
  currentPage: PageView
  onNavigate: (page: PageView) => void
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { isAuthenticated, logout, user } = useAuthStore()

  const badgeLabel = useMemo(() => {
    if (!isAuthenticated || !user) return 'Invitado'
    return `Hola, ${user.username}`
  }, [isAuthenticated, user])

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-dark/80 backdrop-blur-lg">
      <div className="container-page flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-dark font-bold">
            RA
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Runeerapp</p>
            <p className="text-lg font-semibold text-white">Maratón 2026</p>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => onNavigate(link.page)}
              className={`rounded-full px-4 py-2 transition hover:bg-white/10 ${
                currentPage === link.page ? 'bg-white/10 text-primary' : 'text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="hidden sm:block rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
            {badgeLabel}
          </div>
          {isAuthenticated ? (
            <button className="button-outline" onClick={logout}>
              Cerrar sesión
            </button>
          ) : (
            <button className="button-primary" onClick={() => onNavigate('panel')}>
              Acceso
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}
