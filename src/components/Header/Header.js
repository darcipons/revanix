import React from 'react'
import Carousel  from 'react-bootstrap/Carousel'
import img1 from './AdobeStock_208124828_Preview.jpeg'
import img2 from './AdobeStock_216414046_Preview.jpeg'
import img3 from './AdobeStock_297494717_Preview.jpeg'
import img4 from './stock.png'

const Header = () => {
  return(
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="fourth slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Header
