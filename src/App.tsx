import { useState } from 'react'
import { MainLayout } from './layouts/MainLayout'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { useAuthStore } from './store/useAuthStore'
import type { PageView } from './types/navigation'

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home')
  const { isAuthenticated } = useAuthStore()

  const renderPage = () => {
    if (currentPage === 'panel') {
      return isAuthenticated ? <Dashboard /> : <Login onSuccess={() => setCurrentPage('panel')} />
    }

    return <Home onNavigatePanel={() => setCurrentPage('panel')} />
  }

  return (
    <MainLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </MainLayout>
  )
}

export default App
