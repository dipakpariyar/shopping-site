import React from 'react';
import Carousel from '../../common/Carousel/Horizontalcarousel';

export default function Winter() {
  const data=[
    '/assets/winter/electric kettle.jpeg',
    '/assets/winter/electric heater.jpeg',
    '/assets/winter/electric jug.jpeg',
    '/assets/winter/good heater.jpg',
    '/assets/winter/winter and sumer heater.jpg',
    '/assets/winter/ovan.jpeg',
  ]
  return (
    <div className="winter_brand">
      <div className="winter-text-div">
      <h2 className="winter_text">Winter</h2>
      </div>


      <div className="winter_carousel_div">
        <div className="winter_carousel">
          <Carousel data={data} />
        </div>
      </div >
    </div>
  )
}
