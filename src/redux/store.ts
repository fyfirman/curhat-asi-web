// import { RootState } from '@redux/reducers/index';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['loginError', 'consultations', 'consultationPosts', 'locations'],
};

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeEnhancers,
);

export const persistor = persistStore(store);

export default store;
