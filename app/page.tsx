import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Illustrations from '@/components/illustrations'
import Animations from '@/components/animations'
import Collaborations from '@/components/collaborations'
import About from '@/components/about'
import Contact from '@/components/contact'

export const metadata = {
  title: 'Mayssa Beltaief - MaysArt | Illustrator & Animator',
  description: 'Portfolio of Mayssa Beltaief (MaysArt) - Illustrator, Animator, and Designer',
}

export default function Page() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <About />
      <Collaborations />
      <Animations />
      <Illustrations />
      <Contact />
    </main>
  )
}
