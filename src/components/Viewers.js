import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
    const ImgViewers=[{img:"/images/viewers-disney.png"},
    {img:"/images/viewers-starwars.png"},
    {img:"/images/viewers-marvel.png"},
    {img:"/images/viewers-national.png"},
    {img:"/images/viewers-pixar.png"},
]
    return (
        <Container>
            {
                ImgViewers.map(ele=>{
                    const{img}=ele;
                    return(
                        <Wrap>
                            <img src={img} alt="" />
                        </Wrap>
                    )
                })
            }
            
            
            
        </Container>
    )
}

export default Viewers

 const Container=styled.div`
 margin-top:30px;
 display : grid;
 grid-gap:25px;
 grid-template-columns: repeat(5 ,minmax(0, 1fr));

 
 `
 const Wrap=styled.div`
 border:3px solid rgba(249,249,249,0.1);
 border-radius:10px;
 cursor:pointer;
 box-shadow: rgb(0 15 0 /69%) 0px 26px 30px -10px;
}
 img{
     width:100%;
     height:100%;
     object-fit:cover;
 }
  & :hover{

  }
 `