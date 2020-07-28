import {MovieType} from "../data/Movie";

export type MoviesStateType = {
    movies: Array<MovieType>,
    genreTitle: string
    page: number,
    totalPages: number
};