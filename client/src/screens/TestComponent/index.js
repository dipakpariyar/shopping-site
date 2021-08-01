import React from 'react'
import ReactImageMagnify from 'react-image-magnify';

const url = '/assets/graphics/images/fan.jpg';

export default class Test extends React.Component {

  render() {
    return (
      <div style={{ height: 400, width: 400 }}>
      <ReactImageMagnify {...{
        smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: url
        },
        largeImage: {
            src: url,
            width: 300,
            height: 300
        }
    }} />
    </div>
    // "test"
    )
  }
}
