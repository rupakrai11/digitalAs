import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from '../../../images/Banner/1.jpg';
import image2 from '../../../images/Banner/2.jpg';
import image3 from '../../../images/Banner/3.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarosuelItem from './carosuelItem';




/**
* @author
* @function Banner;npm i react-bootstrap
**/

const Carosuleimage=[
  {
    carosuelImg:image1,
    alt:"first slide1"
},
{
  carosuelImg:image2,
    alt:"first slide2"
},{
  carosuelImg:image3,
    alt:"first slide3"
}
]

const BannerCarosuel = (props) => {
  return(
      <div className="carosuelContainer">
    <Carousel fade={true} pause={false} >
    <Carousel.Item interval={2000} style={{height:"350px"}}>
        <img
          className="d-block w-100"
          src={image1}
          alt="first slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000} style={{height:"350px"}}>
        <img
          className="d-block w-100"
          src={image2}
          alt="image2"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{height:"350px"}}>
        <img
          className="d-block w-100"
          src={image3}
          alt="image2"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
</div>

   )

 }

export default BannerCarosuel;