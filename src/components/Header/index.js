import React from 'react'
import Nav from 'react-bootstrap/Nav'

import './header.scss'

const Header = () => {
  return (
    <Nav className='justify-content-center be-header'>
      <Nav.Item>
        <Nav.Link>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Products</Nav.Link>
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
