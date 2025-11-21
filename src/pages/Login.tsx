import { LoginForm } from '../components/LoginForm'
import { useAuthStore } from '../store/useAuthStore'

interface LoginProps {
  onSuccess: () => void
}

export function Login({ onSuccess }: LoginProps) {
  const { isAuthenticated } = useAuthStore()

  return (
    <section className="container-page my-16 grid gap-10 lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-4">
        <p className="text-sm uppercase tracking-[0.25em] text-white/60">Acceso seguro</p>
        <h2 className="text-3xl font-bold text-white">Panel para el equipo</h2>
        <p className="text-white/70">
          Usa el usuario de prueba <span className="text-primary">admin</span> con la contraseña{' '}
          <span className="text-primary">hola123</span>. El estado de sesión se maneja solo con Zustand para mantener la app ligera.
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-lg font-bold text-white">100%</p>
            <p className="text-xs text-white/50">Control en el cliente</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-lg font-bold text-white">Sin backend</p>
            <p className="text-xs text-white/50">Auth de demostración</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end">
        {isAuthenticated ? (
          <div className="glass-panel w-full max-w-md space-y-4 p-8 text-center">
            <p className="text-sm text-white/60">Sesión activa</p>
            <h3 className="text-2xl font-bold text-white">Ya estás dentro</h3>
            <p className="text-white/70">Ve directo al dashboard para revisar el estado de la carrera.</p>
            <button className="button-primary w-full justify-center" onClick={onSuccess}>
              Ir al dashboard
            </button>
          </div>
        ) : (
          <LoginForm onSuccess={onSuccess} />
        )}
      </div>
    </section>
  )
}
