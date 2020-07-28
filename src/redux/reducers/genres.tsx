import * as ActionTypes from '../models/ActionTypes';
import {GenresStateType} from "../models/states/GenresState";
import {GenresActionType} from "../models/actions/GenresActions";

const initialState: GenresStateType = []

function genres(state: GenresStateType, action: GenresActionType) {
    if (typeof state === 'undefined') {
        return initialState
    }
    if(typeof action.type === 'undefined'){
        return state;
    }

    switch(action.type){
        case ActionTypes.SET_GENRES:
            return action.genres
        default:
            return state;
    }
}

export default genres;