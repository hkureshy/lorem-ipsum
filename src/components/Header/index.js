import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
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
    <Navbar className='navbar fixed-top be-header-desktop' expand='md'>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </Navbar.Toggle>
      <Navbar.Brand className='mobile-logo mx-auto ml-n5 my-auto d-md-none d-inline-block'>
        <PreviewCompatibleImage imageInfo={imageInfo}  />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <div className='nav-wrapper d-flex w-100'>
          <Nav className="mx-md-auto">
            <Nav.Link active>Home</Nav.Link>
            <Nav.Link>Products</Nav.Link>
            <Navbar.Brand className='mx-5 my-auto d-md-inline-block d-none'>
              <PreviewCompatibleImage imageInfo={imageInfo}  />
            </Navbar.Brand>
            <Nav.Link>Blog</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
