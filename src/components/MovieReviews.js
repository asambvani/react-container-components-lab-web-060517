// Code MovieReviews Here
import React from 'react'

class MovieReviews extends React.Component {

  render(){
    return(
      <div className="review-list">
        <div className="review">
          <p><strong>{this.props.review.display_title}</strong></p>
          <p>{this.props.review.headline}</p>
          <p>{this.props.review.summary_short}</p>
        </div>
      </div>)
  }
}



export default MovieReviews
