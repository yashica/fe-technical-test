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

  /*
  What does useEffect do? -> By using this Hook, you tell React that your component needs 
  to do something after render. https://reactjs.org/docs/hooks-effect.html
  */
  useEffect(() => {
    console.log("In useEffect! MovieID that is used here is: " + movieId);
    props.dispatch(setLoading(true));
    props.dispatch(getMovieDetailsByIdAction(movieId));
    props.dispatch(setLoading(false));
  }, []);

  /*openMovie is called after a click on a recommended movie.
  As a result, the currently displayed movie details view will be pushed to history.
  Additionally, loading is triggered manually by calling the methods that are used above in useEffect()
  */
  const openMovie = (movieId_current: number, movieId_next: number) => {
    console.log(
      `In containers/Details.tsx > openMovie 
 Old movie id was: ${movieId_current}
Next movieID is: ${movieId_next}`
    );

    history.push("/details/" + movieId_current);

    //trigger loading details view manually
    props.dispatch(setLoading(true));
    props.dispatch(getMovieDetailsByIdAction(movieId_next));
    props.dispatch(setLoading(false));
    //scroll viewport to details section
    window.scrollTo({ top: 0, behavior: "smooth" });
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
