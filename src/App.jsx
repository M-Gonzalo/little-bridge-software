import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

import Section1_Header from './components/principal/Section1_Header/Section1_Header'
// import Section2_AboutUs from 'components/principal/Section2_AboutUs/Section2_AboutUs.jsx'
import OurWork from './components/principal/Section3_OurWork/Section3_OurWork.jsx'
import Section4_Contact from './components/principal/Section4_Contact/Section4_Contact'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Section1_Header />
      <OurWork />
      <Section4_Contact />
    </div >
  )
}

export default App
