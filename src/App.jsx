import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    
      <Header/>
      <Main/>
      <Footer/>
      
    </div>
  )
}

export default App
