import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTelegram,FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import "./Footer.css"
function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="logo">
            <img src="./imgs/logo.jpg" alt="" />
            
          </div>
          <ul className="link">
            <NavLink>
              <li>
            Universitetlar
              </li>
            </NavLink>
            <NavLink>
              <li>
                Xizmatlar
              </li>
            </NavLink>
            <NavLink>
              <li>
                Kasblar
              </li>
            </NavLink>
            <NavLink>
              <li>
               FAQ
              </li>
            </NavLink>
          </ul>
          <div className="socials">
            <span><FaTelegram/></span>
            <span><FaFacebook/></span>
            <span><RiInstagramLine/></span>
            
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
