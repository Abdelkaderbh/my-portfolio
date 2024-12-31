import React from 'react'
import './portfolio.css'
import PharmacyProject from '../../assets/PharmacyProject.png'
import PlantZ from '../../assets/PlantZ.jpg'
import RhApp from '../../assets/RhApp.png'
import NotFound from '../../assets/NotFound.jpg'



const data = [
  {
    id:1,
    image:PlantZ,
    title:'PlantZ : Plant & Disease Detection',
    github:'https://github.com/Abdelkaderbh/plants-app',
    demo:''
  },
  {
    id:2,
    image:PharmacyProject,
    title:'Online Pharmacy Store',
    github:'https://github.com/majdifkih/Online-Pharmacy-Project',
    demo:''
  },

  {
    id:3,
    image:NotFound,
    title:'Recrutement Web Application',
    github:'https://github.com/Abdelkaderbh/RecrutementWebApp',
    demo:''
  },

  {
    id:4,
    image:RhApp,
    title:'RH Managemenet App',
    github:'https://github.com/Abdelkaderbh/gestion-rh-app'
  }

  

]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Projects </h5>
      <h2>Recent Work </h2>

      <div className="container portfolioContainer">
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolioItem">
            <div className="portfolioItemImage">
              <img src={image} className="projectImg" alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolioItemCta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}   
      </div>
    </section>
  );
};

export default Portfolio