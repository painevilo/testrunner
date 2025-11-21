import { ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
import type { PageView } from '../types/navigation'

interface MainLayoutProps {
  children: ReactNode
  currentPage: PageView
  onNavigate: (page: PageView) => void
}

export function MainLayout({ children, currentPage, onNavigate }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-black/30">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Runeerapp · Maratón 2026</p>
          <p>Organiza tu equipo y corre con energía.</p>
        </div>
      </footer>
    </div>
  )
}
