import React,{useRef} from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
 

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gi5iiea', 'template_8rw4k4c', form.current, 'b4tMUGqeYbrzdaYOe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2> Contact </h2>
        <div className="container contactContainer">
          <div className="contactOptions">
                <article className="contactOption">
                      <MdEmail className='contactIcon'/>
                      <h4>Email</h4>
                      <h5>gaderbh2@gmail.com</h5>
                      <a href="mailto:gaderbh2@gmail.com"> Send a message </a>
                </article>

                <article className="contactOption">
                      <RiMessengerLine className='contactIcon'/>
                      <h4>Messenger</h4>
                      <h5>Gadour Ben Hassen</h5>
                      <a href="https//m.me/Gadour.BH" target="_blank"> Send a message </a>
                </article>

                <article className="contactOption">
                      <BsWhatsapp className='contactIcon'/>
                      <h4>Whats'app</h4>
                      <h5>+216 52 33 01 63</h5>
                      <a href="https://api.whatsapp.com/send?phone=+21652330163" target="_blank"> Send a message </a>
                </article>
          </div>

                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" id=""  placeholder='Your Full Name' required/>
                            <input type="email" name="email" id="" placeholder='Your Email' required/>
                            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
                            <button type='submit' className='btn btn-primary'> Send Message </button>
                        </form>
                        
        </div>



    </section>
  )
}

export default Contact