import * as ActionTypes from '../models/ActionTypes';

import {getMoviesByGenre} from '../../services/MovieDatabaseService'

import {Dispatch} from 'redux';

import {MoviesActionType} from "../models/actions/MoviesActions";
import {MovieType} from "../models/data/Movie";
import {StoreType} from "../models/StoreType";

function setMovies(movies: Array<MovieType>) {
    return {
        type: ActionTypes.SET_MOVIES,
        movies: movies
    }
}

function setPagination(page: number, totalPages: number) {
    return {
        type: ActionTypes.SET_PAGINATION,
        page: page,
        totalPages: totalPages
    }
}

export const getMoviesByGenreIdAction = (genreId: number, page:number = 1) =>
    (dispatch: Dispatch<MoviesActionType>, getState: () => StoreType) => {
        getMoviesByGenre(genreId, page)
            .then(
                data => {
                    dispatch(setPagination(data.page, data.total_pages))
                    dispatch(setMovies(data.results))
                }
            );
};