import { Header, Footer, BackgroundBlobs } from './components/layout'
import { HeroSection, AboutSection, PortfolioSection, ContactSection } from './components/sections'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background blobs */}
      <BackgroundBlobs />

      {/* Fixed header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
