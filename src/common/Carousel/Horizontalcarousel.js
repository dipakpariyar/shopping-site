import React from 'react'
import Carousel from 'react-multi-carousel';



export default function Cardimg(props) {
  const { data } = props;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40
    }
  }

  const cards = data.map(d => <div className="item1_div">
  <img src={d} className="item1_div__img" alt=""/>
</div>);

  return (
    <div className="card-main-div">
      <Carousel responsive={responsive} partialVisbile> 
        {cards}
      </Carousel>
    </div>
  )
}
