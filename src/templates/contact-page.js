import React from 'react'

import Layout from '../components/Layout'

export const ContactPageTemplate = ({}) => {
  return (
    <>
      <h1>Contact Page</h1>
    </>
  )
}

ContactPageTemplate.propTypes = {}

const ContactPage = () => {
  return (
    <Layout>
      <ContactPageTemplate />
    </Layout>
  )
}

ContactPage.propTypes = {}

export default ContactPage
