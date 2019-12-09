import React from 'react'
import Container from 'react-bootstrap/Container'

import { useFooterSection } from '../../lib/hooks'
import PreviewCompatibleImage from '../../lib/PreviewCompatibleImage'

import './footer.scss'

const Footer = () => {
  const { alt, footer_logo } = useFooterSection()
  const imageInfo = {
    alt,
    image: footer_logo.publicURL
  }

  return (
    <footer className='d-flex align-items-center be-footer'>
      <Container className='d-flex align-items-center'>
        <PreviewCompatibleImage style={{ marginRight: 10 }} imageInfo={imageInfo} />
        All rights reserved ©
      </Container>
    </footer>
  )
}

export default Footer
