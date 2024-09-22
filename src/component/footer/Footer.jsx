import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTelegram,FaFacebook } from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";

import "./Footer.css"
function Footer() {
  return (
    <div>
      {/* <footer>
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
          <a href="http://instagram.com/global_edu_group"><span className='inst'><FaInstagram/> </span></a>
          <a href="https://t.me/GlobalEduGroupbot"><span className='inst'><FaTelegram/> </span></a>
                    
                
            <span><FaFacebook/></span>
         
            
          </div>
        </div>
      </footer> */}
    </div>
  )
}

export default Footer
