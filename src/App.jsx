
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import View from './pages/View'
import Header from './components/Header'
import Footer from './components/Footer'
import Pnf from './pages/Pnf'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/view" element={<View />} />
        <Route path='/*' element={<Pnf/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
