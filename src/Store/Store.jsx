import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from './CombinedReducers';

const Store = configureStore({
  reducer: rootReducer,
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default Store;