import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/mainReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk];
const store = createStore(
  mainReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export default store;
