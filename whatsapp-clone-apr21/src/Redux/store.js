import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  rightbarReducer,
  userReducer,
  roomSelectReducer,
} from "./reducers/reducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const initialState = {
  room: {
    isSelected: false,
  },
  user: {
    username: "",
  },
  rightbar: {
    isOpen: false,
  },
};

const bigReducer = combineReducers({
  room: roomSelectReducer,
  user: userReducer,
  rightbar: rightbarReducer,
});

// const configureStore = createStore(
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const configureStore = createStore(
  bigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;
