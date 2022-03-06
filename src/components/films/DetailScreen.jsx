import React from "react";

const DetailScreen = ({ film }) => {
  return (
    <div className="container-fluid mt-4 animate__animated animate__fadeIn animate__faster">
      <div className="detail__container">
        <h1 className="detail__title">{film.title}</h1>
        <div className="detail__body">
          <p className="detail__text">{film.synopsis}</p>
          <div className="detail__text-more">
            <p className="detail__text">Status: {film.status}</p>
            <p className="detail__text">Aired: {film.aired.string}</p>
            <p className="detail__text">Score: {film.score}</p>
            <p className="detail__text">Duration: {film.duration}</p>
            <p className="detail__text">Episodes: {film.episodes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
