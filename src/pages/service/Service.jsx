import React from 'react'
import "./Service.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
function Service() {
   
  return (
    <div>
      <div className="amenity">
        <div className="container">
            <div className="help" >
                <div className="h_help" >
                    <h1>Grantlar olishda yordam</h1>
                    <p>Biz sizga dasturni tanlashda va chet el universitetlaridan grant olish uchun hujjat topshirishda yordam beramiz</p>
                    <button>Maslahat</button>
                </div>
                <div className="h_right" >
                    <img src="./imgs/advice.jpg" alt="" />
                </div>
            </div>
            <div className="help" >  
                <div className="h_right">
                    <img src="./imgs/choose.jpg" alt="" />
                </div>
                <div className="h_help" >
                    <h1>15 daqiqada universitet tanlash</h1>
                    <p>Abituriyent talablariga mos o'quv muassasasini tanlash</p>
                    <button>Maslahat</button>
                </div>
            </div>
            <div className="help" >
                <div className="h_help">
                    <h1>Hujjatlarni yig'ishda yordam</h1>
                    <p>Qabul qilishning har bir bosqichida sizga hujjatlar bilan bog'liq masalalarda yordam beramiz</p>
                    <button>Maslahat</button>
                </div>
                <div className="h_right" >
                    <img src="./imgs/document.jpg" alt="" />
                </div>
            </div>
            <div className="help" >
                 <div className="h_right">
                    <img src="./imgs/end.jpg" alt="" />
                </div>
                <div className="h_help" >
                    <h1>Qabuldan keyingi yordam</h1>
                    <p>Ta'lim jarayonida ham biz har doim sizni qo'llab-quvvatlashga tayyormiz</p>
                    <button>Maslahat</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
