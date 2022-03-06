import { types } from "../types/types";

const initialState = {
  user: null,
  active: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.activeUser:
      return { ...state, user: action.payload, active: true };

    case types.logout:
      return { ...state, user: null };

    default:
      return state;
  }
};
