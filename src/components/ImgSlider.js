import React from 'react'
import slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


const ImgSlider=()=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
 
  return (
       
      <Carousel {...settings}>
     
        
                <Wrap>
                <img src="/images/slider-badag.jpg" alt=""/>
               </Wrap>
               <Wrap>
                <img src="/images/slider-badging.jpg" alt=""/>
               </Wrap>
               <Wrap>
                <img src="/images/slider-scale.jpg" alt=""/>
               </Wrap>
               <Wrap>
                <img src="/images/slider-scales.jpg" alt=""/>
               </Wrap>
       
       
        </Carousel>
        
      
 
  );
}
export default ImgSlider

   
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
 margin-top:20px;

`
const Wrap=styled.div`
img{
    width:100%;
    height:100%; 
    border:4px solid transparent;
    border-radius:20px;
    box-shadow: rgb(0 15 0 /69%) 0px 26px 30px -10px;
    &:hover{
      border:1px solid #fff;
    }
}
`

