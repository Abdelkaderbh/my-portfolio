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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim convallis aenean et
              </p>
              <a href="#contact" className='btn btn-primary '> Send Me A Message </a>
          </div>
          
        </div>
      
    </section>
  )
}

export default About