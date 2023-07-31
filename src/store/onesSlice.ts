import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface OnesState {
  onesData: any;
  onesTotal: number;
  onesToday: Array<number>;
}

const initialState: OnesState = {
  onesData: {
    '19-jul-2023': [1, 0, 0, 1, 0],
    '20-jul-2023': [1, 0, 1, 1, 0],
    '21-jul-2023': [0, 0, 0, 1, 0],
    '22-jul-2023': [0, 1, 1, 1, 1],
    '23-jul-2023': [1, 0, 1, 1, 0],
    '24-jul-2023': [1, 1, 1, 0, 1],
    '25-jul-2023': [1, 0, 0, 1, 0],
    '26-jul-2023': [1, 1, 0, 0, 1],
    '27-jul-2023': [0, 0, 1, 1, 0],
    '28-jul-2023': [1, 0, 1, 1, 1],
    '29-jul-2023': [1, 0, 1, 0, 1],
    '30-jul-2023': [0, 1, 1, 1, 0],
    '31-jul-2023': [1, 1, 1, 1, 0],
    '1-aug-2023': [1, 0, 1, 1, 0],
  },
  onesTotal: 30,
  onesToday: [0, 0, 0, 1, 0],
};

export interface ToggleOneAction {
  date?: 'string';
  goalIndex: number;
}

export const onesSlice = createSlice({
  name: 'ones',
  initialState,
  reducers: {
    toggleOne: (state, action: PayloadAction<ToggleOneAction>) => {
      if (action.payload.date) {
        state.onesData[action.payload.date][action.payload.goalIndex] = state
          .onesData[action.payload.date][action.payload.goalIndex]
          ? 0
          : 1;
      } else {
        state.onesToday[action.payload.goalIndex] = state.onesToday[
          action.payload.goalIndex
        ]
          ? 0
          : 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleOne} = onesSlice.actions;

export default onesSlice.reducer;
