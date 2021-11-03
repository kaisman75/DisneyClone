import React,{Component} from 'react'
import slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const imgeSlider=[
        {img:"/images/slider-badag.jpg"},
        {img:"/images/slider-badging.jpg"},
        {img:"/images/slider-scale.jpg"},
        {img:"/images/slider-scales.jpg"},
    ]
    return (
         <div>
        <Carousel {...settings}>
         
          {imgeSlider.map((elem)=>{
              const{img}=elem;
              return(
                
                  <img src={img} alt=""/>
                
              )
          })}
          </Carousel>
          </div>
        
   
    );
  }
}
const Carousel=styled(slider)`
slick-slider{
    overflot:visible;
  .slick-active button :before{
  background-color:#fff;
}
}


`

