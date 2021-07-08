import React from 'react';
import Carousel from '../../common/Carousel/Horizontalcarousel';

export default function Winter() {
  const data = [
     { img: '/assets/winter/electric kettle.jpeg', name: 'Product 1', price:'1000' },
     { img: '/assets/winter/electric heater.jpeg', name: 'Product 2' },
     { img: '/assets/winter/electric jug.jpeg', name: 'Product 3' },
     { img: '/assets/winter/good heater.jpg',  name: 'Product 4'},
     { img: '/assets/winter/winter and sumer heater.jpg', name: 'Product 5' },
     { img: '/assets/winter/ovan.jpeg', name: 'Product 6' },
  ]
  return (
    <div className="winter_brand">
      <div className="winter-text-div">
      <h2 className="winter_text">Winter</h2>
      </div>


      <div className="winter_carousel_div">
        <div className="winter_carousel">
          <Carousel data={data} cardType="detail" />
        </div>
      </div >
    </div>
  )
}
