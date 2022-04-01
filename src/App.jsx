import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

import Nav from './components/Secondary/Nav/Nav'
import Section1_Header from './components/principal/Section1_Header/Section1_Header'
import Section2_AboutUs from './components/principal/Section2_AboutUs/Section2_AboutUs'
import OurWork from './components/principal/Section3_OurWork/Section3_OurWork.jsx'
import Section4_Contact from './components/principal/Section4_Contact/Section4_Contact'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Section1_Header />
      <Section2_AboutUs />
      <OurWork />
      <Section4_Contact />
    </div >
  )
}

export default App
