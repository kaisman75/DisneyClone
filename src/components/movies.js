import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux"


const Movies = () => {
    const movies = useSelector((state)=>state.movies);
   
    return (
        <Container>
            <h4>Recommended fro you</h4>
            <Content>
             {movies.map(movie=>{
                 const{id,title,cardImg,ytLink,titleImg,description,subTitle,type,backgroundImg}=movie;
                 return(
                    <Link to={`/Detail/${id}`} >
                    <Wrap>
                    <img src={cardImg} />
                    </Wrap>
                    </Link>
                 )
             })
            }
           
           </Content>
        </Container>
    )
}

export default Movies

const Container=styled.div`
margin-top :20px;

`
const Content=styled.div`
margin-top:35px;
display : grid;
grid-gap:30px;
grid-template-columns: repeat(4 ,minmax(0, 1fr));
`
const Wrap=styled.div`
 cursor:pointer;
 box-shadow: rgb(0 15 15 /69%) 0px 26px 30px -10px;
}
 img{
    border:5px solid rgba(249,249,249,0.1);
     width:100%;
     height:100%;
     overflow:hidden;
     object-fit:cover;
     border-radius:15px;
     &:hover{
        border:5px solid red;
        transform:scale(1.05);
      }
 }
 
`