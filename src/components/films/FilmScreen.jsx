import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  activeShowScreen,
  addFavoriteFilm,
  deleteFavoriteFilm,
} from "../../actions/filmAction";
import { toastAlert } from "../../helpers/toastAlert";

const FilmScreen = ({ film }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { showScreen, AllFilmScreen, favoriteScreen } = useSelector(
    (state) => state.film
  );

  const { image, title, id: mal_id } = film;

  const handleShowFilm = (id) => {
    dispatch(activeShowScreen());
    navigate(`/film/${id}`);
  };

  const handleAddFavoritesFilm = (id) => {
    toastAlert(dispatch(addFavoriteFilm(id)), "Saved");
  };

  const handleRemoveFilm = (id) => {
    toastAlert(dispatch(deleteFavoriteFilm(id)));
  };

  return (
    <div className="film__container col-12 col-md-4 col-lg-3 animate__animated animate__fadeIn animate__faster">
      <div className="card">
        <img src={image} alt={title} className="card-img film__img" />
        <div className="descriptions">
          <h1 className="card-title">
            {title}
            {showScreen && (
              <Link className="film__button" to={-1}>
                Back
              </Link>
            )}
            {AllFilmScreen && (
              <div className="film__buttons">
                <button
                  className="film__button"
                  onClick={() => handleShowFilm(mal_id)}
                >
                  Show
                </button>
                <button
                  className="film__button-icon"
                  onClick={() => handleAddFavoritesFilm(mal_id)}
                >
                  <i className="fa-solid fa-star"></i>
                </button>
              </div>
            )}
            {favoriteScreen && (
              <div className="film__buttons">
                <button
                  className="film__button"
                  onClick={() => handleShowFilm(mal_id)}
                >
                  Show
                </button>
                <button
                  className="film__button-icon-2"
                  onClick={() => handleRemoveFilm(mal_id)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FilmScreen;
