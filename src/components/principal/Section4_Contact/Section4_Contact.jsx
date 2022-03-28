import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'
import './Section4_Contact.css'

function Section4_Contact() {
    return (
        <section id='Section4_Contact'>
            <h5>Get in Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <a href='mailto:nebulae.solutions.lat@gmail.com' target='_blanck'>
                            <MdOutlineMail className='contact__option-icon' />
                            <h4>Email</h4>
                            Send a message
                        </a>
                    </article>
                    <article className='contact__option'>
                        <a href='https://t.me/gonza_mz' target='_blanck'>
                            <FaTelegram className='contact__option-icon' />
                            <h4>Telegram</h4>
                        </a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' />
                    <input type="text" name='email' placeholder='Your Email' />
                    <input type="text" name='message' placeholder='Your Message' />
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>
            </div>
        </section >
    )
}

export default Section4_Contact