import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
// import BsHeart from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { Card, Button } from 'react-bootstrap';

export default function DetailCard(props) {



  const { detail } = props;
  const { img, name, price } = detail;
  return (
    // <div className="img_container">
    //   <div className="item1_div">
    //   {/* <BsHeart /> */}
    //   <MdFavoriteBorder color="red" size={30} style={{ position: 'absolute', right: 0, margin: 5}} />
    //     <img src={img} className="item1_div__img" alt="" />
    //     <div className="text-container">
    //       <div className="name_price">
    //         <h6><b>Name:{name}</b></h6>
    //         <h6><b>Price: Rs.{price}</b></h6>
    //       </div>
    //       <div className="rating">
    //         <StarRating />
    //       </div>
    //     </div>

    //   </div>

    // </div>
    <Card className="item1_div">
      <MdFavoriteBorder color="red" size={30} style={{ position: 'absolute', right: 0, margin: 5 }} />
      <Link to="/details/test" className="item1_img_wrapper">
      <Card.Img className="item1_div__img" variant="top" src={img} />
      </Link>
      <Card.Body>
        <Card.Title className="card_title"><p><b>Name:{name}</b></p>
          <p><b>Price: Rs.{price}</b></p>
        </Card.Title>

        <Card.Text className="rating">

          <StarRating />
        </Card.Text>

      </Card.Body>
    </Card>
  )
}
