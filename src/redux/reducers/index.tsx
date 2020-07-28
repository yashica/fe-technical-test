import { combineReducers } from 'redux'

import movies from './movies';
import genres from "./genres";
import details from "./details";
import view from "./view";

const store = combineReducers({
        genres,
        movies,
        details,
        view
    }
)

export default store;
