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
    <div className='universes'>
      <div className="container">
        <div className="univer_info">
          <h2>Tashkent dkkfkfkfhlk kjjhdkfjsdmkf kdjhsakjhkf</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita provident illo et ratione labore sed cumque eligendi. Veritatis deleniti quod consequatur aliquam iure, assumenda provident sint reprehenderit dolores rerum, minima excepturi error esse? Odio labore harum necessitatibus id laborum reprehenderit aspernatur molestiae, eum excepturi maxime, deleniti impedit hic quod consequuntur.</p>
        </div>
        <div className="univer_img">
          <img src="https://studyone.uz/images/64506-IMG_2993-700x441.jpg" alt="" />
        </div>
      
      </div>
    </div>
  )
}

export default Univers


