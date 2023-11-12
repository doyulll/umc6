import React, { useState } from "react";
import * as S from "./Movie.style.jsx";

const url = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, vote_average, poster_path, overview }) {
  const [tf, setTf] = useState(false);
  const handleMouseOut = () => {
    setTf(false);
  };

  const handleMouseOver = () => {
    setTf(true);
  };

  return (
    <S.Contain onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <S.Imgg src={url + poster_path} className="imgg" alt={title} />
      <S.Textt>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </S.Textt>
      <S.Info active={tf}>
        <h4>{title}</h4>
        <span>{overview}</span>
      </S.Info>
    </S.Contain>
  );
}

export default Movie;