import React from 'react';
import ReactDOM from 'react-dom';
import StarRatings from 'react-star-ratings';

class StarRating extends React.Component {
  const 
  constructor() {
    super();

    this.state = {
      rating: 0    
    };
  }

  changeRating = (value) => {
    console.log(value);
    const { rating } = this.state;
    const extactRating = Math.floor(rating);
    if (extactRating === value) {
      if (rating < value) {
        this.setState({ rating: this.state.rating + 0.5 }) 
      } else {
        this.setState({ rating: this.state.rating - 0.5 }) 
      }
    } else {
      this.setState({ rating: value})
    }

  }
  

  render() {
    console.log('this start rating', this.state)
    return (
      <StarRatings
          rating={this.state.rating}
          starRatedColor="yellow"
          starHoverColor="yellow"
          changeRating={this.changeRating}
          numberOfStars={5}
          isAggregateRating={false}
          starDimension="15px"
          starSpacing="3px"
          name='rating'
        />
    );
  }
}

export default StarRating;