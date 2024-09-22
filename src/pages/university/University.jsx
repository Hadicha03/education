import React, { useState } from 'react'
import "./University.css"
import { Link } from 'react-router-dom'
function University({datas}) {
  
  return (
    <div>
      <div className="univ">
        <div className="container">
            <div className="univers">
           
        
              <div className="unv">
               <Link to={"/univers"}> <img src="https://studyone.uz/images/64506-IMG_2993-700x441%20(1).jpg" alt="" /></Link>
                <div>
                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                <p>Tashkent</p>
                </div>
              </div>
              <div className="unv">
                <img src="https://studyone.uz/images/64506-IMG_2993-700x441%20(1).jpg" alt="" />
                <div>
                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                <p>Tashkent</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default University



