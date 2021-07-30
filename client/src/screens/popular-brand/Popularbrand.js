import React from 'react'
import Carousel from '../../common/Carousel/Horizontalcarousel';


export default function Popularbrand() {


  const data  = [
    '/assets/graphics/popular_brand/baltra.jpg',
    '/assets/graphics/popular_brand/godrej.jpg',
    '/assets/graphics/popular_brand/sony.jpeg',
    '/assets/graphics/popular_brand/philips.png',
    '/assets/graphics/popular_brand/godrej.jpeg',
    '/assets/graphics/popular_brand/philips.jpg',
 ];


  return (
    <div className="brand_div">
      <div className="brand-text-div">
      <h2 className="brand_text">Popular Brand</h2>
      </div>


      <div className="brand_carousel_div">
       <div className="brand_carousel">
       <Carousel  data={data} /> 
       </div>
      </div >
      
    </div>
  )
}
