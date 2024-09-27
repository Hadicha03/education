import React, { useState } from 'react'
import "./University.css"
import { Link } from 'react-router-dom'
function University({datas}) {
  
  return (
    <div>
      <div className="univ">
        <div className="container">
            <div className="univers">
           
        
              {datas?.map((item)=>{
                return ( <div className="unv">
                <Link to={`/univers/${item.id}`}> <img src={item.attachment.url} alt="" /></Link>
                 <div>
                 <h2>{item.name}</h2>
                 <p>{item.place}</p>
                 </div>
               </div>)
              })}
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default University



