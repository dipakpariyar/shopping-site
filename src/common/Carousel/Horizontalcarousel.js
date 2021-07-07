import React from 'react'
import Carousel from 'react-multi-carousel';
import DetailCard from './DetailCard';
import HighLightCard from './HighlightCard';


export default function Cardimg(props) {
  const { data, cardType } = props;
  console.log('Cart type', cardType);
  const customItem = cardType === 'detail' ? 4 : 3;
  const halfItem = cardType === 'detail' ? 20 : 40;
  const mobileItem= cardType== 'detail' ? 2 :1 ;
  const halfMobileSize = cardType === 'detail' ? 0 : 45;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: customItem, 
      partialVisibilityGutter: halfItem
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: mobileItem,
      partialVisibilityGutter: halfMobileSize
    }
  }

  const cards = data.map(d => cardType === 'detail' ? <DetailCard detail={d} /> : <HighLightCard img={d} />);

  return (
    <div className="card-main-div">
      <Carousel responsive={responsive} partialVisbile> 
        {cards}
      </Carousel>
    </div>
  )
}
