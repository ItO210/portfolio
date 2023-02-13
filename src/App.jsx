import React from "react"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Slider from "./components/Slider"

function App() {
  return (
      <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300 font-inter">
          <div>
            <Intro/>
            <Slider/>
            <Contact/>
            <Footer/>
          </div>
      </div>
  )
}

export default App
