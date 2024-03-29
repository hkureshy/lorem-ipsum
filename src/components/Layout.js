import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header';
import Footer from './Footer';
import { useSiteMetadata } from '../lib/hooks'

import '../styles/index.scss';

const Layout = props => {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()
  const title = props.title || defaultTitle
  const description = props.description || defaultDescription

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
