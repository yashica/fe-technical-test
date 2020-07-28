import * as ActionTypes from '../models/ActionTypes';
import {ViewStateType} from "../models/states/ViewState";
import {ViewActionsType} from "../models/actions/ViewActions";

const initialState: ViewStateType = {
    loading: false
}

function view(state: ViewStateType, action: ViewActionsType) {
    if (typeof state === 'undefined') {
        return initialState
    }
    if(typeof action.type === 'undefined'){
        return state;
    }

    switch(action.type){
        case ActionTypes.SET_LOADING:
            return { ...state, loading: action.loading};
        default:
            return state;
    }
}

export default view;