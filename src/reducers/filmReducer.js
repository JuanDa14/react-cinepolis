import { types } from "../types/types";

const initialState = {
  films: [],
  activeFilm: false,
  loading: true,
  favoriteScreen: false,
  showScreen: false,
  AllFilmScreen: false,
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.filmsFavorites:
      return {
        ...state,
        films: action.payload,
        activeFilm: true,
        loading: false,
      };

    case types.setFilmFavorite:
      return {
        ...state,
        films: [...state.films, action.payload],
        activeFilm: true,
        loading: false,
      };

    case types.RemoveFavoriteFilm:
      return {
        ...state,
        films: state.films.filter((film) => film.id !== action.payload),
      };

    case types.AllFilmScreen:
      return {
        ...state,
        AllFilmScreen: true,
        favoriteScreen: false,
        showScreen: false,
      };

    case types.ShowScreen:
      return {
        ...state,
        showScreen: true,
        AllFilmScreen: false,
        favoriteScreen: false,
      };

    case types.FavoriteScreen:
      return {
        ...state,
        favoriteScreen: true,
        showScreen: false,
        AllFilmScreen: false,
      };

    default:
      return { ...state };
  }
};
