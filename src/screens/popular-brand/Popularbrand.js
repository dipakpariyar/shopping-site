import React from 'react'
import Carousel from '../../common/Carousel/Horizontalcarousel';


export default function Popularbrand() {


  const data  = [
    '/assets/popular brand/baltra.jpg',
    '/assets/popular brand/godrej.jpg',
    '/assets/popular brand/sony.jpeg',
    '/assets/popular brand/philips.png',
    '/assets/popular brand/godrej.jpeg',
    '/assets/popular brand/philips.jpg',
 ];


  return (
    <div className="brand_div">
      <h2 className="brand_text">Popular Brand</h2>


      <div className="brand_carousel_div">
       <div className="brand_carousel">
       <Carousel  data={data} /> 
       </div>
      </div >
      
    </div>
  )
}
