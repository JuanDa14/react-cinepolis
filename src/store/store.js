import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { filmReducer } from "../reducers/filmReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  auth: authReducer,
  film: filmReducer,
});                           

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
