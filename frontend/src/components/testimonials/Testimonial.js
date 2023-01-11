import React from 'react'
import css from "./Testimonial.module.css"
import Hero from "../../assets/testimonialHero.png"
import { TestimonialsData } from "../../data/testimonials";
import { Swiper,SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>top rated</span>
          <span>seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced
          </span>
        </div>

        <img src={Hero} alt=""></img>

        <div className={css.container}>
          <span>100k</span>
          <span>Happy customers with us</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>


      <div className={css.carousel}>
        <Swiper slidesPerView={3} 
        slidesPerGroup={1} spaceBetween={20} 
        className={css.tCarousel}>
          {
            TestimonialsData.map((testimonials,i)=>(
              <SwiperSlide key={i}>
                <div className={css.testimonial}>
                  <img src={testimonials.image} alt=""/>
                  <span>{testimonials.comment}</span>
                  <hr/>
                  <span>{testimonials.name}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>

    </div>
  )
}

export default Testimonial