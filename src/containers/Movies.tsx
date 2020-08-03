import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { StoreType } from "../redux/models/StoreType";
import { MoviesStateType } from "../redux/models/states/MoviesState";

import { setLoading } from "../redux/actions/view";
import { getMoviesByGenreIdAction } from "../redux/actions/movies";
import { getGenreTitleById } from "../redux/actions/genres";

import MoviesComponent from "../components/Movies";

type PropsType = {
  dispatch: any;
  movies: MoviesStateType;
  loading: boolean;
};

const Movies = (props: PropsType) => {
  let { genreId } = useParams();
  let history = useHistory();

  const getMovies = (selectedGenreId: number, selectedPage: number) => {
    props.dispatch(setLoading(true));
    props.dispatch(getGenreTitleById(selectedGenreId));
    props.dispatch(getMoviesByGenreIdAction(selectedGenreId, selectedPage));
    props.dispatch(setLoading(false));
  };

  useEffect(() => {
    getMovies(+genreId, 1);
  }, []);

  const openMovie = (movieId: number) => {
    history.push("/details/" + movieId);
  };

  const loadPage = (selectedPage: number) => {
    getMovies(+genreId, selectedPage);
  };

  return (
    <MoviesComponent
      title={props.movies.genreTitle}
      movies={props.movies.movies}
      page={props.movies.page}
      totalPages={props.movies.totalPages}
      loadPage={loadPage}
      onClick={openMovie}
    />
  );
};

function mapStateToProps(state: StoreType) {
  return {
    movies: state.movies,
    loading: state.view.loading,
  };
}

export default connect(mapStateToProps)(Movies);
