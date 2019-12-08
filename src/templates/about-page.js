import React from 'react'

import Layout from '../components/Layout'

export const AboutPageTemplate = ({}) => {
  return (
    <>
      <h1>About Page</h1>
    </>
  )
}

AboutPageTemplate.propTypes = {}

const AboutPage = () => {
  return (
    <Layout>
      <AboutPageTemplate />
    </Layout>
  )
}

AboutPage.propTypes = {}

export default AboutPage
