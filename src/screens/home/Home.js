import React from 'react';
import Footer from '../../common/footer/Footer';
import Header from '../../common/header/Header';
import Highlights from '../../common/highlights/Highlights';
import Slider from '../slider/Slider';
import Popularbrand from '../popular-brand/Popularbrand';
// hlw this for test
export default function Home() {
  return (
    <div className="home_div">
      <div className="header_wrapper">


        <Header />
      </div>

      <div className="slider_div">
        <Slider />
      </div>


      <div className="highlights">

        <Highlights />
      </div>

      <div className="brand">

        <Popularbrand />
      </div>

      <div className="footer_wrapper">
        <Footer />
      </div>

    </div>
  )
}
