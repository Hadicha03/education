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

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/advice' element={<Advice/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/worker' element={<Worker/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/university' element={<University/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
  )
}

export default App
