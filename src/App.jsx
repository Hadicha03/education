import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './component/footer/Footer'
import Advice from './pages/advice/Advice'
import Service from './pages/service/Service'
import Worker from './pages/worker/Worker'
import Detail from './pages/detail/Detail'
import University from './pages/university/University'
import Univers from './pages/univers/Univers'
import { useEffect, useState } from 'react'

function App() {

  const [datas,setDatas]=useState( [])

  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/advice' element={<Advice/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/worker' element={<Worker/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/university' element={<University datas={datas} />}/>
      <Route path='/univers/:id' element={<Univers datas={datas} />}/>
{/* <Route path='/univers' element={<Univers/>}/> */}
    </Routes>

    <Footer/>
    </BrowserRouter>
  )
}

export default App
