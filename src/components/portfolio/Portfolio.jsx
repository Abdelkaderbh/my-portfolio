import React from 'react'
import './portfolio.css'
import WebPorject from '../../assets/WebProject.png'
import LandingProject from '../../assets/LandinfProject.png'



const data = [
  {
    id:1,
    image:WebPorject,
    title:'Medico - Book Online Doctors',
    github:'http://github.com',
    demo:'http://github.com'
  },
  {
    id:2,
    image:LandingProject,
    title:'Giro - Multipurpose Landing Page',
    github:'https://github.com/Abdelkaderbh/Landing-Page',
    demo:'https://giro-landingpage.netlify.app'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Projects </h5>
      <h2>Recent Work </h2>

      <div className="container portfolioContainer">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
                      <article key={id} className='portfolioItem'>
                              <div className="portfolioItemImage">
                                    <img src={image} className=' projectImg' alt={title} />
                              </div>
                               <h3> {title} </h3>
                              <div className="portfolioItemCta">
                                  <a href={github} className='btn' target="_blank"> Github </a>
                                  <a href={demo} className='btn btn-primary' target="_blank"> Live Demo </a>
                              </div>
                        </article>   
            ) 
          })
        }    
      </div>
    </section>
  )
}

export default Portfolio