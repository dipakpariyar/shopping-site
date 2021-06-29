import React from 'react'
import Fb from '../../icons/facebook.jpg';
import Insta from '../../icons/insta.jpg';
import Tw from '../../icons/tw.png';
import Google from '../../icons/google.png';

export default function Footer() {
  return (
    <div className="footer_div">
      
     <div className="about_contact">
     <li><a href="">About Us</a></li>
     <li><a href="">Contact Us</a></li>
     </div>
     <div className="social_media">
     <div className="google_div">
         <img src={Google} alt="" className="google_div__icon" />
       </div>
       <div className="tw_div">
         <img src={Tw} alt="" className="tw_div__icon" />
       </div>
      
       <div className="insta_div">
         <img src={Insta} alt="" className="insta_div__icon" />
       </div>
       <div className="fb_div">
         <img src={Fb} alt="" className="fb_div__icon" />
       </div>
     </div>
    </div>
  )
}
