import React from 'react'
import styled from 'styled-components'
import { Link,useNavigate } from 'react-router-dom'
import { selectUserName,selectUserPhoto } from '../features/User/userSlice'
import {useDispatch, useSelector } from 'react-redux';
import { getAuth,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { provider } from '../firebase';
import {setUserLogin , setSignOut} from "../features/User/userSlice"



const Header = () => {
    const userName = useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);
    const navigate=useNavigate() 
    const dispatch = useDispatch();
    const signIn =()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            dispatch( setUserLogin({
                name:user.displayName,
                Email:user.email,
                photo:user.photoURL
            })
            
            )
            navigate("/")
            // ...
          })
          
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        }
        const signOut=()=>{
            dispatch(setSignOut());
            navigate("/Login")
                }
    return (
        <Nav>
            <Link to="/">
          <Logo src="images/logo.svg"/>
           </Link>
           {!userName?  <Login onClick={signIn}>Login</Login> :
           <>
            <NavMenu>
           
           <a href='/'>
               
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
               <Logcontent>

                <Link to="/Login" onClick={signOut}>
                  <Myimg src={userPhoto} />
                  </Link>

                  <span>{userName}</span>
                  </Logcontent>
           </>
           }
          
        </Nav>
       
    )
}

export default Header

const Nav=styled.div`
height:70px;
background:#090b13;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 36px;
`
const Logo=styled.img`
    width: 70px;
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
    text-decoration:none;
    color:#fff;
    
    cursor:pointer;
    img{
        height:20px;
    }
    span{
         font-size:13px;
         letter-spacing:1.5px;
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
@media(max-width:780px){
    display:none;
}
`
const Logcontent=styled.div`
dispaly:flex;

`

const Myimg=styled.img`
width:48px;
height:48px;
border-radius:50px;
&:hover{
    cursor:pointer;
}
`
const Login=styled.button`
width:100px;
height:50px;
border:1px solid white;
border-radius:5px;
color:white;
background-color:black;
cursor:pointer;
text-transform: uppercase;
&:hover{
    background-color:white;
    color:black;
}
`