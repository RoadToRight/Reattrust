import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import { About } from './Components/About'

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About/>
      <Footer />
    </div>
  )
}

export default App