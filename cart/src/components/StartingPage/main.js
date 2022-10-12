import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import classes from '../StartingPage/main.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const Main = () => {
  return (

    <div>
      <Carousel  >
        <Carousel.Item>
          <img
            className="d-block w-100  "
            src="/mainimg/img2.jpg"
            alt="First Slide"
          />
          <Carousel.Caption>
            <h3 className={classes.font}>ANTHEM</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/mainimg/img.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>APEX</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/mainimg/img3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>DARK-SOULS-3</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
























    </div>

  )
}

export default Main;