import { FormEvent, useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

interface LoginFormProps {
  onSuccess: () => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const { login } = useAuthStore()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const isValid = login(username, password)

    if (!isValid) {
      setError('Usuario o contraseña incorrectos. Usa admin / hola123')
      return
    }

    setError('')
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel w-full max-w-md space-y-6 p-8">
      <div className="space-y-1">
        <p className="text-sm uppercase tracking-[0.25em] text-white/60">Acceso</p>
        <h2 className="text-2xl font-bold text-white">Panel privado</h2>
        <p className="text-sm text-white/70">Ingresa con las credenciales de prueba para ver el dashboard.</p>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/80">Usuario</span>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="admin"
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-secondary"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-white/80">Contraseña</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="hola123"
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-secondary"
        />
      </label>

      {error && <p className="text-sm font-medium text-accent">{error}</p>}

      <button type="submit" className="button-primary w-full justify-center">
        Entrar al panel
      </button>
    </form>
  )
}
