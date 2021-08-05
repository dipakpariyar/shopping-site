import React from 'react'
import Carousel from 'react-multi-carousel';
import DetailCard from './DetailCard';
import HighLightCard from './HighlightCard';

export default function Cardimg(props) {
  const { data, cardType, onCLickListner } = props;
  console.log('Cart type', cardType);
  let customItem;
  let halfItem;
  let mobileItem;
  let halfMobileSize;

  let cards = [];
  switch(cardType) {
    case 'detail':
      cards = data.map(d => <DetailCard detail={d} />);
      customItem = 4;
      halfItem = 20;
      mobileItem=2;
      halfMobileSize=0;
      break;
    case 'magnifyImage':
      cards = data.map((d, idx) => <div onClick={() => onCLickListner(idx)} style={{ height: 200, width: 200}}><img src={d} style={{ height: '100%', width: '100' }}/></div>);
      customItem = 4;
      halfItem = 20;
      mobileItem=2;
      halfMobileSize=0;
      break;
    default:
      cards = data.map(d => <HighLightCard img={d} />);
      customItem= 3;
      halfItem = 40;
      mobileItem=1;
      halfMobileSize=45;
  }

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


  return (
    <div className="card-main-div">
      <Carousel ssr responsive={responsive} partialVisbile> 
        {cards}
      </Carousel>
    </div>
  )
}
