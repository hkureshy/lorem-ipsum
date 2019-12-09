import React from 'react'
import Img from 'gatsby-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-media';

import Button from '../Button'
import { useBlogsSection } from '../../lib/hooks'

import './blogs.scss'

const Content = ({ frontmatter, frontmatter: { featuredimage: { childImageSharp } } }) =>
  <Col xs={12} sm={6} md={4} lg={3}>
    <div className='be-card d-flex flex-column'>
      <Img className='image' fluid={childImageSharp.fluid} />
      <b>{frontmatter.title}</b>
      <p>{frontmatter.excerpt}</p>
    </div>
  </Col>

const Blogs = () => {
  const blogs = useBlogsSection();
  return (
    <Container className='blogs-section'>
      <Row className='blog-row'>
        { blogs.map((blog, i) => {
          const { node: { frontmatter } } = blog
          return (
            <Media key={`blog-${i}`} queries={{ large: { minWidth: 577 } }}>
              {matches =>
                matches.large ?
                  <Content frontmatter={frontmatter} />
                :
                  i < 2 && <Content frontmatter={frontmatter} />
              }
            </Media>
          )
        })}
      </Row>
      <div className='w-100 text-center'>
        <Button className='text-center'>
          Read More
        </Button>
      </div>
    </Container>
  )
}

export default Blogs
