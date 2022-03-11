import React from 'react'
import './exper.css'
import  {FaVuejs,FaHtml5,FaNodeJs} from 'react-icons/fa'
import {DiJavascript1,DiReact,DiJqueryLogo,DiCss3Full,DiBootstrap,DiNodejs,DiPython} from 'react-icons/di'
import {SiDjango} from 'react-icons/si'

const Exper = () => {
  return (
    <section id='experience'>
      <h5> My Skills </h5>
      <h2> My Experience </h2>
      <div className="conatianer experience_container">
        <div className="frontEnd">
          <h3>Front-End</h3>
          <div className="experience_content">
            <article className='exerpience_details'>
            <FaHtml5 className='exerpienceIcon' />
                  <div>
                      <h4> HTML </h4>
                      <small className='text-light'> Experienced </small>
                  </div>
            </article>
            <article className='exerpience_details'>
            <FaVuejs className='exerpienceIcon'/>
                <div>
                      <h4> VueJs </h4>
                      <small className='text-light'> Basics </small>
                </div>
            </article>
            <article className='exerpience_details'>
            <DiReact className='exerpienceIcon' />
                <div>
                    <h4> ReactJs </h4>
                    <small className='text-light'> Intermediate </small>
                </div>
            </article>
            <article className='exerpience_details'>
            <DiCss3Full className='exerpienceIcon'/>
            <div>
            <h4> CSS </h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>
            <article className='exerpience_details'>
            <DiBootstrap className='exerpienceIcon'/>
                <div>
                  <h4> BOOTSTRAP </h4>
                  <small className='text-light'> Experienced </small>
                </div>
            </article>
            <article className='exerpience_details'>
            <DiJavascript1 className='exerpienceIcon'/>
            <div>
            <h4> JavaScript </h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>
            </div>
          </div>

          <div className="BackEnd">
          <h3>Back-End</h3>
          <div className="experience_content">
            <article className='exerpience_details'>
            <FaNodeJs className='exerpienceIcon'/>
            <div>
            <h4> Nodejs </h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>
            <article className='exerpience_details'>
            <SiDjango className='exerpienceIcon'/>
            <div>
            <h4> Django </h4>
            <small className='text-light'> Intermediate </small>
            </div>
            </article>
            <article className='exerpience_details'>
            <DiPython className='exerpienceIcon'/>
            <div>
            <h4> Python </h4>
            <small className='text-light'> Basics </small>
            </div>
            </article>
            </div>
            </div>
        
        
        </div>


      
      
    </section>
  )
}

export default Exper