import React from 'react'
import Logo from '../../../assets/logo.png'
import './Nav.css'

function Nav() {
    return (
        <>
            <div className="nav">
                <a href="#" className="nav__link">
                    nebulae
                </a>
                <div className="bars"></div>
                <div className="nav__menu">
                    <a className='nav__link' href="#Home">
                        Home
                    </a>
                    <a className='nav__link' href="#About">
                        About
                    </a>
                    <a className='nav__link' href="#Our__Work">
                        Our Work
                    </a>
                    <a className='nav__link' href="#Contact">
                        Contact
                    </a>
                </div>
                <a href="#Contact" className="nav__link">
                    <img src={Logo} alt="" />
                </a>
            </div>
        </>
    )
}

export default Nav