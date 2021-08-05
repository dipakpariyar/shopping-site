import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactImageMagnify from 'react-image-magnify';


export default function magnifycrousel() {

  const data = [
    'http://www.smartcareint.com/wp-content/uploads/2015/04/banner04.png',
    'https://allrounderthemes.com/salespower/wp-content/uploads/sites/4/2019/03/when-to-buy-appliances-kitchen-appliances-for-incredible-kitchen-appliance-stores.jpg',
    // 'https://i.dlpng.com/static/png/6921778_preview.png',
    'http://www.panaceaservices.co.in/wp-content/uploads/2020/08/Appliances-banner-1-1536x493.jpg',
    'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-818-home-appliances-festival-atmospheric-lights-red-background-image_158775.jpg'
  ];
  return (
  

 

      <div className="slide_div" style={{ width: 400, background: 'yellow' }}>
      <Carousel 
      showStatus={false} 
      infiniteLoop showThumbs={false} 
      autoPlay 
      transitionTime={500}
      >
        {/* {data.map((img) => <div className="slide_img"><img className="slide_img__div" src={img} /></div>)} */}

        <ReactImageMagnify {...{
        smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            // isFluidWidth: true,
            height: '100%',
            width: 400,
            src: 'https://raw.githubusercontent.com/ethanselzer/react-image-magnify/master/example/src/images/wristwatch_687.jpg',
            // enlargedImagePortalId: 'portal',
        },
        largeImage: {
            src: 'https://raw.githubusercontent.com/ethanselzer/react-image-magnify/master/example/src/images/wristwatch_1200.jpg',
            width: 1200,
            height: 2000,
            shouldHideHintAfterFirstActivation: false,
        },
        enlargedImageContainerDimensions: {
          height: 350,
          width: 310
        },
       
        
      
    }} />
     <ReactImageMagnify {...{
        smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            // isFluidWidth: true,
            height: '100%',
            width: 400,
            src: 'https://raw.githubusercontent.com/ethanselzer/react-image-magnify/master/example/src/images/wristwatch_687.jpg',
            // enlargedImagePortalId: 'portal',
        },
        largeImage: {
            src: 'https://raw.githubusercontent.com/ethanselzer/react-image-magnify/master/example/src/images/wristwatch_1200.jpg',
            width: 1200,
            height: 2000,
            shouldHideHintAfterFirstActivation: false,
        },
        enlargedImageContainerDimensions: {
          height: 350,
          width: 310
        },
       
        
      
    }} />

    
      </Carousel>
    </div>
  )
}
