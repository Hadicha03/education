import React from 'react'
import { FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function Question({answer,plus,setPlus}) {
    const handle=()=>{
    setPlus(!plus)
    }
  return (
    <div>
      {answer.map((item)=>{
     return (
        <div className="plus">
        <h2>{item.name}</h2>
        {plus ? <div className='desc'>
         <p>{item.desc}</p>
        </div> : <div></div>}
       { !plus ? <button onClick={()=>{
            setPlus(!plus)
           }} className='btn'><FaPlus/></button> :  <button className='btn2' onClick={()=>{
            setPlus(!plus)
           }}><RxCross1/></button>
     
       }
        
        </div>
     )
      })}
    </div>
  )
}

export default Question
