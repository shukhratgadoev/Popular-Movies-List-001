import * as types from '../../actionTypes/moviesList';

export const searchMovies = (searchText: string) => ({
    type: types.SEARCH_MOVIES,
    meta: {
        searchText,
    }
});

export const searchMoviesSuccess = (payload: string) => ({
    payload,
    type: types.SEARCH_MOVIES_SUCCESS,
});

export const searchMoviesFailure = (payload: string) => ({
    payload,
    type: types.SEARCH_MOVIES_FAILURE,
});