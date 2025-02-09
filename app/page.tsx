import Description from '@/components/description'
import FeaturesGrid from '@/components/feature-grid'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Roadmap from '@/components/roadmap'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Description />
      <FeaturesGrid />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default page
