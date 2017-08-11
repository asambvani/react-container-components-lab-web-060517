// Code SearchableMovieReviewsContainer Here
import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 'b23fb38184ea44bebaba5463c20b2877';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      reviews: [],
      searchTerm: ""
    }
  }
  searchMovies=(e)=>{
    this.setState({
      searchTerm: document.getElementById('search').value
    })
    let QUERY_URL = (this.state.seartchTerm ? (URL):(URL + `&query=${this.state.searchTerm}`))
    fetch(QUERY_URL).then((response)=>{
      return response.json()
    }).then((data)=>{
      this.setState({
        reviews: data.results
      })
    }).then(this.render())
  }

  componentWillMount(){

    }

  render(){
    const reviews = this.state.reviews.map((review, index)=>{
      return (<MovieReviews review={review} key={index}/>)
    })
    return(
    <div className="searchable-movie-reviews">
      Search for a review! <input id="search" type="text"/>
      <button onClick={this.searchMovies}>Search</button>
      {reviews}
    </div>
  )
  }
}

export default SearchableMovieReviewsContainer
