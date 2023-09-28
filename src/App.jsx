import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <div className="relative bg-lavender w-full h-[1024px] overflow-hidden text-left text-xl text-darkslategray-100 font-montserrat">

    <Navbar />
    <Home />
    </div>
  )
}

export default App
