import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const Header = (props) => {
  return (
    <>
      <Swiper
        effect={'fade'}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide-div">
            <img className='swiper-slide-img-pattern'  src={"https://sunfelizasuites.com.vn/wp-content/themes/sunfeliza-1/static/src/images/pattern-2.png"} />
            <img className="swiper-slide-main-img" src={"https://sunfelizasuites.com.vn/wp-content/uploads/2025/07/Home-2.png"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-div">
            <img className='swiper-slide-img-pattern'  src={"https://sunfelizasuites.com.vn/wp-content/themes/sunfeliza-1/static/src/images/pattern-2.png"} />
            <img className="swiper-slide-main-img" src={"https://swiperjs.com/demos/images/nature-2.jpg"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-div">
            <img className='swiper-slide-img-pattern'  src={"https://sunfelizasuites.com.vn/wp-content/themes/sunfeliza-1/static/src/images/pattern-2.png"} />
            <img className="swiper-slide-main-img" src={"https://swiperjs.com/demos/images/nature-3.jpg"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-div">
            <img className='swiper-slide-img-pattern'  src={"https://sunfelizasuites.com.vn/wp-content/themes/sunfeliza-1/static/src/images/pattern-2.png"} />
            <img className="swiper-slide-main-img" src={"https://swiperjs.com/demos/images/nature-4.jpg"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
