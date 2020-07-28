const API_KEY = "bf305ca5fb44ef8e44712deffa404eeb";
const API_URI = "https://api.themoviedb.org/3/";

function _getData (requestUri: string, params: Array<{name: string, value:string|number}> = []) {
    let uri = API_URI + requestUri + "?api_key=" + API_KEY;
    for(let i = 0; i< params.length; i++){
        uri += "&" + params[i].name + "=" + params[i].value;
    }

    return fetch(uri)
        .then(response => response.json()
    )
        .catch(error => {
            console.log("error retrieving data", JSON.stringify(error))
        })
}

export async function getGenres (){
    let data = await _getData("genre/movie/list");
    if(typeof data.genres === "undefined"){
        console.log("error retrieving genres");
        return [];
    }
    return data.genres;
}

export async function getMoviesByGenre (genreId: number, page: number = 1) {
    let data = await _getData("discover/movie", [{name: "page", value: page}, {name: "with_genres", value: genreId}, {name: "sort_by", value: "title.asc"}]);
    console.log(data);
    if(typeof data.results === "undefined"){
        console.log("error retrieving movies by genre");
        return [];
    }
    return data;
}

export async function getMovieDetails (movieId: number) {
    let data = await _getData("movie/" + movieId);
    console.log(data);
    if(typeof data.id === "undefined") {
        console.log("error retrieving movie details");
        return {id: -1};
    }
    return data;
}