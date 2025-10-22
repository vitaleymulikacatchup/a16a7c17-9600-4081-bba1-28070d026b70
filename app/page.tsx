import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ContentSections from '@/components/ContentSections'
import Footer from '@/components/Footer'
import AgeVerificationModal from '@/components/AgeVerificationModal'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Header />
      <Hero />
      <ContentSections />
      <Footer />
      <AgeVerificationModal />
    </main>
  )
}