import type { AppDispatch, RootState } from '@src/store/index';
import type { ThunkAction, AnyAction } from '@reduxjs/toolkit';
import { setSelectedFlight } from './slices/flightSlice';

type FlightThunk = ThunkAction<void, RootState, unknown, AnyAction>;

/**
 * Bootstrap flight module data
 * Call this when the flight module is first loaded
 */
export const bootstrapFlight = (): FlightThunk => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    // Initialize flight module data - ensure first flight is selected by default
    const state = getState();
    const flightState = (state as any).flight?.flight;
    if (flightState?.availableFlights?.length > 0 && !flightState.selectedFlightId) {
      dispatch(setSelectedFlight(flightState.availableFlights[0].id));
    }
  };
};
