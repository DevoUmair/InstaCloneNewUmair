import React, { useEffect } from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from 'react-router-dom'
import GoogleButton from "react-google-button";
import { useUserAuth } from '../Context/UserAuthContext'
import { auth } from '../../firebase';

function Login({setLogged , isLogged}) {

  const navigate = useNavigate()

  const {signInWithGoggle} = useUserAuth();

  const handlesignInGoggle = async () => {
    try{
       await signInWithGoggle();
       setLogged(localStorage.setItem("auth" , true))
       navigate("/Home")
       localStorage.setItem("UserName" , auth.currentUser.displayName) 
       localStorage.setItem("Photo" , auth.currentUser.photoURL);
    }catch(err){
       console.log(err.message)
    }
  }

  useEffect(() => {
     if(localStorage.getItem("auth") == true){
       navigate("/Home")
     }
  },[])

  return (
    <Container className='container'>
        <Row className='row'>
            <ImgColumn className='col-md-6' >
               <img src='images/Screen-Shot-2018-10-05-at-2.09.37-pm-600x900.png' style={{width:'310px'}} />
            </ImgColumn>
            <ContentColumn className='col-md-6'>
               <LoginBar>
                   <LoginBarImage>
                       <img src='images/logo512.png' />
                   </LoginBarImage>
                   <GoogleSignIn className='signIn'>
                      <div>
                        <GoogleButton type="light" className="login-with-google-btn" onClick={handlesignInGoggle} > Sign in with Google </GoogleButton>
                      </div>
                   </GoogleSignIn>
               </LoginBar>
            </ContentColumn>
        </Row>
    </Container>
  )
}

export default Login

const  Row  = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`

const  Container  = styled.div`
  position: relative;
  top: 30%;
  transform: translateY(30%);
`
const  LoginBar  = styled.div`
    width: 70%;
    border: 1px solid lightgray;;
    background: #fafafa;
    padding: 10px 0px;
`

const LoginBarImage= styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
        
     img{
            width: 180px;
            margin: 10px 0px;
    } 
`
const ContentColumn = styled.div`
    display: flex;
    align-items: center;

`

const ImgColumn = styled.div`
    display: flex;
    justify-content: flex-end;
`

const GoogleSignIn = styled.div`
    margin: 8px 17px;
    h4{
         margin: 15px 0px;
         font-size: 17px;
    }
    button{
        transition: background-color .3s, box-shadow .3s;
    
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  
  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
  }
  
  &:active {
    background-color: #eeeeee;
  }
  
  &:focus {
    outline: none;
    box-shadow: 
      0 -1px 0 rgba(0, 0, 0, .04),
      0 2px 4px rgba(0, 0, 0, .25),
      0 0 0 3px #c8dafc;
  }
  
  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    cursor: not-allowed;
  }
}

 div{
     width: 100%;
     display: flex;
     justify-content: center;
 }
`