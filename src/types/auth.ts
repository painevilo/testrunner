export type User = {
  username: string
}

export type AuthState = {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
}
