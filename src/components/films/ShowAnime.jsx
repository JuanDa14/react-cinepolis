import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { activeShowScreen } from "../../actions/filmAction";
import { getAnimeById } from "../../helpers/getAnimeById";
import DetailScreen from "./DetailScreen";
import FilmScreen from "./FilmScreen";
import LoadingScreen from "./LoadingScreen";

const ShowAnime = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [film, setFilm] = useState(null);

  const awaitGetAnime = async () => {
    const data = await getAnimeById(id);
    setFilm(data);
  };

  useEffect(() => {
    dispatch(activeShowScreen());
    awaitGetAnime();
  }, []);

  return (
    <div className="container-fluid">
      {film === undefined && <Navigate to={-1} />}
      {film ? (
        <div className="d-md-flex">
          <FilmScreen film={film} />
          <DetailScreen film={film} />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ShowAnime;
