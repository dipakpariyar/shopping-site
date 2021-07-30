import React from 'react'
import Carousel from '../Carousel/Horizontalcarousel'

export default function Highlights() {

  const data = [
    '/assets/graphics/images/fan.jpg',
    '/assets/graphics/images/cooker.jpg',
    '/assets/graphics/images/heater.jpg',
    '/assets/graphics/images/iron.jpg',
    '/assets/graphics/images/mpi.jpg',
    '/assets/graphics/images/blender.jpg',
  ];

  return (
    <div className="highlights_div">
      <div className="highlight_text">
        <h2 className="text_div">Highlights</h2>
      </div>

      <div className="first_div">


        <div className="first_card">

          <Carousel data={data} />
        </div>



      </div>

    </div>
  )
}
