import React from 'react'
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import CardOfCart from '../../common/add-to-cart/index';



export default function index() {
  const data=[
    'assets/graphics/summer/blackfan.jpg'
  ]
  return (
    <div className="main_container">
      < Header />
      <div className="checkout_container">
        <div className="cart_price">
          <div className="price_wrapper">
            <h4 className="name">
              <span>Your Cart</span>
              <span className="small">[1 items]</span>
            </h4>
            <div className="cp_price"><span className="price">Rs: 5127.27</span></div>
          </div>
          <div className="act_button">
            <button className="ch_btn">CHECKOUT</button>
          </div>
        </div>

      </div>

      <div className="pro_payment_container">
        <div className="pp_wrapper">
    
          <div className="product_wrap">
          
             <CardOfCart /> 
             <CardOfCart />
             <CardOfCart /> 
             <CardOfCart />
             </div>



          <div className="payment_wrapper">
            <div className="payment_box">

              <div className="payment_title">Payment Details</div>

              <div className="payment_summary">
                <div className="lr_items">
                  <div className="l_items">Item total	</div>
                  <div className="r_items">Rs. 5,397.00</div>
                </div>
                <div className="lr_items">
                  <div className="l_items">Delivery cost at	</div>
                  <div className="r_items">Free</div>
                </div>
                <div className="lr_items">
                  <div className="l_items">Today’s savings</div>
                  <div className="r_items">Rs. 269.85</div>
                </div>
                <hr style={{fontSize:".5rem", marginTop:'5px', marginBottom:'15px'}} />
                <div className="lr_total">
                  <div className="l_total">Total price	</div>
                  <div className="r_total">Rs. 5127.15</div>
                </div>
              </div>

              <div className="chk_out">
                <button className="chk_btn">CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
