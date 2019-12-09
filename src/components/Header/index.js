import React from 'react'
import Nav from 'react-bootstrap/Nav'

import { useHeaderSection } from '../../lib/hooks'
import PreviewCompatibleImage from '../../lib/PreviewCompatibleImage'

import './header.scss'

const Header = () => {
  const { alt, header_logo } = useHeaderSection()
  const imageInfo = {
    alt,
    image: header_logo.publicURL
  }

  return (
    <Nav className='justify-content-center be-header'>
      <Nav.Item>
        <Nav.Link active>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Products</Nav.Link>
      </Nav.Item>
      <Nav.Item className='d-flex'>
        <PreviewCompatibleImage imageInfo={imageInfo}  />
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Header
