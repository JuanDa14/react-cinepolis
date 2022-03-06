import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { activeFavoriteScreen } from "../../actions/filmAction";
import FilmScreen from "./FilmScreen";
import LoadingScreen from "./LoadingScreen";

const FavoriteScreen = () => {
  const dispatch = useDispatch();

  const { films, loading } = useSelector((state) => state.film);

  useEffect(() => {
    dispatch(activeFavoriteScreen());
  }, [dispatch]);

  return (
    <div className="container">
      <main className="row">
        {films.length > 0 ? (
          loading ? (
            <LoadingScreen />
          ) : (
            films.map((film) => <FilmScreen key={film.id} film={film} />)
          )
        ) : (
          <LoadingScreen />
        )}
      </main>
      <Toaster />
    </div>
  );
};

export default FavoriteScreen;
