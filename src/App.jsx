import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skils from './Components/Skils'
import Services from './Components/Services'
import Work from './Components/Work'
import Contect from './Components/Contect'
import Modals from './Components/Modals'

function App() {
  return (
    <div>
      <Navbar  />
      <Hero/>
      <main id="main" class="site-main">
      <About/>
      <Skils />
      <Services />
      <Work />
      <Contect/>
      </main>
      <Modals />
      </div>
  )
}

export default App
