import React from 'react'
import Img from 'gatsby-image'
import Container from 'react-bootstrap/Container'

import { useHeroSection } from '../../lib/hooks'

import './hero.scss'

const Hero = () => {
  const { heading, subheading, image: { childImageSharp } } = useHeroSection();
  return (
    <Container className='d-flex flex-wrap hero-section'>
      <section>
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </section>
      <Img className='image' fluid={childImageSharp.fluid} />
    </Container>
  )
}

export default Hero
