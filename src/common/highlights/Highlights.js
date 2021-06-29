import React from 'react'
import Carousel from '../Carousel/Horizontalcarousel'



export default function Highlights() {

  const data = [
    '/assets/images/fan.jpg',
    '/assets/images/cooker.jpg',
    '/assets/images/heater.jpg',
    '/assets/images/iron.jpg',
    '/assets/images/mpi.jpg',
    '/assets/images/blender.jpg', 
  ];

  return (
    <div className="highlights_div">
      <div className="highlight_text">
        <h2>Highlights</h2>

      </div>

      <div className="first_div">


        <div className="first_card">

          <Carousel data={data} />
        </div>



      </div>

    </div>
  )
}
