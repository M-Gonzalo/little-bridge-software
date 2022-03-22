import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

import Section1_Header from './components/principal/Section1_Header/Section1_Header'
import Section4_Contact from './components/principal/Section4_Contact/Section4_Contact'


// import Section2_AboutUs from 'components/principal/Section2_AboutUs/Section2_AboutUs.jsx'
import OurWork from './components/principal/Section3_OurWork/Section3_OurWork.jsx'
// import Section4_Contact from 'components/principal/Section4_Contact/Section4_Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <OurWork />
      <header className="App-header">
        <div className='container'>
          <h5>Element.Corp</h5>
          <h1>Page Services</h1>
          <div className='socials'>
            <a href='https://www.linkedin.com/in/vadith-gomez-21808a223/' target='_blank' rel='noreferrer'><BsLinkedin /> </a>
            <a href='https://github.com/lvadithe' target='_blank' rel='noreferrer'><FaGithub /> </a>
          </div>
          <div className='socials'>
            <a href='https://www.linkedin.com/in/gonzalo-muñoz-arg/' target='_blank' rel='noreferrer'><BsLinkedin /> </a>
            <a href='https://github.com/M-Gonzalo' target='_blank' rel='noreferrer'><FaGithub /> </a>
          </div>
        </div>
      </header >
    </div >
  )
}

export default App
