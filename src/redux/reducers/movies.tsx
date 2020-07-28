import { MoviesStateType } from '../models/states/MoviesState';
import { MoviesActionType } from '../models/actions/MoviesActions';
import * as ActionTypes from '../models/ActionTypes';

const initialState: MoviesStateType = {
    movies: [],
    genreTitle: "No genre title found",
    page: 1,
    totalPages: 1,
};

function movies(state: MoviesStateType, action: MoviesActionType) {
    if (typeof state === 'undefined') {
        return initialState
    }
    if(typeof action.type === 'undefined'){
        return state;
    }

    switch(action.type){
        case ActionTypes.SET_MOVIES:
            return { ...state, movies: action.movies};
        case ActionTypes.SET_PAGINATION:
            return { ...state, page: action.page, totalPages: action.totalPages};
        case ActionTypes.SET_GENRE_TITLE:
            return { ...state, genreTitle: action.title};
        default:
            return state;
    }
}

export default movies;