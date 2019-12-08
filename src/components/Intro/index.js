import React from 'react'
import Img from 'gatsby-image'
import Container from 'react-bootstrap/Container'

import { useIntroSection } from '../../lib/hooks'

import './intro.scss'

const Intro = () => {
  const { heading, description, image: { childImageSharp } } = useIntroSection();
  console.log(description)
  return (
    <section className='intro-section'>
      <h3 className='text-center'>{heading}</h3>
      <Container className='d-flex justify-content-around align-items-center'>
        <Img className='image' fluid={childImageSharp.fluid} />
        <p>
          <b>{description.split('\n')[0].split('# ')[1]}</b>
          <br></br>
          {description.split('\n')[1]}
        </p>
      </Container>
    </section>
  )
}

export default Intro
