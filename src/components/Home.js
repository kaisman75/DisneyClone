import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider  from './ImgSlider'
import Viewers from './Viewers';
import Movies from './movies';
import { onSnapshot,collection, doc } from '@firebase/firestore';
import db from "../firebase"
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movies/moviesSlice';

const Home = () => {

    const dispatch =useDispatch();

useEffect(() => {
   onSnapshot(collection(db,"movies"),(snapshot)=>{
        let movieRef=snapshot.docs.map((doc)=>{
            return{id:doc.id,...doc.data()};
           
        });
         dispatch(setMovies(movieRef));
         
    });
   
}, []);

    return (
        
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
        <Layer>
 
        </Layer>
        </Container>
       
    )
}

export default Home

const Container = styled.main`
min-height: calc( 100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
overflow:hidden;


`
const Layer=styled.div`
 background: url("/images/home-background.png") center center  / cover 
    no-repeat fixed ;
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    `
   
