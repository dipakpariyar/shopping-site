import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import HorizontalCrousal from '../../common/Carousel/Horizontalcarousel';


const url = '/assets/graphics/images/fan.jpg';

const data = [
  'https://raw.githubusercontent.com/ethanselzer/react-image-magnify/master/example/src/images/wristwatch_687.jpg',
  'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://raw.githubusercontent.com/ethanselzer/react-image-magnify/master/example/src/images/wristwatch_687.jpg',
  'https://raw.githubusercontent.com/ethanselzer/react-image-magnify/master/example/src/images/wristwatch_687.jpg',
  'https://raw.githubusercontent.com/ethanselzer/react-image-magnify/master/example/src/images/wristwatch_687.jpg',
];

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state={currentImage: 0 }
  }

  cardClickListner = (imgIdx) => {
    console.log('Card Click', imgIdx)
    this.setState({ currentImage: imgIdx })
  }

  render() {
    console.log('this current image', this.state.currentImage)
    return (
      <>
      <ReactImageMagnify {...{
        smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            // isFluidWidth: true,
            height:350,
            width:250,
            src: data[this.state.currentImage],
            // enlargedImagePortalId: 'portal',
        },
        largeImage: {
            src: data[this.state.currentImage],
            width: 1200,
            height: 2000,
            shouldHideHintAfterFirstActivation: false,
        },
        enlargedImageContainerDimensions: {
          height: 350,
          width: 310
        },
    }} />
    <div style={{  width: 'auto'}}>
      <HorizontalCrousal onCLickListner={this.cardClickListner} data={data} cardType = 'magnifyImage' />
    </div>
    </>
    )
  }
}
