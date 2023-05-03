import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number1: 0,
  number2: 0,
};

const numbersSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    setNumber1: (state, action) => {
      state.number1 = action.payload;
    },

    setNumber2: (state, action) => {
      state.number2 = action.payload;
    },

    resetNumbers: state => {
      state.number1 = 0;
      state.number2 = 0;
    },
  },
});

const numbersReducer = numbersSlice.reducer;
const numbersActions = numbersSlice.actions;
export const { setNumber1, setNumber2, resetNumbers } = numbersActions;
export default numbersReducer;
