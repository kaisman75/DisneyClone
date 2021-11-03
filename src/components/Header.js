import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Nav>
          <Logo src="images/logo.svg"/>
           <NavMenu>
               <a>
                   <img src="/images/home-icon.svg" alt="" />
                   <span>Home</span>
               </a>
               <a>
                   <img src="/images/movie-icon.svg" alt="" />
                   <span>Movie</span>
               </a>
               <a>
                   <img src="/images/series-icon.svg" alt="" />
                   <span>Series</span>
               </a>
               <a>
                   <img src="/images/search-icon.svg" alt="" />
                   <span>Search</span>
               </a>
               <a>
                   <img src="/images/original-icon.svg" alt="" />
                   <span>Original</span>
               </a>
               <a>
                   <img src="/images/watchlist-icon.svg" alt="" />
                   <span>Watchlist</span>
               </a>

           </NavMenu>

                      <Myimg src="images/MyImg.jpg"  />
        </Nav>
       
    )
}

export default Header

const Nav=styled.div`
height:70px;
background:black;
display: flex;
align-items: center;
justify-content:space-around;
`
const Logo=styled.img`
    width: 70px;
    padding:0 36px;
    cursor:pointer;
`

const NavMenu=styled.div`
display:flex;
width:70%;
justify-content: space-evenly;


a{
    width:70px;
    padding: 0 12px;
    display: flex;
    align-items: center;
  
    cursor:pointer;
    img{
        height:20px;
    }
    span{
         font-size:13px;
         letter-spacing:1.42px;
         position:relative;
    
      &:after{
        content:"";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition:  all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform:scaleX(0);

       }
    }
    :hover{
      span:after{
        transform:scaleX(1);
        opacity:1;
    }

}

    
}

`
const Myimg=styled.img`
width:48px;
height:48px;
border-radius:50px;
`