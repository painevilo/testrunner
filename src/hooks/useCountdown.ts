import { useEffect, useState } from 'react'

import { EVENT_DATE } from '../utils/constants'

export type CountdownState = {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

const getTimeRemaining = (targetDate: Date): CountdownState => {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((distance / (1000 * 60)) % 60)
  const seconds = Math.floor((distance / 1000) % 60)

  return { days, hours, minutes, seconds, isExpired: false }
}

export const useCountdown = (targetDate: Date = EVENT_DATE) => {
  const [countdown, setCountdown] = useState<CountdownState>(() => getTimeRemaining(targetDate))

  useEffect(() => {
    const interval = setInterval(() => setCountdown(getTimeRemaining(targetDate)), 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return countdown
}
