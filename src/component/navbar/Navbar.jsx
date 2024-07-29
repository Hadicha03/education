import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
         <div className='logo_ul'>
        <NavLink to={"/home"}>
        <div className="logo">
                <img src="./public/imgs/logo.jpg" alt="" />
            </div>
        </NavLink>
            <ul className="link">
                <NavLink>
                    <li>Universitetlar</li>
                </NavLink>
                <NavLink>
                    <li>Xizmatlar</li>
                </NavLink>
                <NavLink>
                    <li>Kasblar</li>
                </NavLink>
            </ul>
         </div>
            <div className="social">
            <div>
                    <span className='inst'><FaInstagram/> </span>
                </div>
                <div>
                    <span className='inst'>
                        <FaTelegram/>
                    </span>
                </div>
                <div>
                    <span><FaPhone /></span>
                    <p> Bepul maslahat: <br />
                    +998 71 205 51 51</p>
                </div>
                
                
            </div>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar
