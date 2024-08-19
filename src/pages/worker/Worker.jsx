import React, { useState } from 'react'
import "./Worker.css"
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Worker() {

    const [data,setData]=useState([
        {
            id:0,
            name:"Bug'alter",
            img:"./imgs/bughalter.svg",
            imgs:[
            {
              img1:"",
              img2:"",
              img3:""
            }],             
            desc:"Buxgalterning asosiy vazifasi buxgalteriya hujjatlarida kompaniyaning moliyaviy faoliyatidagi nuanslarni qayd etishdir. Ish haqi, mukofotlar va ta'til to'lovlarini hisoblash ham uning elkasida. Buxgalteriyada eng muhimi bu juda ehtiyotkorlik va aniqlik, qat'iyatlilik, sinchkovlik, narsalarni oxirigacha etkazish va ularni tartibda saqlashga intilishdir. Buxgalter kompaniyaning mablag'lari xavfsizligi uchun javobgardir va xatolar uchun u katta miqdordagi jarimalarga tortilishini anglash kerak. 90-yillardan boshlab. mehnat bozorida buxgalterlarning haddan tashqari ko'pligi mavjud, garchi haqiqatan ham yaxshi mutaxassislar hanuzgacha ishdan bo'shatilgan bo'lsa. Shuning uchun haqiqiy kasb egasi bo'lishni istagan taqdirdagina ushbu kasbni tanlashga arziydi.",
            desc2:"Yangi boshlanuvchilar uchun bitiruvdan oldin ham yarim kunlik ish topish yaxshiroqdir - hech bo'lmaganda buxgalter yordamchisi sifatida ish topish. Bu profilni aniqlashga yordam beradi - masalan, ish haqi bo'yicha mutaxassis bo'lish. Bitta kichik maydonga xizmat ko'rsatadigan yirik kompaniyalarda birinchi ish joyini qidirish yaxshiroqdir - bu sizga tajribali hamkasblar bilan maslahatlashish va javobgarlik hajmini kamaytirish imkonini beradi. Vaqt o'tishi bilan siz bosh buxgalterga yoki bir vaqtning o'zida bir nechta kichik korxonalarning buxgalteriya bo'limini yuritadigan (va shunga ko'ra, bir necha ish haqini oladigan) mustaqil mutaxassisga 'o'sishingiz' mumkin.",
            desc3:"Buxgalteriya hisobidan tashqari talabalar fuqarolik, soliq va mehnat qonunchiligini o'rganadilar, ixtisoslashtirilgan dasturlarda va huquqiy axborot tizimlarida ishlashni o'rganadilar. Buxgalter kollejda, universitetda yoki kurslarda o'qishdan tashqari, qonunchilikdagi o'zgarishlarni doimiy ravishda kuzatib borishi shart: rasmiy hujjatlar, maxsus adabiyotlarni o'qish, seminar va treninglarda qatnashish."
            
        },
        {
            id:1,
            name:"Tahlilchi",
            img:"./imgs/tahlil.svg",
            imgs:[{
                img1:"",
                img2:"",
                img3:""
            }],
            desc:"Rossiyada moliyaviy yoki investitsiya bo'yicha tahlilchi kasbi yangi deb hisoblanadi: birinchi tahlilchilar bu erda 1990-yillarda paydo bo'lgan. Shunga qaramay, u talabga javob beradi va yaxshi to'lanadi. Tahlilchilar bozorlarni va ulardagi kompaniyalarni tahlil qilish uchun javobgardir. Kompaniyaga sarmoya kiritish qanchalik istiqbolli ekanligini, uning aktsiyalarini sotib olishga arziydimi yoki aksincha, sarmoyalangan pulni yo'qotmaslik uchun aktivdan qutulish vaqti kelganini ular aniqlaydilar. Buning uchun tahlilchilar kompaniyalarning bozordagi hisobotlarini o'rganadilar, ularning menejmenti bilan aloqa qiladilar, marketing tadqiqotlari va raqobatchilarning holatini kuzatadilar.",
            desc2:"Tahlilchilar investitsiya fondlarida, banklarda, konsalting firmalarida yoki brokerlik kompaniyalarida, shuningdek to'g'ridan-to'g'ri bozor o'yinchilarida ishlaydi. Ikkinchi holatda, tahlilchi shuningdek, kompaniyaning qiymatini oshirish bo'yicha ishlaydi va kompaniya manevr qilishi kerak bo'lgan imkoniyatlar va xatarlarni doimiy ravishda kuzatib boradi. U menejmentga u yoki bu biznes yo'nalishidagi investitsiyalarni kengaytirishni yoki aksincha, bo'linmalardan birini sotishni tavsiya qilishi mumkin, agar bu uzoq muddatli istiqbolda bu faqat zarar keltirsa.",
            desc3:"Moliyaviy tahlilchi bo'lish uchun sizga iqtisod, matematika yoki moliya bo'yicha kollej ma'lumoti kerak. Shuningdek, bo'lajak tahlilchi ixtisoslashgan dasturlar va Bloomberg terminallari bilan ishlashni, rus va xorijiy hisobot standartlarini bilishni va ingliz tilini yaxshi bilishni o'rganishi kerak."
        },
        {
            id:2,
            name:"Me'mor",
            img:"./imgs/memor.svg"
        },
        {
            id:3,
            name:"Avtomobil mexanik",
            img:"./imgs/mexanikav.svg"
        },
        {
            id:4,
            name:"Biznes tahlilchi",
            img:"./imgs/tahlil.svg"
        },
         {
            id:5,
            name:"Dizayner",
            img:"./imgs/des.svg"
        },
         {
            id:6,
            name:"Bosh muharrir",
            img:"./imgs/bmuh.svg"
        }, 
        {
            id:7,
            name:"Muhandis quruvchi",
            img:"./imgs/mq.svg"
        },
        {
            id:8,
            name:"Moliyaviy menejer",
            img:"./imgs/mmen.svg"
        },
        {
            id:9,
            name:"Grafik Dizayner",
            img:"./imgs/gd.svg"
        },
        {
            id:10,
            name:"HTML kodlovchi",
            img:"./imgs/html.svg"
        },
        {
            id:11,
            name:"Jurnalist",
            img:"./imgs/jurn.svg"
        }, {
            id:12,
            name:"Tilshunos",
            img:"./imgs/til.svg"
        }, {
            id:13,
            name:"Marketolog",
            img:"./imgs/market.svg"
        }, {
            id:14,
            name:"Ijtimoiy media marketing",
            img:"./imgs/imm.svg"
        }, {
            id:15,
            name:"Jarroh",
            img:"./imgs/jh.svg"
        }, {
            id:16,
            name:"O'qituvchi",
            img:"./imgs/oqit.svg"
        }, {
            id:17,
            name:"Sayohat agenti",
            img:"./imgs/sayy.svg"
        },
        {
            id:18,
            name:"Veterinar",
            img:"./imgs/vet.svg"
        },
        {
            id:19,
            name:"Veb dizayner",
            img:"./imgs/vd.svg"
        },
    ])
  return (

    <div className='wr'>
      <div className="worker">
        <div className="container">
            {
                data.map((item)=>{
                    return (<div  className="work"  >
                    <img src={item.img} alt="" />
                    <h3>{item.name}</h3>
                    <Link to={`/recipe/${item.id}`}>
                    <button>Batafsil</button>
                    </Link>
                </div>)
                })
            }



            {/* <div className="work">
                <img src="./imgs/tahlil.svg" alt="" />
                <h3>Tahlilchi</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/memor.svg" alt="" />
                <h3>Me'mor</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/mexanikav.svg" alt="" />
                <h3>Avtomobil Mexanik</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/btahlil.svg" alt="" />
                <h3>Biznes tahlilchisi</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/des.svg" alt="" />
                <h3>Dizayner</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/bmuh.svg" alt="" />
                <h3>Bosh muharrir</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/mq.svg" alt="" />
                <h3>Muhandis quruvchi</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/mmen.svg" alt="" />
                <h3>Moliyaviy menejer</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/gd.svg" alt="" />
                <h3>Grafik Dizayner</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/html.svg" alt="" />
                <h3>HTML kodlovchi</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/jurn.svg" alt="" />
                <h3>Jurnalist</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/til.svg" alt="" />
                <h3>Tilshunos</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/market.svg" alt="" />
                <h3>Marketolog</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/imm.svg" alt="" />
                <h3>Ijtimoiy media marketing</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/jh.svg" alt="" />
                <h3>Jarroh</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/oqit.svg" alt="" />
                <h3>O'qituvchi</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/sayy.svg" alt="" />
                <h3>Sayohat agenti</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/vet.svg" alt="" />
                <h3>Veterinar</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div>
            <div className="work">
                <img src="./imgs/vd.svg" alt="" />
                <h3>Veb dizayner</h3>
                <Link>
                <button>Batafsil</button>
                </Link>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Worker
