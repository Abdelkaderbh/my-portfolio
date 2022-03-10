import React from 'react'
import { BsLinkedin,BsGithub ,BsFacebook,BsInstagram} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header_socials'>
                <a href="https://www.linkedin.com/in/abdelkader-ben-hassen-bab946202/" target="_blank"> <BsLinkedin />  </a>
                <a href="https://github.com/Abdelkaderbh" target="_blank"> <BsGithub />  </a>
                <a href="https://www.facebook.com/Gadour.BH/" target="_blank"> <BsFacebook />  </a>
                <a href="https://www.instagram.com/gadourbenhssen/?hl=fr" target="_blank"> <BsInstagram />  </a>



    </div>
  )
}

export default Socials