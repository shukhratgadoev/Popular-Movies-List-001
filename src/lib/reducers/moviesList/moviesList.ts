import { Reducer } from 'redux';
import * as types from '../../actionTypes/moviesList'


export type MoviesListState = {
    moviesList: [],
    isLoading: boolean,
    error: any,
}
export const initialState: MoviesListState = {
    moviesList: [],
    isLoading: false,
    error: null,
};

const MoviesListData: Reducer<MoviesListState> = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.FETCH_MOVIES_LIST:
            return {
                ...state,
                isLoading: true,
            };
        case types.FETCH_MOVIES_LIST_SUCCESS:
            return {
                ...state,
                moviesList: payload,
                isLoading: false,
            };
        case types.FETCH_MOVIES_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'Something working wrong!',
            };
        case types.SEARCH_MOVIES:
            return {
                ...state,
                isLoading: true,
            };
        case types.SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                moviesList: payload,

            };
        case types.SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: 'Something working wrong!',
            };
        default:
            return state;
    }
};
export default MoviesListData;
