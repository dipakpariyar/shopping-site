import React from 'react'
import DetailCard from '../Carousel/DetailCard'

export default function SimilarProduct() {
  const data1 = [
    '/assets/images/fan.jpg',
    '/assets/images/cooker.jpg',
    '/assets/images/heater.jpg',
    '/assets/images/iron.jpg',
    '/assets/images/mpi.jpg',
    '/assets/images/blender.jpg',
  ];
  return (
    <div>
       <div className="highlight_text">
        <h2 className="text_div">Similar Product</h2>
      </div>

      <div className="first_div">


        <div className="first_card">
          <DetailCard data1={data1} />


        </div>



      </div>
    </div>
  )
}

