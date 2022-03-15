import React from 'react'
import './about.css'
import myImage from '../../assets/myImg.jpg'
import {FaAward,FaUsers,FaReact} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      
      <h5> Want To know more ?</h5> 
      <h2>about me </h2> 

      <div className="container about_container">
        <div className="aboutMe">
          <div className="aboutme_img">
            <img src={myImage} alt=""  />
            </div>
         </div> 
          <div className="about_content">
            <div className="about_cards">

              <article className='about_card'>
                <FaAward className='aboutIcon'/>

                <h5> 
                  Experience
                </h5>

                <span>
                  1+ Years 
                </span>
                

                </article>

                <article className='about_card'>
                <FaUsers className='aboutIcon'/>

                <h5> 
                  Clients
                </h5>
                <span >
                  3+ Worldwide 
                </span>
                </article>

                <article className='about_card'>
                <FaReact className='aboutIcon'/>

                <h5> 
                  Projects 
                </h5>

                <span >
                  12+  Projects
                </span>
                </article>
              </div>


              <p>
                  Extremely motivated to constantly develop my skills and
                  evolve professionally in the field of web and mobile
                  development. I am confident in my ability to come up with
                  interesting ideas and very open to team work.
              </p>
              <a href="#contact" className='btn btn-primary '> Send Me A Message </a>
          </div>
          
        </div>
      
    </section>
  )
}

export default About