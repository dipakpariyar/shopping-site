import React, { useEffect } from 'react';
import Footer from '../../common/footer/Footer';
import Header from '../../common/header/Header';
import Highlights from '../../common/highlights/Highlights';
import Slider from '../slider/Slider';
import Popularbrand from '../popular-brand/Popularbrand';
import axios from 'axios';
import Summer from '../summer';
import Winter from '../winter';

export default function Home() {
  useEffect(() => {
  fetchData();
  })

  const fetchData = async () => {
    const data = await axios.get('http://localhost:4000/Products');
    console.log('server data', data);
  }
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

      <div className="summer">
        <Summer />

      </div>

      <div className="winter">
        <Winter />
      </div>

      <div className="footer_wrapper">
        <Footer />
       
      </div>

      
      

    </div>
  )
}
