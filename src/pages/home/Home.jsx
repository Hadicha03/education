import React, { useEffect, useState } from 'react'
import { LiaUniversitySolid } from "react-icons/lia";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa6";
import { GiDiploma } from "react-icons/gi";
import { PiPushPinThin } from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";
import { VscLayers } from "react-icons/vsc";
import { RiEarthFill } from "react-icons/ri";
import {  FaTelegram,FaTelegramPlane } from "react-icons/fa";

import AOS from 'aos'
import 'aos/dist/aos.css'
import "./Home.css"
import Question from '../question/Question';
function Home() {
  
 useEffect(()=>{
  AOS.init({duration:1500})
 },[])
  const [answer,setAnswer]=useState([
    {
      name:"Nostrifikatsiya nima?",
      desc:"Nostrifikatsiya (nemischa Nostrifikatsiya, lot. Noster - bizning va lot. Facere - qilish) - bu chet davlatlarning ta'lim hujjatlarini tan olish tartibi, ya'ni ushbu hujjatlarning amal qilish muddati to'g'risida tegishli davlat organlarining roziligi."
    },
    {
      name:"Xorijiy OTMlarning diplomi bilan ish topish?",
      desc:"Ha, mumkin. Siz O'zbekistonda diplomingizni nostrifikatsiya qilasiz."
    },
    {
      name:"Nostrifikatsiya  O'zbekistonda qayerga amalga oshiriladi?",
      desc:"Diplomlarni tan olish va nostrifikatsiyalash uchun arizalarni qabul qilish faqat Davlat xizmatlari markazlari yoki Yagona interaktiv davlat xizmatlari portali orqali amalga oshiriladi."
    },
    {
      name:"Xorijiy universitetlardan O'zbekistondagi universitetlarga o'tishda qanday muammolar paydo bo'ladi?",
      desc:"- fuqaroning doimiy yashash joyida (agar bu oliy o'quv yurtining salohiyati (qamrovi) yoki tegishli yo'nalishdagi oliy o'quv yurtida bakalavr ma'lumoti yo'qligi sababli mumkin bo'lmasa) istisno asosida boshqa sohaga tavsiya qilinishi mumkin); - talaba tahsil olayotgan bakalavriat ta'lim yo'nalishining ko'chirilgan bakalavr yo'nalishi bilan muvofiqligi (bunday yo'nalish bo'lmagan taqdirda, tegishli yo'nalish taklif etiladi); - talaba chet elda tahsil olayotgan bakalavriat ta'limi yo'nalishlarining o'ziga xos xususiyatlarini hisobga olgan holda, sirtqi va kechki o'qish shakllari odatda tavsiya etiladi; - talabalar boshqa universitetga o'tkazishda O'zbekiston oliy o'quv yurtlarining mavjud imkoniyatlari (xususan, moddiy-texnika bazasi, smena nisbati, professor-o'qituvchilar tarkibining shtat darajasi va boshqalar) hisobga olinadi. );"
    },
    {
      name:"Xorijiy universitetlardan O'zbekistondagi oliy o'quv yurtlariga o'tish uchun qanday hujjatlar to'plash kerak?",
      desc:"Fuqarolar hududiy ishchi guruhlarga quyidagi hujjatlarni taqdim etishlari shart: - ariza (o'sha yerda to'ldirilishi kerak); - reyting daftarchasi yoki transkript nusxasi; - pasport nusxasi; O'tkazilgan talabalar respublika oliy o'quv yurtlarida o'qishni faqat pullik-shartnoma asosida davom ettirishlari mumkin 'Agar sizda biron bir savol bo'lsa, to'g'ridan-to'g'ri mintaqaviy ishchi guruhlarga murojaat qilishingiz yoki Oliy va o'rta maxsus ta'lim vazirligining quyidagi raqamlariga qo'ng'iroq qilishingiz mumkin - 71-246-38-57', - deyiladi Ta'lim sifatini nazorat qilish davlat inspektsiyasida."
    },
    {
      name:"Qaysi universitetlardan imtihonsiz(to'g'ridan to'g'ri) o'tishim mumkin?",
      desc:"Chet elda berilgan ta'lim to'g'risidagi hujjatlarni tan olish va nostrifikatsiyalashning yangi tartibi 2019 yil 1 martdan joriy qilingan. U Prezidentning 2019 yil 16 yanvardagi farmoni bilan tasdiqlangan. № PP-4119. Xususan, xalqaro miqyosda tan olingan tashkilotlar reytingida birinchi o'rinlarni egallagan (Quacquarelli Symonds World University Rankings, Times Higher Education, Academic Ranking of xorijiy ta'lim muassasalarini bitirgan) fuqarolar uchun ta'lim hujjatlari to'g'ridan-to'g'ri (maxsus testlarsiz) tan olinadi va nostrifikatsiya qilinadi. Jahon universitetlari)."
    },
  ])
  return (
    <div className='home'>
      <div className="tg">
        <a href="https://t.me/GlobalEduGroupbot">
        <span className='tgm'>
   <FaTelegramPlane className='tel'/>
        </span>
        </a>
       
      </div>
      <div className="hero">
       <div className="black">
       <div className="container">
      <div className="about" data-aos="zoom-in">
      <span className='global'>Global Edu Group </span>
        <h1 className='bealive'>Sizning ishonchli  hamrohingiz </h1>
      </div>
      <div className="cards">
        <div className="card c1" data-aos="zoom-out-up">
          <h1>6000 +</h1>
          <p>Qabul qilingan talabalar</p>
        </div>
        <div className="card" data-aos="zoom-out-up">
          <h1>25 +</h1>
          <p>Ta'lim muassasalari</p>
        </div>
        <div className="card" data-aos="zoom-out-up">
          <h1>215 +</h1>
          <p>Mutaxassisliklar</p>
        </div>
        <div className="card" data-aos="zoom-out-up">
          <h1>15 +</h1>
          <p>Hamkor davlatlar</p>
        </div>
        
      </div>
        </div>
       </div>
      </div>
      <main>
        <section className='service'>
          <div className="container">
          <div className="hero_info" data-aos="fade-right" >
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
          <div className="hero_info info_med" >
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
          <div className="hero_img" data-aos="fade-left">
            <img src="./imgs/worker.jpg" alt="" />
          </div>
          <div className="hero_img img_med" >
            <img src="./imgs/worker.jpg" alt="" />
          </div>
          </div>
        </section>
        {/* <section className='serv'>
       <div className="container">
        <h1>Bizning xizmatlarimiz</h1>
        <p className='we_desc'>Biz universitetni tanlaymiz va qabul qilishda yordam beramiz</p>
      <div className="our_service">
        <div className='box' data-aos="zoom-in">
          <img src="./imgs/first.png" alt="" />
          <h3>Bepul maslahat</h3>
          <div>
            <p>Biz universitet yo'nalishlari, hujjatlar va imtihonlar haqida batafsil ma'lumot beramiz</p>
          </div>
        </div>
        <div className='box' data-aos="zoom-in">
          <img src="./imgs/second.png" alt="" />
          <h3>15 daqiqada universitet tanlash</h3>
          <div>
            <p>Abituriyent talablariga mos keladigan o'quv muassasasini tanlashda ko'maklashish</p>
          </div>
        </div>
        <div className='box' data-aos="zoom-in">
          <img src="./imgs/third.png" alt="" />
          <h3>Hujjatlarni yig'ishda yordam</h3>
          <div>
            <p>Qabulning har bir bosqichida sizga hujjatlar bilan bog'liq masalalarda yordam beramiz</p>
          </div>
        </div>
        <div className='box' data-aos="zoom-in">
          <img src="./imgs/fourth.png" alt="" />
          <h3>Qabul strategiyasini ishlab chiqish</h3>
          <div>
            <p>Siz tanlagan ta'lim muassasasiga kirish uchun aniq reja tuzamiz</p>
          </div>
        </div>
        <div className='box' data-aos="zoom-in">
          <img src="./imgs/fiveth.png" alt="" />
          <h3>Grantlar va stipendiyalar olishda yordam</h3>
          <div>
            <p>Chet el universitetlaridan grant olish uchun hujjat topshirishda yordam beramiz</p>
          </div>
        </div>
      </div>
       </div>
        </section>
        <section>
          <div className="container">
            <div className="questions">
             <h1>Tez-tez so'raladigan savollar</h1>  
             <div className="quetion">
            <Question answer={answer} />
             </div>
            </div>
          </div>
        </section> */}
      </main>
      {/* <div className="map" data-aos="zoom-in">
        <h1>Bizning manzilimiz !</h1>
      <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95915.88302474088!2d69.15082083297038!3d41.300784570026465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6100685ee4b9%3A0xda10feb00f36bbeb!2sGlobal%20edu%20Group!5e0!3m2!1sen!2s!4v1723326479413!5m2!1sen!2s"></iframe>
      </div> */}
    </div>
    // data-aos="fade-right"
    // data-aos="fade-left"
  )
}

export default Home
