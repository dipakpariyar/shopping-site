import React from 'react';
import Carousel from '../../common/Carousel/Horizontalcarousel';

export default function Summer() {
  const data=[
    '/assets/summer/blackfan.jpg',
    '/assets/summer/air conditioner.jpg',
    '/assets/summer/dc-fan.jpg',
    '/assets/summer/sma.jpg',
    '/assets/summer/window-airconditioner.jpg',
    '/assets/summer/circulator fan.jpg',
  ];
  return (
    <div className="summer_brand">
      <div className="summer-text-div">
      <h2 className="summer_text">Summer</h2>
      </div>


<div className="summer_carousel_div">
 <div className="summer_carousel">
 <Carousel  data={data} /> 
 </div>
</div >
    </div>
  )
}
