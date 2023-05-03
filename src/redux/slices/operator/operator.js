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

    setTransform: state => {
      state.transform = true;
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
