// slices/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { getCurrentMonth, getCurrentYear, isCurrentDate } from '../utils';
import monthYearPicker from '~/components/monthYearPicker';

export const titleSlice = createSlice({
  name: 'counter',
  initialState: { month: getCurrentMonth(), year: getCurrentYear() },
  reducers: {
    left: (state) => {
      if (state.month == 0) {
        state.month = 11;
        state.year = state.year - 1;
      } else {
        state.month = state.month - 1;
      }
    },
    right: (state) => {
      if (!isCurrentDate(state.month, state.year)) {
        if (state.month == 11) {
          state.month = 0;
          state.year = state.year + 1;
        } else {
          state.month = state.month + 1;
        }
      }
    },

    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { left, right } = titleSlice.actions;
export default titleSlice.reducer;
