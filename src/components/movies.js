import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Movies = () => {
    return (
        <Container>
            <h4>Recommended fro you</h4>
            <Content>

              
            <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Link to="/Detail"> 
           <Wrap>
           <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/512BC5EA420AAE31C918134C287A125ABAFFE83C44EA035ED22BD48B8A83B099/scale?width=2880&aspectRatio=1.78&format=jpeg"/>
           </Wrap> 
           </Link>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
           <Wrap>
           <img src="https://journalmetro.com/wp-content/uploads/2021/02/les-simpson-e1612213690843.jpg?w=1051"/>
           </Wrap>
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