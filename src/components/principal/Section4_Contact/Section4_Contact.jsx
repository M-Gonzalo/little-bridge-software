import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import './Section4_Contact.module.css'

function Section4_Contact() {
    return (
        <section id='Section4_Contact'>
            <h5>Get in Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact_options">
                    <article className='contact__option'>
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>nebulae.solutions.lat@gmail.com</h5>
                        <a href='mailto:nebulae.solutions.lat@gmail.com'>Send a message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' />
                    <input type="text" name='email' placeholder='Your Email' />
                    <input type="text" name='message' placeholder='Your Message' />
                    <button type='submit' >Send Message</button>
                </form>
            </div>
        </section >
    )
}

export default Section4_Contact