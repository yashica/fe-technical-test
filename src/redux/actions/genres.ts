import { Dispatch } from "redux"
import * as ActionTypes from '../models/ActionTypes';
import {GenresActionType} from "../models/actions/GenresActions";

import {getGenres} from '../../services/MovieDatabaseService'

import {GenreType} from "../models/data/Genre";
import {StoreType} from "../models/StoreType";

function setGenres(genres: Array<GenreType>) {
    return ( {
        type: ActionTypes.SET_GENRES,
        genres: genres
    })
}

function setGenreTitle(title: string) {
    return ( {
        type: ActionTypes.SET_GENRE_TITLE,
        title: title
    })
}

export const getGenresAction = () => (dispatch: Dispatch<GenresActionType>, getState: () => StoreType) => {
    getGenres().then(genres => {
            dispatch(setGenres(genres));
    });
}

export const getGenreTitleById = (genreId: number) => (dispatch: Dispatch<GenresActionType>, getState: () => StoreType) => {
    getGenres().then(genres => {
        console.log(genres, genreId);
            let title = "Genre title not found";
            for(let i = 0; i < genres.length; i++){
                if(typeof genres[i].id !== "undefined" &&
                    genres[i].id === genreId &&
                    typeof genres[i].name !== "undefined"
                ){
                    title = genres[i].name
                }
            }
            dispatch(setGenreTitle(title));
    });
}