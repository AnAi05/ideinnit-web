import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/contribute/Hero"
import WhyJoin from "../components/contribute/WhyJoin"
import CTA from "../components/contribute/CTA"
import Header from "../components/Header"
import FAQ from "../components/contribute/FAQ"
import RegistrationProcess from "../components/contribute/RegistrationProcess"
import contribute from "../components/contribute/CurrentClubs"

export default function Contribute() {
  return (
    <Layout>
      <SEO
        title="Competitive Programming Clubs"
        description="Get access to curriculum, problemsets, and contests tailored for school clubs, created by past USACO Finalists."
      />

      <Header noBanner={true} />
      <div className="margin-top-nav" />
      {/*Banner Padding*/}
      {/*<div className="h-20 sm:h-12"/>*/}
      <Hero />
      <WhyJoin />
      <RegistrationProcess />
      {/*<FAQ />*/}
      <CTA />
      <div className="h-8" />
    </Layout>
  )
}
