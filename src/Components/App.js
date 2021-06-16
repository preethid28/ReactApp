import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMoviesList, searchMovies, selectedMovie } from '../Redux/action'
import '../Style/App.css'
import { ListGroup } from 'react-bootstrap'
import MovieDetails from './MovieDetails'

class App extends Component {

  componentDidMount() {
    this.props.getMoviesList()
  }

  onMovieClick = item => {
    this.props.selectedMovie(item.TitleId)
  }

  render() {
    const { filteredList = [], moviesList = [], currentMovie = '', movieDetails, loading } = this.props
    const finalMoviesList = filteredList.length ? filteredList : moviesList
    if(currentMovie) 
      return <MovieDetails movieDetails={movieDetails} loading={loading}/>
    return <div className='content'>
      <div style={{ marginLeft: 'auto' }}>
        <input onChange={this.props.searchMovies} placeholder='Enter the movie Name to search' className='searchBox' type='text' />
        <div class='resultsContainer'>
          <label>Movie List:</label>
          {<ListGroup>
            {finalMoviesList.map(item =>
              <ListGroup.Item active={item.TitleId == currentMovie} onClick={() => this.onMovieClick(item)}>
                {`${item.TitleName} - ${item.ReleaseYear}`}
              </ListGroup.Item>)}
          </ListGroup>}
        </div>
      </div>
    </div>
  }
}

const mapStates = state => ({
  moviesList: state.movieReducer.moviesList,
  filteredList: state.movieReducer.filteredList,
  currentMovie: state.movieReducer.currentSelectedMovie,
  movieDetails: state.movieReducer.movieDetails,
  loading: state.movieReducer.loading
})

export default connect(mapStates, { getMoviesList, searchMovies, selectedMovie })(App)