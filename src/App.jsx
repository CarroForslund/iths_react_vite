import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
