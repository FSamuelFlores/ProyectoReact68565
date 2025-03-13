import { useState } from 'react'
import './index.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:id" element={<ItemListContainer/>} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
