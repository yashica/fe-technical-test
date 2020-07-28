import { GenreType } from "../data/Genre"

export type GenresActionType = {
    type: string
    genres?: Array<GenreType>
}