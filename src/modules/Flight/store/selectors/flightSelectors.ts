import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@src/store/index';
import type {
  FlightState,
  SearchParameters,
  FlightFilters,
  Airport,
  RecentAirport,
  CabinClassOption,
  FlightTripType,
  FareTypeOption,
  FlightDetails,
} from '../slices/flightSlice';
import type { Flight } from '../../screens/AvailableFilght/components/FlightCard';

// Type accessor for Flight state
type FlightStateAccessor = RootState & { flight: { flight: FlightState } };

// Default empty state
const defaultFlightState: FlightState = {
  availableFlights: [],
  selectedFlightId: null,
  searchParameters: {
    route: '',
    date: '',
    travelers: '',
  },
  filters: {
    stops: {
      nonstop: false,
      oneStop: false,
      twoPlusStops: false,
    },
    selectedAirlines: [],
    priceRange: {
      min: 0,
      max: 0,
    },
    maxDuration: 0,
    departureTimeSlots: [],
    baggageIncluded: false,
    refundable: false,
    noOvernightLayover: false,
    nonstopOnly: false,
    earlyMorning: false,
    lateNight: false,
    recommended: false,
  },
  flightCount: 0,
  updateTime: '',
  priceDropPercent: 0,
  activeFilters: [],
  airports: [],
  recentAirports: [],
  airlines: [],
  departureTimeSlots: [],
  weekDaysShort: [],
  monthNamesLong: [],
  dayNamesShort: [],
  monthNamesShort: [],
  lowerPriceDates: [],
  homeFilters: [],
  availableFilterButtons: [],
  cabinClasses: [],
  tripTypes: [],
  fareTypes: [],
  flightDetails: {},
  seatMap: {
    rows: [],
    leftSeats: [],
    rightSeats: [],
    occupiedSeatIds: [],
    availableSeatIds: [],
    exitRowSeatIds: [],
  },
  seatSelection: {
    selectedSeatId: '',
    extraBaggage: 0,
  },
};

// Select entire flight state
const selectFlightState = (state: RootState): FlightState => {
  try {
    const flightModule = (state as any).flight;
    return flightModule?.flight || defaultFlightState;
  } catch (error) {
    return defaultFlightState;
  }
};

// Select available flights
export const selectAvailableFlights = createSelector([selectFlightState], (flightState) => flightState.availableFlights || []);

// Select selected flight ID
export const selectSelectedFlightId = createSelector([selectFlightState], (flightState) => flightState.selectedFlightId || null);

// Select selected flight object
export const selectSelectedFlight = createSelector(
  [selectAvailableFlights, selectSelectedFlightId],
  (flights: Flight[], selectedId: string | null): Flight | null => {
    if (!selectedId) return null;
    return flights.find((flight) => flight.id === selectedId) || null;
  }
);

// Select search parameters
export const selectSearchParameters = createSelector(
  [selectFlightState],
  (flightState): SearchParameters => flightState.searchParameters || { route: '', date: '', travelers: '' }
);

// Select filters
export const selectFilters = createSelector(
  [selectFlightState],
  (flightState): FlightFilters =>
    flightState.filters || {
      nonstopOnly: false,
      baggageIncluded: false,
      refundable: false,
      earlyMorning: false,
      lateNight: false,
      recommended: false,
    }
);

// Select active filters (array of filter names)
export const selectActiveFilters = createSelector([selectFlightState], (flightState) => flightState.activeFilters || []);

// Select flight count
export const selectFlightCount = createSelector([selectFlightState], (flightState) => flightState.flightCount || 0);

// Select update time
export const selectUpdateTime = createSelector([selectFlightState], (flightState) => flightState.updateTime || '');

// Select price drop percent
export const selectPriceDropPercent = createSelector([selectFlightState], (flightState) => flightState.priceDropPercent || 0);

// Select airports list (used by AirportSelectionModal)
export const selectAirports = createSelector([selectFlightState], (flightState): Airport[] => flightState.airports || []);

// Select recent airports chips (used by AirportSelectionModal)
export const selectRecentAirports = createSelector(
  [selectFlightState],
  (flightState): RecentAirport[] => flightState.recentAirports || []
);

// Date/Calendar data
export const selectWeekDaysShort = createSelector([selectFlightState], (flightState): string[] => flightState.weekDaysShort || []);
export const selectMonthNamesLong = createSelector([selectFlightState], (flightState): string[] => flightState.monthNamesLong || []);
export const selectDayNamesShort = createSelector([selectFlightState], (flightState): string[] => flightState.dayNamesShort || []);
export const selectMonthNamesShort = createSelector([selectFlightState], (flightState): string[] => flightState.monthNamesShort || []);

export const selectLowerPriceDates = createSelector([selectFlightState], (flightState): number[] => flightState.lowerPriceDates || []);

// Derived helper for DateSelectionModal (preserves existing "Set.has" usage without storing Set in Redux)
export const selectLowerPriceDatesSet = createSelector([selectLowerPriceDates], (days) => new Set(days));

// Home/Available filters UI data
export const selectHomeFilters = createSelector([selectFlightState], (flightState): string[] => flightState.homeFilters || []);
export const selectAvailableFilterButtons = createSelector(
  [selectFlightState],
  (flightState): string[] => flightState.availableFilterButtons || []
);

// Travelers/Class UI data
export const selectCabinClasses = createSelector(
  [selectFlightState],
  (flightState): CabinClassOption[] => flightState.cabinClasses || []
);

// Trip/Fare UI data
export const selectTripTypes = createSelector([selectFlightState], (flightState): FlightTripType[] => flightState.tripTypes || []);
export const selectFareTypes = createSelector([selectFlightState], (flightState): FareTypeOption[] => flightState.fareTypes || []);

// Select flight details by flight ID (factory function)
export const selectFlightDetails = (flightId: string) =>
  createSelector([selectFlightState], (flightState): FlightDetails | null => {
    return flightState.flightDetails?.[flightId] || null;
  });

// Select airlines
export const selectAirlines = createSelector([selectFlightState], (flightState) => flightState.airlines || []);

// Select departure time slots
export const selectDepartureTimeSlots = createSelector(
  [selectFlightState],
  (flightState) => flightState.departureTimeSlots || []
);

export const selectSeatMap = createSelector([selectFlightState], (flightState) => flightState.seatMap);

export const selectSeatSelection = createSelector(
  [selectFlightState],
  (flightState) => flightState.seatSelection
);