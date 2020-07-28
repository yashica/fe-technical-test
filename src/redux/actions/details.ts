import {Dispatch} from 'redux';

import * as ActionTypes from '../models/ActionTypes';
import {MovieType} from "../models/data/Movie";

import {getMovieDetails} from '../../services/MovieDatabaseService'
import {DetailsActionType} from "../models/actions/DetailsActions";
import {StoreType} from "../models/StoreType";


function setDetails(details: MovieType) {
    return {
        type: ActionTypes.SET_DETAILS,
        details: details
    }
}

export const getMovieDetailsByIdAction = (movieId: number) =>
    (dispatch: Dispatch<DetailsActionType>, getState: () => StoreType) => {
        getMovieDetails(movieId)
            .then(
                details => {
                    dispatch(setDetails(details))
                }
            );

}