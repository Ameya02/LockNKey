import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <div className="relative bg-lavender w-full h-screen overflow-auto text-left text-xl text-darkslategray-100 font-montserrat">
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Home/>} path='/home'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Signup/>} path='/signup'/>
      <Route/>
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
