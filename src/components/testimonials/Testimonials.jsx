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
    name:'Adam Smith',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus ipsum ante, vitae iaculis nisi suscipit eget. Nunc felis urna, volutpat vel porttitor quis, aliquet in mauris. Duis sed ex a arcu euismod bibendum. Nam tempus enim ut dui accumsa'
  },
  {
    id:2,
    name:'Sergey',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus ipsum ante, vitae iaculis nisi suscipit eget. Nunc felis urna, volutpat vel porttitor quis, aliquet in mauris. Duis sed ex a arcu euismod bibendum. Nam tempus enim ut dui accumsa'
  },
  {
    id:3,
    name:'Sami',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus ipsum ante, vitae iaculis nisi suscipit eget. Nunc felis urna, volutpat vel porttitor quis, aliquet in mauris. Duis sed ex a arcu euismod bibendum. Nam tempus enim ut dui accumsa'
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