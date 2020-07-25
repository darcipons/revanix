import React from 'react'
import Carousel  from 'react-bootstrap/Carousel'
import img1 from './header_img.png'
import img2 from './locations2.png'
import img3 from './scopeHeader.png'
import img4 from './monitorHeader.png'


const Header = () => {
  return(
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            height={900}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
            height={900}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            height={900}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="fourth slide"
            height={900}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Header
