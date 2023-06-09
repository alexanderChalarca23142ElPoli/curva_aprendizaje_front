import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);
export default store;
