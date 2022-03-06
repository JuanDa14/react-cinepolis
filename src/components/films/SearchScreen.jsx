import { useLocation } from "react-router-dom";
import queryString from "query-string";
import AllFilmScreen from "./AllFilmScreen";
import { useDispatch } from "react-redux";
import { activeAllFilmScreen } from "../../actions/filmAction";
import { useEffect } from "react";

const SearchScreen = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const { q } = queryString.parse(location.search);

  useEffect(() => {
    dispatch(activeAllFilmScreen());
  }, [dispatch]);

  return (
    <div>
      <AllFilmScreen anime={q} />
    </div>
  );
};

export default SearchScreen;
