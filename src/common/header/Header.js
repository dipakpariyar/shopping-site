import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Cart from '../../icons/cart.png';
import Home from '../../icons/home.jpg';

export default function Header() {
  return (
    <div className="header_div">
      <div className="logo">


        <img src={Home} className="logo_icon" alt="" />
      </div>

      <form action="" className="form_div">
        
          <div className="input-search-button-div">
            <div className="input-search-div">
            <input type="text" className="input_div" />
            <button id="srch_btn">Search</button>
            </div>
          
            <DropdownButton bg="light" variant="light" id="dropdown-basic-button" title="Product">
            <Dropdown.Item href="#/electric">Electric</Dropdown.Item>
            <Dropdown.Item href="#/non-electric">Non-Electric</Dropdown.Item>

          </DropdownButton>
          </div>

          

        





      </form>
      <div className="card_div">

        <div className="card1_div">
          <img src={Cart} className="card1_div__img" alt="" />
        </div>

        {/* <div className="card2_div">
          <div className="g_div">
            <img src={Google} className="g_div__icon" alt="" />
          </div>

          <div className="tw_div">
            <img src={Tw} className="tw_div__icon" alt="twitter_logo" />
          </div>

          <div className="insta_div">
            <img src={Insta} className="insta_div__icon" alt="" />
          </div>
          <div className="fb_div">
            <img src={Fb} className="fb_div__icon" alt="" />
          </div>

        </div> */}
      </div>
    </div>
  )
}
