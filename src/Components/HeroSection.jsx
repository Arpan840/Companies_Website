import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const HeroSection = () => {
  return (
   <>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 1000 }}
      
      loop={true}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        }
       }}
    >
      <SwiperSlide>
        <div className='containerhero'>
          <div className='section-hero-data'>
            <img className='heroimg' src="https://media.istockphoto.com/photos/future-artificial-intelligence-robot-and-cyborg-picture-id1202870693?k=20&m=1202870693&s=170667a&w=0&h=bNRQvjlDpHmuse-LTKKeeFyuS85hIrdgj47-tyTNgG0=" alt="heroimage" />
            <p className='herotopdata' >Lorem, ipsum dolor.</p>
            <h1 className="heroheading"  >Lorem, ipsum.</h1>
            <p className="heropara"  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, inventore, exercitationem magnam ullam in impedit illo facere labore sequi animi optio corporis non! Ullam, maxime animi corrupti accusantium ex eaque.</p>
            <button className='button'>
              <Link to="/careers">Hire Me</Link>
            </button>
          </div>
        </div> 
      </SwiperSlide>
      
      <SwiperSlide className="swiper-slide-3"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221212161428/What-is-Digital-Marketing.png" alt="DigitalMarket" /></SwiperSlide>
      <SwiperSlide className="swiper-slide-4"><img src="https://cyfuture.com/blog/ojycekam/2020/02/Android-vs-iOS-Mobile-App-Development.jpeg" alt="AppDev" /></SwiperSlide>
      <SwiperSlide className="swiper-slide-4"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210310114057/web-development-image.png" alt="Ai" /></SwiperSlide>
    </Swiper>
   </>
  )
}

export default HeroSection

