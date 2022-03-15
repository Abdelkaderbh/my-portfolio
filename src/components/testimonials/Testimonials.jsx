import React from 'react'
import './testimonials.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";




const data = [
  {
    id:1,
    name:'Mistelberger',
    review:'Easy and quick communication, good job'
  },
  {
    id:2,
    name:'Sergey',
    review:'it was great working with you Abdelkader'
  },
  {
    id:3,
    name:'Sami',
    review:'Professional and quick job highly recomnd this freelancer'
  },
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Some Reviews from clients </h5>
        <h2> Testimonials </h2>

        <Swiper pagination={true} modules={[Pagination]} className="container testimonialsContainer">
        {
          data.map(({id,name,review}) =>{
            return(
              <SwiperSlide key={id} className='testimonial'>
                      <div className="clientAvatar">
                        <></>
                        <h5 className='clientName'> {name} </h5>
                            <small className='clientReview'>
                                              {review}                
                            </small>
                      </div>
              </SwiperSlide>          
            )
          })
        }
           

           
      

        </Swiper>


    </section>
  )
}

export default Testimonials