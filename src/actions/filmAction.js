import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { convertFilm } from "../helpers/convertFilm";

export const addFavoriteFilm = (id) => {
  return async (dispatch, getState) => {
    const { films } = getState().film;

    const repeat = films.filter((film) => film.id === id);

    if (repeat.length > 0) {
      throw new Error();
    }

    try {
      const resp = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const { data } = await resp.json();
      const film = convertFilm(data);
      const { user } = getState().auth;
      const collectionRef = collection(db, `${user.uid}/cinepolis/films`);
      const { _key } = await addDoc(collectionRef, film);
      film.idDoc = _key.path.segments[3];
      dispatch(setFilmFavorite(film));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFavoriteFilms = (uid) => {
  return async (dispatch) => {
    const filmsFavorites = [];
    try {
      const q = query(collection(db, `${uid}/cinepolis/films`));
      const querySnaphot = await getDocs(q);
      querySnaphot.forEach((film) => {
        const data = film.data();
        const idDoc = film.id;
        filmsFavorites.push({ ...data, idDoc });
      });
      dispatch(activeFilmsFavorites(filmsFavorites));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFavoriteFilm = (id) => {
  return async (dispatch, getState) => {
    const { user } = getState().auth;
    const { films } = getState().film;
    let idDoc;
    films.filter((film) => film.id === id && (idDoc = film.idDoc));
    try {
      const docRef = doc(db, `${user.uid}/cinepolis/films/${idDoc}`);
      await deleteDoc(docRef);
      dispatch(removeFavoriteFilm(id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const activeFilmsFavorites = (films) => ({
  type: types.filmsFavorites,
  payload: films,
});

export const setFilmFavorite = (film) => ({
  type: types.setFilmFavorite,
  payload: film,
});

export const activeAllFilmScreen = () => ({
  type: types.AllFilmScreen,
});

export const activeShowScreen = () => ({
  type: types.ShowScreen,
});

export const activeFavoriteScreen = () => ({
  type: types.FavoriteScreen,
});

export const removeFavoriteFilm = (id) => ({
  type: types.RemoveFavoriteFilm,
  payload: id,
});
