import {MovieType} from "../data/Movie";

export type MoviesActionType = {
    type: string
    movies?: Array<MovieType>,
    title?: string,
    page?: number,
    totalPages?: number,
}