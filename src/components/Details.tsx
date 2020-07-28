import React from 'react';
import '../App.css';

import {MovieType} from "../redux/models/data/Movie";

type PropsType = {
  details: MovieType
};

const DetailsComponent = (props: PropsType) => {

    const renderImage = () => {
        console.log(props.details.poster_path)
        if(props.details.poster_path){
            let path = "http://image.tmdb.org/t/p/w185" + props.details.poster_path;
            return(
                <div>
                    <img src={path} className={"App-movie-poster"} alt={"movie-poster"}/>
                </div>
            )
        }
    }

    return(
      <div className="App-content">
          <h3>{props.details.title}</h3>
          <div className="App-details-data">
            {renderImage()}
            <div>
              <p>{props.details.overview}</p>
              <p>Release: {props.details.release_date}</p>
            </div>
          </div>
      </div>
    );
}

export default DetailsComponent;
