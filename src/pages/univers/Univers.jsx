import React from 'react'
import "./Univers.css"
import { useNavigate, useParams } from 'react-router-dom'

function Univers({datas}) {
    const product = datas.filter((item)=>{
        return item.id == id
      })
    const {id}=useParams()
    
    const navigate = useNavigate()
  return (
    <div>
      
    </div>
  )
}

export default Univers


