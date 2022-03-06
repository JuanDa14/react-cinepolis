import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActiveUser } from "../actions/authAction";
import { getFavoriteFilms } from "../actions/filmAction";
import CineScreen from "../components/dashboard/CineScreen";
import LoadingScreen from "../components/films/LoadingScreen";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const activeSessionUser = async () => {
      setLoading(true);
      const auth = getAuth();
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            ActiveUser({
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
            })
          );
          dispatch(getFavoriteFilms(user.uid));
          setLoading(false);
        } else {
          setLoading(null);
        }
      });
    };
    activeSessionUser();
  }, [dispatch]);

  if (loading) return <LoadingScreen />;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <CineScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/auth/*"
          element={
            <PublicRoute>
              <AuthRoute />
            </PublicRoute>
          }
        />
        <Route path="*" element={<PublicRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
