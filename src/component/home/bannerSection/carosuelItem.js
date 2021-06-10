import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarosuelItem=(props)=>{
  console.log(props);
    
    return(
        <>
        <Carousel.Item interval={2000} style={{height:"350px"}}>
        <img
          className="d-block w-100"
          src={props.imgcara}
          alt={props.alt}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      
      </>
    )
}
export default CarosuelItem;