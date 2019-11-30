import appReducer from "./reducers/app-reducer";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import repositoriesReducer from './reducers/repositories-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  repositories: repositoriesReducer,
  app: appReducer
});

const store = createStore(
  reducers,  
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;