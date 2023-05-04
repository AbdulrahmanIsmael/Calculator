import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  operator: '+',
  transform: false,
};

const operatorSlice = createSlice({
  name: 'operator',
  initialState,
  reducers: {
    setOperator: (state, action) => {
      state.operator = action.payload;
    },

    setTransform: (state, action) => {
      state.transform = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase('numbers/resetNumbers', state => {
      state.transform = false;
    });
  },
});

const operatorReducer = operatorSlice.reducer;
const operatorActions = operatorSlice.actions;
console.log(operatorActions);
export const { setOperator, setTransform } = operatorActions;
export default operatorReducer;
