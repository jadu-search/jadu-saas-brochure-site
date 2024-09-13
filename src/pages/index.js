import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Features from "../components/features"
import ContactForm from "../components/contactForm"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <ContactForm />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Jadu Digital - E-commerce Search Engine</title>
