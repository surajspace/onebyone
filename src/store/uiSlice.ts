import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export enum AppViews {
  GOALS_VIEW,
  CALENDAR_VIEW,
}

interface UIState {
  activeView: AppViews;
}

const initialState: UIState = {
  activeView: AppViews.GOALS_VIEW,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleView: (state, action: PayloadAction<AppViews>) => {
      state.activeView = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleView} = uiSlice.actions;

export default uiSlice.reducer;
