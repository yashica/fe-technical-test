import {GenreType} from "./Genre";

export type MovieType = {
    id: number,
    adult?: boolean,
    backdrop_path?: string,
    belongs_to_collection?: object,
    budget?: number,
    genres?: Array<GenreType>,
    homepage?: string,
    imdb_id?: string,
    original_language?: string,
    original_title?: string,
    overview?: string,
    popularity?: number,
    poster_path?:string,
    production_companies?: Array<{id: number, name:string, logo_path?:string, origin_country: string}>
    production_countries?: Array<{iso_3166_1: string, name: string}>,
    release_date?: string,
    revenue?: number
    runtime?: number,
    spoken_languages?: Array<{iso_3166_1: string, name: string}>,
    status?: string
    tagline?: string,
    title?: string,
    video?: boolean
    vote_average?: number,
    vote_count?: number
}