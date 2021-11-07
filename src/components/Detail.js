import React from 'react'
import styled from 'styled-components'
const Detail=()=>{
    return (
        <Container>
        <Background>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/512BC5EA420AAE31C918134C287A125ABAFFE83C44EA035ED22BD48B8A83B099/scale?width=2880&aspectRatio=1.78&format=jpeg" alt="" />
        </Background>
        <ImgTitle>
          <img src="/images/viewers-starwars.png" alt="" />
        
        </ImgTitle>
        </Container>
    )
}

export default Detail
const Container=styled.div`
color: #fff;
min-height: calc( 100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;

`
const Background=styled.div`
   postion:fixed;
    
    
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    opacity:.8;
    overflow:hidden;
    img{
        width:100%;
        height:100vh;
        object-fit:cover;
        transforme:tran(1.5);
    }
`
const ImgTitle=styled.div``