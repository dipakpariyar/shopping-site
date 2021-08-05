import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import Carousel from 'react-multi-carousel';
import Collapse from '../collapsecomponent/index';
import Magnifycrousel from './magnifycrousel';

// const url = '/assets/graphics/images/fan.jpg';

export default class Test extends React.Component {

 


  render() {
    
    return (
      
      <div >
      <ReactImageMagnify {...{
        smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            // isFluidWidth: true,
            height:350,
            width:250,
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
    <Magnifycrousel />

    </div> 
    
    )
  }
}
