import React from 'react'
import './footer.css'
import { BsLinkedin,BsGithub ,BsFacebook,BsInstagram} from 'react-icons/bs'
import {SiUpwork} from 'react-icons/si'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>

      <a href="#" className='footerLogo'> 
          <img src={logo}  />
       </a>
      <ul className="permalinks">
        <li> <a href="#"> Home </a> </li>
        <li> <a href="#about"> About </a> </li>
        <li> <a href="#experience"> Experiences </a> </li>
        <li> <a href="#service"> Services </a> </li>
        <li> <a href="https://www.upwork.com/freelancers/~01bbefdf0493faf916" target="_blank"> Hire Me  </a> </li>
        <li> <a href="#testimonials"> Testimonials </a> </li>
        <li> <a href="#contact"> Contact </a> </li>
        <li> <a href="https://www.youtube.com/watch?v=G-Cr00UYokU&t=253s"  target="_blank" > inspired by  </a> </li>

      </ul>

      <div className="footerSocials">
          <a href="https://www.facebook.com/Gadour.BH/" target="_blank"> <BsFacebook className='socialIcon'/> </a>
          <a href="https://www.instagram.com/gadourbenhssen/?hl=fr" target="_blank"> <BsInstagram className='socialIcon'/> </a>
          <a href="https://www.linkedin.com/in/abdelkader-ben-hassen-bab946202/" target="_blank"> <BsLinkedin className='socialIcon'/> </a>
          <a href='https://github.com/Abdelkaderbh' target="_blank"> <BsGithub className='socialIcon'/> </a>
          <a href="https://www.upwork.com/freelancers/~01bbefdf0493faf916" target="_blank"> <SiUpwork className='socialIcon'/> </a> 
      </div>

      <div className="footerCopyRight">
        <small> Copyright &copy;  {new Date().getFullYear()} Abdelkader . All rights reserved </small>
      </div>


    </footer>
  )
}

export default Footer