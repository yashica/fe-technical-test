import { DetailsActionType } from '../models/actions/DetailsActions';
import * as ActionTypes from '../models/ActionTypes';
import {MovieType} from "../models/data/Movie";

const initialState: MovieType = {id: -1};

function details(state: MovieType, action: DetailsActionType) {
    if (typeof state === 'undefined') {
        return initialState
    }
    if(typeof action.type === 'undefined'){
        return state;
    }

    switch(action.type){
        case ActionTypes.SET_DETAILS:
            return action.details;
        default:
            return state;
    }
}

export default details;