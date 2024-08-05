import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './component/footer/Footer'
import Advice from './pages/advice/Advice'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/advice' element={<Advice/>}/>

      
    </Routes>

    <Footer/>
    </BrowserRouter>
  )
}

export default App
