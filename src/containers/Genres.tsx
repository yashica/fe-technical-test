import React, {useEffect} from 'react';
import {
  useHistory
} from "react-router-dom";
import {connect} from "react-redux";

import {StoreType} from "../redux/models/StoreType";
import {GenreType} from "../redux/models/data/Genre";

import {setLoading} from "../redux/actions/view";
import {getGenresAction} from "../redux/actions/genres";

import GenresComponent from "../components/Genres";

type PropsType = {
  dispatch: any,
  genres: Array<GenreType>
  loading: boolean
};

const Genres = (props: PropsType) => {

  let history = useHistory();

  useEffect(() => {
    props.dispatch(setLoading(true))
    props.dispatch(getGenresAction())
    props.dispatch(setLoading(false))
  }, []);

  const openGenre = (genreId: number) => {
    history.push("/movies/" + genreId);
  }

  return(
      <GenresComponent genres={props.genres} onClick={openGenre} />
  );
}

function mapStateToProps(state: StoreType) {
  return {
    genres: state.genres,
    loading: state.view.loading
  }
}

export default connect(mapStateToProps)(Genres);
