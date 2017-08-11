import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 'b23fb38184ea44bebaba5463c20b2877';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
      fetch(URL).then((response)=>{
        return response.json()
      }).then((data)=>{
        this.setState({
          reviews: data.results
        })
        console.log(this.state)
      })
  }
  render(){
    const reviews = this.state.reviews.map((review, index)=>{
      return <MovieReviews review={review} key={index}/>
    })
    return(
      <div className="latest-movie-reviews">
        {reviews}
      </div>
  )
  }
}

export default LatestMovieReviewsContainer
