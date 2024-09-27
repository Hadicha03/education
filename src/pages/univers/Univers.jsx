import React from 'react'
import "./Univers.css"
import { useNavigate, useParams } from 'react-router-dom'

function Univers({datas}) {
  const {id}=useParams()
    const product = datas.filter((item)=>{
        return item.id == id
      })
   
    
    // const navigate = useNavigate()
  return (
    <div className='universes'>
      <div className="container">
        <div className="univer_info">
          <h2>{product[0]?.name}</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, velit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde aliquam totam id quisquam tempore earum eius illum nulla neque distinctio quod magni odio, esse voluptatum deserunt itaque. Cupiditate, fuga dolorum!
          </p>
        </div>
        <div className="univer_img">
          <img src={product[0]?.attachment.url} alt="" />
        </div>
      
      </div>
    </div>
  )
}

export default Univers


