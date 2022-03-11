import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineBook} from 'react-icons/ai'
import{RiServiceLine} from 'react-icons/ri'
import {BiMessageAltDetail} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {
  const [activeNav,setActiveNav] = useState('')
  return (
    <nav>
        <a href="#" onClick={()=> setActiveNav ('#')} className={activeNav === '#' ? 'active':''}> <AiOutlineHome /> <span id="hidden"> Intro </span>  </a>
        <a href="#about" onClick={()=> setActiveNav ('#about')} className={activeNav === '#about' ? 'active':''}> <AiOutlineUser /><span id="hidden"> About Me</span> </a>
        <a href="#experience" onClick={()=> setActiveNav ('#experience')} className={activeNav === '#experience' ? 'active':''}> <AiOutlineBook /> <span id="hidden"> Experiences </span></a>
        <a href="#services" onClick={()=> setActiveNav ('#services')} className={activeNav === '#services' ? 'active':''}> <RiServiceLine /> <span id="hidden"> Services </span> </a>
        <a href="#contact" onClick={()=> setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active':''}> <BiMessageAltDetail /> <span id="hidden">Contact </span>  </a>
    </nav>
  )
}

export default Nav