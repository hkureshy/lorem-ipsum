import React from 'react'
import Container from 'react-bootstrap/Container'
import Slider from "react-slick";

import { useLogoSection } from '../../lib/hooks'
import PreviewCompatibleImage from '../../lib/PreviewCompatibleImage'

import './logos.scss'

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
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
  return (
    <section className='my-3 logos-section'>
      <Container>
        <Slider {...settings}>
          { images.map((i, index) => {
            const imageInfo = {
              alt: 'Slider',
              image: i.image.publicURL
            }
            return <PreviewCompatibleImage key={`logo-${index}`} imageInfo={imageInfo} />
          })}
        </Slider>
      </Container>
    </section>
  )
}

export default Logos
