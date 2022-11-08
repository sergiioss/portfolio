import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Containers/Home/Home'
import Footer from './Components/Footer/Footer'
import img1 from './assets/img1.jpg'

function App() {
  return (
    <div className="App">
      <img className="fondo" src={img1} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
