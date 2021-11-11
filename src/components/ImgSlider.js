import React from 'react'
import slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


 const SimpleSlider =()=> {
 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
  
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
  export default SimpleSlider



const Carousel=styled(slider)`
   overflow:visible;

   .slick-next {
    right: 100px;
}
   .slick-prev {
  left: 100px;
}

 button {
      z-index:1;
  }
 li.slick-active button:before{
     color:#fff;
 }



`
const Wrap=styled.div`
img{
    width:100%;
    height:100%; 
    &:hover{
    cursor:pointer;
      border-color:rgba(249,249,249,0.8)
}
    border:4px solid transparent;
    border-radius:20px;
 
}
`

