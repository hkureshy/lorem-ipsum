import React from 'react'
import Container from 'react-bootstrap/Container'

import { useHeroSection } from '../../lib/hooks'
import PreviewCompatibleImage from '../../lib/PreviewCompatibleImage'

import './hero.scss'

const Hero = () => {
  const { heading, subheading, image } = useHeroSection()
  const imageInfo = {
    alt: 'Hero',
    image
  }
  return (
    <Container className='d-flex flex-wrap hero-section'>
      <section>
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </section>
      <PreviewCompatibleImage style={{ width: 383, maxHeight: 370 }} imageInfo={imageInfo} />
    </Container>
  )
}

export default Hero
