import React from 'react'
import styled from 'styled-components'
function Login() {
    return (
        <Container>
         <Content>
             <Cta1 src="/images/cta-logo-one.svg" alt="" />
             <Cta2>get All There</Cta2>
             <Cta3 src="/images/cta-logo-two.png" />
         </Content>
        </Container>
    )
}

export default Login

const Container=styled.div`
min-height: calc( 100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
overflow:hidden;
display:flex;
justify-content:center;
align-item:center;
&:before{
    background: url("images/login-background.jpg") center center  / cover 
    no-repeat fixed ;
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
}
`
const Content=styled.div`
height:50%;
width:70%;
padding:60px;
display: flex;
flex-direction: column;
align-items: center;
`
const Cta1=styled.img`
width:100%;
height:50%;
`
const Cta2=styled.button`
width:80%;
height:40%;
border-radius:4px;
background-color: #0392f8;
margin:20px 0;
padding :10px;
text-transform: uppercase;
cursor:pointer;
`
const Cta3=styled.img`
width:100%;
height:30%
`