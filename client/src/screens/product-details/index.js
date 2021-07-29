import React, { PureComponent } from 'react';
import Footer from '../../common/footer/Footer';
import Header from '../../common/header/Header';
import StarRating from '../../common/Carousel/StarRating';
// import Img from '../../images/fan.jpg';
import Features from './Features';
import Specifications from './Specifications';
import Overviews from './Overviews';
import SimilarProduct from '../../common/similar-product/SimilarProduct';

export default class index extends PureComponent {
  render() {
    // console.info('this product dteila props', Accordion)
    return (
      <div>
        <div className="head_wrapper" style={{ zIndex: 1, position: "fixed", top: "0", }}>
          <Header />
        </div>

        <div className="main-container">

          {/* //left side container */}
          <div className="container-wrapper">

            <div className="image-wrapper">
              <div className="image-slider"></div>
              <div className="image-div">
                {/* <img src={Img} className="image" alt="" /> */}
              </div>
            </div>


            {/* //right side container */}

            <div className="details-wrapper">


              {/* //upper side container */}

              <div className="product-details">
                <div className="name-with-detail">
                  <h1>DC Circulator Fan : SIF-SE10SC</h1>
                  <p>
                    As a well-known dc circulator fan company,
                    Shinil sold more than 2 million air circulator fans.
                    Meet Shinil's powerful DC dual fan, SIF-SE10SC, with a BLDC motor.
                </p>
                </div>

                <div className="product-id-rating">
                  <div className="product-id">
                    <p>PRODUCT ID: 236962</p>
                  </div>
                  <div className="product-rating">
                    <StarRating />
                  </div>
                </div>

                <div className="product-price">
                  <p>Price: Rs. 2000/-</p>
                </div>
              </div>

              {/* lower side container */}
              <div className="buying-wrapper">
                <div className="add-buy-container">
                  <button className="add-cart">ADD TO CART</button>
                  <button className="buy-now">BUY NOW</button>
                </div>
              </div>
            </div>

          </div>

        </div>

       

        <Features />
        <Specifications />
        <Overviews />
        {/* <SimilarProduct /> */}
        <div className="foot_wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
