import React from 'react'
import CTA from './CTA'
import './header.css'
import myImage from '../../assets/myImg.png'
import Socials from './Socials'


const Header = () => {
  return (
   <header>
     <div className="container header_container">
       <h5>
         Hello I'm 
       </h5>

       <h1>
         Abdelkader Ben Hssan
       </h1>

       <h5 className="text-light">
            Full Stack MERN Developer
        </h5>

        <div className="myImg">
                    <img src={myImage} className='My' />
        </div>

        <CTA />
        <Socials />

              
              <a href="#contact" className='scroll_down'> Scroll Down </a>
        </div>
   </header>
  )
}

export default Header