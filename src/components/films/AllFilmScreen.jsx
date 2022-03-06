import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { activeAllFilmScreen } from "../../actions/filmAction";
import { convertFilms } from "../../helpers/convertFilms";
import useFetch from "../../hooks/useFetch";
import FilmScreen from "./FilmScreen";
import LoadingScreen from "./LoadingScreen";

const AllFilmScreen = ({ anime = "" }) => {
  const dispatch = useDispatch();

  const { data, loading } = useFetch(anime);

  const { data: films } = data !== null && data;

  const filmsConvert = !loading && convertFilms(films);

  useEffect(() => {
    dispatch(activeAllFilmScreen());
  }, [dispatch]);

  return (
    <div className="container">
      <main className="row">
        {loading ? (
          <LoadingScreen />
        ) : (
          filmsConvert.map((film) => <FilmScreen key={film.id} film={film} />)
        )}
      </main>
      <Toaster />
    </div>
  );
};

export default AllFilmScreen;
