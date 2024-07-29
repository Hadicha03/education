import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Home from './pages/home/Home'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
