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
        <section className='serv'>
       <div className="container">
        <h1>Bizning xizmatlarimiz</h1>
        <p className='we_desc'>Biz universitetni tanlaymiz va qabul qilishda yordam beramiz</p>
      <div className="our_service">
        <div className='box'>
          <img src="./imgs/first.png" alt="" />
          <h3>Bepul maslahat</h3>
          <div>
            <p>Biz universitet yo'nalishlari, hujjatlar va imtihonlar haqida batafsil ma'lumot beramiz</p>
          </div>
        </div>
        <div className='box'>
          <img src="./imgs/second.png" alt="" />
          <h3>15 daqiqada universitet tanlash</h3>
          <div>
            <p>Abituriyent talablariga mos keladigan o'quv muassasasini tanlashda ko'maklashish</p>
          </div>
        </div>
        <div className='box'>
          <img src="./imgs/third.png" alt="" />
          <h3>Hujjatlarni yig'ishda yordam</h3>
          <div>
            <p>Qabulning har bir bosqichida sizga hujjatlar bilan bog'liq masalalarda yordam beramiz</p>
          </div>
        </div>
        <div className='box'>
          <img src="./imgs/fourth.png" alt="" />
          <h3>Qabul strategiyasini ishlab chiqish</h3>
          <div>
            <p>Siz tanlagan ta'lim muassasasiga kirish uchun aniq reja tuzamiz</p>
          </div>
        </div>
        <div className='box'>
          <img src="./imgs/fiveth.png" alt="" />
          <h3>Grantlar va stipendiyalar olishda yordam</h3>
          <div>
            <p>Dasturni tanlashda va chet el universitetlaridan grant olish uchun hujjat topshirishda yordam beramiz</p>
          </div>
        </div>
      </div>
       </div>
        </section>
      </main>
    </div>
  )
}

export default Home
