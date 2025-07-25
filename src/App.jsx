import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contactus from './Components/Pages/Contactus';
import Login from './Components/Login';
import Profile from './Components/Pages/Profile';
import MenuPage from './Components/Pages/MenuPage';

// import './App.css'

import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
	 <BrowserRouter>
	 <Routes>
            <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
		<Route path="/Contactus" element={<Contactus />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/menu" element={<MenuPage />} />

      </Routes></BrowserRouter>
  )
}

export default App
