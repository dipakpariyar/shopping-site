import React, { PureComponent } from 'react';
import Footer from '../../common/footer/Footer';
import Header from '../../common/header/Header';
import StarRating from '../../common/Carousel/StarRating';
// import Img from '../../../src/assets/graphics/images/fan.jpg';
import Features from './Features';
import Specifications from './Specifications';
import Overviews from './Overviews';
import SimilarProduct from '../../common/similar-product/SimilarProduct';
import Accordion from 'react-bootstrap/Accordion';
import ImageMaginifier from '../imagemagnify/index';
import ToastComponent from '../../common/toastcomponent/Toast';

export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showToast: false };
  }

  onAddToCartClickListner = () => {
    this.setState({ showToast: !this.state.showToast })
  }

  render() {
    // console.info('this product dteila props', Accordion)
    
    return (
      <div>
        <Header />
        <div className="main-container">

          {/* //left side container */}
          <div className="container-wrapper">

            <div className="image-wrapper">
              <div className="image-div" style={{ height: 'auto'}}>
                <ImageMaginifier />
              </div>
            </div>
            <div className="details-wrapper">
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
                  <button onClick={this.onAddToCartClickListner} className="add-cart">ADD TO CART</button>
                  <button className="buy-now">BUY NOW</button>
                  <ToastComponent onClose={this.onAddToCartClickListner} isShow={this.state.showToast} />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="accordion_div" style={{width:"90%", minHeight: '90vh'}}>
        <Accordion defaultActiveKey="0" className="collapse_div" >
        <Accordion.Item eventKey="1" >
          <Accordion.Header >
            <div className="title" style={{color:"black"}}>
            <h4><b>Key Features</b></h4>
          </div>
          </Accordion.Header>
          <Accordion.Body>
          <Features />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="2">
          <Accordion.Header ><div className="spe_title" style={{color:"black"}}>
          <h4><b>Specification</b></h4>
        </div></Accordion.Header>
          <Accordion.Body>
          <Specifications />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
                    <div className="overviews_title" style={{color:"black"}}>
                <h4><b>Overview</b></h4></div>
          </Accordion.Header>
          <Accordion.Body>
          <Overviews />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>
        {/* <SimilarProduct /> */}
        <div className="foot_wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
