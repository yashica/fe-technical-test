import {MoviesStateType} from "./states/MoviesState";
import {GenresStateType} from "./states/GenresState";
import {ViewStateType} from "./states/ViewState";
import {MovieType} from "./data/Movie";

export type StoreType = {
    genres: GenresStateType,
    movies: MoviesStateType,
    details: MovieType,
    view: ViewStateType
}