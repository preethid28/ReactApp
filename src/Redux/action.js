import axios from 'axios'

export const getMoviesList = () => {
    return async (dispatch) => {
        let moviesList = []
        try {
            const { data } = await axios.get('https://localhost:44360/api/Titles')
            moviesList = data
        }
        catch { }
        dispatch({
            type: 'INITIAL_MOVIE_LIST',
            moviesList
        })
    }
}

export const searchMovies = (e) => {
    return async (dispatch, getState) => {
        const moviesList = getState().movieReducer.moviesList
        dispatch({
            type: 'FILTERED_LIST',
            movies: moviesList.filter((item) => `${item.ReleaseYear}`.includes(e.target.value) || item.TitleName.toLowerCase().includes(e.target.value.toLowerCase()))
        })
    }
}

export const selectedMovie = selectedMovie => {
    return async (dispatch) => {
        dispatch({
            type: 'CURRENT_SELECTED_MOVIE',
            selectedMovie,
            loading: true
        })
        let movieDetails = []
        try {
            const { data } = await axios.get(`https://localhost:44360/api/details/${selectedMovie}`)
            movieDetails = data
        }
        catch {
            dispatch({
                type: 'CURRENT_SELECTED_MOVIE',
                selectedMovie: '',
                loading: false
            })
        }
        dispatch({
            type: 'MOVIE_DETAILS',
            movieDetails,
            loading: false
        })
    }
}

export const removeSelectedMovie = () => ({
    type: 'CURRENT_SELECTED_MOVIE',
    selectedMovie: '', 
    loading: false
})