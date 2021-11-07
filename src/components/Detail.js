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
        <ControleBtn>
            <PlayBtn>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>

            </PlayBtn>
            <TrailerBtn>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>

            </TrailerBtn>
            <AddBtn>
                <h4>+</h4>
            </AddBtn>
            <GroupBtn>
            <img src="/images/group-icon.png" alt="" />

            </GroupBtn>
        </ControleBtn>
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
    
    
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    opacity:.8;
    img{
       width:100%; 
       height:100%;
    }
    
`
const ImgTitle=styled.div`
   align-items: center;
   width:50%;
   height:50%;
} 
`
const ControleBtn=styled.div`
width:40%;
height:30%;
display:flex;
justify-content: space-around;
align-items: center;
@media(max-width:780px){
    flex-direction: column;
    button{
        margin-bottom:20px;
    }
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        
    } 
}

`
const PlayBtn=styled.button`
width:120px;
height:40px;
background:white;
opacity:.5;
cursor:pointer;
border-radius:5px;
display:flex;
justify-content: center;
    align-items: center;
span{
    color:black;
}
img{
    width:20%;
    height:50%;
    object-fit:cover;
    
}
&:hover{
    transform:scale(1.5);
    border:2px solid black;
    opacity:1;
}
`
const TrailerBtn=styled.button`
width:100px;
height:40px;
background:black;
opacity:.5;
cursor:pointer;
border-radius:5px;
display:flex;
justify-content: center;
align-items: center;
span{
    color:white;
}
img{
    width:20%;
    height:50%;
    object-fit:cover;
    
}
&:hover{
    transform:scale(1.5);
    border:2px solid white;
    opacity:1;
}
`
const AddBtn=styled.button`
width:50px;
height:50px;
background:black;
opacity:.5;
cursor:pointer;
display:flex;
color:white;
font-size:20px;
border-radius:50px;
justify-content: center;
h4{
  font-size:20px  
}
;
align-items: center;

&:hover{
    transform:scale(1.5);
    border:2px solid white;
    opacity:1;
}
`
const GroupBtn=styled.button`
width:50px;
height:50px;
background:black;
opacity:.5;
cursor:pointer;
display:flex;
border-radius:50px;
justify-content: center;
align-items: center;
&:hover{
    transform:scale(1.5);
    border:2px solid white;
    opacity:1;
}

`