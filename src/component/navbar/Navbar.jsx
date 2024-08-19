import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
         <div className='logo_ul'>
       
       <Link to={"/"} >
       <div className="logo">
                <img src="./imgs/logo.jpg" alt="" />
            </div>
        </Link>
      
            <ul className="link">
                <NavLink to={"/university"}>
                    <li>Universitetlar</li>
                </NavLink>
                <NavLink to={"/service"}>
                    <li>Xizmatlar</li>
                </NavLink>
                <NavLink to={"/worker"}>
                    <li>Kasblar</li>
                </NavLink>
            </ul>
         </div>
            <div className="social">
            <div>
                    <a href="http://instagram.com/global_edu_group"><span className='inst'><FaInstagram/> </span></a>
                </div>
                <div>
                    <a href="https://t.me/GlobalEduGroupbot"><span className='inst'>
                        <FaTelegram/>
                    </span></a>
                    
                </div>
                <div>
                    <span><FaPhone /></span>
                    <p> Bepul maslahat: <br />
                    +998 71 205 51 51</p>
                </div>
                
                <Link to={"/advice"}>
                <button className='free'>Bepul Maslahat</button>
                </Link>
            </div>
            
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar
