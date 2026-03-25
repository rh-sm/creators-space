import Hero from '@/components/sections/Hero'
import Agitation from '@/components/sections/Agitation'
import SolutionReveal from '@/components/sections/SolutionReveal'
import ExpertGallery from '@/components/sections/ExpertGallery'
import Benchmark from '@/components/sections/Benchmark'
import HowItWorks from '@/components/sections/HowItWorks'
import RevenueEstimator from '@/components/sections/RevenueEstimator'
import TermsOfTrust from '@/components/sections/TermsOfTrust'
import ClosingCTA from '@/components/sections/ClosingCTA'
import Footer from '@/components/sections/Footer'

export default function App() {
  return (
    <div className="dark bg-onix-bg min-h-screen font-sans text-onix-text">
      <Hero />
      <Agitation />
      <SolutionReveal />
      <ExpertGallery />
      <Benchmark />
      <HowItWorks />
      <RevenueEstimator />
      <TermsOfTrust />
      <ClosingCTA />
      <Footer />
    </div>
  )
}
