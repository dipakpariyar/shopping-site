import React from 'react'
import { SideBySideMagnifier } from 'react-image-magnifiers';

export default class Test extends React.Component {

  render() {
    return (
      <SideBySideMagnifier
      imageSrc="/assets/graphics/images/fan.jpg"
      imageAlt="Example"
      // largeImageSrc="./large-image.jpg"
    />
    )
  }
}
