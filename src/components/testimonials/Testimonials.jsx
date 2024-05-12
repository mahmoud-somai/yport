import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[{
  avatar:AVTR1,
  name:'Hi How are you',
  review:"Hello world from here and from there"
},{
  avatar:AVTR2,
  name:'Hi How are you',
  review:"Hello world from here and from there"
},{
  avatar:AVTR3,
  name:'Hi How are you',
  review:"Hello world from here and from there"
},{
  avatar:AVTR4,
  name:'Hi How are you',
  review:"Hello world from here and from there"
}
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2> Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
          <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={name} />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'> {review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials