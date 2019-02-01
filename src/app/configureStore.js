import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import bookingReducer from "./state/reducers/bookingReducer";
import logger from "redux-logger";

import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const rootReducer = combineReducers({
    booking: bookingReducer
  });

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
  );
  return store;
};

export default configureStore;
