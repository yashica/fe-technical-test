import React from "react";
import "../App.css";

import { MovieType } from "../redux/models/data/Movie";
import { listenerCount } from "process";

/*
NOTE: The onClick has been added in order to be able to react on Clicks on movie recommendation cards.
@param movieId_current: This will be used to push the current view to history.
@param movieId_next: This is the id of the clicked movie recommendation. This movie will be be displayed in a new details view.*/
type PropsType = {
  details: MovieType;
  onClick: (movieId_current: number, movieId_next: number) => any;
};

const DetailsComponent = (props: PropsType) => {
  /*renderImage got an additional parameter imgClassName in order to enable different styling 
  for details view image and recommendation card images */
  const renderImage = (movie: MovieType, imgClassName: string) => {
    console.log(movie.poster_path);
    if (movie.poster_path) {
      let path = "http://image.tmdb.org/t/p/w185" + movie.poster_path;
      return (
        <div>
          <img src={path} className={imgClassName} alt={"movie-poster"} />
        </div>
      );
    }
  };

  //Check, if we have recommendations for that movie
  const recommendationsAvailable =
    props.details.recommendations && props.details.recommendations.length > 0;

  if (recommendationsAvailable) {
    console.log("RecommendationsAvailable = TRUE ");
    console.log(props.details.recommendations);
  }

  //Do we have recommendations for that movie?
  //If yes, create a card view for each recommendation
  const getRecommendationList = () => {
    if (
      props.details.recommendations &&
      props.details.recommendations.length > 0
    ) {
      return props.details.recommendations.map((movie, index) => (
        /*Each movie will be dispayed in a card containing the movie poster(if available) as figure 
        and the title as figcaption*/
        /*<a onClick={() => dispatch(details())}> */
        <div className="Card RecommendationCard" key={"movie" + movie.id}>
          <a onClick={() => props.onClick(props.details.id, movie.id)}>
            <figure>
              {renderImage(movie, "MovieRecCardImg")}
              <figcaption className="Movie-figcaption">
                {movie.title}
              </figcaption>
            </figure>
          </a>
        </div>
      ));
    } else {
      return [];
    }
  };
  const recommendationList = getRecommendationList();

  //Create the recommendations part of the details view.
  //If no recommendations are available, we show nothing.
  const recommendations = () => {
    if (recommendationsAvailable) {
      return (
        <div className="RecommendationView">
          <h4 className="Recommendations-title">Recommendations:</h4>
          <div className="RecommendationContainer">{recommendationList}</div>
        </div>
      );
    }
  };

  //Create the Details view
  return (
    <div className="App-content">
      <div className="Card DetailsCard">
        <div className="App-details-data">
          {renderImage(props.details, "App-movie-poster")}
          <div>
            <h3 className="Details-caption">{props.details.title}</h3>
            <p className="Details-description">{props.details.overview}</p>
            <p>Release: {props.details.release_date}</p>
          </div>
        </div>
        {recommendations()}
      </div>
    </div>
  );
};

export default DetailsComponent;
