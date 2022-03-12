import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'


const Services = () => {
  return (
    <section id='services'>
            <h5> What i Offer </h5>
            <h2>Services</h2>
<div className="container servicesContainer">

  <article className="service">
    <div className="serviceHead">
      <h3> Web Developement </h3>
    </div>
    <ul className="serviceList">
      <li>
        <AiOutlineCheckCircle className='serviceListIcon'/>
        <p> Clean Code. </p>
      </li>
      <li>
        <AiOutlineCheckCircle className='serviceListIcon'/>
        <p> Professional & Responsive Design. </p>
      </li>
      <li>
        <AiOutlineCheckCircle className='serviceListIcon'/>
        <p> Secure Website. </p>
      </li>
    
    </ul>
  </article>

  <article className="service">
    <div className="serviceHead">
      <h3> Mobile Developement </h3>
    </div>
    <ul className="serviceList">
      <li>
        <AiOutlineCheckCircle className='serviceListIcon'/>
        <p> UI/UX Design. </p>
      </li>
      <li>
        <AiOutlineCheckCircle className='serviceListIcon'/>
        <p> Easy to use Application </p>
      </li>
      <li>
        <AiOutlineCheckCircle className='serviceListIcon'/>
        <p> Eye Catching Design </p>
      </li>
    </ul>
  </article>


  
  <article className="service">
    <div className="serviceHead">
      <h3> Graphic Design </h3>
    </div>
    <ul className="serviceList">
      <li>
        <AiOutlineCheckCircle className='serviceListIcon'/>
        <p> Unique and Creative Design. </p>
      </li>
      <li>
        <AiOutlineCheckCircle className='serviceListIcon'/>
        <p> Professional Logo Design. </p>
      </li>
      <li>
        <AiOutlineCheckCircle className='serviceListIcon'/>
        <p>  Professional Business Card Design. </p>
      </li>
    </ul>
  </article>


</div>

    </section>
  )
}

export default Services