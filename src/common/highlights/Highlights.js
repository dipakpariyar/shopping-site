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
<<<<<<< HEAD
        <h2>Highlights changed</h2>
=======
        <h2 className="text_div">Highlights</h2>
>>>>>>> 15e226097c6b622615c1e890a04c51b8a39fd6d7
      </div>

      <div className="first_div">


        <div className="first_card">

          <Carousel data={data} />
        </div>



      </div>

    </div>
  )
}
