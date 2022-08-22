import React from 'react';
// import Carousel from 'react-elastic-carousel';
// import { Carousel } from '@trendyol-js/react-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';  
export default function Postedcard() {
  console.log("aditya");
  return (
    <div className='bg-white rounded-lg p-2 m-2 '>
     <div className='items-start text-left font-serif font-extrabold text-blue-500 m-2 underline text-xl'>hiii aditya</div>
     <div className='h-80 bg-blue-500'>aditya</div> 
     <Carousel show={3.5} slide={3} infiniteLoop={true} axis={"'vertical'"} ariaLabel="aditya" centerSlidePercentage={29} swiping={true}>
      <div className='w-1/2 h-52 bg-green-500' >Aditya</div>
      <div className='w-1/2 h-52 bg-green-500' >challa</div>
      <div className='w-1/2 h-52 bg-green-500' >1</div>
      <div className='w-1/2 h-52 bg-green-500' >2Aditya</div>
      <div className='w-1/2 h-52 bg-green-500' >3Aditya</div>
      <div className='w-1/2 h-52 bg-green-500' >4Aditya</div>
    </Carousel>
    </div>
  )
}
