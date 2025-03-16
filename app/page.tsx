import FeaturesGrid from '@/components/feature-grid'
import Footer from '@/components/footer'
import GlobalBackground from '@/components/global-background'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Roadmap from '@/components/roadmap'
import React from 'react'

const page = () => {
  return (
    <div className="relative">
      <GlobalBackground />
      <Header />
      <Hero />
      <FeaturesGrid />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default page
