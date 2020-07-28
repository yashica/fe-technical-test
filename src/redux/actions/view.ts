import * as ActionTypes from '../models/ActionTypes';

export function setLoading(loading: boolean) {
    return {
        type: ActionTypes.SET_LOADING,
        loading: loading
    }
}