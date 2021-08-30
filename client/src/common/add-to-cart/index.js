import React from 'react'
import {  RiDeleteBinLine } from 'react-icons/ri';

export default function index() {
  const data=[
    'assets/graphics/summer/blackfan.jpg'
  ]
  return (
    <div>
       <div className="pro_wrap">
       <RiDeleteBinLine size={"25px"} color={"4AA96C"} style={{position:'absolute', right:'15', top:'8'}} />
            <div className="pro_img">
              <img style={{height:'100%', width:'100%'}} src={data} alt="" />
            </div>
            <div className="pro_info">
              <h4 className="pro_title"> 3 Blade Pivot Fan (CRF0026, Black)</h4>
              <div className="pro_id_qty">
                <h4 className="pro_id">Product Id: 169592</h4>
                <div className="pro_qty">
                  <span className="name">QTY:</span>
                  <span className="number">4</span>
                </div>
              </div>
              <div className="pro_price">
                <span className="new_price">Rs. 5127.15</span>
                <span className="old_price"> Rs. 5,397.00</span>
              </div>
            </div>
           

          </div>
    </div>
  )
}
