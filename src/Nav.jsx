import React from 'react'
import { useState,useEffect } from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "./utils/firebase-config";
const Nav = () => {

    const navigate = useNavigate()

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

    const [show, setShow] = useState(false)
    useEffect(()=>{
       
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setShow(true);
            }
            else setShow(false)
        })
        
    },[])
    console.log(show)
  return (
  <NavContainer>
     <div className={`nav ${show && "nav_black"}`}>
   <div className="leftSide">
   <img className="nav_logo"src = "https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"/>
   
   </div>
    <div className="rightSide">
    <img className="nav_avatar"src="https://th.bing.com/th/id/OIP.3ifK-ZYFdTTPIm1jiGIeZwAAAA?pid=ImgDet&rs=1"alt="Netflix Avatar"/>
          <button onClick={()=>signOut(firebaseAuth)}>
            <AiOutlineLogout />
          </button>
        </div>
   </div>
  </NavContainer>
  )
}
const NavContainer = styled.div`
    .nav_black{
            background-color: #111;
            transition-timing-function: ease-in;
            transition: all 0.5s;
        }
    .nav{
        position: fixed;
        width: 100%;
        padding: 20px;
        top: 0;
        display: flex;
        justify-content: space-between;
        height: 30px;
        z-index: 1;
        
        .nav_logo{
            position: fixed;
            left: 20px;
            width: 80px;
            object-fit: contain;
            top: 1.7rem;
        }
        .nav_avatar{
            position: fixed;
            right: 5rem;
            width: 30px;
            object-fit: contain;
            border-radius: 50%;
        } 
        
        .rightSide{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1.5rem;
    

    button{
        background-color: red;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        
        
    }&:focus{
        outline: none;
    }svg{
        color: white;
        font-size: 1.5rem;
    }
}
    }
`

export default Nav
