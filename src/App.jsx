import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

import Section1_Header from './components/principal/Section1_Header/Section1_Header'
import Section4_Contact from './components/principal/Section4_Contact/Section4_Contact'


// import Section2_AboutUs from 'components/principal/Section2_AboutUs/Section2_AboutUs.jsx'
// import Section3_OurWork from 'components/principal/Section3_OurWork/Section3_OurWork.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section1_Header />
      <Section4_Contact />
    </>
  )
}

export default App
