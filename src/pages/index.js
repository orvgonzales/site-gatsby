import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips />
  </Layout>
)

export default IndexPage