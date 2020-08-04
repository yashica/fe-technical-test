import React, { useEffect } from "react";
/*NOTE: useHistory has been added */
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { MovieType } from "../redux/models/data/Movie";
import { StoreType } from "../redux/models/StoreType";

import { setLoading } from "../redux/actions/view";
import { getMovieDetailsByIdAction } from "../redux/actions/details";

import DetailsComponent from "../components/Details";

type PropsType = {
  dispatch: any;
  details: MovieType;
  loading: boolean;
};

const Details = (props: PropsType) => {
  let { movieId } = useParams();
  /*NOTE: useHistory has been added */
  let history = useHistory();

  useEffect(() => {
    props.dispatch(setLoading(true));
    props.dispatch(getMovieDetailsByIdAction(movieId));
    props.dispatch(setLoading(false));
  }, []);

  /*openMovie is called after a click on a recommended movie.
  As a result, the currently displayed movie details view will be pushed to history.
  TODO: Find our how to trigger that a new details view for the recommended movie is displayed.
  */
  const openMovie = (movieId_current: number, movieId_next: number) => {
    /*This already works: As the console output shows, 
    openMovie is called on click on recommended movie card*/
    console.log(
      "!!!In containers/Details.tsx: openMovie " +
        movieId_next +
        "has been called!"
    );
    history.push("/details/" + movieId_current);
  };

  /*The onClick has been added in order to be able to react 
  on Clicks on movie recommendation cards inside the DetailsComponent*/
  return <DetailsComponent details={props.details} onClick={openMovie} />;
};

function mapStateToProps(state: StoreType) {
  return {
    details: state.details,
    loading: state.view.loading,
  };
}

export default connect(mapStateToProps)(Details);
