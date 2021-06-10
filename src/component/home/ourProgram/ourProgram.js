import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Program from './program';
import ProgramData from "../../../utils/programData"
import "../../../styles/slider.scss"

export default class OurProgram extends Component {
  render() {


    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay:true,
      autoplaySpeed:700,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
         
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
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
    return (
      <div id="sliderWrapper">
        <div className="slider-top">
        <h2 id="program-heading"> our <span>programes</span> </h2>
        <div className="program-after"></div>

        </div>
      
        <Slider {...settings}>
          <div>
            {
              
              ProgramData.map((value)=>{
                return(
                <Program title={value.title}
                description={value.description}
                image={value.programImage}
                />
                )})
            }
          </div>

          <div>
            {
              
              ProgramData.map((value)=>{
                return(
                <Program title={value.title}
                description={value.description}
                image={value.programImage}
                />
                )})
            }
          </div>
          <div>
            {
              
              ProgramData.map((value)=>{
                return(
                <Program title={value.title}
                description={value.description}
                image={value.programImage}
                />
                )})
          

            }
          </div>

          <div>
            {
              ProgramData.map((value)=>{
                return(
                <Program title={value.title}
                description={value.description}
                image={value.programImage}
                />
                )})
          

            }
          </div>


          <div>
            {
              
              ProgramData.map((value)=>{
                return(
                <Program title={value.title}
                description={value.description}
                image={value.programImage}
                />
          
                )
          
                   })
          

            }
          </div>

          <div>
            {
              
              ProgramData.map((value)=>{
                return(
                <Program title={value.title}
                description={value.description}
                image={value.programImage}
                />
          
                )
          
                   })
          

            }
          </div>
         
        </Slider>
      </div>
    );
  }
  }