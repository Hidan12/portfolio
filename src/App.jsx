import { useSelector } from 'react-redux'
import './App.css'
import { Hero } from './components/hero/Hero'
import { NavBar } from './components/navBar/NavBar'
import { AboutMe } from './components/aboutMe/AboutMe'
import { Proyects } from './components/proyects/Proyects'
import { useEffect, useRef, useState } from 'react'
import { Footer } from './components/footer/Footer'

function App() {
  const { dark } = useSelector(store => store.reducerTheme)
  
  const scroll = (elemen)=>{
    const elementScroll = document.getElementById(elemen)
    elementScroll.scrollIntoView({
      behavior: 'smooth'
     })
  }

  return (
    <>
     <NavBar navScroll={scroll} />
     <Hero/>
     <main className={`w-full flex flex-col items-center ${dark ? "bg-black" : "bg-white"}`}>
      <div className='w-[80vw]'>
        <div >
          <AboutMe /> 
        </div>
        <Proyects/>
      </div>
     </main>
     <Footer/>
    </>
  )
}

export default App
