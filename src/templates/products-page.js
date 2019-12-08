import React from 'react'

import Layout from '../components/Layout'

export const ProductsPageTemplate = ({}) => {
  return (
    <>
      <h1>Products Page</h1>
    </>
  )
}

ProductsPageTemplate.propTypes = {}

const ProductsPage = () => {
  return (
    <Layout>
      <ProductsPageTemplate />
    </Layout>
  )
}

ProductsPage.propTypes = {}

export default ProductsPage
