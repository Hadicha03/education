import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import AOS from 'aos'
import 'aos/dist/aos.css'
function Question({answer}) {
  // useEffect(()=>{
  //   AOS.init({duration:1500})
  //  },[])


  return (
    <div>
      {answer.map((item)=>{
         const [plus,setPlus]=useState(false)
     return (
        <div className="plus" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
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
