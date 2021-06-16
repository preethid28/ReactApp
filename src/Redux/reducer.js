function reducer(state = { name: 'Jayabalaji' }, action) {
    switch (action.type) {
        case 'INITIAL_MOVIE_LIST':
            return { ...state, moviesList: action.moviesList }

        case 'CURRENT_SELECTED_MOVIE':
            return { ...state, currentSelectedMovie: action.selectedMovie, loading: action.loading }

        case 'FILTERED_LIST':
            return { ...state, filteredList: action.movies}

        case 'MOVIE_DETAILS':
            return { ...state, movieDetails: action.movieDetails, loading: action.loading }

        default:
            return state
    }
}

export default reducer