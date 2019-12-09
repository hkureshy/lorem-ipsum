import React from 'react'
import Container from 'react-bootstrap/Container'

import { useIntroSection } from '../../lib/hooks'
import PreviewCompatibleImage from '../../lib/PreviewCompatibleImage'

import './intro.scss'

const Intro = () => {
  const { heading, description, image } = useIntroSection();
  const imageInfo = {
    alt: 'Intro',
    image
  }
  return (
    <section className='intro-section'>
      <h3 className='text-center'>{heading}</h3>
      <Container className='d-flex justify-content-around align-items-center'>
        <PreviewCompatibleImage style={{ width: 236, maxHeight: 370 }} imageInfo={imageInfo} />
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
