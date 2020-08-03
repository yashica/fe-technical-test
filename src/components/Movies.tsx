import React from "react";
import ReactPaginate from "react-paginate";
import "../App.css";

import { MovieType } from "../redux/models/data/Movie";

type PropsType = {
  movies: Array<MovieType>;
  title: string;
  page: number;
  totalPages: number;
  onClick: (genreId: number) => any;
  loadPage: (selectedPage: number) => any;
};

const MoviesComponent = (props: PropsType) => {
  const renderImage = (index: number) => {
    console.log(props.movies[index].poster_path);
    if (props.movies[index].poster_path) {
      let path =
        "http://image.tmdb.org/t/p/w185" + props.movies[index].poster_path;
      return <img src={path} className={"MovieCardImg"} alt={"movie-poster"} />;
    }
  };

  let list = props.movies.map((movie, index) => (
    <div className="Card" key={"movie" + movie.id}>
      <a onClick={() => props.onClick(movie.id)}>
        <figure>
          {renderImage(index)}
          <figcaption className="Movie-figcaption">{movie.title}</figcaption>
        </figure>
      </a>
    </div>
  ));

  return (
    <div className="App-content">
      <h2>{props.title}</h2>
      <div className="MovieGallery">{list}</div>
      <ReactPaginate
        // api pages start at 1 not 0
        initialPage={props.page - 1}
        pageCount={props.totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={(page) => {
          props.loadPage(page.selected + 1);
        }}
        containerClassName={"Pagination-container"}
        pageClassName={"Pagination-page"}
        previousClassName={"Pagination-page"}
        nextClassName={"Pagination-page"}
        activeClassName={"Pagination-active"}
      />
    </div>
  );
};

export default MoviesComponent;
