import React, { useState } from 'react'
import "./Advice.css"

function Advice() {
    const [name,setName]=useState()
    const [number,setNumber]=useState()
    const [some,setSome]=useState()
 

const handleSubmit=(e)=>{
    e.preventDefault()


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "fullName": name,
      "phone": number
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("https://d187-178-218-201-17.ngrok-free.app/api/advice", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    
}
  return (
   
      <div className="advice">
        <div className="container">
        <div className='adv_info' >
        <h1>Bepul maslahat oling</h1>
        
        <form onSubmit={handleSubmit} className='form' action="">
        <input value={name} onChange={(e)=>{
         setName(e.target.value)
        }} placeholder=' ismingizni kiriting' type="text" />  <br />
             <input value={number} onChange={(e)=>{
         setNumber(e.target.value)
        }} placeholder='+998 ' type="number" /><br />
            <br />
             <button>Yuborish</button>
 
        </form>
        </div>
       <div className='adv_img'>
        <img src="./imgs/adv.jpg" alt="" />
       </div>
        </div>
      </div>
    
  )
}

export default Advice
