import React,{memo} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Card from './card';


function SwiperCards({swiper}) {
  const {sectionTitle, videos}=swiper
  return (<div className='w-full px-3'>
    <p className='text-start text-3xl font-extrabold dark:text-white text-black'>{sectionTitle}</p>
    <Swiper
        slidesPerView={4}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        // loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
  >
  { videos.map((item,idx)=><SwiperSlide key={idx}><Card cardDetails={item}/></SwiperSlide>)}
  </Swiper>
  </div>
  )
}
export default memo(SwiperCards)
