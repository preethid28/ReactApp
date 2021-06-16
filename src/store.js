import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import movieReducer from './Redux/reducer'

const store = createStore(combineReducers({
    movieReducer
}), applyMiddleware(thunk))

export default store