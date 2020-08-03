import React from "react";
import "../App.css";

import { GenreType } from "../redux/models/data/Genre";

type PropsType = {
  genres: Array<GenreType>;
  onClick: (genreId: number) => any;
};

const GenresComponent = (props: PropsType) => {
  let list = props.genres.sort().map((genre) => (
    <div className="Card GenreCard" key={"genre_" + genre.id}>
      <a onClick={() => props.onClick(genre.id)}>
        <span className="GenreName">{genre.name}</span>
      </a>
    </div>
  ));

  return (
    <div className="App-content">
      <h2>Genre</h2>
      <div className="GenreContainer">{list}</div>
    </div>
  );
};

export default GenresComponent;
