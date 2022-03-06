import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { types } from "../types/types";

export const LoginUser = (user) => {
  return async (dispatch) => {
    try {
      const { email, password } = user;

      const auth = getAuth();

      const { user: activeUser } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(
        ActiveUser({
          uid: activeUser.uid,
          displayName: activeUser.displayName,
          email: activeUser.email,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const RegisterUser = (user) => {
  return async (dispatch) => {
    try {
      const { name, email, password } = user;
      const auth = getAuth();
      const { user: newUser } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(newUser, {
        displayName: name,
      });

      dispatch(
        ActiveUser({
          uid: newUser.uid,
          displayName: newUser.displayName,
          email: newUser.email,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const inactiveSessionUser = () => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(LogoutUser());
    } catch (error) {
      console.log(error);
    }
  };
};

export const LogoutUser = () => ({
  type: types.logout,
});

export const ActiveUser = (user) => ({
  type: types.activeUser,
  payload: user,
});
