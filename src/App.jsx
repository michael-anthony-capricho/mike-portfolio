import { useState } from 'react'
import viteLogo from '/vite.svg'
import NavBar from './components/navbar'
import Banner from './components/banner'
import Education from './components/education'
import Projects from './components/projects'
import ContactMe from './components/contactme'
import Skills from './components/skills'
import Footer from './components/footer'

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Education />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
      
      

    </>
  )
}

export default App
