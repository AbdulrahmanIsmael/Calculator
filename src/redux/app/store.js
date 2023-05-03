import { configureStore } from '@reduxjs/toolkit';
import numbersReducer from '../slices/numbers/numbers';
import operatorReducer from '../slices/operator/operator';

const store = configureStore({
  reducer: {
    numbers: numbersReducer,
    operator: operatorReducer,
  },
});

export default store;
