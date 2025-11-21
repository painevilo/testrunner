import { create } from 'zustand'
import type { AuthState, User } from '../types/auth'

const DEMO_USER: User = { username: 'admin' }
const VALID_CREDENTIALS = { username: 'admin', password: 'hola123' }

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (username: string, password: string) => {
    const isValid =
      username.trim().toLowerCase() === VALID_CREDENTIALS.username &&
      password === VALID_CREDENTIALS.password

    if (isValid) {
      set({ user: DEMO_USER, isAuthenticated: true })
      return true
    }

    set({ user: null, isAuthenticated: false })
    return false
  },
  logout: () => set({ user: null, isAuthenticated: false })
}))
