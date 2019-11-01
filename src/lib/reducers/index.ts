import {combineReducers} from 'redux'
import MoviesListData from './moviesList'
import {MoviesListState} from './moviesList'

export interface MovieState {
   fetchMoviesList: MoviesListState
}

export default combineReducers({
   fetchMoviesList: MoviesListData,
});