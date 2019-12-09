import React from 'react'
import Img from 'gatsby-image'
import Container from 'react-bootstrap/Container'
import Slider from "react-slick";

import { useLogoSection } from '../../lib/hooks'

import './logos.scss'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Logos = () => {
  const images = useLogoSection();
  // debugger
  return (
    <section className='my-3 logos-section'>
      <Container>
        <Slider {...settings}>
          { images.map((i, index) =>
            <Img key={`logo-${index}`} src={i.image.childImageSharp.fluid} />
          )}
        </Slider>
      </Container>
    </section>
  )
}

export default Logos
