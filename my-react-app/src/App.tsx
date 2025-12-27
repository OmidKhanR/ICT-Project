import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
