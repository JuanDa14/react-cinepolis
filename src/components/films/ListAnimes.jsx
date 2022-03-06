import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListAnimes = () => {
  const navigate = useNavigate();

  const [random, setRandom] = useState(1);

  const handleSearchAnime = ({ target }) => {
    if (target.innerText === "Random") {
      navigate(`search?q=${random}`);
      setRandom(random + 1);
    } else {
      navigate(`search?q=${target.innerText}`);
    }
  };

  return (
    <div className="container">
      <ul className="list-group">
        <button
          className="list-group-item rounded-pill text-light"
          onClick={handleSearchAnime}
        >
          Dragon Ball
        </button>
        <button
          className="list-group-item rounded-pill text-light"
          onClick={handleSearchAnime}
        >
          Naruto
        </button>
        <button
          className="list-group-item rounded-pill text-light"
          onClick={handleSearchAnime}
        >
          Death Note
        </button>
        <button
          className="list-group-item rounded-pill text-light"
          onClick={handleSearchAnime}
        >
          Nanatsu No Taizai
        </button>
        <button
          className="list-group-item rounded-pill text-light"
          onClick={handleSearchAnime}
        >
          Kimetsu No Yaiba
        </button>
        <button
          className="list-group-item rounded-pill text-light"
          onClick={handleSearchAnime}
        >
          One Punch Man
        </button>
        <button
          className="list-group-item rounded-pill text-light"
          onClick={handleSearchAnime}
        >
          One Piece
        </button>
        <button
          className="list-group-item rounded-pill text-light"
          onClick={handleSearchAnime}
        >
          Random
        </button>
      </ul>
    </div>
  );
};

export default ListAnimes;
