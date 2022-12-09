import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { IDestination } from '../types/interface';

export interface CityState {
  destination: IDestination;
}
const initialState: CityState = {
  destination: {id:0, name: "", title: "", description: "", image: "", rating: 0},
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setDestination: (state, action: PayloadAction<IDestination>) => {
      state.destination = action.payload;
    }
  },
});

export const { setDestination } = citySlice.actions;

export const curDestination = (state: RootState) => state.destination.destination;

export default citySlice.reducer;
