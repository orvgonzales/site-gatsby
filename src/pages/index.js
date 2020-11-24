import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Best Destinations" />
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
