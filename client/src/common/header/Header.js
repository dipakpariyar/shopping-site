import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import {CgShoppingCart} from 'react-icons/cg';
import Badge from 'react-bootstrap/Badge';
// import Cart from '../../icons/cart.png';
// import Home from '../../icons/home.jpg';
export default function Header() {
  return (
    <div className="header_wrapper">
    <div className="header_div">
      <div className="logo">
        <img src="/assets/graphics/icons/home.jpg" className="logo_icon" alt="" />
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
      <div className="cart_div">

        <div className="cart1_div">
            <div className="badge_div">
              <h6 ><Badge text="dark" pill bg="light">0</Badge></h6>
            </div>
            <div style={{zIndex:"0"}}><CgShoppingCart /></div>
          
        </div>
      </div>
    </div>
    </div>
  )
}
