import React from 'react'

export default function HighlightCard(props) {
  const { img } = props;
  return (
    <div className="item1_highlight_div">
    <img src={img} className="item1_div__img" alt=""/>
    </div>
  )
}
