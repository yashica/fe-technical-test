import React from "react";
import "../App.css";

import { MovieType } from "../redux/models/data/Movie";

type PropsType = {
  details: MovieType;
};

const DetailsComponent = (props: PropsType) => {
  const renderImage = () => {
    console.log(props.details.poster_path);
    if (props.details.poster_path) {
      let path = "http://image.tmdb.org/t/p/w185" + props.details.poster_path;
      return (
        <div>
          <img src={path} className={"App-movie-poster"} alt={"movie-poster"} />
        </div>
      );
    }
  };

  //Do we have recommendations for that movie?
  const recommendationsAvailable =
    props.details.recommendations && props.details.recommendations.length > 0;

  if (recommendationsAvailable) {
    console.log("RecommendationsAvailable = TRUE ");
    console.log(props.details.recommendations);
  }

  return (
    <div className="App-content">
      <div className="Card DetailsCard">
        <div className="App-details-data">
          {renderImage()}
          <div>
            <h3>{props.details.title}</h3>
            <p>{props.details.overview}</p>
            <p>Release: {props.details.release_date}</p>
            <p>
              Recommendations available:{" "}
              {recommendationsAvailable ? "TRUE" : "FALSE"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
