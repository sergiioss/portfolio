import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Containers/Home/Home'
import Footer from './Components/Footer/Footer'
import { Container} from 'react-bootstrap'

function App() {
  return (
    <Container className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  )
}

export default App
