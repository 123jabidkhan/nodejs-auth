import React, { useEffect, useState } from 'react'
import {isLoggedIn, doLogout, currentUser} from './auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(()=>{
   console.log(isLoggedIn());
   console.log('curr user >>>',currentUser());
   setUser(currentUser());
  },[])

  const navigation = useNavigate();

  const logout = ()=>{
    doLogout(()=>{
      console.log('User Logged Out!!');
      navigation('/login')
    });
  }
  return (
    <>
    <p></p>
    <h2 style={{textAlign:"center",backgroundColor:"black",padding:"20px",color:"white"}}>
    
    Welcome To Dashboard <span style={{color:"green"}}>{user.email}</span>
    </h2>
<button style={{padding:"10px",backgroundColor:"red",marginTop:"20px"}} onClick={logout}>Logout</button>

    </>
  )
}

export default Home;
