import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import {connect} from "react-redux";
import {StoreType} from "./redux/models/StoreType";
import Genres from "./containers/Genres";
import Movies from "./containers/Movies";
import Details from "./containers/Details";

type PropsType = {
  dispatch: any,
  loading: boolean
};

const App = (props: PropsType) => {

  const renderContent = () => {
    if(props.loading){
      return(
          <div className="App-content">
            <p>Loading</p>
          </div>
      )
    }
    return(
    <Switch>
      <Route path="/details/:movieId">
        <Details />
      </Route>
      <Route path="/movies/:genreId">
        <Movies />
      </Route>
      <Route path="/">
        <Genres />
      </Route>
    </Switch>
    );
  }

  return(
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to={"/"}>
              <p className="App-title">
                All of the movies
              </p>
            </Link>
          </header>
        </div>
        {
          renderContent()
        }
      </Router>
  );
}

function mapStateToProps(state: StoreType) {
  return {
    loading: state.view.loading
  }
}

export default connect(mapStateToProps)(App);
