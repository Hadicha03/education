import React from 'react'
import { LiaUniversitySolid } from "react-icons/lia";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa6";
import { GiDiploma } from "react-icons/gi";
import { PiPushPinThin } from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";
import { VscLayers } from "react-icons/vsc";
import { RiEarthFill } from "react-icons/ri";
import "./Home.css"
function Home() {
  return (
    <div className='home'>
      <div className="hero">
        <div className="container">
      <div className="about">
      <span className='global'>Global Edu Group </span>
        <h1 className='bealive'>Sizning ishonchli  hamrohingiz </h1>
      </div>

       
          

        </div>
      </div>
      <main>
        <section className='service'>
          <div className="container">
          
         
          <div className="hero_info">
            <h1 className='h_desc'>Biz bilan ishonchli tarzda talaba  bo'ling!</h1>
     <div className="services">
     <div>
              <span><LiaUniversitySolid/></span>
              <p>Nufuzli oliygohlar</p>
            </div>
            <div>
              <span><VscLayers/></span>
              <p>70 dan ortiq yo'nalishlar</p>
            </div>
            <div>
              <span><RiFilePaper2Line/></span>
              <p>Litsenziya</p>
            </div>
            <div>
              <span><FaLaptopCode/></span>
              <p>Hemis dasturi</p>
            </div>
            <div>
              <span><GiDiploma/></span>
              <p>O'zbekiston va Xalqaro diplom</p>
            </div>
            <div>
              <span><RiEarthFill/></span>
              <p>Qo'shma dasturlar:(2+2),(3+1)</p>
            </div>
            <div>
              <span><PiPushPinThin/></span>
              <p>O'qish davomida amaliyot</p>
            </div>
            <div>
              <span><FaSackDollar/></span>
              <p>Hamyonbop kontraktlar</p>
            </div>
     </div>
          </div>
          <div className="hero_img">
            <img src="./imgs/worker.jpg" alt="" />
          </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
