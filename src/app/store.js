import { configureStore } from '@reduxjs/toolkit';
import productReducers from '../features/Product/reducers';

export default configureStore({
  reducer: {
    // 1 reducer manage 1 state
    // reducer is a function that manage the state
    products: productReducers
  }
});
