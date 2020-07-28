import React, {useEffect} from 'react';
import {
  useParams
} from "react-router-dom";
import {connect} from "react-redux";

import {MovieType} from "../redux/models/data/Movie";
import {StoreType} from "../redux/models/StoreType";

import {setLoading} from "../redux/actions/view";
import {getMovieDetailsByIdAction} from "../redux/actions/details";

import DetailsComponent from "../components/Details";

type PropsType = {
  dispatch: any,
  details: MovieType,
  loading: boolean,
};

const Details = (props: PropsType) => {

  let { movieId } = useParams();

  useEffect(() => {
    props.dispatch(setLoading(true))
    props.dispatch(getMovieDetailsByIdAction(movieId))
    props.dispatch(setLoading(false))
  }, []);

  return(
      <DetailsComponent details={props.details} />
  );
}

function mapStateToProps(state: StoreType) {
  return {
    details: state.details,
    loading: state.view.loading
  }
}

export default connect(mapStateToProps)(Details);
