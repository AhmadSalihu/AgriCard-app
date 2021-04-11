import React from 'react'
// import { Link } from 'react-router-dom';
import { Carousel }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



 function Slidebar() {
  return (
    <Carousel className="border-b pa2 ma3">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://miro.medium.com/max/1366/1*JGzG0Jhgs-OrMCH1-Qj2MA.jpeg"
      alt="First slide"
    />
        <Carousel.Caption>
          <div style={{ overflow: 'hidden' }} className="h1 f5">
      <p>Real Time Agricultural Online Bussiness With Effective Management Security</p>
          </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.euractiv.com/wp-content/uploads/sites/2/2018/09/shutterstock_772071496-800x450.jpg"
      alt="Second slide"
    />

        <Carousel.Caption>
        <div style={{ overflow: 'hidden', imageSize: 'cover' }} className="h1 f5">
          <h3>Online Roburst Citizen Database</h3>
          <p>Effective Revenue Recovery upto 30%</p>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/cardimages/el-rufai01.jpg"
      alt=""
    />

    <Carousel.Caption className="h1">
      <h3>Secured Your Agric Card</h3>
      <p>Secured Your Owned Card for Keeping The Change KTC</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}


export default Slidebar;