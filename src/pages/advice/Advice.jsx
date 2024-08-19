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
        <h1>Bepul maslahat olish uchun 3 qadam</h1>
        <ol className="linkes">
            <li> Shaklni to'ldiring</li>
            <li> Universitetlar ro'yxatini yuklab oling</li>
            <li>Universitetni tanlang va bepul maslahat oling</li>
        </ol>
       <form onSubmit={handleSubmit} className='form' action="">
       <input value={name} onChange={(e)=>{
        setName(e.target.value)
       }} placeholder=' ismingizni kiriting' type="text" />
            <input value={number} onChange={(e)=>{
        setNumber(e.target.value)
       }} placeholder='+998 ' type="number" /><br />
           <br />
            <button>Yuborish</button>

       </form>
        </div>
      </div>
    
  )
}

export default Advice
