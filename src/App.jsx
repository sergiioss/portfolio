import './App.scss'
import Header from './Components/Header/Header'
import Home from './Containers/Home/Home'
import { Container} from 'react-bootstrap'

function App() {
  return (
    <Container className="App">
      <Header />
      <Home/>
    </Container>
  )
}

export default App
