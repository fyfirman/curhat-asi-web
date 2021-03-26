// import { RootState } from '@redux/reducers/index';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
  rootReducer,
  composeEnhancers,
);

export default store;
