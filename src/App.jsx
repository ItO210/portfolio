import React from "react"
import Carousel from "./components/Carousel"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Slider from "./components/Slider"

function App() {
  return (
      <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 min-h-screen font-inter">
          <div className="max-w-5xl w-11/12 mx-auto">
            <Header/>
            <Intro/>
            <Carousel/>
            <Slider/>
            <Contact/>
            <Footer/>
          </div>
      </div>
  )
}

export default App
