import * as React from "react"
import Layout from '../components/layout'

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
    <Layout pageTitle="Home Page">
      <p>Gatsby tf-checkout-component homepage</p>
    </Layout>
    </main>
  )
}

export default IndexPage
