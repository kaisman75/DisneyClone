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
                  <Warp>
                  <img src={img} alt=""/>
                 </Warp>
              )
          })}
         
          </Carousel>
          </div>
        
   
    );
  }
}
const Carousel=styled(slider)`

.slick-list{
   overflow:visible;
 
}
 button {
      z-index:1;
  }
 li.slick-active button:before{
     color:#fff;
 }
`
const Warp=styled.div`
img{
    width:100%;
    height:100%; 
    border:4px solid transparent;
    border-radius:20px;
    box-shadow: rgb(0 15 0 /69%) 0px 26px 30px -10px;
}
`

