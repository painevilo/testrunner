import { HeroSection } from '../components/HeroSection'
import { InfoGrid } from '../components/InfoGrid'

interface HomeProps {
  onNavigatePanel: () => void
}

export function Home({ onNavigatePanel }: HomeProps) {
  return (
    <>
      <HeroSection onCtaClick={onNavigatePanel} />
      <InfoGrid />
    </>
  )
}
