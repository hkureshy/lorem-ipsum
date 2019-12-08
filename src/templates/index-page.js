import React from 'react'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({}) => {
  return (
    <>
      <h1>Index Page</h1>
    </>
  )
}

IndexPageTemplate.propTypes = {}

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

IndexPage.propTypes = {}

export default IndexPage
