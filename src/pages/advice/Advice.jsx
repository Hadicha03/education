import React, { useState } from 'react'
import "./Advice.css"
function Advice() {
    const [name,setName]=useState()
    const [number,setNumber]=useState()
    const [some,setSome]=useState()
const handleSubmit=(e)=>{
    e.preventDefault()

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
       <input onChange={(e)=>{
        setName(e.target.value)
       }} placeholder=' ismingizni kiriting' type="text" />
            <input onChange={(e)=>{
        setNumber(e.target.value)
       }} placeholder='+998 ' type="number" /><br />
            <input onChange={(e)=>{
        setSome(e.target.value)
       }} className='something' type="text" /><br />
            <button>Yuborish</button>

       </form>
        </div>
      </div>
    
  )
}

export default Advice
