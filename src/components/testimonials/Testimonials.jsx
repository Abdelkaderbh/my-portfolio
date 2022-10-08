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
    name:'Diego',
    review:'He is very fast. Good communication.'
  },
  {
    id:4,
    name:'Aiman Muneeb',
    review:"best on Upwork. he designed really good website love his work ."
  },
  {
    id:5,
    name:'Henri',
    review:"It was a pleasure working with Abdelkader. He finished our Wordpress project in record time and was happy to implement any changes we requested. Communication was also great and I simply can't fault the guy. Very pleased with the end result and would happily recommend him!"
  }
 
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