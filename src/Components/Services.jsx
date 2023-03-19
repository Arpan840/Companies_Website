
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Stylesheet/Services.css'

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import androidAndIos from './Assets/androidIos.jpg'
import DigitalMarketing from './Assets/digitalMarketing.jpg'
import AI from './Assets/Artificial-Intelligence.jpg'




import { EffectCoverflow, Pagination , Autoplay } from "swiper";

const Services = () => {
  let arr=[{
    image:"https://res.cloudinary.com/practicaldev/image/fetch/s--gps5oVPP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5ct9nhbw6gdpb8dh0yy1.png", info:'Web Devlopement'}
    ,{
      image:androidAndIos, info:'Android and Ios Developement'},
      {
        image:DigitalMarketing, info:'Digital Marketing'},
        {
          image:AI, info:'Artificial-Intelligence'}
        
  ]
  return (
    <div className='services'>
      <h1>Our Services</h1>
      <Swiper
       modules={[ Pagination,EffectCoverflow,Autoplay]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
     
    
     autoplay={true}
      zoom={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
     
      className="mySwiper"
    >
      { arr.map((i)=>{
        return(
      <SwiperSlide>
        <div className='servicsBox'>
          <img  className='serviceimg' src={i.image} alt="webDev" />
        </div>
        <div>
          <p>{i.info}</p>
        </div>
      </SwiperSlide>
        )
    })}
    </Swiper>
      
    </div>
  )
}

export default Services
