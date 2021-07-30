import React from 'react';
import Carousel from '../../common/Carousel/Horizontalcarousel';

export default function Summer() {
  const data=[
    {img:'/assets/graphics/summer/blackfan.jpg', name:"pruduct1"},
    {img:'/assets/graphics/summer/air conditioner.jpg', name: 'product2'},
    {img:'/assets/graphics/summer/dc-fan.jpg', name: 'product3'},
    {img:'/assets/graphics/summer/sma.jpg', name: 'product4'},
    {img:'/assets/graphics/summer/window-airconditioner.jpg', name: 'product5'},
    {img:'/assets/graphics/summer/circulator fan.jpg', name: 'product6'}
  ];
  return (
    <div className="summer_brand">
      <div className="summer-text-div">
      <h2 className="summer_text">Summer</h2>
      </div>


<div className="summer_carousel_div">
 <div className="summer_carousel"> 
 <Carousel  data={data} cardType="detail" /> 
 </div>
</div >
    </div>
  )
}
