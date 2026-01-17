/**
 * Centralized exports for the flight module store
 * 
 * This file provides a clean, organized way to import Redux Toolkit features
 * while maintaining Hermes compatibility through lazy loading.
 * 
 * Usage:
 *   import { selectFlightState, bootstrapFlight, setSelectedFlight } from '@modules/Flight/store';
 */

// Export bootstrap functions
export { bootstrapFlight } from './bootstrap';

// Export all selectors
export * from './selectors/flightSelectors';

// Export all actions (lazy loaded to avoid issues)
export {
  setSelectedFlight,
  updateSearchParameters,
  updateFilters,
  setActiveFilters,
  updateFlightCount,
  updatePriceDropPercent,
  setSelectedFareOption,
  setAvailableFlights,
  clearSelectedFlight,
  setSelectedSeat,
  incrementExtraBaggage,
  decrementExtraBaggage,
} from './slices/flightSlice';

// Export types
export type {
  SearchParameters,
  FlightFilters,
  FlightState,
  Airport,
  RecentAirport,
  CabinClass,
  CabinClassOption,
  FareType,
  FareTypeOption,
  FlightTripType,
  FlightDetails,
  FareOption,
  FareOptionAmenity,
  Airline,
  DepartureTimeSlot,
  SeatMapConfig,
  SeatSelectionState,
} from './slices/flightSlice';
// Re-export Flight type from component for convenience
export type { Flight } from '../screens/AvailableFilght/components/FlightCard';
