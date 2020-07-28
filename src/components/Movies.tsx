import React from 'react';
import ReactPaginate from 'react-paginate';
import '../App.css';

import {MovieType} from "../redux/models/data/Movie";

type PropsType = {
    movies: Array<MovieType>,
    title: string,
    page: number,
    totalPages: number,
    onClick: (genreId: number) => any,
    loadPage: (selectedPage: number) => any,
};

const MoviesComponent = (props: PropsType) => {
  let list = props.movies.map(movie => (
      <div className="App-list" key={"movie" + movie.id}>
          <a onClick={() => props.onClick(movie.id)}><span>{movie.title}</span></a>
      </div>
  ))

  return(
      <div className="App-content">
          <h4>{props.title}</h4>
        {list}
          <ReactPaginate
              // api pages start at 1 not 0
              initialPage={props.page - 1}
              pageCount={props.totalPages}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              onPageChange={(page) => {
                  props.loadPage(page.selected + 1)
              }}
              containerClassName={"Pagination-container"}
              pageClassName={"Pagination-page"}
              previousClassName={"Pagination-page"}
              nextClassName={"Pagination-page"}
              activeClassName={"Pagination-active"}

          />
      </div>

  );
}

export default MoviesComponent;
