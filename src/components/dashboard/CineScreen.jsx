import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import NavbarScreen from "./NavbarScreen";
import AllFilmScreen from "../films/AllFilmScreen";
import ShowAnime from "../films/ShowAnime";
import SearchScreen from "../films/SearchScreen";
import FavoriteScreen from "../films/FavoriteScreen";
import { useEffect } from "react";

const CineScreen = () => {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("lastPath")) {
      const lastPath = localStorage.getItem("lastPath");
      navigate(lastPath);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lastPath", `${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return (
    <>
      <NavbarScreen />
      <Routes>
        <Route path="/" element={<AllFilmScreen />} />
        <Route path="film/:id" element={<ShowAnime />} />
        <Route path="favorites" element={<FavoriteScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="*" element={<AllFilmScreen />} />
      </Routes>
    </>
  );
};

export default CineScreen;
