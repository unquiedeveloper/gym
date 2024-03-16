import React, { useState } from 'react'
import logo from "../images/logo.png"
import {Link} from "react-scroll"
import axios from "axios";
import toast from "react-hot-toast";


function Navbar({
    
    setIsAuthenticated,
    
  }) {
    const [nav , setnav] = useState(false);
    const changebackground = ()=>{
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false)
        }
    }
    window.addEventListener("scroll",changebackground);
    const handleLogout = async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:3000/api/v1/user/logout",
            { withCredentials: "true" }
          );
          toast.success(data.message);
          setIsAuthenticated(false);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };
  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to='main' smooth={true} duration={2000} className='logo'>
            <img src={logo} alt="" />
        </Link>
        <input type="checkbox" className='menu-btn' id='menu-btn' />
         <label className='menu-icon' for="menu-btn">
            <span className='nav-icon'> </span>
         </label>
         <ul className='menu'>
            <li><Link to='main' smooth={true} duration={1000}>HEADER</Link> </li>
            <li><Link to='features' smooth={true} duration={1000}>FEATURE</Link> </li>
            <li><Link to='#' smooth={true} duration={1000}>OFFER</Link> </li>
            <li><Link to='about' smooth={true} duration={1000}>ABOUT</Link> </li>
            <li><Link to='contact'smooth={true} duration={1000}>CONTACT</Link> </li>

            <li><button
             
              style={{ width: "fit-content" }}
              onClick={handleLogout}
              >
              LOGOUT
            </button></li>
            
      
         </ul>
        
    </nav>
  )
}

export default Navbar